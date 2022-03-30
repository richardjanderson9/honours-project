/* 
    Document Written by Richard Anderson (https://richardjanderson.me)!
*/
// Required for All!
const test_check = [];

function place_cookies(){
    // Sets up Cookie Names! (INTO AN ARRAY)!
    const cookie_number = [] // Information is enter via tags below {0-8}.
    cookie_number[0] = ("test_start_time"); // Tracks the starting time of the test!
    cookie_number[1] = ("test_end_time"); // Tracks the ending time of the test!
    cookie_number[2] = ("test_data_1"); // Contains the fingerprint from test number 1!.
    cookie_number[3] = ("test_data_2"); // Contains the fingerprint from test number 2!.
    cookie_number[4] = ("test_data_3"); // Contains the fingerprint from test number 3!.
    cookie_number[5] = ("random_id"); // Random ID for transfering data!
 
    // Sets up Cookie Data (will be replaced with fingerprint @ later stage)!
    var cookie_value = "_blank_"; // Enables Cookies to be placed on some browsers (as they are required if no data is present)!

    // Sets up Cookies Path!
    var cookie_path = "/"; // Could be changed, for deployment! | Not requird but could be domain locked!

    // Places Cookies on Device! | Looped Based on Number of Entries in the Array!
    for (let counter = 0; counter < cookie_number.length; counter++){
        var active_cookie = (cookie_number[counter]); // Gets Cookie Name (Information)!
        document.cookie = active_cookie + "=" + cookie_value + ";" + "; path=" + cookie_path; // Places the Cookie, using the Information above.
    }
    var d = new Date();
    const date = d.toLocaleDateString(); 
    const time = d.toLocaleTimeString(); 
    var date_time = (date + " @ " + time);
    
    // Generates Random Data!
    // Generates Random ID for the Cookie, which enables secure tranit to the database!
    const random = (length = 8) => {
        return Math.random().toString(18).substr(2, length);
    };
    var str_random_id = (random(16));

    document.cookie = cookie_number[0] + "=" + date_time + ";" + "; path=" + cookie_path; // Places the Cookie, using the Information above.
    document.cookie = cookie_number[5] + "=" + str_random_id + ";" + "; path=" + cookie_path; // Places the Cookie, using the Information above.
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
        var cookie_data_write = (id + "=" + fingerprint_data + ";" + "path=" + cookie_path); // Puts Cookie data in-single line.        
        document.cookie = cookie_data_write; // Places the Cookie, using the Information above.
        check_cookie(); // Calls Next Function!
    }

    function check_cookie(){
        var all_cookie = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumlator, [key, value]) =>({ ...accumlator, [key.trim()]: decodeURIComponent(value)}),{});
        
        if (parent_id == "test_data_1"){
            var cookie_data = all_cookie.test_data_1; // Sets Correct Cookie depending on the file (/assets/js/fingerprint-test/test-{number}.js that requsts the start of the function!
            // Forces data (parent_id | passed from test file(s)!) into array ('test_check')!
            test_check.push(parent_id);
        }
        else if (parent_id == "test_data_2"){
            var cookie_data = all_cookie.test_data_2; // Sets Correct Cookie depending on the file (/assets/js/fingerprint-test/test-{number}.js that requsts the start of the function!
            // Forces data (parent_id | passed from test file(s)!) into array ('test_check')!
            test_check.push(parent_id);
        }
        else if (parent_id == "test_data_3"){
            var cookie_data = all_cookie.test_data_3; // Sets Correct Cookie depending on the file (/assets/js/fingerprint-test/test-{number}.js that requsts the start of the function!
            // Forces data (parent_id | passed from test file(s)!) into array ('test_check')!
            test_check.push(parent_id);
        }

        var cookie_value = cookie_data;        
        // Comparsion for Cookie!
        if (cookie_value != single_fingerprint){
            //console.log("That failed!");
            return (cookie_placed = "false");
        }
        else{
            end_time();
            return (cookie_placed = "true");
        } 
    }
}


function end_time(){

    if ((test_check.length) == 3){
        start_end();
    }

    function start_end(){
        var all_cookie = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumlator, [key, value]) =>({ ...accumlator, [key.trim()]: decodeURIComponent(value)}),{});
        var data_blank = ("_blank_");   
        var cookie_data_1 = all_cookie.test_data_1; 
        var cookie_data_2 = all_cookie.test_data_2; 
        var cookie_data_3 = all_cookie.test_data_3; 

        // Comparsion for Cookie!
        if (cookie_data_1 == data_blank || cookie_data_2 == data_blank || cookie_data_3 == data_blank){
            console.log("broken data!");
        }
        else{
            // If all tests worked, and the data has been placed!
            var d = new Date();
            const date = d.toLocaleDateString(); 
            const time = d.toLocaleTimeString(); 
            var date_time = (date + " @ " + time);    
            document.cookie = "test_end_time" + "=" + date_time + ";" + "; path=" + "/"; // Places the Cookie, using the Information above.
            // Changes Button View ("Send Data")!
            const button_change = document.getElementById("send_data_button");
            button_change.classList.remove("hide");
        }
    } 
}
