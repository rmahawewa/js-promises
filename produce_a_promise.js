const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart); // orderId

createOrder(cart)
.then(function(orderId) {
    console.log(orderId);
    return orderId;
    // proceedToPayment(orderId);
})
.then(function(orderId) {
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function (err) {
    console.log(err.message);
})

//Producer

function createOrder(cart) {

    const pr = new Promise(function(resolve, reject){
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        //logic for createOrder
        const orderId = "12345";
        if(orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 5000);            
        }
    });

    return pr;

}

function proceedToPayment(orderId) {
    return new Promise( function(resolve,reject) {
        resolve("Payment Successfull");
    } )
}

function validateCart(){
    return true;
}