import http from 'node:http'

const users = [
  {
    id: 1,
    name: "Akmal",
    age: 22
  },
  {
    id: 2,
    name: "Ali",
    age: 20
  }
];
const products = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    price: 1200
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: 2500
  }
];

const server = http.createServer((request, response) =>{
     response.setHeader("Content-Type", "application/json")

     if(request.url === "/users"){
        response.end(JSON.stringify(users))
     }else if(request.url === "/products"){
        response.end(JSON.stringify(products))
     }  else{
        response.end(JSON.stringify({message: "Not Found"}))
     }
})

server.listen(5000, () =>{
    console.log("server has been started on the part of 5000")
})