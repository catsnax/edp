accountNumber = localStorage.getItem("Logged In");
myAccount = localStorage.getItem(accountNumber);

let myObject = JSON.parse(myAccount);

age = myObject.Uage;
weight = myObject.Uweight;
height = myObject.Uheight;
sex = myObject.Usex;
        
activityLevel = myObject.UactivityLevel;

        
if(sex == "male"){
    mCalories = (10 * weight) + (6.25 * height) - (5 * age) + 5
    sexFactor = 1.1;
    }
        
if(sex == "female"){
    mCalories = (10 * weight) + (6.25 * height) - (5 * age) -161
    sexFactor = 1.0;
    }
        
console.log(mCalories);
        
switch(activityLevel){   
    case "Sedentary": 
        mCalories *= 1.17;
        activityFactor = 1.2;
        break;
    case "Moderately Active": 
        mCalories *= 1.45;
        activityFactor = 1.4;
        break;
    case "Vigorously Active":
        mCalories *= 1.57;
        activityFactor = 1.6;
        break;
    case "Extremely Active": 
        mCalories* 1.726;
        activityFactor = 1.8;
        break;
}

proteinMinimal = (weight * 0.8 * activityFactor * sexFactor);
proteinMaximum = (weight * 1.2 * activityFactor * sexFactor);

myObject.minimumProtein =  proteinMinimal;
myObject.maximumProtein =  proteinMaximum;


myObject.loss =  mCalories - 200;        
myObject.maintenance =  mCalories;
myObject.gain = mCalories + 200;


let stringed = JSON.stringify(myObject);
localStorage.setItem(accountNumber, stringed);
    
console.log(localStorage);