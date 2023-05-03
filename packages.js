//Assigning variable for output message
let packageMsg = document.getElementById("msgout");
let packageImg = document.getElementById("imgout");
let packagePrc = document.getElementById("priceout");
let packageHdn = document.getElementById("headingout");

//Assigning variable for output message
let packageMsg2 = document.getElementById("msgout-2");
let packageImg2 = document.getElementById("imgout-2");
let packagePrc2 = document.getElementById("priceout-2");
let packageHdn2 = document.getElementById("headingout-2");

function packageChoice(value){

    //If, Else-If statements for comparing the values and displaying message
    if (value === "Print Package One"){

        packageMsg.innerHTML = `${value} includes a One-hour professional studio photo session with different outfits, styles and backgrounds.<br> Choose your favourite image to be printed at 12 x 8”.`;
        packageImg.src="elements/package-1.jpg";
        packagePrc.innerHTML = `£60.00`;
        packageHdn.innerHTML = `${value}`;


    }else if (value === "Print Package Two"){

        packageMsg.innerHTML = `${value} includes a One-hour professional studio photo session with different outfits, styles and backgrounds.<br> Choose your favourite image to be printed at 18 x 12”.`;
        packageImg.src="elements/package-1.jpg";
        packagePrc.innerHTML = `£80.00`;
        packageHdn.innerHTML = `${value}`;

    }
    else if (value === "Print Package Three"){

        packageMsg.innerHTML = `${value} includes a One-hour professional studio photo session with different outfits, styles and backgrounds. Choose your favourite image to be printed at 18 x 12” plus 2 others at 12×8′′`;
        packageImg.src="elements/package-1.jpg";
        packagePrc.innerHTML = `£125.00`;
        packageHdn.innerHTML = `${value}`;
        
    }else if (value === "Digital Package One"){

        packageMsg.innerHTML = `${value} includes a One-hour professional studio photo session with different outfits, styles and backgrounds. Choose your ten favourite images online, in your own time and in the peace of your own home. Your chosen images will be fully retouched and supplied digitally.`;
        packageImg.src="elements/package-1.jpg";
        packagePrc.innerHTML = `£190.00`;
        packageHdn.innerHTML = `${value}`;
        
    }else if (value === "Digital Package Two"){

        packageMsg.innerHTML = `${value} includes a One-hour professional studio photo session with different outfits, styles and backgrounds. Choose your 25 favourite images online, in your own time and in the peace of your own home. Your chosen images will be fully retouched and supplied digitally.`;
        packageImg.src="elements/package-1.jpg";
        packagePrc.innerHTML = `£250.00`;
        packageHdn.innerHTML = `${value}`;
        
    }else if (value === ""){

        packageMsg.innerHTML = `One-hour professional studio photo sessions are accompanied with a range of different outfits, styles and backgrounds.<br><br>Choose your ten favourite images in your own time and in the peace of your own home.<br>Your chosen images will be fully retouched according to your wishes.<br>`;
        packageImg.src="elements/package-0.jpg";
        packagePrc.innerHTML = ``;
        packageHdn.innerHTML = `STUDIO PACKAGES`;
        
    } // End of packageChoice

}

function packageChoice2(value){

    //If, Else-If statements for comparing the values and displaying message
    if (value === "Wedding Package"){

        packageMsg2.innerHTML = `Intuition and spontaneity are two key ingredients that I believe are crucial in making
        a great wedding photographer – the third ingredient is experience. Experience to know how to get great shots in pouring rain and gloomy light.`;
        packageImg2.src="elements/package-1.jpg";
        packagePrc2.innerHTML = `£400.00`;
        packageHdn2.innerHTML = `${value}`;


    }else if (value === "Child Portrait Package"){

        packageMsg2.innerHTML = `Jo has years of experience in producing beautiful classic portraits of children and their families to be treasured. No matter how many children you have, I can love to get to know them and capture their personalities. I take pictures of little people that show how beautiful they are.`;
        packageImg2.src="elements/package-1.jpg";
        packagePrc2.innerHTML = `£150.00`;
        packageHdn2.innerHTML = `${value}`;

    }
    else if (value === "Family Portrait Package"){

        packageMsg2.innerHTML = `Jo has years of experience in producing beautiful classic portraits of children and their families to be treasured. No matter how many children you have, I can love to get to know them and capture their personalities. I take pictures of little people that show how beautiful they are.`;
        packageImg2.src="elements/package-1.jpg";
        packagePrc2.innerHTML = `£225.00`;
        packageHdn2.innerHTML = `${value}`;
        
    }else if (value === ""){

        packageMsg2.innerHTML = `Years of experience and good expertise are what define your event photographs.<br> With time in the industry and many happy clients, Jo Smith Photography will surpass your expectations of excellence.<br> No matter the event all enquiries are welcome.`;
        packageImg2.src="elements/package-0.jpg";
        packagePrc2.innerHTML = ``;
        packageHdn2.innerHTML = `EVENT PACKAGES`;
        
    } // End of packageChoice

}