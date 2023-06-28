import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/js/utils.js';
import { formRegInputPhoneError } from '../nodes/index.js';

const inputs = document.querySelectorAll('[data-phone="phone"]');
// here, the index maps to the error code returned from getValidationError - see readme

const errorMap = [
  'Invalid number. Please, enter only numbers.',
  'Invalid country code',
  'Too short',
  'Too long',
  'Invalid number. Please, enter only numbers.',
];

const intlConfig = {
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

export const initializePhoneInput = () => {
  inputs.forEach(input => {
    const iti = itiInit(intlTelInput, input, intlConfig);

    const resetFR = () => {
      input.classList.remove('error');
      formRegInputPhoneError.innerHTML = '';
      formRegInputPhoneError.classList.add('hide');
    };

    input.addEventListener('blur', () => {
      if (input.dataset.fr) {
        resetFR();
        if (input.value.trim()) {
          if (!iti.isValidNumber()) {
            /*         input.classList.add('error'); */
            const errorCode = iti.getValidationError();
            if (errorCode === -99) {
              formRegInputPhoneError.innerHTML =
                'Invalid number. Please, enter only numbers.';
            } else {
              formRegInputPhoneError.innerHTML = errorMap[errorCode];
            }

            formRegInputPhoneError.classList.remove('hidden');
          }
        } else {
          formRegInputPhoneError.classList.add('hidden');
        }
      }
    });
  });
};
