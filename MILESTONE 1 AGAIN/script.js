var toggleButton = document.getElementById('skill-section');
var skill = document.getElementById('skill');
toggleButton.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
        toggleButton.textContent = 'Hide Skill';
    }
    else {
        skill.style.display = 'none';
        toggleButton.textContent = 'Show Skill';
    }
});
