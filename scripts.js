var video = document.getElementById("myVideo");

var bmonth = prompt("Enter your Birth Month","Ex. January/Jan");
var bday = parseInt(prompt("Enter your Birth Date","Ex. 07"));

// January
if( bmonth == "January" || bmonth == "january" || bmonth == "Jan"|| bmonth == "jan"){
    if(bday <= 19){
        //Capricorn
        document.write("<img src='./zodiacs/Capri.gif'> ")
    }
    else if(bday >=20 && bday <=31 ){
        //Aquarius
        document.write("<img src='./zodiacs/Aqua.gif'> ")
    }
    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    }
}
// Febuary
else if(bmonth == "Febuary" || bmonth == "febuary" || bmonth == "Feb"|| bmonth == "feb"){
    if(bday <= 19){
        //Aquarius
        document.write("<img src='./zodiacs/Aqua.gif'> ")
    }
    else if(bday >=20 && bday <=29){
        //Pisces
        document.write("<img src='./zodiacs/Pisces.gif'> ")
    }
    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    }

}
// March
else if(bmonth == "March" || bmonth == "march" || bmonth == "Mar"|| bmonth == "mar"){
    if(bday <= 20){
        //Pisces
        document.write("<img src='./zodiacs/Pisces.gif'> ")
    }
    else if(bday >=21 && bday <=31){
        //Aries
        document.write("<img src='./zodiacs/Aries.gif'> ")
    }

    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    }
}
// April
else if(bmonth == "April" || bmonth == "april" || bmonth == "Apr"|| bmonth == "apr"){
    if(bday <= 19){
        //Aries
        document.write("<img src='./zodiacs/Aries.gif'> ");
    }
    else if(bday >=20 && bday <=31){
        //Taurus
        document.write("<img src='./zodiacs/Taurus.gif'> ");
    }

    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    }
}
// May
else if(bmonth == "May" || bmonth == "may"){
    if(bday <= 20){
        //Taurus
        document.write("<img src='./zodiacs/Taurus.gif'> ");
    }
    else if(bday >=21 && bday <=31){
        //Gemini
        document.write("<img src='./zodiacs/Gemini.gif'> ");
    }
    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    }
}
// June
else if(bmonth == "June" || bmonth == "june" || bmonth == "Jun" || bmonth == "jun"){
    if(bday <= 20){
       //Gemini
       document.write("<img src='./zodiacs/Gemini.gif'> ");
    }
    else if(bday >=21 && bday <=31){
        //Cancer
        document.write("<img src='./zodiacs/Cancer.gif'> ");
    }

    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    }
}
// July
else if(bmonth == "July" || bmonth == "july" || bmonth == "Jul" || bmonth == "jul"){
    if(bday <= 22){
        //Cancer
        document.write("<img src='./zodiacs/Cancer.gif'> ");;
    }
    else if(bday >=23 && bday <=31){
        //Leo
        document.write("<img src='./zodiacs/Leo.gif'> ");
    }

    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    }
}
// August
else if(bmonth == "August" || bmonth == "august" || bmonth == "Aug" || bmonth == "aug"){
    if(bday <= 22){
        //Leo
        document.write("<img src='./zodiacs/Leo.gif'> ");
    }
    else if(bday >=23 && bday <=31){
        //Virgo
        document.write("<img src='./zodiacs/Virgo.gif'> ");
    }

    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    } 
}
// September
else if(bmonth == "September" || bmonth == "september" || bmonth == "Sep" || bmonth == "sep"){
    if(bday <= 22){
        //Virgo
        document.write("<img src='./zodiacs/Virgo.gif'> ");
    }
    else if(bday >=23 && bday <=31 ){
        //Libra
        document.write("<img src='./zodiacs/Libra.gif'> ");
    }

    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    } 
}
// October
else if(bmonth == "October" || bmonth == "october" || bmonth == "Oct" || bmonth == "oct"){
if(bday <= 22){
        //Libra
        document.write("<img src='./zodiacs/Libra.gif'> ");
    }
    else if(bday >=23 && bday <=31){
        //Scorpio
        document.write("<img src='./zodiacs/Scorpio.gif'> ");
    }

    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    } 
}
// November
else if(bmonth == "November" || bmonth == "november" || bmonth == "Nov" || bmonth =="nov"){
    if(bday <= 21){
       //Scorpio
       document.write("<img src='./zodiacs/Scorpio.gif'> ");
    }
    else if(bday >=22 && bday <=31 ){
        //Saggitarius
        document.write("<img src='./zodiacs/Saggitarius.gif'> ");
    }

    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    } 
}
// December
else if(bmonth == "December" || bmonth == "december" || bmonth == "Dec" || bmonth=="dec"){
    if(bday <= 21){
        //Saggitarius
        document.write("<img src='./zodiacs/Saggitarius.gif'> ");;
    }
    else if(bday >=22 && bday <=31){
        //Capricorn
        document.write("<img src='./zodiacs/Capri.gif'> ")
    }

    else{
        //Invalid Input
        document.write("<img src='./zodiacs/Error.gif'>")
    } 
}




else{
    //Invalid Input
    document.write("<img src='./zodiacs/Error.gif'>")
}
