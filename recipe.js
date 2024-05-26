document.getElementById('toggle-tips').addEventListener('click', function () {
    var tips = document.getElementById('tips');
    if (tips.style.display === 'none') {
        tips.style.display = 'block';
        this.textContent = 'Hide Cooking Tips';
    } else {
        tips.style.display = 'none';
        this.textContent = 'Show Cooking Tips';
    }
});