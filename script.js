
// function getCollatzSteps(x) {
//     let count = 0;
//
//     for (i = x; i > 1; count++) {
//
//         if (i%2 == 0) {
//             i /= 2;
//         }
//         else {
//             i *= 3;
//             i += 1;
//         };
//     };
//
//     return count;
// };

function getCollatzSteps(x) {
    return new Promise(function(resolve, reject) {
      let count = 0;



      for (i = x; i > 1; count++) {

          if (i%2 == 0) {
              i /= 2;
          }
          else {
              i *= 3;
              i += 1;
          };
      };

      resolve(count);
  });
};

// function interaction() {
//   var n = Number(document.getElementById("input").value);
//
//   console.log(n);
//   console.log(typeof(n));
//
//   if (Number.isNaN(n) || n < 1) {
//     document.getElementById("result").innerHTML = "Please enter a valid number";
//     return;
//   };
//
//   if (!Number.isInteger(n)) {
//     n = Math.floor(n);
//     document.getElementById("input").value = n;
//   };
//
//   document.getElementById("result").innerHTML = getCollatzSteps(n);
// };

function interaction() {
  var n = Number(document.getElementById("input").value);

  console.log(n);
  console.log(typeof(n));

  if (Number.isNaN(n) || n < 1) {
    document.getElementById("result").innerHTML = "Please enter a valid number";
    return;
  };

  if (!Number.isInteger(n)) {
    n = Math.floor(n);
    document.getElementById("input").value = n;
  };

  document.querySelector('.spinner').style.display = "block";
  document.getElementById("result").innerHTML = "";

  getCollatzSteps(n).then(function(count) {
    document.getElementById("result").innerHTML = count;
  }).then(function() {
    document.querySelector('.spinner').style.display = "none";
  })
};
