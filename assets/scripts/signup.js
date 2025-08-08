document.querySelector('form').addEventListener('submit', (e) => {
  // Prevent form from reloading everyime it's submitted
  e.preventDefault()
  const formData = new FormData(e.target);
  const fullName = formData.get('fullname');
  const userName = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirm-password');
  const userData = {
    fullname: fullName,
    username: userName,
    email: email,
    password: password,
    confirmpassword: confirmPassword,
    balance: 0,
    recent: 0,
    pfp: ""
  };
  // Save user data using localStorage API, note I turned the object to JSON
  localStorage.setItem('userdata', JSON.stringify(userData));
  // After saving user data, redirect user to login page
  alert('Account created successfully!')
  setTimeout(() => {
    location.href = '/login.html';
  }, 0);
});