
const nums = document.querySelectorAll('.num');
let speed = 300;

nums.forEach((num) => {
    const updateCount = () => {
        const target = parseInt(+num.getAttribute('data-val'));
        const count = +num.innerHTML;
        const inc = target / speed;
        if(count < target){
            num.innerHTML = Math.floor(count + inc);
            setTimeout(updateCount, 1);
        }else{
            num.innerHTML = target+"+";
        }
    }
    updateCount();
});

const number = document.querySelectorAll('.numbers');
let speeds = 1;

number.forEach((number) => {
    const updateCount = () => {
        const target = parseInt(+number.getAttribute('data-val'));
        const count = +number.innerHTML;
        const inc = target / speeds;
        if(count < target){
            number.innerHTML = Math.floor(count + inc);
            setTimeout(updateCount, 10000);
        }else{
            number.innerHTML = target+"+";
        }
    }
    updateCount();
});

function changeImage(id) {
    var element = document.getElementById(id);

    if (element.id.match("about")) {
        document.getElementById("header").style.backgroundImage = "url(images/about/1.png)";
        document.getElementById("Logo").src = "/images/Logo/WhiteLogo.png";
        document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
        document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
        document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
        document.getElementById("navClients").style.setProperty('color', 'white', 'important');
        document.getElementById("navLang").style.setProperty('color', 'white', 'important');
        document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
        document.getElementById("navLang").style.setProperty('color', 'white', 'important');
        document.getElementById("navContact").style.setProperty('color', 'white', 'important');
    } else if (element.id.match("revenue")) {
        document.getElementById("header").style.backgroundImage = "url(images/about/2.png)";
        document.getElementById("Logo").src = "/images/Logo/BlackLogo.png";
        document.getElementById("navRevenue").style.setProperty('color', 'black', 'important');
        document.getElementById("navInvestment").style.setProperty('color', 'black', 'important');
        document.getElementById("navImpact").style.setProperty('color', 'black', 'important');
        document.getElementById("navClients").style.setProperty('color', 'black', 'important');
        document.getElementById("navAwards").style.setProperty('color', 'black', 'important');
        document.getElementById("navLang").style.setProperty('color', 'black', 'important');
        document.getElementById("navContact").style.setProperty('color', 'black', 'important');
    } else if (element.id.match("objectives")) {
        document.getElementById("Logo").src = "/images/Logo/WhiteLogo.png";
        document.getElementById("header").style.backgroundImage = "url(images/about/3.png)";
        document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
        document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
        document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
        document.getElementById("navClients").style.setProperty('color', 'white', 'important');
        document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
        document.getElementById("navLang").style.setProperty('color', 'white', 'important');
        document.getElementById("navContact").style.setProperty('color', 'white', 'important');
        } else if (element.id.match("vision")) {
        document.getElementById("header").style.backgroundImage = "url(images/about/4.png)";
        document.getElementById("Logo").src = "/images/Logo/BlackLogo.png";
        document.getElementById("navRevenue").style.setProperty('color', 'black', 'important');
        document.getElementById("navInvestment").style.setProperty('color', 'black', 'important');
        document.getElementById("navImpact").style.setProperty('color', 'black', 'important');
        document.getElementById("navClients").style.setProperty('color', 'black', 'important');
        document.getElementById("navAwards").style.setProperty('color', 'black', 'important');
        document.getElementById("navLang").style.setProperty('color', 'black', 'important');
        document.getElementById("navContact").style.setProperty('color', 'black', 'important');

        } else if (element.id.match("history")) {
        document.getElementById("header").style.backgroundImage = "url(images/about/5.png)";
        document.getElementById("Logo").src = "/images/Logo/BlackLogo.png";
        document.getElementById("navRevenue").style.setProperty('color', 'black', 'important');
        document.getElementById("navInvestment").style.setProperty('color', 'black', 'important');
        document.getElementById("navImpact").style.setProperty('color', 'black', 'important');
        document.getElementById("navClients").style.setProperty('color', 'black', 'important');
        document.getElementById("navAwards").style.setProperty('color', 'black', 'important');
        document.getElementById("navLang").style.setProperty('color', 'black', 'important');
        } else if (element.id.match("journey")) {
        document.getElementById("Logo").src = "/images/Logo/WhiteLogo.png";
        document.getElementById("header").style.backgroundImage = "url(images/about/6.png)";
        document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
        document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
        document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
        document.getElementById("navClients").style.setProperty('color', 'white', 'important');
        document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
        document.getElementById("navLang").style.setProperty('color', 'white', 'important');
        document.getElementById("navContact").style.setProperty('color', 'white', 'important');
        } else if (element.id.match("mission")) {
        document.getElementById("Logo").src = "/images/Logo/WhiteLogo.png";
        document.getElementById("header").style.backgroundImage = "url(images/about/7.png)";
        document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
        document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
        document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
        document.getElementById("navClients").style.setProperty('color', 'white', 'important');
        document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
        document.getElementById("navLang").style.setProperty('color', 'white', 'important');
        document.getElementById("navContact").style.setProperty('color', 'white', 'important');
        } else if (element.id.match("founder")) {
        document.getElementById("header").style.backgroundImage = "url(images/about/father_of_founders_bg.png)";
        document.getElementById("Logo").src = "/images/Logo/BlackLogo.png";
        document.getElementById("navRevenue").style.setProperty('color', 'black', 'important');
        document.getElementById("navInvestment").style.setProperty('color', 'black', 'important');
        document.getElementById("navImpact").style.setProperty('color', 'black', 'important');
        document.getElementById("navClients").style.setProperty('color', 'black', 'important');
        document.getElementById("navAwards").style.setProperty('color', 'black', 'important');
        document.getElementById("navLang").style.setProperty('color', 'black', 'important');
        document.getElementById("navContact").style.setProperty('color', 'black', 'important');
    }

}

