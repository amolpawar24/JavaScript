//! forEach()
//* The forEach method always return value is undefined.

    let food = ['mango', 'rice', 'pepper', 'pear'];
    console.log("food : ", food);
    
    let result = food.forEach((foodItem) =>{
        console.log('I want to eat : ',foodItem);
    })
    console.log("result : ", result);
    