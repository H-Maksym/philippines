import { formRegInputName } from '../nodes/index.js';

export function showError(input, message) {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('.error-message');
  errorElement.textContent = message;
  errorElement.classList.add('error');
}

export function showSuccess(input) {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('.error-message');
  errorElement.textContent = '';
  errorElement.classList.remove('error');
}

export const formRegInputNameValidation = () => {
  const nameValue = formRegInputName.value.trim();
  if (nameValue === '') {
    showError(formRegInputName, 'Name is required');
    return;
  } else {
    showSuccess(formRegInputName);
  }
  if (nameValue.length < 3) {
    showError(formRegInputName, 'Enter at least 3 characters');
    return;
  } else {
    showSuccess(formRegInputName);
  }
};

export const formRegInputEmailValidation = () => {};

export function isValidEmail(email) {
  // Regular expression for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
