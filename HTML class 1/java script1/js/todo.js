  function addItem(){
    let inputTextObj = document.getElementById("addItem");
    addTodoList(inputTextObj.value);
    inputTextObj.value = "";
  }

  function addTodoList(value){
    if(value === ""){
      let inputTextObj = document.getElementById("addItem");
      inputTextObj.focus();
      return;
    }
    let ListElement = document.createElement("div");
    let todoText = document.createElement("img");
    let deleteButton = document.createElement("span");

    ListElement.className = "ListItem";
    todoText.className = "todoText";
    todoText.src = "https://fea.assettype.com/vikatan/assets/vikatan-logo-7d10e0f8c3899d298242.png"
    deleteButton.className = "deleteBtn";

    todoText.innerHTML = value;
    deleteButton.innerHTML = "X";

    deleteButton.addEventListener("click", this.RemoveTodoList.bind(this));
    
    ListElement.appendChild(todoText);
    ListElement.appendChild(deleteButton);
    
    let target = document.getElementById("todo-list");
    target.appendChild(ListElement);

    
  }

  function RemoveTodoList(obj){
    let itemTobeRemoved = obj.target.parentNode;
    let target = document.getElementById("todo-list");
    target.removeChild(itemTobeRemoved);
  }