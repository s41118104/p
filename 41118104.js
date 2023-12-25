function adjustText() {
    const studentInfo = document.getElementById("studentInfo");
    stid.style.fontSize = "20px";
    stid.style.color = "blue";
}

function adjustAvatar() {
    const avatar = document.getElementById("avatar");
    avatar.style.borderRadius = "50%";
    avatar.style.border = "10px solid red";
}

function changeAvatar() {
    const avatar = document.getElementById("avatar");
    avatar.src = "0.5.webp";
}