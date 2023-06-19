function hitung() {
  // Ambil nilai matriks dari input
  let a11 = parseFloat(document.querySelector("#a1k1").value);
  let a12 = parseFloat(document.querySelector("#a1k2").value);
  let a13 = parseFloat(document.querySelector("#a1k3").value);

  let a21 = parseFloat(document.querySelector("#a2k1").value);
  let a22 = parseFloat(document.querySelector("#a2k2").value);
  let a23 = parseFloat(document.querySelector("#a2k3").value);

  let a31 = parseFloat(document.querySelector("#a3k1").value);
  let a32 = parseFloat(document.querySelector("#a3k2").value);
  let a33 = parseFloat(document.querySelector("#a3k3").value);

  let a41 = parseFloat(document.querySelector("#a4k1").value);
  let a42 = parseFloat(document.querySelector("#a4k2").value);
  let a43 = parseFloat(document.querySelector("#a4k3").value);

  let a51 = parseFloat(document.querySelector("#a5k1").value);
  let a52 = parseFloat(document.querySelector("#a5k2").value);
  let a53 = parseFloat(document.querySelector("#a5k3").value);

  // Ambil nilai bobot dari input
  let w1 = parseFloat(document.querySelector("#k1").value);
  let w2 = parseFloat(document.querySelector("#k2").value);
  let w3 = parseFloat(document.querySelector("#k3").value);

  // Memberikan nilai negatif pada k1 karena merupakan atribut cost
  var bobot1 = -parseFloat(document.getElementById("k1").value);

  // Menghitung nilai S
  const s1 = Math.pow(a1k1, bobot1) * Math.pow(a1k2, bobot2) * Math.pow(a1k3, bobot3);
  const s2 = Math.pow(a2k1, bobot1) * Math.pow(a2k2, bobot2) * Math.pow(a2k3, bobot3);
  const s3 = Math.pow(a3k1, bobot1) * Math.pow(a3k2, bobot2) * Math.pow(a3k3, bobot3);
  const s4 = Math.pow(a4k1, bobot1) * Math.pow(a4k2, bobot2) * Math.pow(a4k3, bobot3);
  const s5 = Math.pow(a5k1, bobot1) * Math.pow(a5k2, bobot2) * Math.pow(a5k3, bobot3);

  // Menjumlahkan seluruh nilai S
  var totalNilaiS = s1 + s2 + s3 + s4 + s5;

  // Menghitung nilai alternatif (V)
  v1 = s1 / totalNilaiS;
  v2 = s2 / totalNilaiS;
  v3 = s3 / totalNilaiS;
  v4 = s4 / totalNilaiS;
  v5 = s5 / totalNilaiS;

  // Menampilkan tabel hasil preferensi
  document.getElementById("v1").textContent = v1.toFixed(4);
  document.getElementById("v2").textContent = v2.toFixed(4);
  document.getElementById("v3").textContent = v3.toFixed(4);
  document.getElementById("v4").textContent = v4.toFixed(4);
  document.getElementById("v5").textContent = v5.toFixed(4);
  
  // Menghitung peringkat
  const peringkat = preferenceValues.map((nilai, index) => [nilai, index + 1])
  .sort((a, b) => b[0] - a[0])
  .map((data) => data[1]);

  // Menampilkan peringkat pada tabel hasil
  var r1 = document.getElementById("r1");
  var r2 = document.getElementById("r2");
  var r3 = document.getElementById("r3");
  var r4 = document.getElementById("r4");
  var r5 = document.getElementById("r5");

  r1.textContent = peringkat[0];
  r2.textContent = peringkat[1];
  r3.textContent = peringkat[2];
  r4.textContent = peringkat[3];
  r5.textContent = peringkat[4];

  // Show the result table
  document.getElementById("table-preferensi").style.display = "table";
}
