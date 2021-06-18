const arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
console.log(arr.map((el,index, arr)=> {
    if(index !== arr.length -1) {
        return el + arr[index + 1];
    }
    return el;
}));
