function changeImage(id) {
    var element = document.getElementById(id);

    if (element.id.match("about")) {
        document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/whispers.png)";
        document.getElementById("Logo").src = "/images/Logo/BlackLogo.png";
        document.getElementById("navRevenue").style.setProperty('color', 'black', 'important');
        document.getElementById("navInvestment").style.setProperty('color', 'black', 'important');
        document.getElementById("navImpact").style.setProperty('color', 'black', 'important');
        document.getElementById("navClients").style.setProperty('color', 'black', 'important');
        document.getElementById("navAwards").style.setProperty('color', 'black', 'important');
        document.getElementById("navLang").style.setProperty('color', 'black', 'important');

    } else if (element.id.match("revenue")) {
        document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/franchisor.png)";

    } else if (element.id.match("objectives")) {
        document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/BF.png)";

    } else if (element.id.match("vision")) {
        document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/kayan.png)";

    } else if (element.id.match("history")) {
        document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/gra.png)";

    } else if (element.id.match("journey")) {
        document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/exit99.png)";


    }

}
const mQuery = window.matchMedia('(max-width: 500px)');
if(mQuery.matches){
    function changeImage(id) {
        var element = document.getElementById(id);
    
        if (element.id.match("about")) {
            document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/bg/whispers.png)";
            document.getElementById("Logo").src = "/images/Logo/BlackLogo.png";
            document.getElementById("navRevenue").style.setProperty('color', '#fff', 'important');
            document.getElementById("navInvestment").style.setProperty('color', '#fff', 'important');
            document.getElementById("navImpact").style.setProperty('color', '#fff', 'important');
            document.getElementById("navClients").style.setProperty('color', '#fff', 'important');
            document.getElementById("navAwards").style.setProperty('color', '#fff', 'important');
            document.getElementById("navLang").style.setProperty('color', '#fff', 'important');
    
        } else if (element.id.match("revenue")) {
            document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/bg/franc.png)";
    
        } else if (element.id.match("objectives")) {
            document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/bg/Brand.png)";
    
        } else if (element.id.match("vision")) {
            document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/bg/kayan.png)";
    
        } else if (element.id.match("history")) {
            document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/bg/GRA.png)";
    
        } else if (element.id.match("journey")) {
            document.getElementById("header").style.backgroundImage = "url(/images/InestmentLogo/inv/bg/exit.png)";
    
    
        }
    
    }
}