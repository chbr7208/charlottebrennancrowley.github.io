const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  // await async
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  alice1.animate(aliceTumbling, aliceTiming);

  async function alice() {
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    alice3.animate(aliceTumbling, aliceTiming);
  }

  alice ();

// callback??

// function doStep1(alice1, callback) {
//     const result = alice1.animate(aliceTumbling, aliceTiming);
//     callback(result);
//   }
  
//   function doStep2(alice2, callback) {
//     const result = alice2.animate(aliceTumbling, aliceTiming);
//     callback(result);
//   }
  
//   function doStep3(alice3, callback) {
//     const result = alice3.animate(aliceTumbling, aliceTiming);
//     callback(result);
//   }
  
//   function doOperation() {
//     doStep1(0, (result1) => {
//       doStep2(result1, (result2) => {
//         doStep3(result2, (result3) => {
//           console.log(`result: ${result3}`);
//         });
//       });
//     });
//   }
  
//   doOperation();
