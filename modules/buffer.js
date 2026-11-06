// Buffer ni import qilish shart emas

let name = "ABC"
// Buffer orqali biza malumotni heshlaymiz
let buffer = Buffer.from(name)
console.log(buffer);

// Buffer orqali heshlangan malumotni oz xoliga qaytaradi
let returned = buffer.toString()
console.log(returned);

// Buffer.alloc orqali bosh heshlanga ozgaruvchi yaratishimiz mumkin
let emoytBuffer = Buffer.alloc(5)
console.log(emoytBuffer)
// ozgaruvchinomi.write orqali bosh heshlangan ozgaruvhciga malumot qoshamiz va osha maulotga qarab qayta heshlanadi
emoytBuffer.write("salom")
console.log(emoytBuffer)

// Bufferda raqamni tgoridan togri heshlab bolmaydi shu sababli bosh heshlangan ozgaruvhci ochiladi va heshlanadi
let a = 90
let numberB = Buffer.alloc(4)
// Bosh heshlangan ozgaruvchiga .writeInt32BE() funksiyasi orqali ozgaruvhci yuboriladi va number heshlanadi
numberB.writeInt32BE(a)
console.log(numberB)
// Numberni bolsa ozgaruvhci nomi .readInt32BE() orqali oz holiga qaytaramiza
let numberR = numberB.readInt32BE()
console.log(numberR);
