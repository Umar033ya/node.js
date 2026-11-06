//process = vaziyat,xolat, jarayon

// process = bu juda muhim modul hisoblanadi.
console.log(process);
// process.exit() = bu nodejs dan chiqish uchun ishlatiladi.
console.log(process.exit());
// process.cwd() = bu hozirgi papka nomini ko'rsatadi.
console.log(process.cwd());
// process.chdir() = bu hozirgi papka nomini o'zgartirish uchun ishlatiladi.
console.log(process.chdir('C:/Users/Admin/Desktop'));
// process.env = bu .env faylini o'qish uchun ishlatiladi.
console.log(process.env);
// process.platform = bu qaysi operatsion tizimni ishlatayotganini ko'rsatadi.
console.log(process.platform);
// process.arch = bu Cpu arxiturasi nomini ko'rsatadi.
console.log(process.arch);
// process.version = bu nodejs versiyasini ko'rsatadi.
console.log(process.version);
// process.memoryUsage() = bu nodejs ishlatadigan xotirani ko'rsatadi.
console.log(process.memoryUsage());
// process.uptime() = bu nodejs ishga tushgan vaqtni ko'rsatadi.
console.log(process.uptime());