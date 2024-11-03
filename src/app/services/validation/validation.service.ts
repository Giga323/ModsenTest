import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationResult } from '@app/interfaces/validationResult';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  checkValidationError(textControl: FormControl<string | null>): ValidationResult {
    if (textControl) {
      if (textControl.hasError('minlength')) {
        return {
          searchError: 'Input must include 3 characters at least',
          result: false
        }
      } else if (textControl.hasError('specialSymbol')) {
        return {
          searchError: 'Input should not contain special symbols',
          result: false
        }
      } else if (textControl.hasError('number')) {
        return {
          searchError: 'Input should not contain numbers',
          result: false
        }
      } else if (textControl.hasError('space')) {
        return {
          searchError: 'Input should not contain spaces',
          result: false
        } 
      }
    }
    return {
      searchError: '',
      result: true
    }
  }
}
