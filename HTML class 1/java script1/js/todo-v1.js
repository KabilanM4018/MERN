// function addTodo() {
//   let inputText = document.getElementById("addTodo");
//   addItem(inputText.value);
//   inputText.value = "";
// }

// function addItem(value) {
//   if (value.trim() === "") {
//     alert("Please enter the task");
//     return;
//   }

//   // Create elements
//   let listItem = document.createElement("div");
//   let text = document.createElement("span");
//   let del = document.createElement("span");

//   // Assign class names
//   listItem.className = "list-group-item";
//   text.className = "text";
//   del.className = "delete";

//   // Set text content
//   text.innerHTML = value;
//   del.innerHTML = "X";

//   // Add delete functionality
//   del.addEventListener("click", function () {
//     listItem.remove();
//   });

//   // Append elements
//   listItem.appendChild(text);
//   listItem.appendChild(del);

//   // Append to the list
//   document.getElementById("todo-list").appendChild(listItem);
// }

// function clearall(){
//   document.getElementById("todo-list").innerHTML = "";
// }
function addTodo() {
  let inputText = document.getElementById("addTodo");
  addItem(inputText.value);
  inputText.value = "";
}

function addItem(value) {
  if (value.trim() === "") {
    alert("Please enter the task");
    return;
  }

  let listItem = document.createElement("div");
  let text = document.createElement("span");
  let del = document.createElement("span");

  listItem.className = "list-group-item";
  text.className = "text";
  del.className = "delete";

  text.innerHTML = value;
  del.innerHTML = "X";

  del.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(text);
  listItem.appendChild(del);

  document.getElementById("list").appendChild(listItem);
}

function clearAll() {
  document.getElementById("list").innerHTML = "";
}