// url modulini ishlatish uchun require qilamiz
 const url = require("url")

// new URL() metodi orqali url yaratishimiz mumkin
let url = new URL("https://example.com/products")
// url obyekti yaratildi va unga url manzili berildi
console.log(url);
// url.href orqali url manzilini olishimiz mumkin
console.log(url.href);
// url.pathname orqali url manzilining path qismini olishimiz mumkin
console.log(url.pathname);
// url.search orqali url manzilining query qismini olishimiz mumkin
console.log(url.search);
// url.searchParams orqali url manzilining query qismini obyekti sifatida olishimiz mumkin
console.log(url.searchParams);
// url.protocol orqali url manzilining protokol qismini olishimiz mumkin
console.log(url.protocol);
// url.host orqali url manzilining host qismini olishimiz mumkin
console.log(url.host);



// url yaratamiz yokida frontdan kelgan urlni olishimiz mumkin
const url1 = new URL("https://example.com/products?category=phone&price=1000")
// searchParams.get() metodi orqali query parametrlardan ma'lumot olishimiz mumkin
console.log(url1.searchParams.get("category"));
// serchParams.has() metodi orqali query parametrlarda ma'lumot bor yoki yo'qligini tekshirishimiz mumkin
console.log(url1.searchParams.has("category"));
// searchParams.delete() metodi orqali query parametrlardan ma'lumotni o'chirishimiz mumkin
console.log(url1.searchParams.delete("category"));
// searchParams.set() metodi orqali query parametrlarga yangi ma'lumot qo'shishimiz mumkin
console.log(url1.searchParams.set("category", "car"));


const http = require("http");

const server = http.createServer((req, res) => {

    let api = "http://localhost:4000";
    // new URL() metodi orqali url yaratishimiz mumkin
    let newUrl = new URL(api + req.url);
    //  url.pathname orqali url manzilining path qismini olishimiz mumkin
    if (newUrl.pathname === "/products") {
        // searchParams.get() metodi orqali query parametrlardan ma'lumot olishimiz mumkin
        let name = newUrl.searchParams.get("brand");
        res.end(`Product name search paramdamdan kelgan name: ${name}`);
    } else {
        res.end("Route topilmadi");
    }

});

// server.listen(4000, () => {
//     console.log("server started");
// });



const users = [
    {
        id: 1,
        name: "Husan",
        age: 34
    },
    {
        id: 2,
        name: "Izzat",
        age: 14
    },
    {
        id: 3,
        name: "Hasan",
        age: 22
    },
    {
        id: 4,
        name: "Akbar",
        age: 24
    }
];

const server = http.createServer((req, res) => {
    let api = "http://localhost:4000";
    let newUrl = new URL(api + req.url);
    if (newUrl.pathname === "/users") {
        let name = newUrl.searchParams.get("name");
        // filter() metodi orqali users massivini filtrlashimiz mumkin
        let filteredUsers = users.filter((user) => {
            return user.name.toLowerCase() === name.toLowerCase();
        });
        // res.writeHead() metodi orqali response headerlarini o'rnatishimiz mumkin
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(filteredUsers));
    } else {
        res.writeHead(404, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify({
            message: "Route topilmadi"
        }));
    }
});

// server.listen(4000, () => {
//     console.log("server started");
// });