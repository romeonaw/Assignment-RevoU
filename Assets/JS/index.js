/* UNTUK MENGHITUNG LUAS SEGITIGA */
function hitungLuas() {
  let alas = document.getElementById("alas").value;
  let tinggi = document.getElementById("tinggi").value;
  let luas = 0.5 * alas * tinggi;
  let rumus = "L = 1/2 x a x t";
  let angka = "L = 1/2 x " + alas + " x " + tinggi;
  let hasil = "Luas segitiga adalah " + luas;
  document.getElementById("rumus").innerHTML = rumus;
  document.getElementById("angka").innerHTML = angka;
  document.getElementById("hasil").innerHTML = hasil;
}
  /* UNTUK MENGHITUNG KELILING SEGITIGA */
  function hitungKeliling() {
    let a = document.getElementById("sisi-a").value;
    let b = document.getElementById("sisi-b").value;
    let c = document.getElementById("sisi-c").value;
    let keliling = parseInt(a) + parseInt(b) + parseInt(c);
    let rumus2 = "K = S1 + S2 +S3";
    let angka2 = "K = " + a + " + " + b + " + " + c;
    let hasil2 = "Keliling segitiga adalah " + keliling;
    document.getElementById("rumus2").innerHTML = rumus2;
    document.getElementById("angka2").innerHTML = angka2;
    document.getElementById("hasil2").innerHTML = hasil2;
}
  /* UNTUK MENGHITUNG LUAS JAJARGENJANG */
function hitungLuasJajargenjang() {
  let alas = document.getElementById("alas").value;
  let tinggi = document.getElementById("tinggi").value;
  let luas = alas * tinggi;
  let rumus = "L = a x t";
  let angka = "L = " + alas + " x " + tinggi;
  let hasil = "Luas Jajargenjang adalah " + luas;
  document.getElementById("rumus").innerHTML = rumus;
  document.getElementById("angka").innerHTML = angka;
  document.getElementById("hasil").innerHTML = hasil;
}
/* UNTUK MENGHITUNG KELILING JAJARGENJANG */
function hitungKelilingJajargenjang() {
  let a = document.getElementById("sisi-a").value;
  let b = document.getElementById("sisi-b").value;
  let keliling = 2 * (parseInt(a) + parseInt(b)) ;
  let rumus2 = "K = 2 x (a+b)";
  let angka2 = "K = 2 x "+ "(" + a + " + " + b + ")" ;
  let hasil2 = "Keliling Jajargenjang adalah " + keliling;
  document.getElementById("rumus2").innerHTML = rumus2;
  document.getElementById("angka2").innerHTML = angka2;
  document.getElementById("hasil2").innerHTML = hasil2;
}

/* UNTUK MERESET NILAI INPUT DAN HASILNYA */
function resetForm() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("sisi-a").value = "";
  document.getElementById("sisi-b").value = "";
  document.getElementById("sisi-c").value = "";
  document.getElementById("rumus").innerHTML = "";
  document.getElementById("rumus2").innerHTML = "";
  document.getElementById("angka").innerHTML = "";
  document.getElementById("angka2").innerHTML = "";
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("hasil2").innerHTML = "";
}
  