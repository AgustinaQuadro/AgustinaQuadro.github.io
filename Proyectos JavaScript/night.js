const preferedColorScheme= window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
const button = document.getElementById('night');

const setTheme= (theme) => {
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem('theme',theme);

}

setTheme(localStorage.getItem('theme') || preferedColorScheme);

button.addEventListener('click', ()=>{
    var switchTheme=localStorage.getItem('theme')=== 'dark' ? 'light' : 'dark';
    setTheme(switchTheme);

})
