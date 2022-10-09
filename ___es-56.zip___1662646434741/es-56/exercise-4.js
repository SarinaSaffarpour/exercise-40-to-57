function uncompletedNotes(notes) {
  let uncompleted = JSON.parse(JSON.stringify(notes));
  for (let i = 0; i < uncompleted.length; i++) {
    let count = 0;

    for (let j = 0; j < uncompleted[i].todos.length; j++) {
      if (uncompleted[i].todos[j].done === true) {
        uncompleted[i].todos.splice(j, 1);
        j--;
      } else {
        count++;
      }
    }
    if (count === 0) {
      uncompleted.splice(i, 1);
      i--;
    } else {
      continue;
    }
  }
  return uncompleted;
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

console.log(notes);
let uncompleted = uncompletedNotes(notes);
console.log(uncompleted);
