function startBirthday() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    if (name && age) {
        document.getElementById("intro").style.display = "none";
        document.getElementById("birthdayPage").classList.remove("hidden");
        document.getElementById("birthdayMessage").innerText = `Happy ${age}th Birthday, ${name}! 🎉🎂`;
    } else {
        alert("Please enter your name and age!");
    }
}

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function showImages() {
    let images = document.getElementById("imageContainer");
    images.style.display = "block";
    let imgElements = images.getElementsByTagName("img");
    for (let i = 0; i < imgElements.length; i++) {
        setTimeout(() => {
            imgElements[i].style.opacity = 1;
        }, i * 300);
    }
}