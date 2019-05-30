var available = true;

function CheckInOut()
{
    var inputName = document.getElementById("NameField");
    var inputEmail = document.getElementById("EmailField");
    var avail = document.getElementById("Availability");
    btn = document.getElementById("Button");

    if (available && inputName.value != "" && inputEmail.value != "")
    {
        avail.innerHTML = "Not Available";

        localStorage.setItem("Borrower", inputName.value + " : " + inputEmail.value);
        inputEmail.value = "";
        inputName.value = "";
        btn.value = "Check In"
        available = false;
    }
    else
    {
        if(localStorage.getItem("Borrower") == (inputName.value + " : " + inputEmail.value))
        {
            localStorage.setItem("BorrowHistory", localStorage.getItem("Borrower"));
            localStorage.setItem("Borrower", "");
            inputEmail.value = "";
            inputName.value = "";
            avail.innerHTML = "Available";
            btn.value = "Check Out";
            available = true;
        }
    }
    console.log("CurrentBorrower: ", localStorage.getItem("Borrower"));
    console.log("Prev: ",localStorage.getItem( "BorrowHistory"));


}

function contactCurrent() {
	var current = localStorage.getItem( "Borrower");
    if(current != ""){
    	document.getElementById("current").innerHTML = current;
    } else {
    	document.getElementById("current").innerHTML = " No current borrower.";
    }
}

function contactPrevious() {
	var previous = localStorage.getItem( "BorrowHistory");
    if(previous != ""){
    	document.getElementById("previous").innerHTML = previous;
    } else {
    	document.getElementById("previous").innerHTML = " No previous borrower.";
    }
}


$(document).ready(function() {

  // DOM elements
  var inputFieldElement = $("#input input:text");
  var submitButtonElement = $("#input button");
  var outputElement = $("#output");

  // The ToDo Object
  todoList = {
    items: [
      "Alex, alex@ucsc.edu",
      "Kenneth, ken@ucsc.edu",
    ],
    addItem: function(item) {
      this.items.push(item);
    },
    updateList: function(item) {
      // start with a blank string
      var outputString = "";
      // clear the contents of our output
      outputElement.html("");
      for (i=0;i<this.items.length;i++) {
        // first make a div element
        var itemElement = $('<div class="item"></div>');
        // make string containing this item
        var itemText = (i+1)+". "+this.items[i];
        // add the item string to the div element
        itemElement.html(itemText);
        // add this item element to the output
        outputElement.append(itemElement);
      }
    }
  }

  // add event listener to button
  inputFieldElement.change(function(){
    // get contents of input field
    var inputContents = inputFieldElement.val();
    // console.log(inputContents);
    if (inputContents) {
      todoList.addItem(inputContents);
      todoList.updateList();
      // clear input field
      inputFieldElement.val("");
      // move focus to input field for next item
      inputFieldElement.focus();
    }
  })

  todoList.updateList();

})
