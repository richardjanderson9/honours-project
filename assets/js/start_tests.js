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
    var not_started = ("Loading!");
    var in_progress = ("Currently Active!");
    var reporting = ("Reporting Results!");
    var complete = ("Test Complete!");
    var failed = ("Test Failed!");
    // For the time Delay! (User-Set)!
    const user_delay_results = (0.5); // User Controlled Delay, Between Results! | 0.25
    const user_delay_change = (1.00); // 
    const user_delay_test = (2.25); // User Controlled Delay, Between Tests! | 2
    
    // Milliseconds to Seconds!
    const milliseconds = (1000);
    // Time Delay Calulation!
    var delay_results = ((milliseconds) * (user_delay_results));
    var delay_change = ((milliseconds) * (user_delay_change));
    var delay_test = ((milliseconds) * (user_delay_test));

    // For Colour Change!
    const colour_change_yellow = ("#c9b906"); // Yellow!
    const colour_change_green = ("#4bb523"); // Green!
    const colour_change_red = ("#f03600"); // Red!

    // Sets Data for Loop!
    const number_of_test = ("6");
    const number_zero = ("1");

/* Starts the Tests! */
    function change_test_status(){
        setTimeout(function() {
            for (let counter = number_zero; counter < (number_of_test); counter++){
                var number_print = ("test_data_" + counter);          
                var colour_change = (document.getElementById(number_print));
                document.getElementById(number_print).innerHTML = (not_started); // Text!
                colour_change.style.color = colour_change_yellow; // Colour!            
            }
        }, delay_change);
              
    }

    function test_1(){
        setTimeout(function(){
            fingerprint_test_1(in_progress, reporting, complete, failed, delay_results, delay_test, colour_change_green, colour_change_red); //fingerprinting-test/test-1.js
        }, delay_test);
    }

    function test_2(){
        setTimeout(function(){
            //console.log("Hello World - 2!");
            fingerprint_test_2(in_progress, reporting, complete, failed, delay_results, delay_test, colour_change_green, colour_change_red); //fingerprinting-test/test-2.js
        }, delay_test);
    }
    function test_3(){
        setTimeout(function(){
            //console.log("Hello World - 3!");
            fingerprint_test_3(in_progress, reporting, complete, failed, delay_results, delay_test, colour_change_green, colour_change_red); //fingerprinting-test/test-3.js
        }, delay_test);
    }

    // Runs the Funciton!
    change_test_status();
    test_1();
    test_2();
    test_3();


}