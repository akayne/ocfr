<?php
use Ramsey\Uuid\Uuid;

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'UPDATE employees
    (personId, firstName, lastName, radioNumber, stationNumber,isActive, address,email,phone,dob,startDate,gender,position)
  SET (?,?,?,?,?,?,?,?,?,?,?,?,?)'
);

$guid = Uuid::uuid4()->toString();

$stmt->execute([
  $personId, // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNumber'],
  $_POST['stationNumber']


]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../employee/?personid='.$personid);
