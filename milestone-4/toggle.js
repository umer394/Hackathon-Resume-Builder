var form = document.getElementById('ResumeForm');
var resumeDisplayElement = document.getElementById('Resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var field = document.getElementById('field').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var url = document.getElementById('url').value;
    var summary = document.getElementById('summary').value;
    var department = document.getElementById('department').value;
    var departmentText = document.getElementById('department-text').value;
    var departmentYear = document.getElementById('department-year').value;
    var project = document.getElementById('project').value;
    var experience = document.getElementById('experience').value;
    var skill1 = document.getElementById('skill-1').value;
    var skill2 = document.getElementById('skill-2').value;
    var skill3 = document.getElementById('skill-3').value;
    var projectHeading = document.getElementById('projectHeading').value;
    var expCompany = document.getElementById('company').value;
    var expPosition = document.getElementById('position').value;
    var resumeHTML = "\n    <form action=\"\" id=\"ResumeForm\" class=\"bg-black text-white flex max-w-md mx-auto p-6 shadow-lg rounded-lg min-w-fit\">\n        <div class=\"flex flex-col justify-between mx-auto\">\n            <div class=\"mt-5 justify-start items-start\">\n                <h1 class=\"text-3xl font-semibold\"><span contenteditable=\"true\">".concat(name, "</span></h1>\n                <p><span contenteditable=\"true\">").concat(field, "</span></p>\n            </div>\n            <hr>\n            <div class=\"grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5\">\n                <div class=\"\">\n                    <h1 class=\"font-bold text-xl my-2 text-gray-400\">Contact</h1>\n                    \n                        <li class=\"text-[13px]\"><span contenteditable=\"true\">").concat(phone, "</span></li>\n                        <li class=\"text-[13px]\"><span contenteditable=\"true\">").concat(email, "</span></li>\n                        <li class=\"text-[13px]\"><a href=\"").concat(url, "\"><span contenteditable=\"true\">").concat(url, "</span></a></li>\n                    \n                </div>\n                <div class=\"\">\n                    <h1 class=\"font-bold text-gray-400\">Summary</h1>\n                    <p class=\"text-[13px]\"><span contenteditable=\"true\">").concat(summary, "</span></p>\n                    \n                </div>\n            </div>\n            <hr> \n            <div class=\"grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5\">\n                <div>\n                    <h1 class=\"font-bold text-xl my-2 text-gray-400\">Education</h1>\n                    <label for=\"\" class=\"font-semibold\"><span contenteditable=\"true\">").concat(department, "</span></label>\n                    <h2><span contenteditable=\"true\">").concat(departmentText, "</span></h2>\n                    <h3><span contenteditable=\"true\">").concat(departmentYear, "</span></h3>\n                </div>\n                <div>\n                    <h1 class=\"font-bold text-xl my-2 text-gray-400\">Projects</h1>\n                    <label for=\"\" class=\"font-semibold\"><span contenteditable=\"true\">").concat(projectHeading, "</span></label>\n                    <p class=\"text-[13px]\"><span contenteditable=\"true\">").concat(project, "</span></p>\n                    \n                </div>\n            </div>\n            <hr> \n            <div class=\"grid  grid-cols-1  mt-4\">\n                <h1 class=\"font-bold text-xl my-2 text-gray-400\">Experience</h1>\n                <h1 class=\"font-semibold\"><span contenteditable=\"true\">").concat(expCompany, "</span></h1>\n                <h1 class=\"font-semibold\"><span contenteditable=\"true\">").concat(expPosition, "</span></h1>\n                <p class=\"text-[13px]\"><span contenteditable=\"true\">").concat(experience, "</span></p>\n            </div>\n            <hr>\n             <div class=\"grid  grid-cols-1  mt-2\" id=\"skillsSection\">\n                <h1 class=\"font-bold text-xl my-2 text-gray-400\">Skills</h1>\n                <div class=\"flex space-x-6 mt-1\">\n                    <h1 value=\"\" class=\" rounded-lg p-1 bg-gray-800 \"><span contenteditable=\"true\">").concat(skill1, "</span></h1>\n                    <h1 value=\"\" class=\"rounded-lg p-1 bg-gray-800\"><span contenteditable=\"true\">").concat(skill2, "</span></h1>\n                    <h1 value=\"\" class=\"rounded-lg p-1 bg-gray-800\"><span contenteditable=\"true\">").concat(skill3, "</span></h1>\n                </div>\n            </div>\n             <div class=\"mt-2\">\n                <button type=\"button\" class=\"w-full border-2 mt-1 font-bold bg-gray-700 hover:bg-black\" contenteditable=\"false\" id=\"toggleSkillsButton\">Toggle Skills</button>\n            </div> \n            </div>\n        </div>\n    </form>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        var toggleButton = document.getElementById("toggleSkillsButton");
        var skillsSection_1 = document.getElementById("skillsSection");
        if (toggleButton && skillsSection_1) {
            toggleButton.addEventListener("click", function () {
                if (skillsSection_1.style.display === "none" || skillsSection_1.style.display === "") {
                    skillsSection_1.style.display = "block";
                }
                else {
                    skillsSection_1.style.display = "none";
                }
            });
        }
    }
    else {
        console.error('The Resume display element is missing');
    }
});
