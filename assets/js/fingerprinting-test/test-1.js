/* 
    Document Written by Richard Anderson (https://richardjanderson.me)!
*/
// Test Data: (General: Industry Test)
// Data Source: https://github.com/fingerprintjs/fingerprintjs


function fingerprint_test_1(not_started, in_progress, reporting, complete, delay_results, colour_change_value){
  // Varable for the colour change!
  var id_varable_name = "test-1-information"; // States the ID Number of the HTML Element!
  var colour_change = document.getElementById(id_varable_name); // Sets Code Line!
  var colour_code = colour_change_value; // Sets the new colour (default: Red (via CSS))!

  // Changes Text!  
  document.getElementById(id_varable_name).innerHTML = (not_started);
  // Changes Colour!
  colour_change.style.color = colour_code;  

}
