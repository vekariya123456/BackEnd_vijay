function counter()
{

  let input = document.getElementById("input");
  let display = document.getElementById("display");

  let length = input.value.length;

  display.textContent = "Length: " + length;


}