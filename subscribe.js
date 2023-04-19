const btn = document.getElementById("btn")

btn.addEventListener("click", check)

async function check(event) {
    const na = document.getElementById("name").value
    const em = document.getElementById("email").value
    const dropdown = document.getElementById("plan");
    let selectedDrop;
    if (dropdown.value === "") {
        selectedDrop = false
    } else {
        selectedDrop = true;
    }
    console.log(selectedDrop, na, em);
    if ( selectedDrop &&  na && em) {
        console.log("hi");
        btn.innerText = "Subscribed";
        setTimeout(() => btn.innerText = "Subscribe", 2000)
    }
    else {
        alert("Enter all fields")
        return
    }
    event.preventDefault()
    const showStatus = document.getElementById("showStatus");
    showStatus.style.fontSize = "20px";
    showStatus.style.color = "white";
    showStatus.style.textAlign = "center"
    showStatus.innerHTML = `Redirecting to home page... Please Wait`
    await sleep(3000);
    window.location = "./index.html"
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}