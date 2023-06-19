function hitung() {
  // Mengambil nilai bobot dari input pengguna
  var bobotK1 = parseFloat(document.getElementById("k1").value);
  var bobotK2 = parseFloat(document.getElementById("k2").value);
  var bobotK3 = parseFloat(document.getElementById("k3").value);

  // Mengambil nilai alternatif dari input pengguna
  var data = [
    [
      parseFloat(document.getElementById("a1k1").value),
      parseFloat(document.getElementById("a1k2").value),
      parseFloat(document.getElementById("a1k3").value),
    ],
    [
      parseFloat(document.getElementById("a2k1").value),
      parseFloat(document.getElementById("a2k2").value),
      parseFloat(document.getElementById("a2k3").value),
    ],
    [
      parseFloat(document.getElementById("a3k1").value),
      parseFloat(document.getElementById("a3k2").value),
      parseFloat(document.getElementById("a3k3").value),
    ],
    [
      parseFloat(document.getElementById("a4k1").value),
      parseFloat(document.getElementById("a4k2").value),
      parseFloat(document.getElementById("a4k3").value),
    ],
    [
      parseFloat(document.getElementById("a5k1").value),
      parseFloat(document.getElementById("a5k2").value),
      parseFloat(document.getElementById("a5k3").value),
    ],
  ];

  // Menghitung nilai preferensi
  var preferensi = [];
  for (var i = 0; i < data.length; i++) {
    var nilaiPreferensi = 0;
    for (var j = 0; j < data[i].length; j++) {
      nilaiPreferensi += data[i][j] * [bobotK1, bobotK2, bobotK3][j];
    }
    preferensi.push(nilaiPreferensi);
  }

  // Menampilkan hasil pada tabel preferensi
  for (var k = 0; k < preferensi.length; k++) {
    document.getElementById("v" + (k + 1)).innerText = preferensi[k];
  }

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

  document.getElementById("table-preferensi").style.display = "table";
}