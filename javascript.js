/*welcome javascript of calculator project 
  -vaishnav bhagat */

  let input = document.getElementById("input");
  let buttons = document.querySelectorAll("button");
  console.log(buttons);
  let str = "";
  
  let arr = Array.from(buttons);
  
  arr.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        str = eval(str);
        input.value = str;
      } else if (e.target.innerHTML == "AC") {
        str = "";
        input.value = str;
      } else if (e.target.innerHTML == "DEL") {
        str = str.substring(0, str.length - 1);
        input.value = str;
      } else {
        str += e.target.innerHTML;
        input.value = str;
      }
    });
  });
  