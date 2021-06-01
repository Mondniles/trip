

//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.saraksts');
const filterOption = document.querySelector('.filter-todo');



//Event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);


//function



function addTodo(event){
 
    event.preventDefault(); //- nonem browsera hujnu

    //poga, kas izveido jaunu objektu

    //todoDiv 

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create li

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo); //ieliek ieksa divaa

    const checkMarkBtn = document.createElement('button'); //izveidoju pogas
    checkMarkBtn.innerHTML = '<i class="fas fa-check"> </i>';
    checkMarkBtn.classList.add("complete-btn");
    todoDiv.appendChild(checkMarkBtn);

    const notNeededBtn = document.createElement('button');
    notNeededBtn.innerHTML = '<i class="fas fa-trash"> </i>';
    notNeededBtn.classList.add("deleted-btn");
    todoDiv.appendChild(notNeededBtn);

    //append 
    todoList.appendChild(todoDiv);  

    todoInput.value = null;

}

function deleteCheck(e){

    //alert(e.target); parada elementu

    const item = e.target;

    //Delete

    if(item.classList[0] === 'deleted-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionEnd', function(){ //gaida un tikai pec tam dzes
            todo.remove();
        }); 
    }

    //CheckMark

    if(item.classList[0] === "complete-btn"){

        const todo = item.parentElement;
        todo.classList.toggle('completedTask'); 

    }

}
 

function filterToDo(ob){

    

    const todos = todoList.childNodes;
    
    todos.forEach(function(todo){
        switch(ob.target.value){
             
            case "all":
                todo.style.display = 'flex';
                alert("visi");
                break;

            case "marked":
                if(todo.classList.contains('marked')){
                    todo.style.display = "flex";
                }
                else todo.style.display = "none";
                break;

            case "uncompleted":
                if(!todo.classList.contains('marked')){
                    todo.style.display = "flex";
                }
                else todo.style.display = "none";
                break;
        } 

    });


}