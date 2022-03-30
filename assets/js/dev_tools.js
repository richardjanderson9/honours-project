/* 
    Document Written by Richard Anderson (https://richardjanderson.me)!
*/
// Sets UP Data!

function all_cookies(){
    var all_cookie = (document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumlator, [key, value]) =>({ ...accumlator, [key.trim()]: decodeURIComponent(value)}),{})); // Gets current set cookies!
    console.log(all_cookie);
}

function download_data(){
    var all_cookie = (document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumlator, [key, value]) =>({ ...accumlator, [key.trim()]: decodeURIComponent(value)}),{})); // Gets current set cookies!

    var device_hostname = window.prompt("Please enter the hostname of the device!");
    var device_test_number =  window.prompt("Please eneter the test number!");
    var device_data_joined = (device_hostname + "_" + "test_" + device_test_number);
    //console.log(device_data_joined);
    
    // Gets Data from Cookies!
    var start_time = all_cookie.test_start_time;
    var end_time = all_cookie.test_end_time;
    var cookie_data_1 = all_cookie.test_data_1; 
    var cookie_data_2 = all_cookie.test_data_2; 
    var cookie_data_3 = all_cookie.test_data_3;
    
    // Sets Data into file!
    const data1 = [
        ["Start Test", start_time],
        ["End Time", end_time],
        ["Fingerprint 1:", cookie_data_1],
        ["Fingerprint 2:", cookie_data_2],
        ["Fingerprint 3:", cookie_data_3]
    ];
    
    let csvContent = "data:text/csv;charset=utf-8,";
    
    data1.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", device_data_joined);
    document.body.appendChild(link); 
    link.click();
    
}