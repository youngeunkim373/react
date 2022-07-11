//let stage = fetch("https://jsonplaceholder.typicode.com/todos/1");
//console.log(stage);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log(response.json()))
  .catch(() => console.log(console.error));
