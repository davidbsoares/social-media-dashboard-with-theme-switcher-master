function activateDarkMode(){
    
    //Texto Branco
    var txtTitle = document.querySelector('.title-box-h1');
    var txtOverview = document.querySelector('.overview-h1');
    var txtBrdLft= document.querySelectorAll('.brd-lft-h1');
    var foll = document.querySelectorAll('.foll');

    // Texto Azul
    var titleBox = document.querySelector('.title-box-p');
    var follTxt = document.querySelectorAll('.foll-txt');
    var urlNathan = document.querySelectorAll('.url-nathan');
    var brdLftP = document.querySelectorAll('.brd-lft-p');
    var swtLabel = document.querySelector('.label-switch')

    // Background divs
    var socialMedia = document.querySelectorAll('.div-social-media');
    var details = document.querySelectorAll('.overview-boards');
    var bg = document.querySelector('.container');


    //switch    
    var swtValue=document.getElementById("dark-mode").checked;    
    
    if(swtValue === true){
        
        // Texto branco
        txtTitle.style.color = "white";
        txtOverview.style.color = "white";
        for (i=0; i < foll.length; i++){
            foll[i].style.color = "white";
        }

        for (i=0; i < txtBrdLft.length; i++){
            txtBrdLft[i].style.color = "white";
        }

        // Texto azul
        titleBox.style.color = "var(--color-desaturated-blue-text)";
        swtLabel.style.color = "var(--color-desaturated-blue-text)";
        for (i=0; i < follTxt.length; i++){
            follTxt[i].style.color = "var(--color-desaturated-blue-text)";
        }
        
        for (i=0; i < urlNathan.length; i++){
            urlNathan[i].style.color = "var(--color-desaturated-blue-text)";
        }

        for (i=0; i < brdLftP.length; i++){
            brdLftP[i].style.color = "var(--color-desaturated-blue-text)";
        }

        //Background divs
        for (i=0; i < socialMedia.length; i++){
            socialMedia[i].style.backgroundColor = "var(--color-dark-desaturated-blue-card-bg)";            
        };
                        
        for (i=0; i < details.length; i++){
            details[i].style.backgroundColor = "var(--color-dark-desaturated-blue-card-bg)";
        }

        bg.style.backgroundImage = 'linear-gradient(to bottom, var(--color-very-dark-blue-top-bg) 25%, var(--color-very-dark-blue-bg) 50%)'

    } else{

        // Texto preto
        txtTitle.style.color = "";
        txtOverview.style.color = "";
        for (i=0; i < foll.length; i++){
            foll[i].style.color = "";
        }
        for (i=0; i < txtBrdLft.length; i++){
            txtBrdLft[i].style.color = "";
        }

        // Texto azul
        titleBox.style.color = "";
        swtLabel.style.color = "";
        for (i=0; i < follTxt.length; i++){
            follTxt[i].style.color = "";
        };

        for (i=0; i < urlNathan.length; i++){
            urlNathan[i].style.color = "";
        };

        for (i=0; i < brdLftP.length; i++){
            brdLftP[i].style.color = "";
        };

        //Background divs
        for (i=0; i < socialMedia.length; i++){
            socialMedia[i].style.backgroundColor = "";
        }
        
        for (i=0; i < details.length; i++){
            details[i].style.backgroundColor = "";
        }

        bg.style.backgroundImage = "";
    }

}
