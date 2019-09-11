var todos = [];

var input = prompt("What would you like to do ?");

while(input !== "quit"){

    if(input === "new"){
        addTodo();
    }
    if(input === "list"){
        listTodo();
    }

    if(input === "delete"){
        deleteTodo();
    }
    input = prompt("What would you like to do ?");
}

function addTodo(){
    todos.push(prompt("Enter a new todo."));
    console.log("Todo added successfully !!");
}

function listTodo(){
    console.log("********");
    todos.forEach(function(todo, index){
        console.log(index + " : " + todo);
    })
    console.log("********");
}

function deleteTodo(){
    var index = prompt("Enter Index of element to be deleted.");
    if(index < todos.length){
        todos.splice(index, 1);
    console.log("Todo Deleted Successfully !!");
    }
    else{
        console.log("kindly, Enter valid index !!")
    }
}
console.log("You quit the app.")