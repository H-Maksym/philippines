import { isWebp } from './modules/functions.js';
import { initializePhoneInput } from './intl/initialize.js';
import {
  formBooking,
  formRegistration,
  formBookingInputName,
  formBookingInputEmail,
  formRegInputName,
  formRegInputEmail,
} from './nodes/index.js';
import {
  formRegistrationSubmit,
  formBookingSubmit,
} from './modules/form-submit.js';

import {
  formRegInputNameValidation,
  formRegInputEmailValidation,
} from './modules/form-validation.js';

//#events for booking form
formBooking.addEventListener('submit', formBookingSubmit);

formBookingInputName.addEventListener('blur', () =>
  formRegInputNameValidation(formBookingInputName)
);
formBookingInputEmail.addEventListener('blur', () =>
  formRegInputEmailValidation(formBookingInputEmail)
);

//#events for registration form
formRegistration.addEventListener('submit', formRegistrationSubmit);

formRegInputName.addEventListener('blur', () =>
  formRegInputNameValidation(formRegInputName)
);
formRegInputEmail.addEventListener('blur', () =>
  formRegInputEmailValidation(formRegInputEmail)
);

initializePhoneInput();
isWebp();
