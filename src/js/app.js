import { isWebp } from './modules/functions.js';
import { initializePhoneInput } from './intl/initialize.js';
import {
  formBooking,
  formRegistration,
  formBookingInputName,
  formBookingInputEmail,
  formRegInputName,
  formRegInputEmail,
  btnOpenForm,
} from './nodes/index.js';
import {
  openFormForMobile,
  formRegistrationSubmit,
  formBookingSubmit,
} from './modules/form-submit.js';

import {
  formInputNameValidation,
  formInputEmailValidation,
} from './modules/form-validation.js';

//#events for booking form

btnOpenForm.addEventListener('click', openFormForMobile);
formBooking.addEventListener('submit', formBookingSubmit);

formBookingInputName.addEventListener('blur', () =>
  formInputNameValidation(formBookingInputName)
);
formBookingInputEmail.addEventListener('blur', () =>
  formInputEmailValidation(formBookingInputEmail)
);

//#events for registration form
formRegistration.addEventListener('submit', e => formRegistrationSubmit(e));

formRegInputName.addEventListener('blur', () =>
  formInputNameValidation(formRegInputName)
);
formRegInputEmail.addEventListener('blur', () =>
  formInputEmailValidation(formRegInputEmail)
);

initializePhoneInput();
isWebp();
