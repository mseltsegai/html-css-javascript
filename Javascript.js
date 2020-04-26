$(document).ready(() => {
    // Global variables
    $('#namn').keyup(() => { // Checks validateName everytime we press the key on the name box. 
        validateName();
    });
    $('#email').keyup(() => {
        validateEmail();

    });
    $('#number').keyup(() => {
        validateNumber();

    });
    $('#beskrivning').keyup(() => {
        validateBeskrivning();

    });

    function validateName(){ // Validation For Name box.
        var namn = document.getElementById('namn').value;
        if(namn==''){
            $('#namnMessage').html("Fylla i namn!");
            $('#namnMessage').css("color", "red");
        }
        else if(namn.length < 3){
                $('#namnMessage').html("Det måste vara minst 3 tecken");
                $('#namnMessage').css("color", "red");
        }
        else
        {
            $('#namnMessage').html('ok')
            $('#namnMessage').css("color", "green");
        }
        
    }

        function validateNumber(){
            var number = document.getElementById('number').value;
            if(number.length == 0){
                $('#phoneMessage').html("*!");
                $('#phoneMessage').css({"color": "red","font-size": "80%"});
            }
          

            else if(!number.match(/^[0-9\-\+]{9,10}$/)){
                $('#phoneMessage').html("*Ogiltigt nummer");
                $('#phoneMessage').css("color", "red");
            }
            else
            {
                $('#phoneMessage').html("giltilgt");
                $('#phoneMessage').css("color", "green");
            }
    }
    function validateEmail(){
        var email = document.getElementById('email').value;
        if(email==''){
            $('#emailMessage').html("*Skriv i E-post!");
            $('#emailMessage').css({"color": "red","font-size": "80%"});
        }
        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
            $('#emailMessage').html("*Ogiltigt email");
            $('#emailMessage').css("color", "red");
        }
        else
        {
            $('#emailMessage').html("giltilgt");
            $('#emailMessage').css("color", "green");
        }
    }
    function validateBeskrivning(){
        var beskrivning = document.getElementById('beskrivning').value;
        if(beskrivning==''){
            $('#textMessage').html("*Fylla i beskrivning!");
            $('#textMessage').css({"color": "red","font-size": "80%"});
        }
        else if(beskrivning.length < 20){
            $('#textMessage').html("Den måste vara minst 20 tecken");
            $('#textMessage').css("color", "red");

        }
        else
        {
            $('#textMessage').html("Ok");
            $('#textMessage').css("color", "green");
        }
    }

    $("nav div").click(function() {// funktion till menu
        $("ul").slideToggle();
        $("ul ul").css("display", "none");
    });

    $('#omOss').click(function() {  // funktion till knappen om oss

        if( $(".namn").css('display').toLowerCase() == 'block')
        {
            $('.namn').css("display", "none");
        }
        else {
            $('.namn').css("display", "block");
        }
    });


var startStop= true;
$("#slide").on("click",function(){ //Funktion för att stoppa bilden.
    
        if(startStop===false){
            bilder();
            startStop=true;
        }else{
           stopInterval();
            startStop=false;   
        }
    });
});
    var index=0;
var bild=["S1+text.jpg","S2+text.jpg","S3+text.jpg"];
var intervalId;


function bilder(){

intervalId=setInterval(
   function(){
    if(index===bild.length){
   index=0;  
}
document.getElementById("slide").setAttribute("src",bild[index]); 

index++;

},1400);
}
 function stopInterval(){
    clearInterval(intervalId);
 }



