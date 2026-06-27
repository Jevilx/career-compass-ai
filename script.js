const input = document.querySelector("input");
const button = document.querySelector("button");
const bot = document.querySelector(".bot");

const responses = {
    "career":
        "Choose a career based on your interests and strengths. Popular options include Software Engineer, Data Analyst, AI Engineer, Electronics Engineer, and Cybersecurity Specialist.",

    "resume":
        "Keep your resume one page long. Include your education, projects, skills, internships, and certifications.",

    "interview":
        "Prepare by practicing common HR and technical questions. Be confident and explain your projects clearly.",

    "internship":
        "You can apply through LinkedIn, Internshala, AICTE Internship Portal, and company career pages.",

    "skills":
        "Focus on HTML, CSS, JavaScript, Python, Git, Communication Skills, and Problem Solving.",

    "higher studies":
        "You can pursue M.Tech, MBA, MS abroad, or prepare for GATE depending on your career goals."
};

button.addEventListener("click", answer);

input.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        answer();
    }
});

function answer(){

    let question = input.value.toLowerCase().trim();

    let reply = "Sorry, I couldn't understand your question. Try asking about Career, Resume, Interview, Internship, Skills, or Higher Studies.";

    for(let key in responses){
        if(question.includes(key)){
            reply = responses[key];
            break;
        }
    }

    bot.innerHTML = `
        <h3>🤖 Career Compass AI</h3>
        <p>${reply}</p>
    `;

    input.value="";
}