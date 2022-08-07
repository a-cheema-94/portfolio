let themeDots = document.getElementsByClassName('theme-dot');
let themeStyle = document.getElementById('theme-style');

for (let i=0; i<themeDots.length; i++) {
  themeDots[i].addEventListener('click', function(){
    let mode = this.dataset.mode;
    console.log(`Option Clicked: ${mode}`);
    setTheme(mode);
  })
}

const setTheme = (mode) => {
  if (mode === 'red') {
    themeStyle.href = 'style.css';
  } else if (mode === 'blue') {
    themeStyle.href = 'blue.css';
  } else if (mode === 'green') {
    themeStyle.href = 'green.css';
  }
}