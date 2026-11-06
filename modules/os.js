// os modulini import qilamiz os bu nodejs ning o'zidan kelgan modulidir
import os from "node:os";
// os.platform() bu operatsion sistemani ko'rsatadi
console.log(os.platform());
// os.totalmem() bu operatsion sistemaning umumiy xotirasini ramni ko'rsatadi
console.log(os.totalmem() / 1024 / 1024 / 1024 + "GB");
// os.freemem() bu operatsion sistemaning bo'sh xotirasini ramni ko'rsatadi
console.log(os.freemem() / 1024 / 1024 / 1024 + "GB");
// os.cpus() bu operatsion sistemaning CPU larni ko'rsatadi
console.log(os.cpus());
console.log(os.cpus().length);
// os.hostname() bu operatsion sistemaning nomini ko'rsatadi
console.log(os.hostname());
// os.homedir() bu operatsion sistemaning uy joyini ko'rsatadi
console.log(os.homedir());
// os.userInfo() bu operatsion sistemaning user info ini ko'rsatadi
console.log(os.userInfo());
// os.arch() bu operatsion sistemaning arhitekturasini ko'rsatadi
console.log(os.arch());