const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input"); //document.querySelector("#todo-form input")

const TODOS_KEY = "todos";
let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    //JSON.stringfy : object, array 등 관계없이 값을 String으로 변환.
}

function paintTodo(newTodo){
    const li = document.createElement("li"); //create로 가져오는 element의 값은 자동형변환되어 string 으로 불림.
    li.id = newTodo.id;
    const span = document.createElement("span"); 
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";

    li.append(span, button);
    todoList.appendChild(li);

    button.addEventListener("click", deleteTodo);

}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();

    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    //localStorage.setItem("newTodo", newTodo);
    //localStorage에는 text만 저장 가능
    saveTodos();
    paintTodo(newTodoObj);
}

todoForm.addEventListener("submit", handleTodoSubmit);



const savedTodo = localStorage.getItem(TODOS_KEY);

if(savedTodo !== null){
    const parsedTodo = JSON.parse(savedTodo);
   // parsedTodo.filter()
    todos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}
