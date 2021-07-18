console.log('destructoring is loaded');

const person = {
    name: 'edison',
    age: 39,
    location: {
        city: 'quito',
        temp: 13,
    },
};

console.log(`${person.name} is ${person.age}.`);
// destructoring & default valie (=)
const {name = 'Anonymous', age} = person;
console.log(`${name} is ${age}.`);


if (person.location.temp && person.location.city) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`);
}
// destructoring & renaming (:)
const {temp: temperature, city} = person.location;
if (temperature && city) {
    console.log(`It's ${temperature} in ${city}`);
}

// challenge
const book = {
    title: 'ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    },
};

const {name: publisherName = 'Self Publish'} = book.publisher;
console.log(publisherName);


// array destructoring
const address = ['Av. cacha', 'calderon', 'quito', 'pichincha'];
console.log(`You are in ${address[1]}, ${address[2]}`);

// const [street, town, city_, state] = address;
const [, town, city_] = address;
console.log(`You are in ${town}, ${city_}`);
