    const menu = {
        "Cheeseburger": 5,
        "Chicken Alfredo": 2,
        "Chicken Sandwich": 6
    }

    const sides = {
        "French Fries": 1,
        "Mixed Veggies": 1.50,
        "Mashed Potatoes": 1
    }

    let sidesname = Object.keys(sides)
    

    alert("Welcome to the diner!")

    const diner = () => {
        let foodArray = Object.keys(menu)
        let chosenEntree = prompt(`What would you like to eat?\n\n${foodArray}`)
        alert(`Awesome, the ${chosenEntree} is $${menu[chosenEntree]}. I recommend the ${sidesname[0]}`)
        let chosenside = prompt(`That being said, which side would you like?\n\n${sidesname}`)
        alert(`Great! that costs $${sides[chosenside]}.`)
        let totalprice = menu[chosenEntree] + sides[chosenside]
        alert('Your total is $', totalprice.toFixed(2));
    }

    diner() 