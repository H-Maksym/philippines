import intlTelInput from 'intl-tel-input';

const inputs = document.querySelectorAll('#phone');

export const initialize = () => {
  inputs.forEach(input => {
    intlTelInput(input, {
      initialCountry: 'ua',
      preferredCountries: ['ua', 'us', 'gb', 'ca'],
      separateDialCode: true,
    });
  });
};
