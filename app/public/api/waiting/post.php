<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'UPDATE employees
  (firstName, lastName, radioNumber, stationNumber)
  VALUES (?,?,?,?)'
);

$stmt->execute([
  $_POST['personId'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNumber'],
  $_POST['stationNumber']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../waiting/');
