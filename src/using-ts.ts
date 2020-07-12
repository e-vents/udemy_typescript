const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const name1 = "Noëlle";

function add(num1: number, num2: number) {
  if(num1 === 3) {
    throw new Error('oh no!');
  }
  return num1 + num2;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
