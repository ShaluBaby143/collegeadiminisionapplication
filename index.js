const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', (event) => container.classList.add('right-panel-active'));
signInButton.addEventListener('click', (event) => container.classList.remove('right-panel-active'));
