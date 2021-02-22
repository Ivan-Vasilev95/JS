//dom elemts
const CurrentTime = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    goal = document.getElementById('goal'),
    name = document.getElementById('name'),
    note = document.getElementById('note');

//show time

function showTime() {
    let time = new Date(),
        hr = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds();

    //set am or pm

    const amPm = hr >= 12 ? 'PM' : 'AM';

    //12hr format

    hr = hr % 12 || 12;

    //output
    CurrentTime.innerHTML = `${hr}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);

}

//add zero

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background

function setBackground() {

    let random = Math.floor(Math.random() * Math.floor(10));
    //let random = 6;

    document.body.style.backgroundImage = `url('img/${random}.jpg')`;

    console.log(random);
    setTimeout(setBackground, 1000 * 60 * 10);
}


//set greeting
function setGreeting() {
    let time = new Date(),
        hr = time.getHours();

    if (hr < 12) {
        //morning
        greeting.textContent = "Good Morning";
    } else if (hr > 12 && hr < 18) {
        //afternoon
        greeting.textContent = "Good Afternoon";

    } else {
        //evening
        greeting.textContent = "Good Evening";
    }
}

//get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//set name
function setName(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//get notes
function getNote(e) {
    if (localStorage.getItem('note') === null) {
        note.textContent = '[Enter Name]';
    } else {
        note.textContent = localStorage.getItem('note');
    }
}

//set notes
function setNote(e) {
    if (e.type === 'keypress') {
        localStorage.setItem('note', e.target.innerText);

    } else {
        localStorage.setItem('note', e.target.innerText);
    }
}


//set goal
function setGoal(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('goal', e.target.innerText);
            goal.blur();
        }

    } else {
        localStorage.setItem('goal', e.target.innerText);
    }
}


//get goal
function getGoal() {
    if (localStorage.getItem('goal') === null) {
        goal.textContent = '[Enter Goal]';
    } else {
        goal.textContent = localStorage.getItem('goal');
    }
}

// eventlistener for name
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

//eventlistener for goal
goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', setGoal);

//eventlistener for note
note.addEventListener('keypress', setNote);
note.addEventListener('blur', setNote);

//run
showTime();
setGreeting();
getName();
getGoal();
getNote();
setBackground();