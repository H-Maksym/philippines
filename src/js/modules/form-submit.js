import { isValidEmail, showError, showSuccess } from './form-validation.js';

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
  } else {
    showSuccess(name);
  }
  if (nameValue.length <= 3) {
    console.log('error');
    // showError(name, 'Enter at least 3 characters');
    return;
  } else {
    showSuccess(name);
  }

  if (emailValue === '') {
    showError(email, 'Email is required');
    return;
  } else if (!isValidEmail(emailValue)) {
    showError(email, 'Invalid email address');
  } else {
    showSuccess(email);
  }

  //   if (login.value === '' || password.value === '') {
  //     return console.log('Please fill in all the fields!');
  //   }

  event.currentTarget.reset();
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
  } else {
    showSuccess(name);
  }
  if (nameValue.length <= 3) {
    console.log('error');
    // showError(name, 'Enter at least 3 characters');
    return;
  } else {
    showSuccess(name);
  }

  if (emailValue === '') {
    showError(email, 'Email is required');
    return;
  } else if (!isValidEmail(emailValue)) {
    showError(email, 'Invalid email address');
  } else {
    showSuccess(email);
  }

  //   if (login.value === '' || password.value === '') {
  //     return console.log('Please fill in all the fields!');
  //   }

  event.currentTarget.reset();
}
