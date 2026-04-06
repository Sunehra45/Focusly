function validateUsername(username: string) {
  const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
  return regex.test(username);
}
function validateEmail(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
function validatePassword(password: string) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
}

export { validateEmail, validatePassword, validateUsername };