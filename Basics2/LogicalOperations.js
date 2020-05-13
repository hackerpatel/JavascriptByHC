// && -AND operator - Both or every(for two or more) sides need to be true
// || - OR operation - One side need to be true

let isVerified = false;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

/*variable ni agal ! kariye to e reverse thai jay means true aapyu hoy to
false thai jay and false aapyu hoy to true thai jay*/ 

if(!isVerified && isLoggedIn && hasPaymentToken) { 
    console.log("Greeting message to user");
    console.log("Grant access to paid course");
} else if(isVerified || isGuest) { 
    console.log("Allow free previews");
} else {
    console.log("MESSAGE: please contact admin");
}