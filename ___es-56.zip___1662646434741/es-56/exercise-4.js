function uncompletedNotes(notes) {
  const uncompleted = notes.map((el) => {
    el.todos = el.todos.filter((elem) => elem.done === false);
    if (el.todos.length !== 0) {
      return el;
    } else {
      return false;
    }
  });
  const fUncompleted = uncompleted.filter((el) => el !== false);
  return fUncompleted;
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
