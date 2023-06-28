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

export function formRegInputNameValidation(InputName) {
  const nameValue = InputName.value.trim();
  if (nameValue) {
    showError(InputName, 'Name is required');
    if (nameValue.length < 3) {
      showError(InputName, 'Enter at least 3 characters');
      return;
    }
  }
  showSuccess(InputName);
}

export function formRegInputEmailValidation(InputEmail) {
  const mailValue = InputEmail.value.trim();

  if (mailValue) {
    showError(InputEmail, 'Email is required');
    if (!isValidEmail(mailValue)) {
      showError(InputEmail, 'Invalid email address');
      return;
    }
  }
  showSuccess(InputEmail);
}

export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
