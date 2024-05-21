const baseSelector = "#listID li";

function getRandomNumber(min, max) {
  // TODO Generate a random integer between min (included) and max (excluded)
  let randomNum = Math.random() * (max-min) + min;
    randomNum = Math.floor(randomNum);
    return randomNum;

}

function changeColor() {
  // TODO Generate random hexadecimal RGB colors
  // 16 is the radix, i.e., hexadecimal value
  const red = getRandomNumber(0, 255).toString(16);
  const green = getRandomNumber(0, 255).toString(16);
  const blue = getRandomNumber(0, 255).toString(16);

  // TODO: Get li nodeList using querySelectorAll() and HTML
  const liNodeList = document.querySelectorAll(baseSelector);



  // TODO Generate a random list number appropriate for NodeList access
  // where index is 0 to length
  const randomLI = getRandomNumber(0, liNodeList.length);


  // Update using NodeList
  liNodeList[randomLI].style.color = `#${red}${green}${blue}`;

 
}

// Setup timers for callback functions for 1 milisecond
const intervalChangeColor = setInterval(changeColor, 1000);
