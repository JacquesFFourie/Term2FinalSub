showOrder = () =>{

    let data = JSON.parse(localStorage.getItem('order'))
    

    console.log(data)
    dataName = data[0].subName;
    dataBread = data[0].subBread;
    dataPrice = data[0].price;
    dataToppingsOne = data[0].subToppingOne;
    dataToppingsTwo = data[0].subToppingTwo;
    dataToppingsThree = data[0].subToppingThree;
    dataToppingsFour = data[0].subToppingFour;
    dataToppingsFive = data[0].subToppingFive;
    dataToppingsSix = data[0].subToppingSix;
    dataSauce = data[0].subSauce;


    document.getElementById("subNameCheck").innerHTML = "Name of sub: " + dataName;
    document.getElementById("subBreadCheck").innerHTML = "Size of sub: " + dataBread;
    document.getElementById("subPriceCheck").innerHTML = "Price: R" + dataPrice + ".00";
    document.getElementById("subPriceCheckFinal").innerHTML = "R" + dataPrice + ".00";
    document.getElementById("subToppings").innerHTML = "Toppings " + dataToppingsOne + ", " + dataToppingsTwo + ", " + dataToppingsThree + ", " + dataToppingsFour + ", " + dataToppingsFive + " and " + dataToppingsSix;
    document.getElementById("subSauceName").innerHTML = "Sauce: " + dataSauce;
}

discountCode = () =>{
    let discountCode = document.getElementById("discountCode").value;
    let dataCheckout = JSON.parse(localStorage.getItem('order'))
    priceData = dataCheckout[0].price;

    if(discountCode == 1111){
         
        priceData = priceData - (priceData*30/100)

        document.getElementById("subPriceCheckFinal").innerHTML = "R" + priceData + ".00"
        document.getElementById("subPriceCheck").innerHTML = "R" + priceData + ".00"
        document.getElementById("DiscountText").innerHTML = "30% off! LETS GO!!"
    }
}

resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = '../index.html'
}