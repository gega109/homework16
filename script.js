// hm 1
// function Multiply(a, b, op) {
//   switch (true) {
//     case op === "*":
//       return a * b;

//       break;

//     default:
//       console.log("naxvamduri");

//       break;
//   }
// }

// Multiply(10, 20, "*");

// hm 2
// function checkAge(x) {
//   switch (true) {
//     case x >= 18:
//       return "შენხარ სრულწლოვანი";
//       break;
//     default:
//       return "შენხარ არასრულწლოვანი";
//       break;
//   }
// }
// checkAge(17);

// hm 3
// function isEvenOrOdd(num) {
//   switch (true) {
//     case num % 2 === 0:
//       return "ეს რიცხვი ლუწია";
//       break;
//     default:
//       return "ეს რიცხვი კენტია";

//       break;
//   }
// }
// isEvenOrOdd(1);

// hm 4

// function WeekDays(x) {
//   switch (true) {
//     case x === "ორშაბათი":
//         console.log("დღეს ორშაბათია");

//       break;
//     case x === "სამშაბათი":
//         console.log("დღეს სამშაბათია");

//       break;
//     case x === "ოთხშაბათი":
//         console.log("დღეს ოთხშაბათია");

//       break;
//     case x === "ხუთშაბათი":
//         console.log("დღეს ხუთშაბათია");

//       break;
//     case x === "პარასკევი":
//         console.log("დღეს პარასკევია");

//       break;
//     case x === "შაბათი":
//         console.log("დღეს შაბათია");

//       break;
//     case x === "კვირა":
//         console.log("დღეს კვირაა");

//       break;

//     default:
//       break;
//   }
// }
// WeekDays("ოთხშაბათი");

// hm 5
// function compareNumbers(a, b) {
//   switch (true) {
//     case a > b:
//       return a > b;
//       break;
//     case a < b:
//       return b > a;
//       break;

//     default:
//       console.log(a === b);

//       break;
//   }
// }
// compareNumbers(15, 10);

// hm 6
// function calculator(a, b, op) {
//   switch (true) {
//     case op === "+":
//       console.log(a + b);

//       break;
//     case op === "-":
//       console.log(a - b);

//       break;
//     case op === "*":
//       console.log(a * b);

//       break;
//     case op === "/":
//       console.log(a / b);

//       break;

//     default:
//         console.log("არვიცი ძამია რის მიღწევას ცდილობ დდ");

//       break;
//   }
// }
// calculator(30, 10, "/");

// hm 7
// function celsiusToFahrenheit(celsius) {
//     return celcius * 9 / 5 + 32;
//   }
//   celsiusToFahrenheit(10);
  
// hm 8

// function findMax(a, b, c) {
//     switch (true) {
//       case a >= b && a >= c:
//         console.log(a);
//         break;
//       case b >= a && b >= c:
//         console.log(b);
//         break;
//       case c >= a && c >= b:
//         console.log(c);
//         break;
//       default:
//         console.log("All values are equal or invalid input");
//         break;
//     }
//   }

//   findMax(15, 10, 5);

// hm 9
// function checkSign(num) {
//   switch (true) {
//     case num > 0:
//       console.log("ეს რიცხვი დადებითია");

//       break;
//     case num < 0:
//       console.log("ეს რიცხვი უარყოფითია");

//       break;

//     default:console.log("ეს რიცხვი ნულის ტოლია");

//       break;
//   }
// }
// checkSign(0);

// hm 10
// function getMonthName(monthNumber) {
//   switch (true) {
//     case monthNumber === "იანვარი":
//       console.log("ახლა იანვარია");

//       break;
//     case monthNumber === "თებერვალი":
//       console.log("ახლა თებერვალია");
//       break;
//     case monthNumber === "მარტი":
//       console.log("ახლა მარტია");
//       break;
//     case monthNumber === "აპრილი":
//       console.log("ახლა აპრილია");
//       break;
//     case monthNumber === "მაისი":
//       console.log("ახლა მაისია");
//       break;
//     case monthNumber === "ინვისი":
//       console.log("ახლა ინვისია");
//       break;
//     case monthNumber === "ივლისი":
//       console.log("ახლა ივლისია");
//       break;
//     case monthNumber === "აგვისტო":
//       console.log("ახლა აგვისტოა");
//       break;
//     case monthNumber === "სექტემბერი":
//       console.log("ახლა სექტემბერია");
//       break;
//     case monthNumber === "ოქტომბერი":
//       console.log("ახლა ოქტომბერია");
//       break;
//     case monthNumber === "ნოემბერი":
//       console.log("ახლა ნოემბერია");
//       break;
//     case monthNumber === "დეკემბერი":
//       console.log("ახლა დეკემბერია");
//       break;

//     default:console.log("აშკარად სხვაგან ხარ მეგობარო");

//       break;
//   }
// }
// getMonthName("ოქტომბერი");

// hm 11

// function multiplyIfGreaterThanFive(num) {
//     switch (true) {
//         case num >= 5:
//             console.log(num * 5);

//             break;

//         default:
//             console.log("რიცხვი მცირეა");

//             break;
//     }
// }
// multiplyIfGreaterThanFive(11);

// hm 12

// function getSeason(seasonNumber) {
//     switch (true) {
//         case seasonNumber === 1:
//             console.log("გაზაფხული");
//             break;
//         case seasonNumber === 2:
//             console.log("ზაფხული");
//             break;
//         case seasonNumber === 3:
//             console.log("შემოდგომა");
//             break;
//         case seasonNumber === 4:
//             console.log("ზამთარი");
//             break;

//         default:
//             break;
//     }
// }
// getSeason(3)

// hm 13

// function checkPrice(price) {
//   switch (true) {
//     case price > 100:
//       console.log("ფასი მაღალია");
//       break;

//     default:
//       console.log("ფასი ნორმალურია");
//       break;
//   }
// }
// checkPrice(200);

// hm 14
// function switchCalculator(a, b, operator) {
//     switch (true) {
//         case operator === "+":
//             console.log(a + b);

//             break;
//         case operator === "-":
//             console.log(a - b);

//             break;
//         case operator === "*":
//             console.log(a * b);

//             break;
//         case operator === "/":
//             console.log(a / b);

//             break;

//         default:console.log("აცდენაააა");

//             break;
//     }
// }
// switchCalculator(30,25,"/");

// hm 15

// function positiveSum(a, b) {
//   switch (true) {
//     case a && b >= 0:
//       console.log(a + b);

//       break;

//     default:
//       console.log("მინიმუმ ერთი რიცხვი უარყოფითია");

//       break;
//   }
// }
// positiveSum(50, 20);
