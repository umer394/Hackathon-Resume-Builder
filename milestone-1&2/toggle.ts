const toggleButton = document.getElementById("toggleSkillsButton") as HTMLButtonElement
const skillsSection = document.getElementById("skillsSection") as HTMLDivElement

function toggleSkills():void{
    if(skillsSection.style.display === "none" || skillsSection.style.display === ""){
        skillsSection.style.display = "block"
    }else{
        skillsSection.style.display = "none"
    }
}

toggleButton.addEventListener("click",toggleSkills)