let subOrder = [];


makeSub = () =>{

    let subName = document.getElementById("subName").value;
    let subBread = document.getElementById("subBread").value;
    let subToppingOne = document.getElementById("subToppingOne").value;
    let subToppingTwo = document.getElementById("subToppingTwo").value;
    let subToppingThree = document.getElementById("subToppingThree").value;
    let subToppingFour = document.getElementById("subToppingFour").value;
    let subToppingFive = document.getElementById("subToppingFive").value;
    let subToppingSix = document.getElementById("subToppingSix").value;
    let subSauce = document.getElementById("subSauce").value;
    





    let price = 50;

    if(subBread === "Plain"){
        price = price + 10;
    }else if(subBread === "Lightly Toasted"){
        price = price + 20;
    }else if(subBread === "TOASTED"){
        price = price + 30;
    }

    subOrder.push({
        subName: subName,
        subBread: subBread,
        price: price,
        subToppingOne: subToppingOne,
        subToppingTwo: subToppingTwo,
        subToppingThree: subToppingThree,
        subToppingFour: subToppingFour,
        subToppingFive: subToppingFive,
        subToppingSix: subToppingSix,
        subSauce: subSauce
    });
    

    console.log(subOrder);
    
    document.getElementById("subNaming").innerHTML = "Name of sub: " + subName;
    document.getElementById("subSizing").innerHTML = "Size: " + subBread;
    document.getElementById("totalCost").innerHTML = "R " + price;
    document.getElementById("subToppings").innerHTML = "Toppings: " + " " +subToppingOne+ " " + subToppingTwo+ " " + subToppingThree + " " + subToppingFour+ " " + subToppingFive+ " " + subToppingSix;
    document.getElementById("subSauceName").innerHTML = "Sauce: " + subSauce;
}

checkout = () => {
    let data = JSON.stringify(subOrder)
    localStorage.setItem('order', data)
    window.location.href = "../pages/checkout.html"
}