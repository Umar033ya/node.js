// filesystem bu file lar bilan ishlovchi node.js modulidir.
const fs = require("fs")


// fs.writeFile() metodi fayl yaratish uchun ishlatiladi. Bu metod uchta parametr qabul qiladi: fayl nomi, yoziladigan ma'lumot va callback funksiyasi.
fs.writeFile("example.txt", "Hello, World!", (err) => {
  if (err) throw err;
  console.log("File has been saved!");
});
// fs.writeFileSync() metodi fayl yaratish uchun ishlatiladi. Bu metod ikki parametr qabul qiladi: fayl nomi va yoziladigan ma'lumot. Bu metod sinxron ishlaydi, ya'ni fayl yaratish tugaguncha keyingi kod bajarilmaydi.
fs.writeFileSync("exampleSync.txt", "Hello, World! (Sync)");


// fs.appendFile() metodi faylga ma'lumot qo'shish uchun ishlatiladi. Bu metod uchta parametr qabul qiladi: fayl nomi, qo'shiladigan ma'lumot va callback funksiyasi.
fs.appendFile("example.txt", "\nThis is an appended line.", (err) => {
  if (err) throw err;
  console.log("Data has been appended to the file!");
});
// fs.appendFileSync() metodi faylga ma'lumot qo'shish uchun ishlatiladi. Bu metod ikki parametr qabul qiladi: fayl nomi va qo'shiladigan ma'lumot. Bu metod sinxron ishlaydi, ya'ni ma'lumot qo'shish tugaguncha keyingi kod bajarilmaydi.
fs.appendFileSync("exampleSync.txt", "\nThis is an appended line. (Sync)");


// fs.unlink() metodi faylni o'chirish uchun ishlatiladi. Bu metod ikki parametr qabul qiladi: fayl nomi va callback funksiyasi.
fs.unlink("example.txt", (err) => {
  if (err) throw err;
  console.log("File has been deleted!");
});
// fs.unlinkSync() metodi faylni o'chirish uchun ishlatiladi. Bu metod bitta parametr qabul qiladi: fayl nomi. Bu metod sinxron ishlaydi, ya'ni fayl o'chirilguncha keyingi kod bajarilmaydi.
fs.unlinkSync("exampleSync.txt");


// fs.mkdir() metodi folder yaratish uchun ishlatiladi. Bu metod uchta parametr qabul qiladi: folder nomi, opsional parametrlar va callback funksiyasi.
fs.mkdir("exampleDir", (err) => {
  if (err) throw err;
  console.log("Directory has been created!");
});
// fs.mkdirSync() metodi folder yaratish uchun ishlatiladi. Bu metod ikkita parametr qabul qiladi: folder nomi va opsional parametrlar. Bu metod sinxron ishlaydi, ya'ni folder yaratish tugaguncha keyingi kod bajarilmaydi.
fs.mkdirSync("exampleDirSync");


// fs.readFile() metodi faylni o'qish uchun ishlatiladi. Bu metod uchta parametr qabul qiladi: fayl nomi, kodlash turi va callback funksiyasi.
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});
// fs.readFileSync() metodi faylni o'qish uchun ishlatiladi. Bu metod ikki parametr qabul qiladi: fayl nomi va kodlash turi. Bu metod sinxron ishlaydi, ya'ni fayl o'qilguncha keyingi kod bajarilmaydi.
const data = fs.readFileSync("exampleSync.txt", "utf8");


// fs.rename() metodi fayl nomini o'zgartirish uchun ishlatiladi. Bu metod uchta parametr qabul qiladi: eski fayl nomi, yangi fayl nomi va callback funksiyasi.
fs.rename("example.txt", "renamedExample.txt", (err) => {
  if (err) throw err;
  console.log("File has been renamed!");
});
// fs.renameSync() metodi fayl nomini o'zgartirish uchun ishlatiladi. Bu metod ikki parametr qabul qiladi: eski fayl nomi va yangi fayl nomi. Bu metod sinxron ishlaydi, ya'ni fayl nomi o'zgartirilguncha keyingi kod bajarilmaydi.
fs.renameSync("exampleSync.txt", "renamedExampleSync.txt");


// fs.readdir() metodi folder ichidagi fayllarni o'qish uchun ishlatiladi. Bu metod uchta parametr qabul qiladi: folder nomi, kodlash turi va callback funksiyasi.
fs.readdir("exampleDir", "utf8", (err, files) => {
  if (err) throw err;
  console.log("Files in directory:", files);
});
// fs.readdirSync() metodi folder ichidagi fayllarni o'qish uchun ishlatiladi. Bu metod ikki parametr qabul qiladi: folder nomi va kodlash turi. Bu metod sinxron ishlaydi, ya'ni fayllar o'qilguncha keyingi kod bajarilmaydi.
const files = fs.readdirSync("exampleDir", "utf8");


// fs.stat() metodi fayl yoki folder haqida ma'lumot olish uchun ishlatiladi. Bu metod uchta parametr qabul qiladi: fayl yoki folder nomi, opsional parametrlar va callback funksiyasi.
fs.stat("example.txt", (err, stats) => {
  if (err) throw err;
  console.log("File stats:", stats);
});
// fs.statSync() metodi fayl yoki folder haqida ma'lumot olish uchun ishlatiladi. Bu metod ikkita parametr qabul qiladi: fayl yoki folder nomi va opsional parametrlar. Bu metod sinxron ishlaydi, ya'ni ma'lumot olinguncha keyingi kod bajarilmaydi.
const stats = fs.statSync("exampleSync.txt");