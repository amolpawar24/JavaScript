function Outer() {
    // Outer Funcion
  let a = 10;

  function Inner() {
    // Inner Function
    a++;
    console.log("a :", a);
  }
  return Inner;
}

let res = Outer();

    res();
    res();
    res();
