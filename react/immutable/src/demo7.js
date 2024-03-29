var deepCopy = function(obj){
    if(typeof obj !== 'object') return;
    var newObj = obj instanceof Array?[]:{};
    for(var key in obj){
        console.log(typeof obj[key])
        if(obj.hasOwnProperty(key)){
            newObj[key] =typeof obj[key] === 'object'?deepCopy(obj[key]):obj[key];
        }
    }
    return newObj;
}

var arr = ['old',1,true,[1,2]]
var new_arr = deepCopy(arr);
new_arr[3][0] = 9;
console.log(new_arr,arr)