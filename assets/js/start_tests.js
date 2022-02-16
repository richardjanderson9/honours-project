/* 
    Document Written by Richard Anderson (https://richardjanderson.me)!
*/

// Functions are called from different docuements, these must be linked in the HTML/PHP pages in order to work. The file name will be added by // after the function is called!

/* Function is called from the main /index.html page (ONLY!) */
function start_tests(){
    /*  Places the cookies on the device! */
    place_cookies(); //cookie-creator.js

    /* Re-directs to different page for the tests! */
    location.replace("/fingerprint_tests/")
    // Once the new page is loaded the function below takes over!
}

/* Function is called from the main /fingerprint_Tests/index.html page (ONLY!) */
function run_tests(){
    /* Varables */ 
    // For the status of the tests!
    var not_started = ("Not Yet Active!");
    var in_progress = ("Currently Active!");
    var reporting = ("Reporting Results!");
    var complete = ("Test Complete!");
    // For the time Delay! | // 1000ms = 1 second!
    var delay_results = 0; // Delay for the time between tests! (2.5 Seconds)!
    var delay_test = 0; // Delay for the time between tests! (10 Seconds)!
    // For Colour Change!
    var colour_change_value = "#4bb523"; // Green!

    // Time Delay for Each Time of 10 Seconds ! | To enable machine to stabilise!
    
    setTimeout(function() {
        fingerprint_test_1(not_started, in_progress, reporting, complete, delay_results, colour_change_value); //fingerprinting-test/test-1.js
    }, delay_test);

    //Check Run!
    //
}