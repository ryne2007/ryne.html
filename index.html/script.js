function login() {
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let mobilePattern = /^[0-9]{10}$/;

    if (emailPattern.test(email) && mobilePattern.test(mobile)) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("portfolioPage").style.display = "block";
    } else {
        document.getElementById("error").innerText =
            "Enter valid Email & 10-digit Mobile!";
    }
}

/* STUDENT AVERAGE */
function calculateMarks() {
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    let avg = (m1 + m2 + m3) / 3;

    let grade = "";
    if (avg >= 80) grade = "A";
    else if (avg >= 60) grade = "B";
    else grade = "C";

    document.getElementById("result").innerText =
        "Average: " + avg + " | Grade: " + grade;
}

/* CALCULATOR */
function add() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    calcResult.innerText = n1 + n2;
}

function sub() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    calcResult.innerText = n1 - n2;
}

function mul() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    calcResult.innerText = n1 * n2;
}

function div() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    if (n2 === 0) calcResult.innerText = "Cannot divide by 0";
    else calcResult.innerText = n1 / n2;
}

function logout() {
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("portfolioPage").style.display = "none";
}