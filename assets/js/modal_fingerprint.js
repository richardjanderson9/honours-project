/* 
    Document Written by Richard Anderson (https://richardjanderson.me)!
*/
// Notes: The core function is 'modal_general', their are functions within for processing data (that needs to be kept away)!

// Important for Fingerprinting Modal Information!
function modal_general(data){
    // Sets Up Varables (for Core Settings of Modal)!
    var modal_id = "Modal-Fingerprint";  
    var button_id = "btn_fingeprint_modal";        
    var close_button_class = "close-button";

    // Used in Processing of Data! | HTML ID Tag (/fingerprint_tests/index.html)!
    var html_tag_information = ("#modal-information");    
    var html_tag_testdata = ("#modal-tags");
    var html_tag_title = ("#modal-title");

    // Sets Up Componets (pulling up the Modal)!
    var modal = document.getElementById(modal_id);
    // Get the button that opens the modal
    var button = document.getElementsByClassName(button_id);
    // Get the <span> element that closes the modal
    var close_button = document.getElementsByClassName(close_button_class)[0];

// START: Code to Control Modal!
    // Opens Modal!
    [].forEach.call(button, function(process_request){
        process_request.onclick = function(){
            // Important!! | Changes Information based on Button Pressed!
            var parent_id = (this.parentNode.id); // Pulls Data from "process_reqest.onclick"!

            // Starts Function to Change Data! | Must be below load of Modal (below)!
            change_information(parent_id); // Enables change of JSON Information!            

            // Changes Settings to Show Modal!
            modal.style.display = "block";
        }
    })

    // Closes Modal (Click: Close Button (Icon 'X'))!
    close_button.onclick = function(){
        modal.style.display = "none";
        clear_data() // Clear Last Used Data from Modal!

    }

    // Closes Modal (Click: Anywhere on Screen)!
    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = "none";
            clear_data() // Clear Last Used Data from Modal!
        }
    }
// END: Code to Control Modal!

// Start: Change Modal Information!

    function change_information(parent_id){
    // Below: Data to Enable Cookie Filter!
        cookie_filter(parent_id);

    // Below: Data to Change Daa Modal (via JSON)!

        // Varables for Static Information (Location of JSON & Tags Names)!
        var json_location = ("/assets/json/fingerprint_modal_data.json");
        // Tags Names General Section @ Top of Main Function!

        // Arrays for Dynamic Information (html_tags)!
        const paragraph_tag = ["<p>", "</p>"]; // Paragraph Tags!
        const div_tag = ["<div>", "</div>"]; // Formatting Tags!
        const title_tag = ["<h2>", "</h2>"]; // Heading Tags!  
        
        // Changes Information Based on Static Information Above!
        $(function(){
            // Gets JSON Information! | Based on Varables above!
            $.getJSON(json_location, function(json_location){
                // sets Full Path of receive JSON Data!
                if (parent_id == "data-1"){
                    var full_location_of_data = (json_location.fingerprint_modal.data_1); // Data from JSON (Linked 'ID')!
                }
                else if (parent_id == "data-2"){
                    var full_location_of_data = (json_location.fingerprint_modal.data_2); // Data from JSON (Linked 'ID')!
                }
                else if (parent_id == "data-3"){
                    var full_location_of_data = (json_location.fingerprint_modal.data_3); // Data from JSON (Linked 'ID')!
                }
                else if (parent_id == "data-4"){
                    var full_location_of_data = (json_location.fingerprint_modal.data_4); // Data from JSON (Linked 'ID')!
                }
                else if (parent_id == "data-5"){
                    var full_location_of_data = (json_location.fingerprint_modal.data_5); // Data from JSON (Linked 'ID')!
                }                

                // Changes Information!
                $.each(full_location_of_data, function(i, json_name){
                    var data_output_information = div_tag[0] + paragraph_tag[0] + json_name.information + paragraph_tag[1] + div_tag[1]; // Information!
                    var data_output_test = div_tag[0] + paragraph_tag[0] + json_name.testdata + paragraph_tag[1] + div_tag[1]; // 'Test Data'!
                    var data_output_title = div_tag[0] + title_tag[0] + json_name.title + title_tag[1] + div_tag[1]; // Title!

                    // Alters Information!
                    $(data_output_information).appendTo(html_tag_information); // Information!
                    $(data_output_test).appendTo(html_tag_testdata); // Test Data!
                    $(data_output_title).appendTo(html_tag_title); // Title!
                });
            })
        })
    }
// END: Change Modal Information!

// STARTS: Clear Modal (of previous informaton)!
    function clear_data(){
        // Varables are pre-set at start of function!        
        $(html_tag_information).empty(); // Clears Information!                
        $(html_tag_testdata).empty(); // Clears Test Data!
        $(html_tag_title).empty(); // Clears Title! 
    }

} // Main Function END! 


function cookie_filter(data){
    // Passed Data =  partent_id of modal, enables filter of cookie informaton.
    const blank_check = ("_blank_");
    const parent_id = (data);

    // Button Information!
    const button_id = ("btn_cookie_data");
    var button = (document.getElementsByClassName(button_id));

    // Cookie Data!
    var cookie_data = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumlator, [key, value]) =>({ ...accumlator, [key.trim()]: decodeURIComponent(value)}),{});

    //console.log(cookie_data);

    [].forEach.call(button, function(process_request){
        process_request.onclick = function(){
            // Pulls the Cookie Information!
            
            if (parent_id == "data-1"){
                var cookie_name = cookie_data.test_data_1;
            }
            else if (parent_id == "data-2"){
                var cookie_name = cookie_data.test_data_2;
            }
            else if (parent_id == "data-3"){
                var cookie_name = cookie_data.test_data_3;
            }
            else if (parent_id == "data-4"){
                var cookie_name = cookie_data.test_data_4;
            }
            else if (parent_id == "data-5"){
                var cookie_name = cookie_data.test_data_5;
            }
            
            if (cookie_name != blank_check){
                alert("Your results will be stated on the next pop-up box, please press 'OK' to continue!")
                alert(cookie_name);
            }
            else{
                console.log(parent_id + " " +"test is not yet compelte!");
            }

        }
    })

}