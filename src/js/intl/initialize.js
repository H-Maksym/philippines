import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/js/utils.js';

const inputs = document.querySelectorAll('#phone');
const errorMsg = document.querySelector('#error-msg');
const validMsg = document.querySelector('#valid-msg');
// here, the index maps to the error code returned from getValidationError - see readme
const errorMap = [
  'Invalid number',
  'Invalid country code',
  'Too short',
  'Too long',
  'Invalid number',
];

export const initialize = () => {
  inputs.forEach(input => {
    const iti = intlTelInput(input, {
      hiddenInput: 'full_phone',
      initialCountry: 'ua',
      preferredCountries: ['ua', 'us', 'gb', 'ca'],
      //INFO shown dial-code
      // separateDialCode: true,
      autoInsertDialCode: true,
      formatOnDisplay: true,
    });

    const reset = () => {
      input.classList.remove('error');
      errorMsg.innerHTML = '';
      errorMsg.classList.add('hide');
      validMsg.classList.add('hide');
    };

    input.addEventListener('input', () => {
      const currentNumber = input.value;
      const isValid = iti.isValidNumber();
      const formattedNumber = isValid ? iti.getNumber() : currentNumber;
      const countryCode = iti.getSelectedCountryData().iso2;
      const countryData = window.intlTelInputGlobals.getCountryData();
      const countryInfo = countryData.find(c => c.iso2 === countryCode);
      const maxDigits = countryInfo ? countryInfo.maxLen : null;

      if (currentNumber.length > maxDigits) {
        input.value = currentNumber.slice(0, maxDigits);
      }

      if (currentNumber.length >= maxDigits) {
        input.disabled = true;
      } else {
        input.disabled = false;
      }

      input.value = formattedNumber;
    });

    input.addEventListener('blur', () => {
      reset();
      if (input.value.trim()) {
        if (iti.isValidNumber()) {
          validMsg.classList.remove('hide');
        } else {
          input.classList.add('error');
          const errorCode = iti.getValidationError();
          errorMsg.innerHTML = errorMap[errorCode];
          errorMsg.classList.remove('hide');
        }
      }
    });
  });
};
