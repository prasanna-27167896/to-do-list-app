const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("btn");
const ul = document.getElementById("list");

function addTask() {
  if (!inputEl.value.trim()) {
    alert("Please enter a to-do task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `<button class="button">🧹</button> <span>${inputEl.value}</span>`;

  li.querySelector("button").addEventListener("click", () => {
    li.remove();
    localStorage.setItem("tasks", ul.innerHTML);
  });

  ul.appendChild(li);
  localStorage.setItem("tasks", ul.innerHTML);
}

ul.innerHTML = localStorage.getItem("tasks") || "";

ul.querySelectorAll("li button").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.remove();
    localStorage.setItem("tasks", ul.innerHTML);
  });
});

buttonEl.addEventListener("click", addTask);
