
function myFunction(a){
    a();
    console.log("Function Call");
}

myFunction(function Demo(){
    console.log("Demo Function");
})