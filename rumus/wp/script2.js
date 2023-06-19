function hitung() {
    // Mengambil nilai bobot dari input
    const bobot1 = parseFloat(document.getElementById("k1").value);
    const bobot2 = parseFloat(document.getElementById("k2").value);
    const bobot3 = parseFloat(document.getElementById("k3").value);
  
    // Mengambil nilai alternatif dari input
    const a1k1 = parseFloat(document.getElementById("a1k1").value);
    const a1k2 = parseFloat(document.getElementById("a1k2").value);
    const a1k3 = parseFloat(document.getElementById("a1k3").value);
    const a2k1 = parseFloat(document.getElementById("a2k1").value);
    const a2k2 = parseFloat(document.getElementById("a2k2").value);
    const a2k3 = parseFloat(document.getElementById("a2k3").value);
    const a3k1 = parseFloat(document.getElementById("a3k1").value);
    const a3k2 = parseFloat(document.getElementById("a3k2").value);
    const a3k3 = parseFloat(document.getElementById("a3k3").value);
    const a4k1 = parseFloat(document.getElementById("a4k1").value);
    const a4k2 = parseFloat(document.getElementById("a4k2").value);
    const a4k3 = parseFloat(document.getElementById("a4k3").value);
    const a5k1 = parseFloat(document.getElementById("a5k1").value);
    const a5k2 = parseFloat(document.getElementById("a5k2").value);
    const a5k3 = parseFloat(document.getElementById("a5k3").value);
  
    // Menghitung nilai preferensi untuk setiap alternatif
    const v1 = Math.pow(a1k1, bobot1) * Math.pow(a1k2, bobot2) * Math.pow(a1k3, bobot3);
    const v2 = Math.pow(a2k1, bobot1) * Math.pow(a2k2, bobot2) * Math.pow(a2k3, bobot3);
    const v3 = Math.pow(a3k1, bobot1) * Math.pow(a3k2, bobot2) * Math.pow(a3k3, bobot3);
    const v4 = Math.pow(a4k1, bobot1) * Math.pow(a4k2, bobot2) * Math.pow(a4k3, bobot3);
    const v5 = Math.pow(a5k1, bobot1) * Math.pow(a5k2, bobot2) * Math.pow(a5k3, bobot3);
  
    // Menampilkan tabel hasil preferensi
    document.getElementById("v1").textContent = v1.toFixed(2);
    document.getElementById("v2").textContent = v2.toFixed(2);
    document.getElementById("v3").textContent = v3.toFixed(2);
    document.getElementById("v4").textContent = v4.toFixed(2);
    document.getElementById("v5").textContent = v5.toFixed(2);

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
  