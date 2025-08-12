document.body.onload = () => {
  // Get user data from localStorage and use them on dashboard
  let userData = localStorage.getItem('userdata');
  userData = JSON.parse(userData);
  const fullName = userData.fullname.trim();
  const userName = userData.username.trim();
  const balance = userData.balance;
  const pfpSrc = userData.pfp.trim();
  document.querySelector('#username').textContent = 'Hi, ' + userName;
  // Check balance and display on UI if user has a balance
  if (balance === 0) {
    // Do nothing
  } else {
    document.querySelector('#balance').textContent = balance;
  }
  // Another if/else statement to check if user has a profile picture
  // And display it if pfp is found 
  if (!pfpSrc) {
    document.querySelector('#pfp').src = "";
    document.querySelector('#pfp').src = "/assets/icons/user-icon.svg";
  }
  else {
    //const pfp = JSON.parse(localStorage.getItem('userdata').pfp);
    document.querySelector('#pfp').src = "";
    document.querySelector('#pfp').src = pfpSrc;
  }
}

document.querySelector('#withdraw').addEventListener('click', () => {
  let userData = localStorage.getItem('userdata');
  userData = JSON.parse(userData);
  const fullName = userData.fullname.trim();
  const userName = userData.username.trim();
  const email = userData.email.trim();
  const password = userData.password.trim();
  const confirmPassword = userData.confirmpassword.trim();
  const recentTransaction = userData.recent;
  const balance = userData.balance;
  const pfpSrc = userData.pfp.trim();
  const storedNotifications = userData.notifications;
  const userDataNew = {
    fullname: fullName,
    username: userName,
    email: email,
    password: password,
    confirmpassword: confirmPassword,
    balance: balance,
    recent: recentTransaction,
    pfp: pfpSrc,
    notifications: storedNotifications
  };
  userDataNew.balance = userDataNew.balance - 50;
  userDataNew.recent = userDataNew.recent -50;
  localStorage.removeItem('userdata');
  localStorage.setItem('userdata', JSON.stringify(userDataNew));
  //constlocalStorage.getItem('userdata');
  document.querySelector('#balance').textContent = userData.balance;
  updateBalanceUI();
  updateRecentTransactionsUI();
});

document.querySelector('#topup').addEventListener('click', () => {
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
  const storedNotifications = userData.notifications;
  const userDataNew = {
    fullname: fullName,
    username: userName,
    email: email,
    password: password,
    confirmpassword: confirmPassword,
    balance: balance,
    recent: recentTransaction,
    pfp: pfpSrc,
    notifications: storedNotifications
  };
  userDataNew.balance = userDataNew.balance + 50;
  userDataNew.recent = userDataNew.recent + 50;
  localStorage.removeItem('userdata');
  localStorage.setItem('userdata', JSON.stringify(userDataNew));
  //constlocalStorage.getItem('userdata');
  document.querySelector('#balance').textContent = userData.balance;
  updateBalanceUI();
  updateRecentTransactionsUI();
});

const updateBalanceUI = () => {
  const userData = JSON.parse(localStorage.getItem('userdata'));
  document.querySelector('#balance').textContent = "";
  document.querySelector('#balance').textContent = userData.balance;
};

const updateRecentTransactionsUI = () => {
    // Add tranasaction to "Recent transactions"
  const transaction = document.createElement('div');
  const body = document.createElement('span');
  const price = document.createElement('span');
  transaction.className = 'd-flex';
  transaction.className = 'justify-content-between';
  transaction.className = 'align-items-center';
  transaction.className = 'gap-5';
  body.textContent = 'You';
  let userData = JSON.parse(localStorage.getItem('userdata'));
  const recent = userData.recent;
  price.textContent = recent;
  transaction.appendChild(body);
  transaction.appendChild(price);
  document.querySelector('#recent-transactions').appendChild(transaction);
};

document.querySelector('#profile-container').addEventListener('click', () => {
  location.href = "/profile_page.html";
});

document.querySelector('#notifications-btn').addEventListener('click', () => {
  location.href = "/notifications.html";
});