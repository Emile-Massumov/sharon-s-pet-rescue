const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
//Create a factory function
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      //In the pet object, create a property called sleep
      console.log(`${this.name} needs a nap. Zzz… `);
      this.isTired = 1; //change the value of isTired to 1.
    },
    //create a property called play that’s a method (no parameters).
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        //call sleep
        this.sleep();
      } else {
        console.log(` Yay! ${this.name} loves to play!`);
        this.isTired += 1; //change the value of isTired to 1.
      }
    }
  };
  return pet;
};
//declare a variable called sora. In the value, call the factory function, createPet()
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");
console.log(sora, clover, baxter, cleo, francine);
console.log();
//call
clover.sleep();
baxter.play();
console.log(clover, baxter);
//Now log out the clover and baxter objects. Notice that the isTired value for Clover has changed from 5 to 1 because you called sleep() which changes the isTired value to 1. Also, the isTired value for Baxter has increased from 5 to 6 because play() adds 1 to the isTired value when run.
//Change the value of the isTired property to 8 for Clover
clover.isTired = 8;
francine.isTired = 9;
// Create array of our pet objects
const allPets = [sora, clover, baxter, cleo, francine];

//Create a function called showPets. Use petArray as an argument.
const showPets = function (petArray) {
  //innerHTML to set pets to an empty string.
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "Ready to play!";
    if (pet.isTired >= 7) {
      // change the value of the status variable to “sleeping”
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the${pet.species} is ${status}`;

    pets.append(li);
  }
};
statusButton.addEventListener("click", function () {
  // call the showPets function. Pass the allPets array as an argument to the function
  showPets(allPets);
});
