import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function insensitiveValidator(compareValue: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const inputValue = control.value ? control.value.toLowerCase() : '';
    const rightInputValue = compareValue.toLowerCase();

    return inputValue === rightInputValue ? null : { caseInsensitive: true };
  }
}