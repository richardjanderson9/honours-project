/* 
    Document Written by Richard Anderson (https://richardjanderson.me)!
*/

function place_cookies(){
    // Sets up Cookie Names! (INTO AN ARRAY)!
    const cookie_number = [] // Information is enter via tags below {0-8}.
    cookie_number[0] = ("test_start_time"); // Tracks the starting time of the test!
    cookie_number[1] = ("test_end_time"); // Tracks the ending time of the test!
    cookie_number[2] = ("transmit_time"); // Tracks the trasmit time of the results of the test!
    cookie_number[3] = ("transmited"); // Checks if data has been sent to the storage location!
    cookie_number[4] = ("test_1_data"); // Contains the fingerprint from test number 1!.
    cookie_number[5] = ("test_2_data"); // Contains the fingerprint from test number 2!.
    cookie_number[6] = ("test_3_data"); // Contains the fingerprint from test number 3!.
    cookie_number[7] = ("test_4_data"); // Contains the fingerprint from test number 4!.
    cookie_number[8] = ("test_5_data"); // Contains the fingerprint from test number 5!.

    // Sets up Cookie Data (will be replaced with fingerprint @ later stage)!
    var cookie_value = "_blank_"; // Enables Cookies to be placed on some browsers (as they are required if no data is present)!

    // Sets up Cookies Path!
    var cookie_path = "/"; // Could be changed, for deployment! | Not requird but could be domain locked!

    // Places Cookies on Device! | Looped Based on Number of Entries in the Array!
    for (let counter = 0; counter < cookie_number.length; counter++){
        var active_cookie = (cookie_number[counter]); // Gets Cookie Name (Information)!
        document.cookie = active_cookie + "=" + cookie_value + ";" + "; path=" + cookie_path; // Places the Cookie, using the Information above.
    }
}