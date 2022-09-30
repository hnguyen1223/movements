import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const urlValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let isUrl =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
      control.value
    );
  return isUrl ? null : { isNotUrl: true };
};
