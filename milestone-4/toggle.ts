const form = document.getElementById('ResumeForm') as HTMLFormElement
const resumeDisplayElement = document.getElementById('Resume-display') as HTMLDivElement

form.addEventListener('submit',(event:Event) => {
    event.preventDefault();
    
    const name = (document.getElementById('name') as HTMLInputElement).value
    const field = (document.getElementById('field') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const url = (document.getElementById('url') as HTMLInputElement).value
    const summary = (document.getElementById('summary') as HTMLInputElement).value
    const department = (document.getElementById('department') as HTMLInputElement).value
    const departmentText = (document.getElementById('department-text') as HTMLInputElement).value
    const departmentYear = (document.getElementById('department-year') as HTMLInputElement).value
    const project = (document.getElementById('project') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skill1 = (document.getElementById('skill-1') as HTMLInputElement).value
    const skill2 = (document.getElementById('skill-2') as HTMLInputElement).value
    const skill3 = (document.getElementById('skill-3') as HTMLInputElement).value
    const projectHeading = (document.getElementById('projectHeading') as HTMLInputElement).value
    const expCompany = (document.getElementById('company') as HTMLInputElement).value
    const expPosition = (document.getElementById('position') as HTMLInputElement).value

    const resumeHTML = `
    <form action="" id="ResumeForm" class="bg-black text-white flex max-w-md mx-auto p-6 shadow-lg rounded-lg min-w-fit">
        <div class="flex flex-col justify-between mx-auto">
            <div class="mt-5 justify-start items-start">
                <h1 class="text-3xl font-semibold"><span contenteditable="true">${name}</span></h1>
                <p><span contenteditable="true">${field}</span></p>
            </div>
            <hr>
            <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5">
                <div class="">
                    <h1 class="font-bold text-xl my-2 text-gray-400">Contact</h1>
                    
                        <li class="text-[13px]"><span contenteditable="true">${phone}</span></li>
                        <li class="text-[13px]"><span contenteditable="true">${email}</span></li>
                        <li class="text-[13px]"><a href="${url}"><span contenteditable="true">${url}</span></a></li>
                    
                </div>
                <div class="">
                    <h1 class="font-bold text-gray-400">Summary</h1>
                    <p class="text-[13px]"><span contenteditable="true">${summary}</span></p>
                    
                </div>
            </div>
            <hr> 
            <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5">
                <div>
                    <h1 class="font-bold text-xl my-2 text-gray-400">Education</h1>
                    <label for="" class="font-semibold"><span contenteditable="true">${department}</span></label>
                    <h2><span contenteditable="true">${departmentText}</span></h2>
                    <h3><span contenteditable="true">${departmentYear}</span></h3>
                </div>
                <div>
                    <h1 class="font-bold text-xl my-2 text-gray-400">Projects</h1>
                    <label for="" class="font-semibold"><span contenteditable="true">${projectHeading}</span></label>
                    <p class="text-[13px]"><span contenteditable="true">${project}</span></p>
                    
                </div>
            </div>
            <hr> 
            <div class="grid  grid-cols-1  mt-4">
                <h1 class="font-bold text-xl my-2 text-gray-400">Experience</h1>
                <h1 class="font-semibold"><span contenteditable="true">${expCompany}</span></h1>
                <h1 class="font-semibold"><span contenteditable="true">${expPosition}</span></h1>
                <p class="text-[13px]"><span contenteditable="true">${experience}</span></p>
            </div>
            <hr>
             <div class="grid  grid-cols-1  mt-2" id="skillsSection">
                <h1 class="font-bold text-xl my-2 text-gray-400">Skills</h1>
                <div class="flex space-x-6 mt-1">
                    <h1 value="" class=" rounded-lg p-1 bg-gray-800 "><span contenteditable="true">${skill1}</span></h1>
                    <h1 value="" class="rounded-lg p-1 bg-gray-800"><span contenteditable="true">${skill2}</span></h1>
                    <h1 value="" class="rounded-lg p-1 bg-gray-800"><span contenteditable="true">${skill3}</span></h1>
                </div>
            </div>
             <div class="mt-2">
                <button type="button" class="w-full border-2 mt-1 font-bold bg-gray-700 hover:bg-black" contenteditable="false" id="toggleSkillsButton">Toggle Skills</button>
            </div> 
            </div>
        </div>
    </form>`;
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;

        const toggleButton = document.getElementById("toggleSkillsButton") as HTMLButtonElement;
        const skillsSection = document.getElementById("skillsSection") as HTMLDivElement;

        if (toggleButton && skillsSection) {
            toggleButton.addEventListener("click", () => {
                if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
                    skillsSection.style.display = "block";
                } else {
                    skillsSection.style.display = "none";
                }
            });
        }

    }else{
        console.error('The Resume display element is missing')
    }
    
})