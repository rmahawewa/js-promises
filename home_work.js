// createOrder,
// proceedToPayment,
// showOrderSummery,
// updateWallet

const cart = ["mug", "flask", "bottle"];

console.log(createOrder(cart));

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return proceedToPayment(orderId);
}).then(function(paymentInfo){
    return showOrderSummery(paymentInfo);
}).then(function(paymentStatus){
    return updateWallet(paymentStatus);
}).then(function(message){
    console.log(message);
}).catch (function(err) {
    console.log(err.message);
});

function createOrder(cart){
    const pr = new Promise(function(resolve,reject) {
        if(!validateCart(cart)){
            console.log("error");
            const error = new Error("The cart is not valid");
            reject(error);
        }

        let orderId=12345678;
        if(orderId){            
            resolve(orderId);
            console.log(orderId);
        }
    })
    return pr;
}

function proceedToPayment(orderId){
    const pr = new Promise(function(resolve,reject) {
        resolve("Payment successfull");
    })
    return pr;
}

function showOrderSummery(paymentInfo){
    const pr = new Promise(function(resolve,reject){
        resolve(true);
    })
    return pr;
}

function updateWallet(paymentStatus) {
    const pr = new Promise(function(resolve,reject) {
        if(paymentStatus){
            resolve("Wallet is updated");
        }else{
            reject("Operation failed");
        }
    }); 
    return pr;  
}

function validateCart(cart){
    return true;
}