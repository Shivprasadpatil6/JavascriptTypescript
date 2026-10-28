// Immediate invoke function Expression

(function(){
    console.log("Anonymous fn");
})();
(function(){
    console.log("Staging");
})();

(()=>{
    console.log("Setup complete");

})();