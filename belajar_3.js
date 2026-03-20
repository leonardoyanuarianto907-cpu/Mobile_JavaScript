//soal pertama//
let umur = 16;
if (umur >= 17) {
  console.log("kamu sudah boleh membuat sim!");
} else {
  console.log("kamu belum cukup umur.");
  
}

//soal kedua//
let nilai = 82;
if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 75) {
  console.log("B");
} else if (nilai >= 60) {
  console.log("C");
} else {
  console.log("D");
  
}

//soal ketiga//
let hujan = false;
let panas = true;
if (hujan) {
  console.log("Bawa payung");
} else if (panas) {
  console.log("pake kacamata hitam");
} else {
  console.log("cuacanya adem, nikamatin aja~");}

//materi perulangan//
for (let i = 1; i <= 3; i++) {
  console.log("Perulangan ke-" + i);
}
let i = 1;
while (i <= 5) {
  console.log("Nilai i: " + i);
  i++;
}
let x = 1;
do {
  console.log("Nilai x: " + x);
  x++;
} while (x <= 5);

for (let i = 1; i <= 3; i++) { // perulangan luar
  for (let j = 1; j <= 2; j++) { // perulangan dalam
    console.log("i = " + i + ", j = " + j);
  }
}

// latihan soal loop //
for (let i = 1 ; i <= 5 ; i++) {
  for (let a = 1; a <= 5; i++) {
    console.log ("* ="+ i + ", a = "+ a );
  }
}
