## 1. State using Stateful Component:

- **State** adalah objek di dalam komponen yang digunakan untuk menyimpan data yang dapat berubah seiring waktu atau berdasarkan interaksi pengguna. Contoh komponen `MyStatefulComponent` di atas memiliki state yang menyimpan `message` dan `count`.
- setState() adalah metode yang digunakan untuk memperbarui state. Dalam contoh, setiap kali tombol diklik, `count` akan bertambah.

```javaript
this.state = {
  message: 'Hello World from Stateful Component!',
  count: 0
};
```

## 2. Event Handling:

- **Event handling** di React dilakukan dengan menambahkan properti onClick, onChange, atau event lainnya langsung pada elemen JSX. Di sini, kita membuat metode handleClick yang dijalankan setiap kali tombol diklik.
- `this.handleClick` dipetakan ke tombol menggunakan atribut onClick.

```javascript
<button onClick={this.handleClick}>Increase Count</button>
```

## 3. Conditional Rendering:

- **Conditional rendering** memungkinkan kita menampilkan elemen tertentu berdasarkan kondisi logika tertentu. Pada contoh
- ConditionalRenderingComponent, state isLoggedIn menentukan apakah pesan selamat datang atau pesan login yang ditampilkan.
  React menggunakan ternary operator atau `if` statements untuk memutuskan elemen mana yang akan dirender.

```javascript
{
  this.state.isLoggedIn ? <h2>Welcome, user!</h2> : <h2>Please log in.</h2>;
}
```

## 4. Looping List:

- Untuk merender daftar item dari array, kita menggunakan fungsi map(). Setiap item dalam array diberikan ke komponen `ItemList`, dan setiap item dirender sebagai `<li>`.
- Penting untuk memberikan **key** yang unik pada setiap elemen dalam daftar agar React dapat melacak elemen-elemen dengan benar.

```javascript
<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
```

Anda dapat menggunakan file **App.jsx** ini dalam proyek React Anda untuk memahami konsep state, event handling, conditional rendering, dan looping list secara lebih baik.
