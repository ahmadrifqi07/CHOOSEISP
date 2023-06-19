function hitung() {
          // Mendapatkan nilai bobot kriteria
          var bobotK1 = parseFloat(document.getElementById("k1").value);
          var bobotK2 = parseFloat(document.getElementById("k2").value);
          var bobotK3 = parseFloat(document.getElementById("k3").value);

          // Mendapatkan nilai alternatif
          var a1k1 = parseFloat(document.getElementById("a1k1").value);
          var a1k2 = parseFloat(document.getElementById("a1k2").value);
          var a1k3 = parseFloat(document.getElementById("a1k3").value);
          var a2k1 = parseFloat(document.getElementById("a2k1").value);
          var a2k2 = parseFloat(document.getElementById("a2k2").value);
          var a2k3 = parseFloat(document.getElementById("a2k3").value);
          var a3k1 = parseFloat(document.getElementById("a3k1").value);
          var a3k2 = parseFloat(document.getElementById("a3k2").value);
          var a3k3 = parseFloat(document.getElementById("a3k3").value);
          var a4k1 = parseFloat(document.getElementById("a4k1").value);
          var a4k2 = parseFloat(document.getElementById("a4k2").value);
          var a4k3 = parseFloat(document.getElementById("a4k3").value);
          var a5k1 = parseFloat(document.getElementById("a5k1").value);
          var a5k2 = parseFloat(document.getElementById("a5k2").value);
          var a5k3 = parseFloat(document.getElementById("a5k3").value);

          // Menghitung nilai normalisasi
          var normA1 = Math.sqrt(Math.pow(a1k1, 2) + Math.pow(a1k2, 2) + Math.pow(a1k3, 2));
          var normA2 = Math.sqrt(Math.pow(a2k1, 2) + Math.pow(a2k2, 2) + Math.pow(a2k3, 2));
          var normA3 = Math.sqrt(Math.pow(a3k1, 2) + Math.pow(a3k2, 2) + Math.pow(a3k3, 2));
          var normA4 = Math.sqrt(Math.pow(a4k1, 2) + Math.pow(a4k2, 2) + Math.pow(a4k3, 2));
          var normA5 = Math.sqrt(Math.pow(a5k1, 2) + Math.pow(a5k2, 2) + Math.pow(a5k3, 2));

          // Menghitung matriks ternormalisasi
          var normMatrix = [
            [a1k1 / normA1, a1k2 / normA1, a1k3 / normA1],
            [a2k1 / normA2, a2k2 / normA2, a2k3 / normA2],
            [a3k1 / normA3, a3k2 / normA3, a3k3 / normA3],
            [a4k1 / normA4, a4k2 / normA4, a4k3 / normA4],
            [a5k1 / normA5, a5k2 / normA5, a5k3 / normA5],
          ];

          // Menghitung matriks terbobot
          var weightedMatrix = [
            [normMatrix[0][0] * bobotK1, normMatrix[0][1] * bobotK2, normMatrix[0][2] * bobotK3],
            [normMatrix[1][0] * bobotK1, normMatrix[1][1] * bobotK2, normMatrix[1][2] * bobotK3],
            [normMatrix[2][0] * bobotK1, normMatrix[2][1] * bobotK2, normMatrix[2][2] * bobotK3],
            [normMatrix[3][0] * bobotK1, normMatrix[3][1] * bobotK2, normMatrix[3][2] * bobotK3],
            [normMatrix[4][0] * bobotK1, normMatrix[4][1] * bobotK2, normMatrix[4][2] * bobotK3],
          ];

          // Menghitung solusi ideal positif (A+)
          var idealPositive = [
            Math.min(weightedMatrix[0][0], weightedMatrix[1][0], weightedMatrix[2][0], weightedMatrix[3][0], weightedMatrix[4][0]), // min karena cost
            Math.max(weightedMatrix[0][1], weightedMatrix[1][1], weightedMatrix[2][1], weightedMatrix[3][1], weightedMatrix[4][1]),
            Math.max(weightedMatrix[0][2], weightedMatrix[1][2], weightedMatrix[2][2], weightedMatrix[3][2], weightedMatrix[4][2]),
          ];

          // Menghitung solusi ideal negatif (A-)
          var idealNegative = [
            Math.max(weightedMatrix[0][0], weightedMatrix[1][0], weightedMatrix[2][0], weightedMatrix[3][0], weightedMatrix[4][0]), // max karena cost
            Math.min(weightedMatrix[0][1], weightedMatrix[1][1], weightedMatrix[2][1], weightedMatrix[3][1], weightedMatrix[4][1]),
            Math.min(weightedMatrix[0][2], weightedMatrix[1][2], weightedMatrix[2][2], weightedMatrix[3][2], weightedMatrix[4][2]),
          ];

          // Menghitung jarak solusi ideal positif (D+)
          var distancePositive = [
            Math.sqrt(Math.pow(weightedMatrix[0][0] - idealPositive[0], 2) + Math.pow(weightedMatrix[0][1] - idealPositive[1], 2) + Math.pow(weightedMatrix[0][2] - idealPositive[2], 2)),
            Math.sqrt(Math.pow(weightedMatrix[1][0] - idealPositive[0], 2) + Math.pow(weightedMatrix[1][1] - idealPositive[1], 2) + Math.pow(weightedMatrix[1][2] - idealPositive[2], 2)),
            Math.sqrt(Math.pow(weightedMatrix[2][0] - idealPositive[0], 2) + Math.pow(weightedMatrix[2][1] - idealPositive[1], 2) + Math.pow(weightedMatrix[2][2] - idealPositive[2], 2)),
            Math.sqrt(Math.pow(weightedMatrix[3][0] - idealPositive[0], 2) + Math.pow(weightedMatrix[3][1] - idealPositive[1], 2) + Math.pow(weightedMatrix[3][2] - idealPositive[2], 2)),
            Math.sqrt(Math.pow(weightedMatrix[4][0] - idealPositive[0], 2) + Math.pow(weightedMatrix[4][1] - idealPositive[1], 2) + Math.pow(weightedMatrix[4][2] - idealPositive[2], 2)),
          ];

          // Menghitung jarak solusi ideal negatif (D-)
          var distanceNegative = [
            Math.sqrt(Math.pow(weightedMatrix[0][0] - idealNegative[0], 2) + Math.pow(weightedMatrix[0][1] - idealNegative[1], 2) + Math.pow(weightedMatrix[0][2] - idealNegative[2], 2)),
            Math.sqrt(Math.pow(weightedMatrix[1][0] - idealNegative[0], 2) + Math.pow(weightedMatrix[1][1] - idealNegative[1], 2) + Math.pow(weightedMatrix[1][2] - idealNegative[2], 2)),
            Math.sqrt(Math.pow(weightedMatrix[2][0] - idealNegative[0], 2) + Math.pow(weightedMatrix[2][1] - idealNegative[1], 2) + Math.pow(weightedMatrix[2][2] - idealNegative[2], 2)),
            Math.sqrt(Math.pow(weightedMatrix[3][0] - idealNegative[0], 2) + Math.pow(weightedMatrix[3][1] - idealNegative[1], 2) + Math.pow(weightedMatrix[3][2] - idealNegative[2], 2)),
            Math.sqrt(Math.pow(weightedMatrix[4][0] - idealNegative[0], 2) + Math.pow(weightedMatrix[4][1] - idealNegative[1], 2) + Math.pow(weightedMatrix[4][2] - idealNegative[2], 2)),
          ];

          // Menghitung nilai preferensi
          var preferenceValues = [];
          for (var i = 0; i < 5; i++) {
            preferenceValues[i] = distanceNegative[i] / (distancePositive[i] + distanceNegative[i]);
          }

          // Menampilkan tabel hasil preferensi
          var tablePreferensi = document.getElementById("table-preferensi");
          var v1 = document.getElementById("v1");
          var v2 = document.getElementById("v2");
          var v3 = document.getElementById("v3");
          var v4 = document.getElementById("v4");
          var v5 = document.getElementById("v5");

          v1.innerHTML = preferenceValues[0].toFixed(4);
          v2.innerHTML = preferenceValues[1].toFixed(4);
          v3.innerHTML = preferenceValues[2].toFixed(4);
          v4.innerHTML = preferenceValues[3].toFixed(4);
          v5.innerHTML = preferenceValues[4].toFixed(4);

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