button = document.getElementById("button");
measureScale = document.getElementById("measureScale");
container = document.getElementById("container");
weight = document.getElementById("weightPounds");
male = document.getElementById("male");
female = document.getElementById("female");

accountNumber = localStorage.getItem("Logged In");
myAccount = localStorage.getItem(accountNumber);

let myObject = JSON.parse(myAccount);
userName = myObject.name;
userPass = myObject.pass;
counter = myObject.number;
dateCounter = myObject.dateNumber;




// creates feet and inches elements in DOM. feet element will also be used for centimeters input to avoid redundancy
let feet = document.createElement("input");
let inches = document.createElement("input");

feet.setAttribute("id", "heightCentimeters");
feet.setAttribute("type", "text");
feet.setAttribute("placeholder", "Centimeters");

inches.setAttribute("id", "heightInches");
inches.setAttribute("type", "text");
inches.setAttribute("placeholder", "Inches");

container.prepend(feet);

// listens for submit button
button.addEventListener("click", () =>{
    age = document.getElementById("age").value;  //takes age input

    // takes weight inputs and parses them as float values
    feet = parseFloat(feet.value);
    inches = parseFloat(inches.value);
    weight =  parseFloat(weight.value);
    activityLevel = document.getElementById("activityLevel").value;

    // declares diagnosis and bmi value
    let diagnosis = "", bmiValue = 0;

    // sets gender depending on selected radio button
    if (male.checked == true) gender = "male";
    else if (female.checked == "true") gender = "female";
    else gender = "no gender was selected";

    // adjusts calculation of inputs depending on measurement system
    if(measureScale.value == "Imperial System"){
        totalHeight = (feet * 12) + inches;
        bmiValue = (weight / (totalHeight ** 2)) * 703
        height = ITM_Height(feet, inches);
        weight = ITM_Weight(weight);
    }
    else if(measureScale.value == "Metric System"){
        totalHeight = feet * 0.01;
        height = feet;
        bmiValue = (weight / (totalHeight ** 2)); 
    }

    // rounds off bmi value to 1 decimal place
    bmiValue = bmiValue.toFixed(1);

    // creates diagnosis for calculated bmi value
    if (bmiValue > 30) diagnosis = "OBESE";
    else if (bmiValue  >= 25 && bmiValue < 30) diagnosis = "OVERWEIGHT";
    else if ( bmiValue >= 18.5 && bmiValue < 25) diagnosis = "of HEALTHY WEIGHT";
    else if (bmiValue < 18.5) diagnosis = "UNDERWEIGHT";

    // stores all of the data gathered in local storage

    currentDate = new Date().toLocaleDateString();
    userObject = {
        name: userName,
        pass: userPass,
        number : counter + 1,
        dateNumber: dateCounter + 1,
        Ubmi: bmiValue,
        Udiagnosis: diagnosis,
        Uheight: height,
        Uweight: weight,
        Usex: gender,
        UactivityLevel: activityLevel,
        Uage: age
    }

    for(i = 0; i < counter; i++){
        userObject[i] = myObject[i];
    }

    for(j = 10; j < dateCounter; j++){
        userObject[j] = myObject[j];
    }
    userObject[dateCounter] = currentDate;
    userObject[counter] = weight;


    let stringed = JSON.stringify(userObject);
    localStorage.setItem(accountNumber, stringed);
    
    console.log(localStorage);

    window.location.href = "BMIScore.html";

})

// listens for changes in the dropdown list and changes placeholder and number of input needed
measureScale.addEventListener("change" , () =>{
    if(measureScale.value == "Metric System"){
        inches.remove();

        feet.setAttribute("placeholder", "Centimeters");
        feet.setAttribute("id", "heightCentimeters");

        weight.setAttribute("placeholder", "Kilograms");
        weight.setAttribute("id", "weight")
    }
    else if(measureScale.value == "Imperial System"){
        container.prepend(inches);
        container.prepend(feet);

        feet.setAttribute("placeholder", "Feet");
        feet.setAttribute("id", "heightFeet");

        inches.setAttribute("id", "heightInches");
        weight.setAttribute("placeholder", "Pounds");
    }
})

function ITM_Height(feet, inches){

    height = 2.54 * ((feet * 12) + inches);
    return height;
}

function ITM_Weight(pounds){
    weight = pounds / 2.205;
    return weight;
}