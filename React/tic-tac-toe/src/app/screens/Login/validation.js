export const validate = values => {
  const errors = {};
  /* eslint-disable no-useless-escape */
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  /* eslint-enable no-useless-escape */
  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.pass) {
    errors.pass = 'password is required';
  }
  if (String(values.pass).length < 8) {
    errors.pass = 'password corta,ingrese 8 o mas caracteres';
  }
  if (!reg.test(values.email)) {
    errors.email = 'email incorrecto';
  }
  return errors;
};
