let nameInput = document.getElementById("name");
let roleInput = document.getElementById("role");
let companyInput = document.getElementById("company");
let skillsInput = document.getElementById("skills");

let generateBtn = document.getElementById("generateBtn");
let outputBox = document.getElementById("outputBox");
let result = document.getElementById("result");
let copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", generateLetter);

function generateLetter() {
let name = nameInput.value.trim();
let role = roleInput.value.trim();
let company = companyInput.value.trim();
let skills = skillsInput.value.trim();

if (name === "" || role === "" || company === "" || skills === "") {
alert("please fill all fields");
return;
}

let letter = `Dear Hiring Manager at ${company},

I am ${name}, and I am applying for the role of ${role}. I have experience in ${skills}.

I am very interested in this opportunity and believe my skills align well with your requirements. I am eager to contribute and grow within your organization.

Thank you for your time and consideration.

Sincerely,
${name}`;

result.value = letter;
outputBox.classList.remove("hide");
}

copyBtn.addEventListener("click", function() {
result.select();
document.execCommand("copy");
alert("copied to clipboard");
});