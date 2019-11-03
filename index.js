function looking(){

     var Person = {
    
            name: "David",
            age: 33,
            city: "Cotacachi",
            country: "Ecuador"
     }
     
var myJSON = JSON.stringify(Person);

document.getElementById("outPut").innerHTML = myJSON;

}