function asyncFunc(work){
    return new Promise(function (resolve,reject){
        if(work === ""){
            reject(Error("Nothing"));
            setTimeout(function(){
                resolve(work)
            }, 1000);
        }
    });
}   
asyncFunc("Work 1").then(function(result){ //tarea 1
    console.log(result);
    return asyncFunc("Work 2"); //tarea 2
}, function(error){
    console.log(error);

}).then(function(result){
    console.log(result);
}, function(error){
    console.log(error);
});

console.log((asyncFunc("123"))) //devuelve  un [object promise]
