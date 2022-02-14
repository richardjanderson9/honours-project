/* 
    Document Written by Richard Anderson (https://richardjanderson.me)!
*/

/* Enables the Modals to Appear (once pressed)! */
function modal_show(data){
    // Sets up Variables, for future loop.
    var start_test = "test-consent";
    var privacy_policy = "privacy-view";

    // Loop to Process what Modal to Show the User! (Current 2)!
    if (data == start_test){
        var modal_id = "Modal-Test"; 
        var button_id = "start-test-js"; 
        var close_button_class = "button-test";      
    }
    else if(data == privacy_policy){
        var modal_id = "Modal-Privacy";  
        var button_id = "privacy-policy-js";        
        var close_button_class = "button-policy"; 
    }
    else{
        alert("An Error Has Occurred! Please reload the page, to try again!");
    }

    /* Code that Activates the Modals! */
    // Gets Information from the HTML page via the ID Tags!
        // Gets Modal Information! | Filter by Loop Above on Condition of If Loop!
    var modal = document.getElementById(modal_id);
        // Gets Button Information! | Filter by Loop Above on Condition of If Loop!
    var button = document.getElementById(button_id);
        // Gets Close Button Information!
    var close_button = document.getElementsByClassName(close_button_class)[0];
        // When the user clicks on one of the buttons (Test/Privacy) | Starts the Process! 
    button.onclick = function(){
        modal.style.display = "block";
    }
        // When the user clicks on the close button (when modal is active)!
    close_button.onclick = function(){
        modal.style.display = "none";
    }
        // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = "none";
        }
    }    
}


