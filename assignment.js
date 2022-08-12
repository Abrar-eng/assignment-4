// 1. radianToDegree
// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

// function declare and set function parameter
function radianToDegree(radian){
// checking weather parameter value valid or not
    if(typeof radian === 'number' && radian >=0){
// formula for convert parameter
        const degree = radian * (180 /Math.PI);
        return degree.toFixed(2);
    }else return "Error!! Please Input number";
}

// show the output value
console.log(radianToDegree(1));



// 2.isJavaScriptFile
// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 


// function declare and set function parameter
function checkFiles(fileName){
    if (typeof fileName !== 'string'){
        return 'Error!! Please Input string'; 
    }
    let extension = fileName.substring(fileName.lastIndexOf('.') + 1);
// checking the value true or false
    if(extension == 'js'){
        return true; //if the codition matching then return true.
    }
    else{
        return false; //if the codition not matching then return false.
    }
}
// Show the Output
console.log(checkFiles("index.js"));



//3. oilPrice
// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। ভিডিও ভালো করে দেখবে। প্রতি লিটার ডিজেলের এর দাম – 114 টাকা . প্রতি লিটার পেট্রোল এর দাম – 130. টাকা প্রতি লিটার অকটেনের এর দাম – 135 টাকা . 
// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।


//Function declare and set 3 parameters.
function oilPrice(DieselQuantity, PetrolQuantity, OctaneQuantity){
//Checking Whether parameter input value is valid or not. 
    if(typeof DieselQuantity !== 'number' || typeof PetrolQuantity !== 'number' || typeof OctaneQuantity !== 'number'){
        return 'Error!! Please Input number'; 
    }
    const perLitreDiesel = 114; // store Diesel price for per liter in perLitreDiesel variable.
    const perLitrePetrol = 130; // store Petrol price for per liter in perLitrePetrol variable.
    const perLitreOctane = 135; // store Octane price for per liter in perLitreOctane variable.

    // Calculatng the total price for different liter for Diesel,Petrol and Octane and store the value in variable.
    const Diesel = DieselQuantity * perLitreDiesel;
    const Petrol = PetrolQuantity * perLitrePetrol;
    const Octane = OctaneQuantity * perLitreOctane;
    //Calculatng the Total price for all Types of Oil(Diesel,Petrol,Octane).
    const totalPrice = Diesel + Petrol + Octane;
    return totalPrice;
}
const totalPrice = oilPrice(1,1,1);
console.log("Total Cost: ", totalPrice);



// 4.publicBusFare
// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে । প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে)  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 


// function declare
function publicBusFare(peopleCount){
// checking weather parameter value valid or not   
    if(typeof peopleCount === 'number' ){
// formula for convert parameter
        let publicBusRider = ((peopleCount % 50) % 11) * 250;
        return publicBusRider;
    }else return "Error!! Please Input number"   
}
// show the output value
console.log(publicBusFare(3));



// 5.isBestFriend
// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।


//Function declare and set function parameter.
function isBestFriend(firstObject,secondObject){ 
//Checking Whether the parameter value is valid or not.
    if(typeof firstObject !== 'object' || typeof secondObject !== 'object'){
        return 'Please provide a Object';
    }
    // Matching the condition between two objects.
    if(firstObject.name==secondObject.friend && secondObject.name==firstObject.friend){
        return true; //if the codition matching then return true.
    }else{
        return false;//if the codition not matching then return false.
    }
}
//function call and set the parameter value as object.
const Two_Object=isBestFriend({name:'Abrar',friend:'Asif'},{name:'Asif',friend:'Abrar'});
//show the output value.
console.log(Two_Object);

