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
    var failed = ("Test Failed!");
    // For the time Delay! (User-Set)!
    const user_delay_results = (1.25); // User Controlled Delay, Between Results! | 0.25
    const user_delay_test = (2.5); // User Controlled Delay, Between Tests! | 2
    // Milliseconds to Seconds!
    const milliseconds = (1000);
    // Time Delay Calulation!
    var delay_results = ((milliseconds) * (user_delay_results));
    var delay_test = ((milliseconds) * (user_delay_test));

    // For Colour Change!
    const colour_change_green = ("#4bb523"); // Green!
    const colour_change_red = ("#f03600"); // Red!

    /*
     Sets Time Delay between Tests to enable the machine to stabilise! Controlled by the delay_test varable above!
    */// Time Delay for Each Time of 10 Seconds ! | To enable machine to stabilise!
    setTimeout(function() {
        fingerprint_test_1(in_progress, reporting, complete, failed, delay_results, delay_test, colour_change_green, colour_change_red); //fingerprinting-test/test-1.js
    }, delay_test);

}