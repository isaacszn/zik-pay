document.body.onload = () => {
  // Get notifications data from localStorage and use them on notifications page
  let userData = localStorage.getItem('userdata');
  userData = JSON.parse(userData);
  const storedNotifications = userData.notifications;
  console.log(storedNotifications);
};

document.querySelector('#back-btn').addEventListener('click', () => {
  location.href = '/dashboard.html';
});