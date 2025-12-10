
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people.join(" "));

let people2 = people.splice(1, 1);
console.log(people.join(" "));

let people3 = people.splice(2, 1);
console.log(people.join(" "));

let people4 = people.splice(1, 1);
people.unshift(people4);
console.log(people.join(" "));

people.push("LuisRdgz");
console.log(people.join(" "));

for (const person of people){
    console.log(`${person}`);
    if(person === "Maria"){
        break;
    }
}

const position = people.indexOf("Maria");
console.log(position);
