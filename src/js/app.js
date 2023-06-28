import { isWebp } from './modules/functions.js';
import { initializePhoneInput } from './intl/initialize.js';
import {
  formRegistration,
  formRegInputName,
  formRegInputEmail,
} from './nodes/index.js';
import { formRegistrationSubmit } from './modules/form-registration.js';

import {
  formRegInputNameValidation,
  formRegInputEmailValidation,
} from './modules/form-validation.js';
formRegistration.addEventListener('submit', formRegistrationSubmit);

formRegInputName.addEventListener('blur', formRegInputNameValidation);
formRegInputEmail.addEventListener('blur', formRegInputEmailValidation);

initializePhoneInput();
isWebp();
