//Declarations

var sysName = "AIM System Tracking Output System";
var server_address = "Server_IP: 192.168.4.5";
var os = "OS: Windows 10";
var admin = "Contact: Admin 1";
var adminCell = "Telephone #: 718-9908-5687";
var adminEmail = "Admin Email: admin1@aim.com";
var serverDate = new Date();
var maxUsers = 12;
var product = ["BB Tuna", "GE Gummy Bears", "Marzola Oil", "GM Toilet Paper", "GTY Green Beans", "GH Yellow Squash", "GM Watermelon"];
var productSku = ["12345-1", "12345-2", "12345-3", "12345-4", "12345-5", "12345-6", "12345-7"];
var productBoh = [100, 23, 67, 34, 299, 12, 12];
var til = [100, 99, 23, 99, 23, 67, 98];
var costPerUnit = [12.01, 12.50, 13.02, 14.01, 11.00, 15.70, 6.20];
var sp = "";
var i = 0;


//Display Data to Display

console.log(sysName);
console.log(server_address);
console.log(os);
console.log(admin);
console.log(adminCell);
console.log(adminEmail);
console.log("Server Time: ", serverDate.toLocaleTimeString());
console.log("_________________________________________________________________________________________________________________________________");
console.log("Inventory Management is being performed on the following item: ");
console.log(sp);

//Lopp Processing and Display for Product Information

for (i = 0; i < product.length; i++) {
    console.log("AIM Item: ", i);
    console.log("Product Description: ", product[i]);
    console.log("Product SKU: ", productSku[i]);
    console.log("Balance On Hand: ", productBoh[i]);
    console.log("MAX QTY ORDERABLE: 15");
    console.log("Cost Per Unit: ", costPerUnit[i].toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    console.log(sp);
}

// Logic to compute which items sell the fastest

console.log('Fast Movers Report - ITEMS THAT SELL THE MOST IN A 1 WEEK PERIOD');
console.log("_________________________________________________________________________________________________________________________________");

for (i = 0; i < product.length; i++) {
    if (productBoh[i] < 100) {
        console.log([i]);
        console.log("Product Name: ", product[i]);
        console.log("SKU #       : ", productSku[i]);
        console.log(sp);
    }

}
console.log(sp);

//logic to compute which items sell the fastest

console.log('Slow Movers Report - ITEM THAT SELL THE LEAST IN A 1 WEEK PERIOD');
console.log("_________________________________________________________________________________________________________________________________");

for (i = 0; i < product.length; i++) {
    if (productBoh[i] >= 100) {
        console.log([i]);
        console.log("Product Name: ", product[i]);
        console.log("SKU #       : ", productSku[i]);
        console.log(sp);
    }

}


//TIL of TARGETED INVENTORY LEVEL logic

console.log(sp);
console.log("Items Below TIL Report - AIM will adjust the order quantities to bring the items up to TIL");
console.log("_________________________________________________________________________________________________________________________________");


for (i = 0; i < product.length; i++) {
    if (til[i] < 100) {
        var tilDiff = 100 - til[i];
        //var tilTotal = tilDiff + til[i];
        console.log("Product: ", product[i], "   ", "BOO Adjustment: ", tilDiff);



    }
}
