// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll(btnName,btnStatus) {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons(btnName,btnStatus);
  renderIngredientsBoard();
  renderPrice();

}




function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {

  let cheese = document.querySelector("#cheese"); //getting the eelemrnt to be rendred on screen
  if (state.Cheese) { // manupulating emenent based on th state value
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }

}


function renderTomatoes() {
  
  if(state.Tomatoes == true)
  {
    document.getElementById("tomato").style.display = "inherit";
  }
  else
  {
    document.getElementById("tomato").style.display= "none";
  }
}

function renderOnions() {
  
  if(state.Onions == true)
  {
    document.getElementById("onion").style.display = "inherit";
  }
  else
  {
    document.getElementById("onion").style.display= "none";
  }
}

function renderLettuce() {
  
  if(state.Lettuce == true)
  {
    document.getElementById("lettuce").style.display = "inherit";
  }
  else
  {
    document.getElementById("lettuce").style.display= "none";
  }
}


// --------------------------------------------------------------------------Render End 


// --------------------------------------------------------------------------Buttons Start

  document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll("btn-patty",state.Patty);
};

  document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll("btn-cheese",state.Cheese);
};

  document.querySelector(".btn-tomatoes").onclick = function (){ 
  state.Tomatoes= ! state.Tomatoes;
  renderAll("btn-tomatoes",state.Tomatoes);
}

  document.querySelector(".btn-onions").onclick = function (){
  state.Onions= ! state.Onions;
  renderAll("btn-onions",state.Onions);
}


  document.querySelector(".btn-lettuce").onclick = function (){
  state.Lettuce= ! state.Lettuce;
  renderAll();
}

//Challenge 1 - Add/Remove the class active to the buttons based on state
let renderButtons = (btnName,btnStatus) =>
{
  //console.log(`.${btnName}`,btnStatus);
  var status = document.querySelector(`.${btnName}`);

} 


// --------------------------------------------------------------------------Buttons End


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard()
{
      var ingredient = document.getElementsByClassName("items");  //fetch items
      //console.log(ingredient);
      if(state.Patty)
      {
        ingredient[0].style.display ="inherit";
      }
      else
      {
        ingredient[0].style.display= "none";
      }
      if(state.Cheese)
      {
        ingredient[1].style.display ="inherit";
      }
      else
      {
        ingredient[1].style.display= "none";
      }
      if(state.Tomatoes)
      {
        ingredient[2].style.display ="inherit";
      }
      else
      {
        ingredient[2].style.display= "none";
      }
      if(state.Onions)
      {
        ingredient[3].style.display ="inherit";
      }
      else
      {
        ingredient[3].style.display= "none";
      }
      if(state.Lettuce)
      {
        ingredient[4].style.display ="inherit";
      }
      else
      {
        ingredient[4].style.display= "none";
      }
}


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

let renderPrice = () => 
{
  
  console.log("inside render price");
  let total = 0;
  for(const item in state)
  {
    if(state[item] == true)
    {
      //console.log(ingredients[`${item}`])
      total += ingredients[`${item}`];

    }
  }
  console.log( `INR ${total}`);
  document.getElementById("price-details").innerHTML = `INR ${total}`;

};



//---todo
/*
//arrange page hight width properly
//edit svg
burger size
//total issue
//ingredients fixed position



*/