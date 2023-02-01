function countUp () {
    var numbers = 87.6,
        i = 0,
        interval = setInterval(function () {
            i = +(i + 0.1).toFixed(1);
            document.getElementById('counter').innerHTML = i;
            if (i >= +numbers) { 
               clearInterval(interval );           
            }          
        }, 2);
}

countUp(); 

function countUp1 () {
    var numbers = 39.3,
        i = 1.6,
        interval = setInterval(function () {
            i = +(i + 0.1).toFixed(1);
            document.getElementById('counter1').innerHTML = i;
            if (i >= +numbers) { 
               clearInterval(interval );           
            }          
        }, 10);
}

countUp1(); 

function countUp2 () {
    var numbers = 28.4,
        i = 2.3,
        interval = setInterval(function () {
            i = +(i + 0.1).toFixed(1);
            document.getElementById('counter2').innerHTML = i;
            if (i >= +numbers) { 
               clearInterval(interval );           
            }          
        }, 10);
}

countUp2(); 

function countUp3 () {
    var numbers = 15.1,
        i = 1.1,
        interval = setInterval(function () {
            i = +(i + 0.1).toFixed(1);
            document.getElementById('counter3').innerHTML = i;
            if (i >= +numbers) { 
               clearInterval(interval );           
            }          
        }, 10);
}

countUp3(); 