/* 
    Document Written by Richard Anderson (https://richardjanderson.me)!
*/

// Allows Processes to Work!
function page_re_direct(data){
    /* Gets Domain Information! */
    // Domain!
    var full_domain = (window.location.hostname);
    // Port!
    var active_port = (window.location.port);
    // Protocol(s)!
    var environment_protocol = ("https");
    var testing_protocol = ("http");
    // Formatting for URL!
    var protocol_formatting = ("://");

    // Location of Correct Page!
    if (data == "auto" || data == "forced"){
        var page_location = ("/transmit_data/");
    }
    else if (data == "destory"){
        var page_location = ("/transmit_data/php/destory.php");
    }
    else if (data == "save"){
        var page_location = ("/transmit_data/php/send.php");
    }
    else if (data == "start"){
        var page_location = ("/transmit_data/")
    }

    // Checks for Environment (Live/Testing)!
    /* Loop Checking for Environment (Live/Testing). */
    if (active_port == "80" || active_port == "5500" || active_port == "8080" || active_port == "19653"){
        var re_direct_user = (testing_protocol + protocol_formatting + full_domain + ":" + active_port + page_location); // Enables the port to be put (due to testing configurations)!
        //var test_passed = ("Yes"); // Check if Test has passed! (Should be Boolean, but string works for this purpose)!
    }
    else{
        var re_direct_user = (environment_protocol + protocol_formatting + full_domain + page_location);
        //var test_passed = ("Yes"); // Check if Test has passed! (Should be Boolean, but string works for this purpose)!       
    }
    
    // Force Re-Direct!
    var domain_data = (re_direct_user);
    window.location.href = domain_data; // Forces Re-Direct!
}




