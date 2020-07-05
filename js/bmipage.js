var main = document.getElementById('main_section');
var target = document.getElementById('t_h_r');
var general = document.getElementById('g_f_r');
var interval = document.getElementById('i_h_r');

// button
var mainbtn = document.getElementById('main_section_btn');
var targetbtn = document.getElementById('t_h_r_btn');
var generalbtn = document.getElementById('g_f_r_btn');
var intervalbtn = document.getElementById('i_h_r_btn');
var targetback1 = document.getElementById('t_h_r_prev1');
var targetback2 = document.getElementById('t_h_r_prev2');

// hide other elements
target.classList.add('hide');general.classList.add('hide');interval.classList.add('hide');

function handleSection(btn,show,hide){
    btn.addEventListener('click',()=>{
        hide.classList.add('hide');
        show.classList.remove('hide');
    })
}

handleSection(targetbtn,target,main);handleSection(mainbtn,main,target);
handleSection(generalbtn,general,target);handleSection(targetback1,target,general);
handleSection(intervalbtn,interval,target);handleSection(targetback2,target,interval);


// MOBILE-NAV HEADER EFFECT
var navbtn = document.getElementsByClassName('nav_btn');
var join_us_btn = document.getElementsByClassName('outside_btn_nav_qobi');
var tp = document.getElementsByClassName('inside_btn_nav_qobi');
var nav = document.getElementsByClassName('main_nav_mb');


for(let i=0; i < nav.length; i++){
    if(window.innerWidth < 780){
        navbtn[i].addEventListener('click',()=>{
            setTimeout(()=>{
                if(nav[i].clientHeight > 400){
                join_us_btn[i].style.transition = ".4s ease-out";
                join_us_btn[i].style.opacity = 0;
                    tp[i].style.transition = ".4s ease-out";
                    tp[i].style.opacity = 1;
                }
                if(nav[i].clientHeight < 95){
                join_us_btn[i].style.transition = ".4s ease-in";            
                join_us_btn[i].style.opacity = 1;
                    tp[i].style.transition = ".4s ease-in";            
                    tp[i].style.opacity = 0;
                }
            },500)
        })
    }else{
        join_us_btn[i].style.transition = ".4s ease-in";            
        join_us_btn[i].style.opacity = 1;
    }
}

// BMI CALCULATOR
var feet  = document.getElementById('feet-qobi');
var inches = document.getElementById('inches-qobi');
var weight = document.getElementById('weight-qobi')
var feeterror = document.getElementById('feet-error-qobi');
var incheserror = document.getElementById('inches-error-qobi');
var weighterror = document.getElementById('weight-error-qobi');
var calculate = document.getElementById('bmi-calculate-btn-qobi');
var result = document.getElementById('bmi-result-qobi');

function handleInput(input,min,max,txt){
    let inputerror = false;
        var x = input.value;
        if(isNaN(x) || x < min || x > max){
            txt.innerHTML = "Input not valid";    
            input.style.border = "1px solid red"
            inputerror = false;
        }else{
            txt.innerHTML = "";
            input.style.border = "1px solid green"
            inputerror = true;          
        }
    return inputerror;
}

function handleInputFocus(input,min,max,txt){
    input.addEventListener('focusout',()=>{
        var x = input.value;
        if(isNaN(x) || x < min || x > max){
            txt.innerHTML = "Input not valid";    
            input.style.border = "1px solid red"
        }else{
            txt.innerHTML = "";
            input.style.border = "1px solid green"
        }
    })
}

// validate height - feet
handleInputFocus(feet,1,9,feeterror)
    
// validate height - inches
handleInputFocus(inches,0,11,incheserror)

// validate weight - pounds
handleInputFocus(weight,80,800,weighterror)

// CALCULATE BMI
// 1 foot = 12 inches
// 1 inch = 2.54 cm
// 1 square centimeter = 0.0001 square meters 

function calculateBMI(){
    // validate height - feet
    let feetresult = handleInput(feet,1,9,feeterror)
    
    // validate height - inches
    let inchesresult = handleInput(inches,0,11,incheserror)
    
    // validate weight - pounds
    let weightresult = handleInput(weight,80,800,weighterror)
    
    if(feetresult && inchesresult && weightresult){
        let cm = (((feet.value * 12) + inches.value) * 2.54);
        result.innerHTML = (weight.value /((cm*cm) * 0.0001)) 
    }
}

calculate.addEventListener('click',()=>{
    event.preventDefault();
    calculateBMI();
})
