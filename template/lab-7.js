// File: lab-07.js

// Declare all buttons' event listeners
// Here is an example of the firts event listener
// You need to add two more (one for each button)
document
  .querySelector("#addListItemButton")
  .addEventListener("click", handleAddListItemButton);

// You may break this instruction in parts, in order to understand
// it better
 let changeTypeButton = document.querySelector("#changeListTypeButton");
changeTypeButton.addEventListener("click", handleChangeListTypeButton);

let removeLastButton = document.querySelector("#removeLastListItemButton").addEventListener("click", handleRemoveLastListItemButton);
// Define the event handling functions
// You need to program these functions

function handleAddListItemButton (evt) {
  // debuggin log for each function
  console.log("handleAddListItemButton");
  const data = document.querySelector("#taskInput").value;
  console.log(data);
  const newItem = document.createElement("li");
  newItem.textContent = data;
  console.log(newItem);
  const OL = document.querySelector("ol");
  console.log(OL);
  OL.appendChild(newItem);
}

function handleChangeListTypeButton(evt) {
  console.log("handleChangeListTypeButton")
  const listType = document.querySelector("#listTypeInput").value;
  console.log(listType);
  const OL = document.querySelector("ol");
  console.log(OL);
  OL.setAttribute("type", listType);
}

function handleRemoveLastListItemButton(evt) {
  console.log("handleRemoveLastListItemButton");
  const OL = dcocument.querySelector("ol");
  console.log(OL);
  const lastItem = document.querySelector("ol li:last-child");
  if (lastItem) {
  console.log(lastItem);
  OL.removeChild(lastItem);
  }
  else {
    console.log("There are no items/children");
  }

}
