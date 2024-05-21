// You may use an image dir variable, in order type less in the image location specification
const IMGDIR = "clock-images/";

function startTime() {
  const today = new Date();
  // get hours digits and convert them to their corresponding file names
  let [h1, h2] = strings(today.getHours());
  // get minutes digits and convert them to their corresponding file names
  let [m1, m2] = strings(today.getMinutes());
  // get seconds digits and convert them to their corresponding file names
  let [s1, s2] = strings(today.getSeconds());
  // form the display string (HTML) using the digits files to be displayed
  let clockStr = formDisplayString([
    h1,
    h2,
    IMGDIR + "colon.jpg",
    m1,
    m2,
    IMGDIR + "colon.jpg",
    s1,
    s2,
  ]);
  // query the DOM, searching the elment whose id is "clock"
  // set the contents (innerHTML) of the found element to the
  // contents of the variable clockStr, which contains the clockStr
  // digits HTML expression
document.querySelector("#clock").innerHTML = clockStr;
  // Finally, set a timer to execute the function startTime again
  // 1 second later.
  setTimeout(startTime, 1000);
}

function strings(num) {
  // 0<=num<=99, i.e., a 2-digit number
  // Check if num contains one or two digits.
  // For the one digit case, the first digit is cero.
  // Each of the digits is then converted to its respective file name.
let d1;
let d2;
if (num < 10) {
  d1 = 0;
  d2 = num;
}
else {
  //num = 15;
  // d1 = 15/10 = 1
  // d2 = 15 % 10 = 5
  d1= Math.floor(num/10);
  d2 = num % 10;
}
//d1 = num < 10 ? 0 : Math.floor(num / 10);
d2 = num % 10;
  // return an array of both digits' file names.
  return [IMGDIR + d1 + ".jpg", IMGDIR + d2 + ".jpg"];
}

function formDisplayString(images) {
  // images is an array of filenames.
  // insert those file names (one at a time) into an img HTML element
  // that instructs the browser to diplay that image.
let result = "";
  // Those elements are represented as strings and they must be
  // concatenated to the result inside the loop that traverses the
  // parameter images.
for (let i = 0; i < images.length; i++) {
  result += "<img src= '" + images[i] + "'>";
  //result += `<img src="${images[i]}"`;
}
  // Return the resulting html string
  return result;
}

startTime();
