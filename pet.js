class Pet {
    
    constructor(petName, ownerName, species, breed) {
      this.petName = petName
      this.ownerName = ownerName
      this.species = species
      this.breed = breed
    }
   static sameOwner(petA,petB){
    return petA.ownerName === petB.ownerName ? "i gli animali hanno lo stesso padrone" : "gli animali hanno diverso padrone"
   }
  }

  const pets = [];
  let animali = document.getElementById("form");

  animali.addEventListener("summit", event =>{
    event.preventDefault();

    const FormOwnerName = document.getElementById("ownerName").value;
    const FormPetName = document.getElementById("petName").value;
    const FormSpecies = document.getElementById("species").value;
    const FormBreed = document.getElementById("breed").value;

    document.getElementById("ownerName").value = "";
    document.getElementById("petName").value = "";
    document.getElementById("species").value = "";
    document.getElementById("breed").value = "";

    pets.push(new Pet(FormOwnerName,FormPetName,FormSpecies,FormBreed));

    const listaAnimali = document.querySelectorAll(ul);
    listaAnimali.innerHTML = "";
    
//da completare

    




  })
