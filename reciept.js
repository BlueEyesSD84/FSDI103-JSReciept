

let userFName = prompt("Please enter your first name");
let userLName = prompt("Please enter your last name");
let storePhone = '619-999-9999';
let storeNum = '125689'
let storeAdd =  '1234 FullStack Hwy'
let storeHrs = 'Open  Mon - Fri 8:00AM - 9:00PM';
let prodName = prompt('Please enter a purchased product name');
let prodPrice = prompt("Please enter the product price");
let prodQty = prompt("Please enter the qty you are purchasing")
let subTotal = (prodPrice) * (prodQty);
let taxes = (subTotal) * .75;
let totalCost = (subTotal) + (taxes);

const number1 = prodPrice;
const number2 = subTotal;
const number3 = taxes;
const number4 = totalCost;
// USD Currency $
let num1 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number1);
let num2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number2);
let num3 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number3);
let num4 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number4);

console.log(`${userFName} ${userLName}\nStore Phone:${storePhone}\nStore Number: ${storeNum}\nStore Address:${storeAdd}\nStore Hours: ${storeHrs}\nProduct Name: ${prodName}\nProduct Price: ${prodPrice}\nProduct Qty: ${prodQty}\nSubtotal: $${subTotal}\nTaxes: ${taxes}\nTotal Cost: ${totalCost}`);
document.write(`Hello ${userFName} ${userLName} </br> `);
document.write(`Store Phone: ${storePhone} </br>`);
document.write(`Store Number: ${storeNum} </br>`)
document.write(`Store Address: ${storeAdd} </br>`);
document.write(`Store Hours: ${storeHrs} </br>`);
document.write(`Product name entered: ${prodName} </br>`);
document.write(`Product price per unit: ${num1} </br>`);
document.write(`Product quantiy entered: ${prodQty} </br>`);
document.write(`Subtotal: ${num2} </br>`);
document.write(`Taxes: ${num3} </br>`);
document.write(`Total Cost: ${num4} </br>`);