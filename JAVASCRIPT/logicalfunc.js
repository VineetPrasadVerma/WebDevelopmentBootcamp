function printReverse(arr){
    len = arr.length;
    arr.forEach(function(num, index){
        console.log(arr[(len - index) - 1]);
    })
}

printReverse([3,6,2,5]);

function isUniform(arr){
    var firstElement = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(firstElement !== arr[i]){
            return false;
        }
    }
    return true;
}

isUniform([1,1,2]);

function sumArray(arr){
    sum = 0;
    arr.forEach(function(num){
        sum += num;
    })
    return sum;
}

sumArray([2,5,6]);

function maxNumber(arr){
    var max = -9999999999;
    arr.forEach(function(num){
        if(num > max){
            max = num;
        }
    })
    return max;
}