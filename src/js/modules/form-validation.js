export function showError(input, message) {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('.error-message');
  errorElement.textContent = message;
  formControl.classList.add('error');
}

export function showSuccess(input) {
  const formControl = input.parentElement;
  //   const errorElement = formControl.querySelector('.error-message');
  //   errorElement.textContent = '';
  //   formControl.classList.remove('error');
}

export function isValidEmail(email) {
  // Regular expression for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
