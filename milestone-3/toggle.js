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
    var resumeHTML = "\n    <form action=\"\" id=\"ResumeForm\" class=\"bg-black text-white flex max-w-md mx-auto p-6 shadow-lg rounded-lg min-w-fit\">\n        <div class=\"flex flex-col justify-between mx-auto\">\n            <div class=\"mt-5 justify-start items-start\">\n                <h1 class=\"text-3xl font-semibold\">".concat(name, "</h1>\n                <p>").concat(field, "</p>\n            </div>\n            <hr>\n            <div class=\"grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5\">\n                <div class=\"\">\n                    <h1 class=\"font-bold text-xl my-2 text-gray-400\">Contact</h1>\n                    \n                        <li class=\"text-[13px]\">").concat(phone, "</li>\n                        <li class=\"text-[13px]\">").concat(email, "</li>\n                        <li class=\"text-[13px]\"><a href=\"").concat(url, "\">").concat(url, "</a></li>\n                    \n                </div>\n                <div class=\"\">\n                    <h1 class=\"font-bold text-xl my-2 text-gray-400\">Summary</h1>\n                    <p class=\"text-[13px]\">").concat(summary, "</p>\n                    \n                </div>\n            </div>\n            <hr> \n            <div class=\"grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5\">\n                <div>\n                    <h1 class=\"font-bold text-xl my-2 text-gray-400\">Education</h1>\n                    <label for=\"\" class=\"font-semibold\">").concat(department, "</label>\n                    <h2>").concat(departmentText, "</h2>\n                    <h3>").concat(departmentYear, "</h3>\n                </div>\n                <div>\n                    <h1 class=\"font-bold text-xl my-2 text-gray-400\">Projects</h1>\n                    <label for=\"\" class=\"font-semibold\">").concat(projectHeading, "</label>\n                    <p class=\"text-[13px]\">").concat(project, "</p>\n                    \n                </div>\n            </div>\n            <hr> \n            <div class=\"grid  grid-cols-1  mt-4\">\n                <h1 class=\"font-bold text-xl my-2 text-gray-400\">Experience</h1>\n                <h1 class=\"font-semibold\">").concat(expCompany, "</h1>\n                <h1 class=\"font-semibold\">").concat(expPosition, "</h1>\n                <p class=\"text-[13px]\">").concat(experience, "</p>\n            </div>\n            <hr>\n             <div class=\"grid  grid-cols-1  mt-2\" id=\"skillsSection\">\n                <h1 class=\"font-bold text-xl my-2 text-gray-400\">Skills</h1>\n                <div class=\"flex space-x-6 mt-1\">\n                    <h1 value=\"\" class=\" rounded-lg p-1 bg-gray-800 \">").concat(skill1, "</h1>\n                    <h1 value=\"\" class=\"rounded-lg p-1 bg-gray-800\">").concat(skill2, "</h1>\n                    <h1 value=\"\" class=\"rounded-lg p-1 bg-gray-800\">").concat(skill3, "</h1>\n                </div>\n            </div>\n             <div class=\"mt-2\">\n                <button type=\"button\" class=\"w-full border-2 mt-1 font-bold bg-gray-700 hover:bg-black\" id=\"toggleSkillsButton\">Toggle Skills</button>\n            </div> \n            </div>\n        </div>\n    </form>");
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
