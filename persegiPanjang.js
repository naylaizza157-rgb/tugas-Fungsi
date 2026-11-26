function luasPersegiPanjang(panjang, lebar) {
   return panjang * lebar; 
}

function kelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

let hasilLuas1 = luasPersegiPanjang(10, 4);
let hasilKeliling1 = kelilingPersegiPanjang(10, 4);
console.log("Luas = " + hasilLuas1);
console.log("Keliling = " + hasilKeliling1);

let hasilLuas2 = luasPersegiPanjang(20, 8);
let hasilKeliling2 = kelilingPersegiPanjang(20, 8);
console.log("Luas = " + hasilLuas2);
console.log("Keliling = " + hasilKeliling2);