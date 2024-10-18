import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from '../search-item/search-item.component';
import { FormsModule } from '@angular/forms';
import { FilterMenuComponent } from '../filter-menu/filter-menu.component';
import { FilterService } from '../../services/filter/filter.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    SearchItemComponent,
    FilterMenuComponent,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  inputResult: any
  inputValue: string = ''
  searchError: string = ''
  searchFilterOption: string = ''
  private searchTimer: any

  constructor(
    private apiService: ApiService,
    private filterService: FilterService
  ) { }

  getFilterOption(event: any) {
    this.searchFilterOption = event
    console.log(this.searchFilterOption)
  }

  removeFilterOption() {
    this.searchFilterOption = ''
  }

  onSearch(): void {
    clearTimeout(this.searchTimer)

    this.searchTimer = setTimeout(() => {
      console.log(this.inputValue)

      if (!this.inputValue) {
        this.inputResult = [] 
        return
      }

      if (this.inputValue.length < 2) {
        this.searchError = 'Input value must be more than 2 characters length'
        this.inputResult = []
        return
      }

      this.apiService.searchByPictureName(this.inputValue).subscribe((response) => {
        if (response.data.length > 0 && response.data) {
          this.searchError = ''
          if (this.searchFilterOption === 'by alphabet') {
            this.inputResult = this.filterService.filterByAlphabet(response.data)
          } else if (this.searchFilterOption === 'by date') { 
            this.inputResult = this.filterService.filterByDate(response.data)
          } else {
            this.inputResult = response.data
          }
        } else {
          this.inputResult = []
          this.searchError = 'No results'
        }
      })
    }, 500)
  }
}
