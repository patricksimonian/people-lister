import faker from 'faker';
const NUM_PEOPLE = 7;

export let people = [];

for(let i = 0; i < 7; i++) {
  people.push({id: faker.random.uuid(), firstName: faker.name.firstName(), lastName: faker.name.lastName(), age: Math.floor(Math.random() * 100)})
}

// stub out an axios call
export const axios = {
  get: (path) => (new Promise((resolve, reject) => resolve(people))),
  delete: (path, id) => (new Promise((resolve, reject) => {
    const people = people.filter(p => p.id !== id);
    resolve(people);
  }))
}



