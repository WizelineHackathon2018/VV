

<?php
$servername = "http://projectvv.cpubkrqyzhui.us-west-1.rds.amazonaws.com/";
$username = "root";
$password = "rootroot";
$dbname = "projectvv";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn, 'utf8');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


?>

