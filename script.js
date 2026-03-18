fetch('/nav.txt')
  .then(res => res.text())
  .then(data => {
    document.querySelector('.topnav').innerHTML = data;
  });