import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '@app/services/api/api.service';
import { FilterService } from '@app/services/filter/filter.service';
import { FilterMenuComponent } from '@app/components/filter-menu/filter-menu.component';
import { SearchItemComponent } from '@app/components/search-item/search-item.component';
import { SearchInfoItem } from '@app/interfaces/searchInfoItem';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap } from 'rxjs';
import { specialSymbolValidator } from '@app/directives/custom-validators/special-symbols-validator.directive';
import { numberValidator } from '@app/directives/custom-validators/numbers-validator.directive';
import { spaceValidator } from '@app/directives/custom-validators/space-validator.directive';
import { ValidationService } from '@app/services/validation/validation.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgFor,
    NgIf, 
    AsyncPipe, 
    SearchItemComponent, 
    FilterMenuComponent, 
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  inputResult!: Observable<SearchInfoItem[]> | null;
  inputValue: string = '';
  searchError: string = '';
  searchFilterOption: string = '';
  searchTextControl!: FormControl<string | null>;
  private searchResult$: Subject<string> = new Subject<string>();
  private filterSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(
    private apiService: ApiService,
    private filterService: FilterService,
    private validationService: ValidationService
  ) { }

  ngOnInit(): void {
    this.searchTextControl = new FormControl(this.inputValue, [
      Validators.minLength(3),
      specialSymbolValidator(/[!@#$%^&*()[]{}]/),
      numberValidator(/[0-9]/),
      spaceValidator(/ /)
    ])

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
    this.inputValue = (event.target as HTMLInputElement).value;
    return this.inputValue
  }

  filterBy(event: string): void {
    this.searchFilterOption = event;
    this.filterSubject$.next(event); 
  }

  search(searchResult: string): void {
    const validationResult = this.validationService.checkValidationError(this.searchTextControl)
    this.searchError = validationResult.searchError
    if (validationResult.result) {
      this.searchResult$.next(searchResult)
    } 
  }
}
