

const pizzas = [
    {
      name: "Margherita",
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Fresh Basil"],
      price: 10.99,      
      
    },
    {
      name: "Pepperoni Feast",
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni Slices"],
      price: 12.99,      
    },
    {
      name: "Veggie Delight",
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Bell Peppers", "Mushrooms", "Olives"],
      price: 11.99,      
    },
    {
      name: "Supreme Special",
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Sausage", "Bell Peppers", "Onions"],
      price: 13.99,      
    },
  ];

function populateMenu(append) {
    const box = document.createElement('div')
    box.setAttribute('id', 'box');
    pizzas.forEach((pizza, i) => {
    const pizzaDiv = document.createElement('p');
    
    
    for (let key in pizza) {
     
      let para = document.createElement('p');
      let br = document.createElement('br');      
      para.textContent = pizza[key]
      pizzaDiv.append(para, br,)      
        
      }
    
    box.append(pizzaDiv);    
    })
    append.append(box);

}

export default populateMenu