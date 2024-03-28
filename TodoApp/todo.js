let todolist = [
    {
      item: "milk",
      dueDate: "5/3/2024",
    },
    {
      item: "cloths",
      dueDate: "4/3/2024",
    }
  ];
  displayItems();
  
  function addTodo() {
    let inputElement = document.querySelector("#input-items");
    let dateElement=document.querySelector('#todo-date');
  
    let todoItems = inputElement.value;
    let todoDate = dateElement.value;
    todolist.push({item: todoItems, dueDate:todoDate});
  
    inputElement.value = "";
    dateElement.value ="";
    displayItems();
  }
  
  function displayItems(){
  
    let containerElements=document.querySelector('.todo-container');
  
    let newhtml='';
  
    for (let i = 0; i < todolist.length; i++) {
      // let item=todolist[i].item;
      // let dueDate=todolist[i].dueDate;
      let {item,dueDate}=todolist[i];
        newhtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todolist.splice(${i},1)
        displayItems();" id="delete">delete</button>
      
       `;
        containerElements.innerHTML=newhtml;
  
  
      // let displayElements=document.querySelector('#todo-items');
      // displayElements.innerText='';
  
      // for (let i = 0; i < todolist.length; i++) {
      //    displayElements.innerText =displayElements.innerText  + "\n" + todolist[i];
      //     }
         
   }
  }