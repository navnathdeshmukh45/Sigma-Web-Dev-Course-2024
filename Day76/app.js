//async function getData() {
// Simulate getting data from a server
//   return new Promise((Resolve, Reject) => {
//     setTimeout(() => {
//       Resolve(455);
//     }, 3000);
//   });
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
  // Simulate getting data from a server
  //   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(x)
  //return 455
  //let data = await x.json()
  //let data = await x.text()
  //console.log(data)
  //return data

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  return data;
}

async function main() {
  console.log("Loading Modules");
  console.log("Do Something Else");
  console.log("Load Data");
  let data = await getData();
  console.log(data);
  console.log("Process Data");
  console.log("Task 2");
}
main();

// data.then((v)=>{
//     console.log(data)
//     console.log("Process Data")
//     console.log("Task 2")
// })
