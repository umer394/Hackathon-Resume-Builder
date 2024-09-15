var toggleButton = document.getElementById("toggleSkillsButton");
var skillsSection = document.getElementById("skillsSection");
function toggleSkills() {
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
}
toggleButton.addEventListener("click", toggleSkills);
