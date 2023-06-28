import intlTelInput from 'intl-tel-input';

import 'intl-tel-input/build/js/utils.js';
import {
  formBookingInputPhoneError,
  formRegInputPhoneError,
} from '../nodes/index.js';
import { showError, showSuccess } from '../modules/form-validation.js';

const inputs = document.querySelectorAll('[data-phone="phone"]');
// here, the index maps to the error code returned from getValidationError - see readme

const errorMap = [
  'Invalid number. Please, enter only numbers.',
  'Invalid country code',
  'Too short',
  'Too long',
  'Invalid number. Please, enter only numbers.',
];

export const intlConfig = {
  hiddenInput: 'full_phone',
  initialCountry: 'ua',
  preferredCountries: ['ua', 'us', 'gb', 'ca'],
  //INFO shown dial-code
  // separateDialCode: true,
  autoInsertDialCode: true,
  formatOnDisplay: true,
};
export const itiInit = (intlTelInput, input, intlConfig) => {
  return intlTelInput(input, intlConfig);
};

export function getErrorStatus(inputValue, nodeError, iti) {
  if (inputValue) {
    if (!iti.isValidNumber()) {
      const errorCode = iti.getValidationError();
      if (errorCode === -99) {
        showError(nodeError, 'Invalid number. Please, enter only numbers.');
      } else {
        showError(nodeError, errorMap[errorCode]);
      }
      return false;
    }
  }
  showSuccess(nodeError);
  return true;
}

export function initializePhoneInput() {
  inputs.forEach(input => {
    const iti = itiInit(intlTelInput, input, intlConfig);

    const resetFRBook = () => {
      input.classList.remove('error');
      formBookingInputPhoneError.innerHTML = '';
    };

    const resetFR = () => {
      input.classList.remove('error');
      formRegInputPhoneError.innerHTML = '';
    };

    input.addEventListener('blur', () => {
      const inputValue = input.value.trim();

      if (input.dataset.fr === 'frBook') {
        resetFRBook();
        getErrorStatus(inputValue, formBookingInputPhoneError, iti);
      } else if (input.dataset.fr === 'fr') {
        resetFR();
        getErrorStatus(inputValue, formRegInputPhoneError, iti);
      }
    });
  });
}
