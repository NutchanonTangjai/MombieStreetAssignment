
function range(start, end, step = 1) {
    let array = [],i = start;
    //if step value < 0 which is negative numbers
    if(step < 0){ 
        for(; i >= end; i+=step)array.push(i)
        return array;
    }
    //if not negative numbers
    else{
        for(; i <= end; i+=step)array.push(i)
        return array;
    }
}

function sum(array = []) {
    //use reduce to find sum of values
    return array.reduce((accumulator,currentPos) => accumulator + currentPos , 0)
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
