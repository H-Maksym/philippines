//INFO book form
export const formBooking = document.querySelector('#form-booking');
export const formBookingWrapper = document.querySelector(
  '#form-booking-wrapper'
);

export const formBookingInputName = document.querySelector('#frBook-name');
export const formBookingInputNameError =
  document.querySelector('#frBook-name-error');
export const formBookingInputPhone = document.querySelector('#frBook-phone');
export const formBookingInputPhoneError = document.querySelector(
  '#frBook-phone-error'
);

export const formBookingInputEmail = document.querySelector('#frBook-email');
export const formBookingInputEmailError = document.querySelector(
  '#frBook-email-error'
);

export const btnBooking = document.querySelector('#btn-frBook');
export const btnOpenForm = document.querySelector('#btn-open');

//INFO registration form
export const formRegistration = document.querySelector('#form-registration');
export const formRegInputName = document.querySelector('#fr-name');
export const formRegInputNameError = document.querySelector('#fr-name-error');
export const formRegInputPhone = document.querySelector('#fr-phone');
export const formRegInputPhoneError = document.querySelector('#fr-phone-error');
export const formRegInputEmail = document.querySelector('#fr-email');
export const formRegInputEmailError = document.querySelector('#fr-email-error');

const nodes = {
  // #form booking in hero
  formBooking,
  formBookingInputName,
  formBookingInputNameError,
  formBookingInputPhone,
  formBookingInputPhoneError,
  formBookingInputEmail,
  formBookingInputEmailError,

  // #form registration
  formRegistration,
  formRegInputName,
  formRegInputNameError,
  formRegInputPhone,
  formRegInputPhoneError,
  formRegInputEmail,
  formRegInputEmailError,
};

export default nodes;
