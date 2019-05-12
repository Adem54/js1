let islem1 = "+";
let islem2 = "-";
let islem3 = "*";
let islem4 = "/";

let a = parseInt(prompt("Bir sayı giriniz: "));
let b = parseInt(prompt("Bir sayı daha giriniz: "));
let c = prompt("Bir işlem türü seçiniz:");

switch ((a, b, c)) {
  case islem1:
    document.write(a + b);
    console.log(a + b);
    break;
  case islem2:
    if (a > b) {
      document.write(a - b);
    } else {
      document.write(b - a);
    }

    break;
  case islem3:
    document.write(a * b);
    console.log(a * b);
    break;
  case islem4:
    if (a > b) {
      document.write(a / b);
    } else {
      document.write(b / a);
    }

    break;

  default:
    document.write("Herhangi bir işlem seçmediniz!");
    console.log("Herhangi bir işlem seçmediniz!");
}
