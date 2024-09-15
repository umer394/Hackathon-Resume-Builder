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
    var resumeHTML = "\n    <form action=\"\" id=\"ResumeForm\" class=\"bg-black text-white flex max-w-md mx-auto p-6 shadow-lg rounded-lg min-w-fit\">\n        <div class=\"flex flex-col justify-between mx-auto\">\n            <div class=\"mt-5 justify-start items-start\">\n                <h1 class=\"text-3xl font-semibold\">".concat(name, "</h1>\n                <p>").concat(field, "</p>\n            </div>\n            <hr>\n            <div class=\"grid sm:grid-cols-2 grid-cols-1 gap-10\">\n                <div class=\"\">\n                    <h1 class=\"font-bold\">Contact</h1>\n                    \n                        <li>").concat(phone, "</li>\n                        <li>").concat(email, "</li>\n                        <li><a href=\"").concat(url, "\">").concat(url, "</a></li>\n                    \n                </div>\n                <div class=\"\">\n                    <h1 class=\"font-bold\">Summary</h1>\n                    <p>").concat(summary, "</p>\n                    \n                </div>\n            </div>\n            <hr> \n            <div class=\"grid sm:grid-cols-2 grid-cols-1 gap-10\">\n                <div>\n                    <h1 class=\"font-bold\">Education</h1>\n                    <label for=\"\" class=\"font-semibold\">").concat(department, "</label>\n                    <h2>").concat(departmentText, "</h2>\n                    <h3>").concat(departmentYear, "</h3>\n                </div>\n                <div>\n                    <h1 class=\"font-bold\">Projects</h1>\n                    <label for=\"\" class=\"font-semibold\">Python</label>\n                    <p>").concat(project, "</p>\n                    \n                </div>\n            </div>\n            <hr> \n            <div class=\"grid  grid-cols-1  mt-4\">\n                <h1 class=font-bold>Experience</h1>\n                <h1 class=font-semibold>360XpertSolutions</h1>\n                <h1 class=font-semibold>Intern Web Development - onsite</h1>\n                <p>").concat(experience, "</p>\n            </div>\n            <hr>\n             <div class=\"grid  grid-cols-1  mt-2\" id=\"skillsSection\">\n                <h1 class=\"font-bold\">Skills</h1>\n                <div class=\"flex space-x-6 mt-1\">\n                    <option value=\"\" class=\"border-2 rounded-lg\">").concat(skill1, "</option>\n                    <option value=\"\" class=\"border-2 rounded-lg\">").concat(skill2, "</option>\n                    <option value=\"\" class=\"border-2 rounded-lg\">").concat(skill3, "</option>\n                  \n                </div>\n                <div class=\"flex space-x-6 mt-1\">\n                    <option value=\"\" class=\"border-2 rounded-lg\">").concat(skill1, "</option>\n                    <option value=\"\" class=\"border-2 rounded-lg\">").concat(skill2, "</option>\n                    <option value=\"\" class=\"border-2 rounded-lg\">").concat(skill3, "</option>\n                </div>\n                    \n            </div>\n             <div>\n                <button type=\"button\" class=\"w-full border-2 mt-1 font-bold bg-red-700 hover:bg-red-400\" id=\"toggleSkillsButton\">Toggle Skills</button>\n            </div> \n            </div>\n        </div>\n    </form>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume display element is missing');
    }
});
