const select = $(".typeOfCoffee");

const drinks = [
  ["coffee name", "espresso", "chocolate", "water", "milk", "foam"],
  ["latte", 40, 0, 0, 60, 10],
  ["cappucino", 40, 0, 0, 40, 20],
  ["americano", 20, 0, 80, 0, 0],
  ["espresso", 20, 0, 0, 0, 0],
  ["mocha", 30, 10, 0, 60, 0],
  ["flatwhite", 40, 0, 0, 60, 0],
  ["macchiato", 40, 0, 0, 0, 15],
];

for (var i = 1; i < drinks.length; i++) {
  const addOptions = $("<option>" + drinks[i][0] + "</option>").appendTo(select);
}

select.on("change", function() {
  let selectedOption = $("option:selected").text();

  for (var i = 1; i < drinks.length; i++) {
    if (selectedOption == drinks[i][0])
      for (var j = 1; j < drinks[0].length; j++)
        $("." + drinks[0][j])
          .css("height", drinks[i][j] + "%")
          .css("opacity", 1);

        }
});


// const choose = $(".typeOfCoffee")
//
// const drinks = ["latte", "cappucino", "americano", "espresso", "mocha", "flatwhite", "macchiato" ];
//     document.getElementbyID("choose").innerHTML = drinks[0];
//
// for (var i = 1; i < drinks.length; i++) {
//   const fillOptions = $(drinks[i][1]).addpendTo(choose);
// }
//
// choose.on("change", function() {
//   let selectedOption = $("option:selected").text();
//
//   for (var i = 1; i < drinks.length; i++) {
//     if (selectedOption == drinks[i][0])
//       for (var j = 1; j < drinks[0].length; j++)
//           $(drinks[0][j])
//           .css("height", drinks[i][j] + "%")
//           .css("opacity", 1);
//   }
// });








// const blackFill = () => {
//   document.querySelector('#choose').className = 'cup black';
// };
//
// const latterFill
//
// const cappuccinoFill
//
// const americanoFill
//
// const espressoFill
//
// const mochaFill
//
// const flatwhiteFill
//
// const macchiatoFill
//
//
//
//
// document.querySelector('#black').onclick = blackFill;
// document.querySelector('#latte').onclick = latteFill;
// document.querySelector('#cappuccino').onclick = cappuccinoFill;
// document.querySelector('#americano').onclick = americanoFill;
// document.querySelector('#espresso').onclick = espressoFill;
// document.querySelector('#mocha').onclick = mochaFill;
// document.querySelector('#flatwhite').onclick = flatwhiteFill;
// document.querySelector('#macchiato').onclick = macchiatoFill;
