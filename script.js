const toggleSwitch = document.querySelector('input[type="checkbox"]');

function switchPageTheme(event){
   if (event.target.checked) {
       document.documentElement.setAttribute('data-theme', 'dark');
   } else {
       document.documentElement.setAttribute('data-theme', 'light');
   }
}


//Event Listener
toggleSwitch.addEventListener('change', switchPageTheme);