let inputEl = document.getElementById("input");
let btnEl = document.getElementById("btn");
let ul = document.getElementById("list");

function addTask() {
  if (!inputEl.value.trim()) {
    alert("please enter the task");
  } else {
    //create elementss

    const newList = document.createElement("li");

    const check = document.createElement("button");
    check.classList.add("dynamic");
    check.addEventListener("click", () => {
      span.classList.toggle("completed", check.checked);
      check.classList.toggle("check-btn", check.checked);
    });

    const span = document.createElement("span");
    span.textContent = inputEl.value;

    const button = document.createElement("button");
    button.textContent = "🧹";
    button.classList.add("button");
    button.addEventListener("click", () => {
      newList.remove();
    });

    newList.appendChild(check);
    newList.appendChild(span);
    newList.appendChild(button);

    ul.appendChild(newList);
  }
  inputEl.value = "";
}
