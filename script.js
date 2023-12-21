const inputbox = document.getElementById("text1");
const listcon = document.getElementById("list-container");

function addelement() {
    if (inputbox.value === ' ')
        alert("you must write something!");
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    savedata();
}
listcon.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", listcon.innerHTML);
}

function showtask() {
    listcon.innerHTML = localStorage.getItem("data");
}

showtask();