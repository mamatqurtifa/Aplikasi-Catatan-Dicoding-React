const getInitialData = () => ([
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },{
    id: 7,
    title: "JavaScript ES6 Features",
    body: "JavaScript ES6, atau ECMAScript 2015, membawa banyak fitur baru yang meningkatkan kemampuan pemrograman, seperti arrow functions, kelas, template literals, dan destructuring. Fitur-fitur ini mempermudah pengembangan aplikasi dan meningkatkan keterbacaan kode.",
    createdAt: '2022-05-10T10:15:45.572Z',
    archived: false,
  },
  {
    id: 8,
    title: "Asynchronous JavaScript",
    body: "Asynchronous JavaScript memungkinkan eksekusi kode tanpa menunggu operasi sebelumnya selesai. Teknik seperti callback, promises, dan async/await sangat penting untuk mengelola operasi yang memerlukan waktu, seperti permintaan jaringan.",
    createdAt: '2022-06-01T08:20:22.572Z',
    archived: true,
  },
  {
    id: 9,
    title: "JavaScript Frameworks",
    body: "JavaScript frameworks seperti React, Angular, dan Vue.js menyediakan struktur dan alat untuk membangun aplikasi web yang kompleks dengan cara yang lebih efisien. Masing-masing framework memiliki pendekatan dan fitur unik untuk pengembangan antarmuka pengguna.",
    createdAt: '2022-07-15T09:45:30.572Z',
    archived: true,
  },
  {
    id: 10,
    title: "Unit Testing in JavaScript",
    body: "Unit testing adalah proses menguji bagian terkecil dari kode (unit) secara terpisah untuk memastikan bahwa setiap bagian berfungsi seperti yang diharapkan. Framework seperti Jest dan Mocha sering digunakan untuk melakukan unit testing di aplikasi JavaScript.",
    createdAt: '2022-08-20T11:10:55.572Z',
    archived: true,
  },
  {
    id: 11,
    title: "JavaScript Event Loop",
    body: "Event loop adalah mekanisme yang memungkinkan JavaScript menjalankan kode, mengumpulkan dan memproses event, serta menjalankan pekerjaan antrian. Pemahaman tentang event loop sangat penting untuk mengelola asynchrony dalam aplikasi JavaScript.",
    createdAt: '2022-09-12T12:30:00.572Z',
    archived: true,
  },
  {
    id: 12,
    title: "Closure in JavaScript",
    body: "Closure adalah konsep di mana sebuah fungsi memiliki akses ke variabel di lingkup luar (enclosing scope) meskipun fungsi tersebut dijalankan di luar lingkup tersebut. Closure sering digunakan untuk menciptakan fungsi yang lebih modular dan aman.",
    createdAt: '2022-10-05T13:45:12.572Z',
    archived: false,
  },
  {
    id: 13,
    title: "JavaScript Promises",
    body: "Promises adalah objek yang mewakili penyelesaian atau kegagalan dari sebuah operasi asynchronous. Dengan menggunakan promises, pengembang dapat mengelola operasi asynchronous dengan lebih baik dan menghindari callback hell.",
    createdAt: '2022-10-25T14:15:30.572Z',
    archived: false,
  },
  {
    id: 14,
    title: "JavaScript Design Patterns",
    body: "Design patterns adalah solusi umum untuk masalah yang sering terjadi dalam pengembangan perangkat lunak. Dalam JavaScript, beberapa design patterns yang umum digunakan termasuk module pattern, singleton pattern, dan observer pattern.",
    createdAt: '2022-11-15T15:00:00.572Z',
    archived: false,
  }
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
