import intlTelInput from 'intl-tel-input';
import { getErrorStatus, intlConfig, itiInit } from '../intl/initialize.js';
import {
  formBookingInputPhoneError,
  formRegInputPhoneError,
  formBookingWrapper,
  btnBooking,
  btnOpenForm,
} from '../nodes/index.js';
import { isValidEmail, showError, showSuccess } from './form-validation.js';

export function openFormForMobile() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth <= 768) {
    formBookingWrapper.classList.remove('book-form__mobile');
    btnBooking.classList.remove('book-form__mobile');
    btnOpenForm.classList.add('book-form__mobile');
  }
}

export function formBookingSubmit(event) {
  event.preventDefault();

  const {
    elements: { name, phone, email },
  } = event.currentTarget;

  const nameValue = name.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();

  if (nameValue === '') {
    showError(name, 'Name is required');
    return;
  } else if (nameValue.length < 3) {
    showError(name, 'Enter at least 3 characters');
    return;
  } else {
    showSuccess(name);
  }

  const iti = itiInit(intlTelInput, phone, intlConfig);
  if (phoneValue === '') {
    showError(formBookingInputPhoneError, 'Phone is required');
    return;
  } else {
    showSuccess(formBookingInputPhoneError);
  }
  const isValid = getErrorStatus(phoneValue, formBookingInputPhoneError, iti);
  if (!isValid) {
    return;
  }

  if (emailValue === '') {
    showError(email, 'Email is required');
    return;
  } else if (!isValidEmail(emailValue)) {
    showError(email, 'Invalid email address');
    return;
  } else {
    showSuccess(name);
  }

  const formData = {
    'client name': nameValue,
    'client phone': phoneValue,
    'client email': emailValue,
  };
  alert(JSON.stringify(formData));
  event.currentTarget.reset();
  formBookingWrapper.classList.add('book-form__mobile');
  btnBooking.classList.add('book-form__mobile');
  btnOpenForm.classList.remove('book-form__mobile');
}

export function formRegistrationSubmit(event) {
  event.preventDefault();

  const {
    elements: { name, phone, email },
  } = event.currentTarget;

  const nameValue = name.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();

  if (nameValue === '') {
    showError(name, 'Name is required');
    return;
  } else if (nameValue.length < 3) {
    showError(name, 'Enter at least 3 characters');
    return;
  } else {
    showSuccess(name);
  }

  const iti = itiInit(intlTelInput, phone, intlConfig);
  if (phoneValue === '') {
    showError(formRegInputPhoneError, 'Phone is required');
    return;
  } else {
    showSuccess(formRegInputPhoneError);
  }
  const isValid = getErrorStatus(phoneValue, formRegInputPhoneError, iti);
  if (!isValid) {
    return;
  }

  if (emailValue === '') {
    showError(email, 'Email is required');
    return;
  } else if (!isValidEmail(emailValue)) {
    showError(email, 'Invalid email address');
    return;
  } else {
    showSuccess(name);
  }

  const formData = {
    'client name': nameValue,
    'client phone': phoneValue,
    'client email': emailValue,
  };

  alert(JSON.stringify(formData));

  event.currentTarget.reset();
}
