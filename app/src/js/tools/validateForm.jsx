
// Primera forma de validación
export const required = value => (value ? undefined : 'Campo requerido');
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const minValue18 = minValue(18);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined;
export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;

    // Segunda forma de validación
export const validate = values => {
  const error = {};
  if (!values.notes) {
    error.notes = 'Ingrese porfavor la información';
  }

  return error;
};

// Tercera forma de validación

export const asyncValidates  =  values => {
    const errors = {};
    const requiredFields = [
      'noteText',
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Es Requerido';
      }
    });
    return errors;
};

