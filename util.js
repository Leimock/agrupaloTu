export function makeGroups(arr, tamG) {
  // let msg = "";
  // let ctr = 0;
  // let p;
  // if (arr.length >= numG) {
  //   for (let i = 0; i < numG; i++) {
  //     if (arr.length >= numG) {
  //       msg += `Grupo ${i + 1}: `;
  //       while (ctr < numG) {
  //         if (ctr == 0) {
  //           p = Math.floor(Math.random() * arr.length);
  //           msg += arr[p];
  //           arr.splice(p, 1);
  //           ctr += 1;
  //         } else {
  //           p = Math.floor(Math.random() * arr.length);
  //           msg += ", " + arr[p];
  //           arr.splice(p, 1);
  //           ctr += 1;
  //         }
  //       }
  //       ctr = 0;
  //       msg += "<br>";
  //     }
  //   }
  // }

  // if (arr.length >= tamG) {
    //   for (let j = 0; j < cantG; j++) {
      //     if (arr.length >= tamG) {
        //       for (let i = 0; i < tamG; i++) {
          //         let deleted = arr.splice(Math.floor(Math.random() * arr.length),1).toString()
          //         array.push(deleted);
          //       }
          //       arrGroups.push(array);
          //       array = [];
          //     }  
          //   }
          // }
          
  let arrGroups = [];
  let array = [];
          
  while (arr.length>=tamG) {
    for (let i = 0; i < tamG; i++) {
      let deleted = arr.splice(Math.floor(Math.random() * arr.length),1).toString()
      array.push(deleted);
    }
    arrGroups.push(array);
    array = [];
  }

  console.log(arrGroups)
  if (arr != 0 && arr.length < tamG) {
    arrGroups.push(arr);
  }

  return stringGroups(tamG, arrGroups);

}

function stringGroups(numbOfGroups, arr) {
  let text = "";
  let i = 1;
  for (const arg of arr) {
    if (i <= numbOfGroups && arg.length>=numbOfGroups) {
      text += `Grupo ${i}: ` + arg + "<br>";
      i++;
    } else {
      text += "Queda sin grupo: " + arg;
    }
  }

  return text;
}
