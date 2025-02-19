
const output = document.getElementById("output");
const activityLink = document.getElementById("activityLink");

const activities = {
    stretch: { 
        text: "Do 5 minutes of stretching. Use the site below to time your stretches.",
        link: "https://stretchholdtimers.com"
    },
    tv: {
        text: "Watch just 5-10 minutes of a tv show or movie.",
        link: ""
    },
    problemSolve: {
        text: "Spend 5-10 minutes using the problem solving method. Link to the method is below",
        link: "./problemSolving.html"
    },
    write: {
        text: "Spend 5-10 minutes doing free writing. Writing down whatever comes to mind.",
        link: ""
    },
    gratitude: {
        text: "Spend 5-10 minutes writing down things that you are grateful for.",
        link: ""
    },
    game: {
        text: "Pick a game from the site below and spend atleast 5-10 minutes playing.",
        link: "https://crazygames.com"
    },
    crashCourse: {
        text: "Go to the crash course youtube channel and watch 5-10 minutes of any episode.",
        link: "https://www.youtube.com/@crashcourse"
    },
    survivorMan: {
        text: "Go to the survivorman youtube playlist and watch 5-10 minutes of an episode.",
        link: "https://www.youtube.com/watch?v=6rdq6zfIzPo&list=PLdteC6yMLFp0gmUaCnWIq5gYhqoz_bk5_"
    }
}


const len = Object.keys(activities).length;

function getRandomActivity() {
   const task = Object.keys(activities)[getRandInt(len)];
   const actText = activities[task.toString()].text;
   const actLink = activities[task.toString()].link;
   output.innerText = actText;
   if (actLink !== "") {
        activityLink.href = actLink;
        activityLink.innerText = actLink;
        activityLink.hidden = false;
        if (actLink === "./problemSolving.html") {
            activityLink.innerText = "Problem Solving Method";
        }
   } else {
    activityLink.hidden = true;
   }

}

function getRandInt(max) {
    return Math.floor(Math.random() * max);
}