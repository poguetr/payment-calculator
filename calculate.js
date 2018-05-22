// JavaScript Document
// PayPal variables commented out but these lines will prepopulate fields in a PayPal button form
function calculate()
{
	golfPrice = document.getElementById("golf-and-dinner-price").value;
        golfQuantity = document.getElementById("golf-and-dinner-quantity").value;
	if (isNaN(golfQuantity)) { 
		golfQuantity = 0;
		document.getElementById("golf-and-dinner-quantity").value = "error"; 
		}
	golfTotal = golfPrice * golfQuantity;
        document.getElementById("golfTotal").innerHTML = golfTotal; //display in table
        //document.getElementById("golf-quantity").value = golfQuantity; //PayPal variable

        dinnerPrice = document.getElementById("dinner-only-price").value;
        dinnerQuantity = document.getElementById("dinner-only-quantity").value;
	if (isNaN(dinnerQuantity)) { 
		dinnerQuantity = 0;
		document.getElementById("dinner-only-quantity").value = "error"; 
		}
	dinnerTotal = dinnerPrice * dinnerQuantity;
        document.getElementById("dinnerTotal").innerHTML = dinnerTotal; //display in table
        //document.getElementById("dinner-quantity").value = dinnerQuantity; //PayPal variable

	sponsorshipAmount = document.getElementById("sponsorship-amount").value;
	if (isNaN(sponsorshipAmount)) { 
		sponsorshipAmount = 0;
		document.getElementById("sponsorshipAmount").value = "error"; 
		}
	sponsorshipTotal = sponsorshipAmount * 1; //converts to integer
        document.getElementById("sponsorshipTotal").innerHTML = sponsorshipTotal; //display in table
        //document.getElementById("sponsorship").value = sponsorshipTotal; //PayPal variable

        donationAmount = document.getElementById("donation-amount").value * 1; 
	if (isNaN(donationAmount)) { 
		donationAmount = 0;
		document.getElementById("donationAmount").value = "error"; 
		}
	donationTotal = donationAmount * 1; //converts to integer
        document.getElementById("donationTotal").innerHTML = donationTotal; //display in table
        //document.getElementById("donation").value = donationTotal; //PayPal variable
		
	grandTotal = golfTotal + dinnerTotal + sponsorshipTotal + donationTotal;

        document.getElementById("grandTotal").innerHTML = grandTotal;
        document.getElementById("paypalAmount").value = grandTotal;
	//for testing purposes, set total = $2.00 below
        //document.getElementById("paypalAmount").value = 2; //TEMPORARY, for test transactions
}
