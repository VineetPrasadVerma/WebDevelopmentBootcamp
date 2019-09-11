var todos = [];
var input = prompt("What would you like to do ?");
while(input !== "quit"){
    if(input === "new"){
        todos.push(prompt("Enter a new todo."));
    }
    if(input === "list"){
        console.log(todos);
    }
    input = prompt("What would you like to do ?");
}
console.log("You quit the app.")