export function validateLogin(name, email, password) {
  const errors = [];

  if (!name) {
    errors.push('Введіть ім\'я');
  }

  if (!email || !email.includes('@')) {
    errors.push('Введіть коректну електронну пошту');
  }

  if (!password) {
    errors.push('Введіть пароль');
  }

  return {
    isValid: errors.length === 0,
    error: errors[0] || ''
  };
}
