const cardObject = {
  /*
       TODO: Add the following properties (remember to start properties with an underscore):
       - timer ID property used to stop timer, initialized to null.
                  Example: _intervalID: null
       - initial counter property starting value
       - counter property that will count down to zero
       - cards array initialized using a string and the split() method
       - suits array initialized using a string and the split() method
    */

 _intervalID: null,
 _startCount: 5,
_counter: 5,
_cards: "2, 3, 4, 5, 6, 7, 8, 9, 0, J, Q, K, A".split(", "),
_suits: "C, S, H, D".split(", "), 

// console.info("Card Object Information: ");
// console.log("Interval ID: ", cardObject._intervalID);
// console.log("Counter: ", cardObject._counter);
// console.log("Cards: ", cardObject._cards);
// console.log("Suits:", cardObject._suits)
 

  getRandomCard: function () {
    // TODO: Return a random card value from the cards array
    // TODO: If card is 0, then use 10 to account for actual image file
    // Hint: Generate a random array index value for the cards array
  const randomChoice = this.getRandomNumber(0, this._cards.length);
  const randCard = this._cards[randomChoice];
  if(randCard == "0"){
    return "10";
  }
  else{
    return randCard;
  }

  },
  getRandomSuit: function () {
    // TODO: Return a random suit value from the suits array
    // Hint: Generate a random array index value for the suits array

    const randomChoice2 = this.getRandomNumber(0, this._suits.length);
    return this._suits[randomChoice2];
  },
  loadImages: function () {
    // TODO: Update img element src attribute with a randomly generated card and suit image file name
    // Hint: You will need to call getRandomCard() and getRandomSuit() to create image filename
    const card1 = this.getRandomCard();
    const suit1 = this.getRandomSuit();
    const filename = `cards/${card1}${suit1}.png`;
    const imgElement = document.getElementById('card');
    imgElement.classList.remove("hidden");
    imgElement.src = filename;


  },
  countDown: function () {
    // TODO: Decrement and display count down value, and upon reaching 0 stop timer and display card image
    // Hint: You will need to call displayCountdown(), stopCountDownTimer() and loadImages()
    this._counter = this._counter - 1;
    this.displayCountDown();
    if (this._counter == 0) {
      this.stopCountDownTimer();
      this.loadImages();
    }
    
    

  },
  displayCountDown: function () {
    // TODO: Update countdown span element with current countdown value
    // Hint: Get a reference to count down span and set the span textContent property with the counter

    const reference = document.getElementById('countDownSpan');
    reference.textContent = this._counter;
    
  },
  startCountDownTimer: function (start) {
    // TODO: Start timer, setting any appropriate object properties, with an interval of one second
    this._startCount = start; 
    this._counter = this._startCount;
    this.displayCountDown(); // this calls the displaycountdown function
    this._intervalID = setInterval(this.countDown.bind(this), 1000); // every second execute count down (second = 1000)
  },
  stopCountDownTimer: function () {
    // TODO: Stop timer using object timer property
    // Hint: Will need to call clearInterval()
    clearInterval(this._intervalID);
  },
  getRandomNumber: function (min, max) {
    // Generate a random integer between min (included) and max (excluded)
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
  },
}
;
const timedCard = Object.create(cardObject);
timedCard.startCountDownTimer(5);
