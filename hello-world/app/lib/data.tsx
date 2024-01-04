export function fetchMovies() {
  const data = fetch("https://jsonplaceholder.typicode.com/todos")
    .then(async (response) => await response.json())
    .then((returned) => {
      return returned;
    });
  return data;
}
