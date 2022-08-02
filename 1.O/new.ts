import {Cat} from "./model/cat";
import {Dog} from "./model/dog";
import {Parrot} from "./model/parrot";
import {Zoo} from "./model/zoo";
import {Tiger} from "./model/tiger";

let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Tiger);

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type +": " + animal.makeSound() + "<br>");
});