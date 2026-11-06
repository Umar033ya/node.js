// events modulini import qilamiz
import { EventEmitter } from "events";
// EventEmitter ni yaratamiz
const emitter = new EventEmitter()
// emitter.on() bu eventni qo'shish funksiyasi
emitter.on("message", () =>{
    console.log("message received");
})
// emitter.emit() bu eventni chiqarish funksiyasi
emitter.emit("message");

emitter.on("orderCreated", (data) =>{
    console.log("order products:", data.product,);
    console.log("order price:", data.price + "$");
    console.log("order quantity:", data.quantity);
    console.log("order customer:", data.customer);
    console.log("order status:", data.status);
    console.log("order payment:", data.payment);
})

const order ={
    id: 1,
    price: 1000,
    product: "Asus Tuf Gaming F15",
    quantity: 1,
    customer: "Abdulla",
    status: "pending",
    payment: "card payment",
}
emitter.emit("orderCreated", order)


const dataUser = {
   id:1,
   name: "Abdulla",
   email: "abdulla@gmail.com",
   password: "123456",
   role: "admin",
   status:"active",
}

emitter.on("userCreated", (data) =>{
    if(data.status === "active"){
       console.log("User added to database");
       console.log("Message send to email:", + data.email)
       console.log("Welcome our website", + data.name)
    }else{
        console.log("user not added to database");
    }
})

emitter.emit("userCreated" , dataUser)