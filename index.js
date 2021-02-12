    const menu = {
        "Cheesburger": 5,
        "Hot Dog": 2,
        "Chicken Sandwhich": 6
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
    }

    diner()