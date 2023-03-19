let newNumber = localStorage.getItem("Logged In");
let account = localStorage.getItem(newNumber);
let object = JSON.parse(account);

age = object.Uage;
weight = object.Uweight;
height = object.Uheight;
sex = object.Usex;
        
activityLevel = object.UactivityLevel;

        
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

object.minimumProtein =  proteinMinimal;
object.maximumProtein =  proteinMaximum;


object.loss =  mCalories - 200;        
object.maintenance =  mCalories;
object.gain = mCalories + 200;


let stringed = JSON.stringify(object);
console.log(stringed);
localStorage.setItem(newNumber, stringed);
    
