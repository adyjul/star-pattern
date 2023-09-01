function piramida() {
    let n = $('#maxNumber').val();
    let string = "";
    
    for (let i = 1; i <= n; i++) {
      // untuk mengatur jarak
      for (let j = 1; j <= n - i; j++) {
        string += " ";
      }
      // nge-print bintangnya
      for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
}