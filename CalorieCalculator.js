age = parseInt(localStorage.getItem("age"));
weight = parseFloat(localStorage.getItem("weight"));
height = parseFloat(localStorage.getItem("height"))
sex = localStorage.getItem("sex");
        
activityLevel = localStorage.getItem("activity level")

        
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
proteinMaximum = (weight * 1.2 * activityFactor * sexFacto);

localStorage.setItem("Minimum Protein", proteinMinimal);
localStorage.setItem("Maximum Protein", proteinMaximum);


localStorage.setItem("loss", mCalories - 200);        
localStorage.setItem("maintenance", mCalories);
localStorage.setItem("gain", mCalories + 200);

console.log(localStorage);