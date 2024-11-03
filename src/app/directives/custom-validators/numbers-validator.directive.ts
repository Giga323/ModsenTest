import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function numberValidator(numberRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const number = numberRe.test(control.value);
    return number ? {number: {value: control.value} } : null;
  }
}