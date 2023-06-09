showOrder = () =>{

    let data = JSON.parse(localStorage.getItem('order'))
    

    console.log(data)
    dataName = data[0].subName;
    dataSize = data[0].subSize;
    dataPrice = data[0].price;
    dataToppingsOne = data[0].subToppingOne;
    dataToppingsTwo = data[0].subToppingTwo;
    dataToppingsThree = data[0].subToppingThree;


    document.getElementById("subNameCheck").innerHTML = "Name of sub: " + dataName;
    document.getElementById("subSizeCheck").innerHTML = "Size of sub: " + dataSize;
    document.getElementById("subPriceCheck").innerHTML = "Price: R" + dataPrice + ".00";
    document.getElementById("subPriceCheckFinal").innerHTML = "R" + dataPrice + ".00";
    document.getElementById("subToppings").innerHTML = "Toppings " + dataToppingsOne + " " + dataToppingsTwo + " " + dataToppingsThree;
}

resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = '../index.html'
}