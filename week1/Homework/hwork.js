let not = prompt("Notunuzu giriniz: ");

if (not > 85 && not < 100) {
  console.log("A aldınız");
  document.write("A aldınız");
} else if (not > 70 && not < 85) {
  console.log("B aldınız");
  document.write("B aldınız");
} else if (not > 65 && not < 70) {
  console.log("C aldınız");
  document.write("C aldınız");
} else if (not > 40 && not < 65) {
  console.log("D aldınız");
  document.write("D aldınız");
} else {
  console.log("E aldınız");
  document.write("E aldınız");
}
