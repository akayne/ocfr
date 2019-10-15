<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO employees
    (name, agency, defaultExpiration)
  VALUES (?,?,?)'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['address'],
  $_POST['email'],
  $_POST['pnhone'],
  $_POST['dob'],
  $_POST['startDate'],
  $_POST['gender'],
  $_POST['position']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../employee/');
