<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'UPDATE employees
  SET firstName=?, lastName=?, radioNumber=?, stationNumber=?
  WHERE personId=? '
);
//problem is the line below
//$personId = Uuid::uuid4()->toString();
//$personId = Uuid::uuid4();
$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['personId']  // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../employee/);
