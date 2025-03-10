const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("btn");
const ul = document.getElementById("list");
const para = document.querySelector(".para");

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
  inputEl.value = "";
}
ul.innerHTML = localStorage.getItem("tasks") || "";

ul.querySelectorAll("li button").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.remove();
    localStorage.setItem("tasks", ul.innerHTML);
  });
});

buttonEl.addEventListener("click", addTask);

///////////////////////////////////

///h/w

function renderHtml(data) {
  try {
    let html = `<button class="btn2">🧹</button> <span>${data.title}</span>`;
    console.log(data.title);

    para.insertAdjacentHTML("beforeend", html);

    document.querySelectorAll(".btn2").forEach((btn) => {
      btn.addEventListener("click", function () {
        btn.parentElement.remove();
      });
    });
  } catch (err) {
    console.log(err);
  }
}

//Usual Method

// function getTaskData(task) {
//   fetch(
//     `https://jsonplaceholder.typicode.com/todos/${
//       Math.floor(Math.random() * 100) + 1
//     }`
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getTaskData();

const getTaskData = async function (task) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${task}`
  );
  const data = await response.json();
  console.log(data);
  console.log(data.title);

  renderHtml(data);
};

let task = Math.floor(Math.random() * 200) + 1;

getTaskData(task);
