/* 
    Document Written by Richard Anderson (https://richardjanderson.me)!
*/
// Test Data: (General: Industry Test)
// Data Source: https://github.com/fingerprintjs/fingerprintjs


function fingerprint_test_1(in_progress, reporting, complete, failed, delay_results, delay_test, colour_green, colour_red){
  // Information for the colour change!
  const id_varable_name = ("test_data_1"); // Sets ID Name (from '/fingerprint_tests/index.html') of Colour Change!
  const test_number = (1);
  const delay_check = (2);
  // Delays Reporting of Results!
  const final_delay = (test_number * delay_check);
  // Sets Information for colour change!
  var colour_change = (document.getElementById(id_varable_name)); // Sets HTML data into javascript varable!
  const colour_code_green = (colour_green);
  const colour_code_red = (colour_red); 
  // Runs Function to start the process!
  run_fingerprint();

  /* 
    Functions for the process of data, the running of tests, and reporting the results (to the cookie, and the user)!
  */

  function run_fingerprint(){
  // Code to delay change (visable to the user)!
    setTimeout(function(){     
      // Changes the Data (Text and Colour)! 
      document.getElementById(id_varable_name).innerHTML = (in_progress); // Text!
      colour_change.style.color = colour_code_green; // Colour!
      run_test() // Runs Function to start test!
    }, delay_results);

  // Function contains the code to run the test!
    function run_test(){
    // Stores Data for functioning!
      const test_runs = (3); // Method to set number of times the test is correctly run!
      const test_low = (0); // Base Counter! | Must Stay at '0'!
    // Creats Array for the fingerprint data!
      const fingerprint_data = [];
      var array_entry = 0;

    // Stores the Data for the loop counter, and the results!
      for (let counter = test_low; counter < test_runs; counter++){        
        
        const fingerprint_link = ("https://openfpcdn.io/fingerprintjs/v3");
        // Configures the Fingerprint to Load!
        const fingerprint_run = import(fingerprint_link).then(FingerprintJS => FingerprintJS.load());
        // Gets the Information (of the visitor)!
        // STARTS!
          // Get the visitor identifier when you need it.
        fingerprint_run.then(fp => fp.get()).then(result =>{
          const visitorId = result.visitorId;
          fingerprint_data[array_entry] = (visitorId); // Puts visitorId in array by usering (counter clone 'array_entry') as the number.
          array_entry++;

          if (array_entry == test_runs){
            process_data(test_runs, test_low, fingerprint_data);
          }
        }).catch(error => console.error(error))
        // ENDS!  
      }
    }
  }

  function process_data(test_runs, test_low, data){
    // Puts Previous Array into new varables!
    const cloned_array = ([...data]); // Cloned!
    const original_array = (data); // Original!
    // Removes the first entry to check if all three are the same! (Ensuring the fingerprint has worked correctly)!
    const single_fingerprint = (original_array.shift());

    // For Testing Only!!
    //console.log("Fingerprint 1:" + " " + single_fingerprint);
  
  // For Loop Starts!
    for (let counter = test_low; counter < test_runs; counter++){
      const removed_data = (cloned_array.shift());
      if (single_fingerprint != removed_data){
        console.log("Not the same!");
      }
      else{
        fingerprint_correct = true;
      }
    }
// For Loop Ends!
    
    setTimeout(function(){     
      // Changes the Data (Text and Colour)! 
      document.getElementById(id_varable_name).innerHTML = (reporting); // Text!
      colour_change.style.color = colour_code_green; // Colour!
    }, delay_results);
  
    // Sends Information to /assets/js/cookie-creator.js, for the overwrite of the information for each test (data taken from if_varable_name).
    cookie_write_test(id_varable_name, single_fingerprint, cookie_filter);
    //world_end(id_varable_name);

    if (cookie_placed != "true"){
      setTimeout(function(){     
        // Changes the Data (Text and Colour)! 
        document.getElementById(id_varable_name).innerHTML = (failed); // Text!
        colour_change.style.color = colour_code_red; // Colour!
      }, delay_results);
    }
    else{
      setTimeout(function(){     
        // Changes the Data (Text and Colour)! 
        document.getElementById(id_varable_name).innerHTML = (complete); // Text!
        colour_change.style.color = colour_code_green; // Colour!
      }, (delay_results * test_number));
    }
  }
}
