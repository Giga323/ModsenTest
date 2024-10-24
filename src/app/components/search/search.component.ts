import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  inputResult: SearchInfoItem[] = [];
  inputValue: string = '';
  searchError: string = '';
  searchFilterOption: string = '';
  private searchTimer: ReturnType<typeof setTimeout> | number = 0;

  constructor(
    private apiService: ApiService,
    private filterService: FilterService
  ) {}

  getFilterOption(event: string) {
    this.searchFilterOption = event;
  }

  removeFilterOption() {
    this.searchFilterOption = '';
  }

  onSearch(): void {
    clearTimeout(this.searchTimer);

    this.searchTimer = setTimeout(() => {

      if (!this.inputValue) {
        this.inputResult = [];
        return;
      }

      if (this.inputValue.length < 2) {
        this.searchError = 'Input value must be more than 2 characters length';
        this.inputResult = [];
        return;
      }

      this.apiService.searchByPictureName(this.inputValue).subscribe(response => {
        if (response.data.length > 0 && response.data) {
          this.searchError = '';
          if (this.searchFilterOption === 'by alphabet') {
            this.inputResult = this.filterService.filterByAlphabet(response.data);
          } else if (this.searchFilterOption === 'by date') {
            this.inputResult = this.filterService.filterByDate(response.data);
          } else {
            this.inputResult = response.data;
          }
        } else {
          this.inputResult = [];
          this.searchError = 'No results';
        }
      });
    }, 500);
  }
}
