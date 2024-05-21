function getRandomNumber(min, max) {
  // TODO: Generate a random integer in [min, max)
}

function changeBold() {
  // Change which list element is bold

  const baseSelector = "#listID li"; // defined in HTML
  // TODO: Get li nodeList using querySelectorAll() and HTML
  // const liNodeList =
const liNodeList = document.querySelectorAll(baseSelector)
  // Find current bolded li, use -1 to indicate none set
  // Reset current to normal
  let currentBoldLi = -1;
  for (let li = 0; li < liNodeList.length; li++) {
    // TODO: Use a conditional to test if fontWeight
    // style is "bold" using strict equivalence
        if (liNodeList[li].style.fontWeight == "bold") {
            currentBoldLi = li;
            break;
        }
        
  }

  let nextBoldLi = 0;
  // if we found a bold element compute the index of the
  // next bold element - remember, the list must be treated
  // as a circular list
  if (currentBoldLi != -1) {
    // TODO: compute next bold
    nextBoldLi = (currentBoldLi + 1) % liNodeList.length;
    // TODO: Set current (bold) element's fontWeight to "normal"
    liNodeList[currentBoldLi].style.fontWeight = "normal";
  }
  // TODO: Set next bold element's fontWeight to "bold"
  liNodeList[nextBoldLi].style.fontWeight = "bold";
}

// TODO: Setup a timer for callback function
const intervalMoveBold = setInterval(changeBold, 1000);
