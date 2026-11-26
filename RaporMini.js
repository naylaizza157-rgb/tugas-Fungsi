function hitungRataRata(n1, n2, n3) {
  let rata = (n1 + n2 + n3) / 3;
  return rata; 
}

function tentukanPredikat(rata) {
  if (rata >= 85) {
    return "A";
  } else if (rata >= 75) {
    return "B";
  } else if (rata >= 60) {
    return "C";
  } else {
    return "D";
  }
}

function cetakRapor(nama, n1, n2, n3) {
  let rataRata = hitungRataRata(n1, n2, n3);
  let predikat = tentukanPredikat(rataRata);

  console.log("Nama      : " + nama);
  console.log("Rata-rata : " + rataRata.toFixed(2));
  console.log("Predikat  : " + predikat);
  console.log("-------------------------"); // Pembatas antar siswa
}

cetakRapor("Raessa", 80, 82, 85);
cetakRapor("Alena", 90, 88, 92);
cetakRapor("Maurin", 55, 60, 50);