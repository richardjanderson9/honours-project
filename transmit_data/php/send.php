<!-- Document Written by Richard Anderson (https://richardjanderson.me)! -->

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Page Meta Data! -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Tab Data! -->
    <title>Send Data! | Honours Project!</title>
    <link rel="icon" href="/assets/img/tab_icons/fingerprint_black.png">

    <!-- StyleSheets (Non-Fingerprinting)! -->
        <!-- Local Sheets! --> 
    <link rel="stylesheet" type="text/css" href="/assets/css/core-design.css"> 
    <link rel="stylesheet" type="text/css" href="/assets/css/footer.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/header.css">

</head>
<body>

    <?php
        /*
            Gets Information from Cookies!
        */
        // Timing!
        $start_time = $_COOKIE["test_start_time"];
        $end_time = $_COOKIE["test_end_time"];
        // Random ID!
        $random_id = $_COOKIE["random_id"];
        // Test Data!
        $test_1 = $_COOKIE["test_data_1"];
        $test_2 = $_COOKIE["test_data_2"];
        $test_3 = $_COOKIE["test_data_3"];    
        /*
            Information for the configuration of the database connection! Information on each line will be provided by //{comment}!
        */
        // Static Details for Database Connection!
        $servername = "localhost"; // Hostname of device! (Local Connection)!
        $db_name = "fingerprint_data"; // Database name for data!
        $tb_name = "tests";
        // Information of user with minium ermissions required!
        $username = "php_application"; // Username of Database!
        $password = "XdSM4kTtZdybk3jb"; // // Password of User!
        // Connection Information Joined!
        $conn = new mysqli($servername, $username, $password, $db_name); // Enables the Connection to be created (compacted)!
        /*
            Blocks Blank Data Moving to the Server, at the very last the cookie should contain "_blank_" (due to js file)!
        */
        if (($test_1 == "") or ($test_2 == "") or ($test_3 = "")){
            $message_to_user = "No Cookies have been found! Please re-start the test to try again!";
            $test_failure = "true";
            display_info_user($message_to_user, $test_failure);            
        }
        else{
            /*
            Checks if user has already sent data! (VIA: random_id)!
            */
            $query_check = "SELECT * from $tb_name WHERE random_id='$random_id'";
            $check_for_repeat = $conn->query($query_check);
            if($check_for_repeat->num_rows != 0) {
                $query_add_data = "";
                
            }
            else{
                $query_add_data = "INSERT INTO $tb_name (`random_id`, `start_time`, `end_time`, `test_1`, `test_2`, `test_3`) VALUES ('$random_id', '$start_time', '$end_time', '$test_1', '$test_2', '$test_3')";
            }
            /*
            Will add data if its not present in the database (already)! 
            */
            if (($conn->query($query_add_data) === TRUE) && ($query_add_data != "")){
                $message_to_user = "New record created successfully!";
                $test_failure = "false";
            }
            elseif ($query_add_data == ""){
                $message_to_user = "Your data already exists!";
                $test_failure = "false";
            }
            else{
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
            // Starts Next Function!            
            display_info_user($message_to_user, $test_failure);    
            // Closes the database connection (inportant for security and stop unwanted changes)!
            $conn->close();
                // Visable HTML Code | HEADER!            
        }     
        
        function display_info_user($message_to_user, $test_failure){
            if ($test_failure == "true"){
            // Adds in Return button for user to RESTART the test!
                echo ('
                    <header class="formatting-center text-center">
                        <div id="main-information-js" class="main-information-css">
                            <h1 class="main-title">Sending the Data!</h1>
                            <p class="main-information">'.$message_to_user.'</p>
                            <button id="home-page-js" class="header-button privacy-button" type="button" onclick="homepage();">Try Again!</button>
                            </div>
                    </header>
                ');
            }
            else{
            // Displays Data to the User!
                echo ('
                    <header class="formatting-center text-center">
                        <div id="main-information-js" class="main-information-css">
                            <h1 class="main-title">Sending the Data!</h1>
                            <p class="main-information">'.$message_to_user.'</p>
                        </div>
                    </header>
                ');
            }

                // Visable HTML Code | Footer!
            echo ('
                <footer class="footer-position">
                    <div class="footer-button-position">            
                        <a class="footer-button" href="https://github.com/richardjanderson9/honours-project" target="_blank">
                            <i class="fas fa-external-link-alt"></i>  GitHub Repository
                        </a>
                    </div>
                </footer>
                ');
        }
        
    ?>
</body>

<!-- Script to Force Re-Direct! -->
<script src="/assets/js/page-re_direct.js"></script>
<script src="/assets/js/dev_tools.js"></script>
<!-- Scripts ENDS! -->

</html>