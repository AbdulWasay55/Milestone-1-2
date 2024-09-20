const toggleButton = document.getElementById('skill-section') as HTMLButtonElement;
const skill = document.getElementById('skill') as HTMLElement;

toggleButton.addEventListener('click', ()=>{
    if(skill.style.display==='none'){
        skill.style.display = 'block'
        toggleButton.textContent = 'Hide Skill'
    }
    else{
        skill.style.display ='none'
        toggleButton.textContent='Show Skill'
    }
})