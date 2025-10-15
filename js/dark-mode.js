const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
const backgroundPicker = document.getElementById('background-picker');

  
toggleThemeBtn.addEventListener('click', function() {
    toggleTheme();
}); 
    function toggleTheme() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        toggleThemeBtn.innerHTML = "<i class='fa-solid fa-sun'></i>"
    } else {
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }   
    }


colorPicker.addEventListener('change', function() {
    document.body.style.color = colorPicker.value;
});

backgroundPicker.addEventListener('change', function() {
    document.body.style.background = backgroundPicker.value;
});

