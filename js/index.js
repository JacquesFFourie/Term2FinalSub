let subOrder = [];


makeSub = () =>{

    let subName = document.getElementById("subName").value;
    let subSize = document.getElementById("subSize").value;
    let subToppingOne = document.getElementById("subToppingOne").value;
    let subToppingTwo = document.getElementById("subToppingTwo").value;
    let subToppingThree = document.getElementById("subToppingThree").value;
    





    let price = 0;

    if(subSize === "Small"){
        price = price + 10;
    }else if(subSize === "Medium"){
        price = price + 20;
    }else if(subSize === "Large"){
        price = price + 30;
    }

    subOrder.push({
        subName: subName,
        subSize: subSize,
        price: price,
        subToppingOne: subToppingOne,
        subToppingTwo: subToppingTwo,
        subToppingThree: subToppingThree
    });
    

    console.log(subOrder);
    
    document.getElementById("subNaming").innerHTML = "Name of sub: " + subName;
    document.getElementById("subSizing").innerHTML = "Size: " + subSize;
    document.getElementById("totalCost").innerHTML = "R " + price;
    document.getElementById("subToppings").innerHTML = "Toppings: " + " " +subToppingOne+ " " + subToppingTwo+ " " + subToppingThree;

}

checkout = () => {
    let data = JSON.stringify(subOrder)
    localStorage.setItem('order', data)
    window.location.href = "../pages/checkout.html"
}