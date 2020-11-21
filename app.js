let whaleTalk = (str) =>
  str
    .match(/[aeiou]/g)
    .join("")
    .replace(/e/g, "ee")
    .replace(/u/g, "uu");

console.log(whaleTalk("hi humanus ice"));

// str.split('').filter(letra => letra == /[aeiou]/g);

//   for (let i in str) {
//     if (str[i] == "e" || str[i] == "u") {
//       whaleTranslate.push(str[i] + str[i]);
//     } else if (str[i] == "a" || str[i] == "i" || str[i] == "o") {
//       whaleTranslate.push(str[i]);
//     }
//   }
//   return whaleTranslate.join("");
// }

// let whaleTalk = str => {
//   let whaleTranslate = [];
//   for (let i in str) {
//     if (str[i] == "e" || str[i] == "u") {
//       whaleTranslate.push(str[i] + str[i]);
//     } else if (str[i] == "a" || str[i] == "i" || str[i] == "o") {
//       whaleTranslate.push(str[i]);
//     }
//   }
//   return whaleTranslate.join("");
// }
