const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
const backgroundPicker = document.getElementById('background-picker');

toggleThemeBtn.addEventListener('click', function() {
    // alert("me diste click");
    document.body.classList.toggle('dark');
})

colorPicker.addEventListener('change', function() {
    document.body.style.color = colorPicker.value;
});

backgroundPicker.addEventListener('change', function() {
    document.body.style.background = backgroundPicker.value;
});