let saldo = 500000;
let keluar = false;

while (!keluar) {
    let pilihan = prompt(" 1. Cek Saldo\n 2. Tarik tunai\n 3. Setor tunai\n 4. Keluar");
    
    if (pilihan == "1") {
      alert("Saldo anda Rp"+ saldo );}
      
    if (pilihan == "2") {
      tarik = Number(prompt ("Berapa uang yang ingin anda tarik?"));
      saldo = saldo - tarik
      alert("Anda menarik uang sebersar Rp"+ tarik +" Sisa saldo anda Rp"+ saldo);} 
     
     if (pilihan === "3") {
      setor = Number(prompt ("Berapa uang yang ingin anda setor"));
      for (let i = 0; i < 3; i++) {
        alert("transaksi anda sedang di proses....");}
        alert("transaksi berhasil.");
      saldo = saldo + setor
      alert("Anda setor uang "+ setor +" Saldo anda Rp"+ saldo);} 
      
     if (pilihan == "4") {
        keluar = true;
        alert("Terima kasih, Telah menggunakan ATM kami");} }
