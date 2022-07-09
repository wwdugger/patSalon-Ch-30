// object literal
//arrays= []
// objects={}
let petSalon = {
    //attributes
    name: "The Fashion Pet",
    address:"Ave University 768",
    hours:{
        open:"9:00am",
        close:"6:00pm"
    },
    pets:[]
}
//constructor function
//-----------------parameters/ local variables--------------------->
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    //attributes = parameters
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
}
for(let i=0;i<petSalon.pets.length;i++){
    console.log(petSalon.pets[i].name);
}
//creating the function
function displayInfo(){
    document.getElementById("info").innerHTML=`Welcome to the ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to${petSalon.hours.close}`;
}
function displayNumberOfPets(){
    document.getElementById("number-pets").innerHTML=`There are ${petSalon.pets.length} pets`;
}

function isValid(aPet){
    let valid=true;
    if(aPet.name=="" || aPet.service==""){ // is empty?

    }
    return valid;
}

function register(){
    let petName = document.getElementById("txtpetName").value;
    let petAge = document.getElementById("numPetAge").value;
    let petGender = document.getElementById("txtpetGender").value;
    let petBreed = document.getElementById("txtpetBreed").value;
    let petService = document.getElementById("txtpetService").value;
    let petOwner = document.getElementById("txtpetOwner").value;
    let petPhone = document.getElementById("txtpetPhone").value;
    
    //create the obj
    let newPet = new Pet(petName,petAge,petGender,petBreed,petService,petOwner,petPhone);
    console.log(newPet);
    //push the new obj
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
    displayNumberOfPets();
    clearInputs();
}

function clearInputs(){
    let petName = document.getElementById("txtpetName").value="";
    let petAge = document.getElementById("numPetAge").value="";
    let petGender = document.getElementById("txtpetGender").value="";
    let petBreed = document.getElementById("txtpetBreed").value="";
    let petService = document.getElementById("txtpetService").value="";
    let petOwner = document.getElementById("txtpetOwner").value="";
    let petPhone = document.getElementById("txtpetPhone").value="";
}

function init(){
    //creating objects
    let scooby = new Pet("Scooby",50,"Male","Dane", "Grooming", "Shaggy", "666-666-666");
    let scrappy = new Pet("Scrappy",40, "Male", "Dane/mix", "Vaccines", "Wes", "777-77-777");
    let speedy = new Pet("Speedy",80,"Male","Mix", "Nails clipped", "Shaggy", "888-888-888");
    
    petSalon.pets.push(scooby,scrappy,speedy);
    console.log(petSalon.pets);
    //calling the function
    displayInfo();
   
    
    //hook events
}


window.onload=init;