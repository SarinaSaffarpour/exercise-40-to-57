let user = {
  name: "Cosimo",
  age: 30,
};

/*let newUser = {
  ...user,
};*/
/*let newUser = JSON.parse(JSON.stringify(user));
for (const key in user) {
  newUser[key] = user[key];
}*/
//let newUser = Object.assign({}, user);
let newUser = {};
for (const key in user) {
  newUser[key] = user[key];
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
