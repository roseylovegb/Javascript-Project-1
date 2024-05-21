function getRandomNumber(min, max) {
    // Generate a random integer between min (included) and max (excluded)
    let randomNum = Math.random() * (max-min) + min;
    randomNum = Math.floor(randomNum);
    return randomNum;

  }
  
  function changeItem() {
        // Change random list element number value
    const baseSelector = "#listID li";
    // TODO: Get li nodeList using querySelectorAll() and HTML
    const liNodeList = document.querySelectorAll(baseSelector)
    // TODO: Generate a random list number for 
    // querySelector() - appropriate updates
    const randomLI = getRandomNumber(1, liNodeList.length + 1);
    // range is [1, to length + 1)
  
    //TODO Generate a random number
    const randomNumber = getRandomNumber (1, 10000);
    
  
    // TODO Update using querySelect()
    // selector must be of he form "#listID li:nth-child(3)"
    const nthSelector = `${baseSelector}:nth-child(${randomLI})`;
   

    // TODO once we have formed the selector, we use querySelector
    // to grab that element and assign it a textContent
    // bakctick strings provide variable substitution
    document.querySelector(nthSelector).textContent  = `Random ${randomNumber}`;
  }
  
  // Setup timers for callback functions for 1 milisecond 
  const intervalChangeWord = setInterval(changeItem, 1000);
  