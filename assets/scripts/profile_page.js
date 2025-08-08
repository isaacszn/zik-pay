document.body.onload = () => {
  // Get user data from localStorage and use them on profile page
  let userData = localStorage.getItem('userdata');
  userData = JSON.parse(userData);
  const fullName = userData.fullname.trim();
  const userName = userData.username.trim();
  const balance = userData.balance;
  const pfpSrc = userData.pfp.trim();
  document.querySelector('#fullname').textContent = fullName;
  document.querySelector('#logout-btn').textContent = `Log out, ${fullName}`;
  // An if/else statement to check if user has a profile picture
  // And display it if pfp is found 
  if (!pfpSrc) {
    document.querySelector('#profile-pfp').src = "";
    document.querySelector('#profile-pfp').src = "/assets/icons/user-icon.svg";
  }
  else {
    //const pfp = JSON.parse(localStorage.getItem('userdata').pfp);
    document.querySelector('#profile-pfp').src = "";
    document.querySelector('#profile-pfp').src = pfpSrc;
  }
}

document.querySelector('#image-upload').addEventListener('change', () => {
  // Piece of code to process image user has selected, get its src and save it
  // to localStorage
  const file = document.querySelector('#image-upload').files[0];
  console.log(file)
  if (file) {
    const fileSrc = URL.createObjectURL(file);
    document.querySelector('#profile-pfp').src = fileSrc;
    // Save file src to LocalStorage
    let userData = localStorage.getItem('userdata');
    userData = JSON.parse(userData);
    const fullName = userData.fullname.trim();
    const userName = userData.username.trim();
    const email = userData.email.trim();
    const password = userData.password.trim();
    const confirmPassword = userData.confirmpassword.trim();
    const balance = userData.balance;
    const recentTransaction = userData.recent;
    const pfpSrc = userData.pfp.trim();
    const userDataNew = {
      fullname: fullName,
      username: userName,
      email: email,
      password: password,
      confirmpassword: confirmPassword,
      balance: balance,
      recent: recentTransaction,
      pfp: pfpSrc
    };
    userDataNew.pfp = fileSrc;
    localStorage.removeItem('userdata');
    localStorage.setItem('userdata', JSON.stringify(userDataNew));
  }
});

document.querySelector('#logout-btn').addEventListener('click', () => {
  alert('Logging out...');
  setTimeout(() => {
    location.href = '/signup.html';
  }, 1 * 1000);
})