const mQuery = window.matchMedia('(max-width: 500px)');
if(mQuery.matches){
    function changeImage(id) {
        var element = document.getElementById(id);
    
        if (element.id.match("about")) {
            document.getElementById("header").style.backgroundImage = "url(images/about/1.png)";
            document.getElementById("Logo").src = "/images/Logo/WhiteLogo.png";
            document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
            document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
            document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
            document.getElementById("navClients").style.setProperty('color', 'white', 'important');
            document.getElementById("navLang").style.setProperty('color', 'white', 'important');
            document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
            document.getElementById("navLang").style.setProperty('color', 'white', 'important');
            document.getElementById("navContact").style.setProperty('color', 'white', 'important');
        } else if (element.id.match("revenue")) {
            document.getElementById("header").style.backgroundImage = "url(images/about/2.png)";
            document.getElementById("Logo").src = "/images/Logo/BlackLogo.png";
            document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
            document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
            document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
            document.getElementById("navClients").style.setProperty('color', 'white', 'important');
            document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
            document.getElementById("navLang").style.setProperty('color', 'white', 'important');
            document.getElementById("navContact").style.setProperty('color', 'white', 'important');
        } else if (element.id.match("objectives")) {
            document.getElementById("Logo").src = "/images/Logo/WhiteLogo.png";
            document.getElementById("header").style.backgroundImage = "url(images/about/3.png)";
            document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
            document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
            document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
            document.getElementById("navClients").style.setProperty('color', 'white', 'important');
            document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
            document.getElementById("navLang").style.setProperty('color', 'white', 'important');
            document.getElementById("navContact").style.setProperty('color', 'white', 'important');
            } else if (element.id.match("vision")) {
            document.getElementById("header").style.backgroundImage = "url(images/about/4.png)";
            document.getElementById("Logo").src = "/images/Logo/BlackLogo.png";
            document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
            document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
            document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
            document.getElementById("navClients").style.setProperty('color', 'white', 'important');
            document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
            document.getElementById("navLang").style.setProperty('color', 'white', 'important');
            document.getElementById("navContact").style.setProperty('color', 'white', 'important');
    
            } else if (element.id.match("history")) {
            document.getElementById("header").style.backgroundImage = "url(images/about/5.png)";
            document.getElementById("Logo").src = "/images/Logo/BlackLogo.png";
            document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
            document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
            document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
            document.getElementById("navClients").style.setProperty('color', 'white', 'important');
            document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
            document.getElementById("navLang").style.setProperty('color', 'white', 'important');
            } else if (element.id.match("journey")) {
            document.getElementById("Logo").src = "/images/Logo/WhiteLogo.png";
            document.getElementById("header").style.backgroundImage = "url(images/about/6.png)";
            document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
            document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
            document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
            document.getElementById("navClients").style.setProperty('color', 'white', 'important');
            document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
            document.getElementById("navLang").style.setProperty('color', 'white', 'important');
            document.getElementById("navContact").style.setProperty('color', 'white', 'important');
            } else if (element.id.match("mission")) {
            document.getElementById("Logo").src = "/images/Logo/WhiteLogo.png";
            document.getElementById("header").style.backgroundImage = "url(images/about/7.png)";
            document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
            document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
            document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
            document.getElementById("navClients").style.setProperty('color', 'white', 'important');
            document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
            document.getElementById("navLang").style.setProperty('color', 'white', 'important');
            document.getElementById("navContact").style.setProperty('color', 'white', 'important');
            } else if (element.id.match("founder")) {
            document.getElementById("header").style.backgroundImage = "url(images/about/father_of_founders_bg.png)";
            document.getElementById("Logo").src = "/images/Logo/BlackLogo.png";
            document.getElementById("navRevenue").style.setProperty('color', 'white', 'important');
            document.getElementById("navInvestment").style.setProperty('color', 'white', 'important');
            document.getElementById("navImpact").style.setProperty('color', 'white', 'important');
            document.getElementById("navClients").style.setProperty('color', 'white', 'important');
            document.getElementById("navAwards").style.setProperty('color', 'white', 'important');
            document.getElementById("navLang").style.setProperty('color', 'white', 'important');
            document.getElementById("navContact").style.setProperty('color', 'white', 'important');
        }
    
    }
    
}