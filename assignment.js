// 1. radianToDegree
// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

function radianToDegree(radian){
    if(typeof radian === 'number' && radian >=0){
        const degree = radian * (180 /Math.PI);
        return degree.toFixed(2);
    }else return "Error!! Please Input number";
}

// console.log(radianToDegree(1));



// 2.isJavaScriptFile
// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

function checkFiles(){
    let extension = fileName.substring(fileName.lastIndexOf('.') + 1);
    if(extension == 'js'){
        return true;
    }
    else{
        return false;
    }
}
let fileName = 'index.js';
// console.log(checkFiles(fileName));

//3. oilPrice
// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। ভিডিও ভালো করে দেখবে। প্রতি লিটার ডিজেলের এর দাম – 114 টাকা . প্রতি লিটার পেট্রোল এর দাম – 130. টাকা প্রতি লিটার অকটেনের এর দাম – 135 টাকা . 
// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।

function oilPrice(DieselQuantity, PetrolQuantity, OctaneQuantity){
    if( typeof Diesel == 'number' && typeof Petrol == 'number' && typeof Octane == 'number'  ){
    const perLitreDiesel = 114;
    const perLitrePetrol = 130;
    const perLitreOctane = 135;

    const Diesel = DieselQuantity * perLitreDiesel;
    const Petrol = PetrolQuantity * perLitrePetrol;
    const Octane = OctaneQuantity * perLitreOctane;
    
    const totalCost = Diesel + Petrol + Octane;
    return totalCost;
    
}
else{
      return 'Check Input-requrement';
}
}
const totalCost = oilPrice(1,1,1);
// console.log("Total cost: ", totalCost);



// 4.publicBusFare
// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে । প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে)  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

function publicBusFare(peopleCount){
    if(typeof peopleCount === 'number' ){
        let publicBusRider = ((peopleCount % 50) % 11) * 250;
        return publicBusRider;
    }else return "Error!! Please Input number"   
}
console.log(publicBusFare(55));

// 5.isBestFriend
// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

function isBestFriend(){
    for(let i = 0; i < friends.length; i++){
        if(friends[i].name == friends[i+1].friend){
            return true;
        }
        else{
            return false;
        }
    }

}
const friends = [
    {name: 'Abrar', friend: 'Asif'},
    {name: 'Asif', friend: 'Abrar'}
];
const bestFriend = isBestFriend(friends);
// console.log(bestFriend);

