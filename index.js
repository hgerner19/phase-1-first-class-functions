
function receivesAFunction(callback){
    return callback();
}
function  func(){
    return func.name;
}
function returnsANamedFunction(){
    return func;
            
}

function returnsAnAnonymousFunction(){
    return function(){

    };
}