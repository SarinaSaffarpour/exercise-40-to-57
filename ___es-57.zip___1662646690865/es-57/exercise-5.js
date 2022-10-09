function sortPeopleByAge(arr) {
  let sorted = [];
  let copyarr = JSON.parse(JSON.stringify(arr));

  while (copyarr.length > 1) {
    let min = copyarr[0];
    let minIndex = 0;
    for (let i = 1; i < copyarr.length; i++) {
      if (copyarr[i].age < min.age) {
        min = copyarr[i];
        minIndex = i;
      } else {
        continue;
      }
    }
    copyarr.splice(minIndex, 1);
    sorted.push(min);
  }
  sorted.push(copyarr[0]);
  return sorted;
}

const people = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const sortingByAge = sortPeopleByAge(people);
console.log(sortingByAge);
