import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '@app/services/api/api.service';
import { FilterService } from '@app/services/filter/filter.service';
import { FilterMenuComponent } from '@app/components/filter-menu/filter-menu.component';
import { SearchItemComponent } from '@app/components/search-item/search-item.component';
import { SearchInfoItem } from '@app/interfaces/searchInfoItem';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe , SearchItemComponent, FilterMenuComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  inputResult!: Observable<SearchInfoItem[]>;
  inputValue: string = '';
  searchError: string = '';
  searchFilterOption: string = '';
  private searchResult$: Subject<string> = new Subject<string>();
  private filterSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(
    private apiService: ApiService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.inputResult = this.searchResult$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchResultItem => 
        this.apiService.searchByPictureName(searchResultItem)  
      ),
      map(
        response => {
          return response.data as SearchInfoItem[]
        }
      ),
      switchMap(items => 
        this.filterSubject$.pipe(
          map(filterOption => {
            if (filterOption === 'by alphabet') {
              return this.filterService.filterByAlphabet(items);
            } else if (filterOption === 'by date') {
              return this.filterService.filterByDate(items);
            }
            return items; 
          })
        )
      )
    )
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  filterBy(event: string): void {
    this.searchFilterOption = event;
    this.filterSubject$.next(event); 
  }

  search(searchResult: string): void {
    this.searchResult$.next(searchResult)
  }
}
