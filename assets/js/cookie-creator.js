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
    cookie_number[4] = ("test_data_1"); // Contains the fingerprint from test number 1!.
    cookie_number[5] = ("test_data_2"); // Contains the fingerprint from test number 2!.
    cookie_number[6] = ("test_data_3"); // Contains the fingerprint from test number 3!.
    cookie_number[7] = ("test_data_4"); // Contains the fingerprint from test number 4!.
    cookie_number[8] = ("test_data_5"); // Contains the fingerprint from test number 5!.

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

function cookie_write_test(id_varable_name, single_fingerprint, cookie_filter){
    // Sets up Varables!
    // Converts from pass-through, to varables for the loop!
    const fingerprint_data = single_fingerprint;
    const parent_id = id_varable_name;
    const id = id_varable_name;
    // Sets up Cookies Path!
    var cookie_path = "/"; // Could be changed, for deployment! | Not requird but could be domain locked!

    // Starts Writting the Cookie!
    write_cookie(); // Cals Function Below!

    function write_cookie(){
        // Enables control of cookie writting process, while also enabling future fixs/upgrades!
        var cookie_data_tester = (id + "=" + fingerprint_data + ";" + "; path=" + cookie_path); // Puts Cookie data in-single line.        
        document.cookie = cookie_data_tester; // Places the Cookie, using the Information above.
        check_cookie(); // Calls Next Function!
    }

    function check_cookie(){
        var all_cookie = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumlator, [key, value]) =>({ ...accumlator, [key.trim()]: decodeURIComponent(value)}),{});
        
        if (parent_id == "test_data_1"){
            var cookie_data = all_cookie.test_data_1;
        }
        else if (parent_id == "test_data_2"){
            var cookie_data = all_cookie.test_data_2;
        }
        else if (parent_id == "test_data_3"){
            var cookie_data = all_cookie.test_data_3;
        }
        else if (parent_id == "test_data_4"){
            var cookie_data = all_cookie.test_data_4;
        }
        else if (parent_id == "test_data_5"){
            var cookie_data = all_cookie.test_data_5;
        }

        var cookie_value = cookie_data;
        
        // Comparsion for Cookie!
        if (cookie_value != single_fingerprint){
            //console.log("That failed!");
            return (cookie_placed = "false");
        }
        else{
            //console.log("That worked!");
            return (cookie_placed = "true");
        }            
    }
}