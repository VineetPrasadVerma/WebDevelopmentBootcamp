function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    return false;
}

function factorial(num){
    var fact = 1;

    for(var i = 2; i<=num; i++){
        fact *= i;
    }

    return fact;
}

function kebabToSnake(str){
    return str.replace(/-/g, "_");  
}

