document.querySelector('form').addEventListener('submit', (e) => {
  // Prevent form from reloading everyime it's submitted
  e.preventDefault()
  const formData = new FormData(e.target);
  const email = formData.get('email');
  const password = formData.get('password');
  
  // Load datas stored in localStorage and check if it corresponds with submitted data
  let userData = localStorage.getItem('userdata');
  userData = JSON.parse(userData);
  if (userData.email == email && userData.password == password) {
    console.log('Good to goooooo!!!')
    location.href = '/dashboard.html'
  } else {
    console.log('Account not found!')
    alert('Invalid password or email')
  }
});

console.log(location.href)