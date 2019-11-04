function looking(){

     var name = document.getElementById("name").value;
     var age = document.getElementById("age").value;
     var city = document.getElementById("city").value;
     var country = document.getElementById("country").value;

     var Person = {
    
            name: name,
            age: age,
            city: city,
            country: country,
     }
     
var myJSON = JSON.stringify(Person);

document.getElementById("outPut").innerHTML = myJSON;

}


function convert(){

     var Personone = document.getElementById("putJSON").value;
     var Obj = JSON.parse(Personone);

     document.getElementById("outPut1").innerHTML = "Name: " + Obj.name + "<br/>" + "Age: " + Obj.age + "<br/>" + "City: " + Obj.city + "<br/>" + "Country: " + Obj.country;
}