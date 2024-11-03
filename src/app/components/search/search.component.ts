import { CommonModule } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '@app/services/api/api.service';
import { FilterService } from '@app/services/filter/filter.service';
import { FilterMenuComponent } from '@app/components/filter-menu/filter-menu.component';
import { SearchItemComponent } from '@app/components/search-item/search-item.component';
import { SearchInfoItem } from '@app/interfaces/searchInfoItem';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, SearchItemComponent, FilterMenuComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  inputResult: Signal<SearchInfoItem[] | undefined> = signal([]);
  inputValue: string = '';
  searchError: string = '';
  searchFilterOption: string = '';
  private searchTimer: ReturnType<typeof setTimeout> | number = 0;

  constructor(
    private apiService: ApiService,
    private filterService: FilterService
  ) {}

  getFilterOption(event: string): void {
    this.searchFilterOption = event;
  }

  removeFilterOption(): void {
    this.searchFilterOption = '';
  }

  onSearch(): void {
    clearTimeout(this.searchTimer);

    this.searchTimer = setTimeout(() => {

      this.apiService.searchByPictureName(this.inputValue).subscribe(response => {
        if (response.data.length > 0 && response.data) {
          this.searchError = '';
          if (this.searchFilterOption === 'by alphabet') {
            this.inputResult = signal(this.filterService.filterByAlphabet(response.data));
          } else if (this.searchFilterOption === 'by date') {
            this.inputResult = signal(this.filterService.filterByDate(response.data));
          } else {
            this.inputResult = signal(response.data);
          }
        } 
      });
    }, 500);
  }
}
