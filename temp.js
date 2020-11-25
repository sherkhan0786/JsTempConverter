//  Assigning values;
let celcius = 0;
let fahrenheit = 0;

// Adding preventDefault to hold from page refresh
btn.addEventListener("click", function(e) {
    e.preventDefault();
    let inp = document.getElementById('input').value;
    let opt = document.getElementById('opt').value;
    // debugger;

    // condition to check garbage value
    if(inp == '' || inp == ' ' || isNaN(inp)){
        
        document.getElementById('result').innerHTML = "Please Enter a valid temperature";
        // console.log("Please enter temp");
    }
    else
    {
        // Converting Celcius to Fahrenheit
        if (opt == 'Celcius') {
            fahrenheit = 5/9 * (inp - 32);
            document.getElementById('result').innerHTML = fahrenheit + "<sup>  o</sup>C";
        }
        else
        {
            // Converting Fahrenheit to Celcius
            celcius =  (9 * inp/5) + 32;
            document.getElementById('result').innerHTML = celcius + "<sup>  o</sup>F";
        }
    }
})