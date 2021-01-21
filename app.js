// Name (uppercased)
// Career/field
// A short description of yourself
// A list interests
// A list past positions that includes company/place name, title, short description of what you did
// A list skills
// Skills that are "cool" should begin with BAM. (true/false in displaySkill value)

console.log("Name: " + "mia battle".toUpperCase());
console.log("Career/field: Student");
console.log("Description: I'm striving to do better");
console.log("Interests: Learning, reading, exploring, Anime, and creating");
console.log("\n")

console.log("Previous Experiences:");
displayPosition("Mental Health Facility", "Behavioral Health Counselor", "Monitor, assess, and de-esculate patients");
displayPosition("IT Consulting Company", "IT Support Intern", "Troubleshoot", "Breakdown and rebuild machines", "Install software");

console.log("\n")
console.log("Skills:");

displaySkill("Math", false);
displaySkill("Decision making", false);
displaySkill("Math", false);
displaySkill("Critcal thinking", false);
displaySkill("Art", false);
displaySkill("Woodworking", true);

function displayPosition(companyName, title, description){
    console.log("*" + title+ " at " + companyName + " - " + description);
}

function displaySkill(skillName, coolSkill){
    if(coolSkill){
        console.log("*BAM:" + skillName);
    }else{
        console.log("*" + skillName);

    }

}