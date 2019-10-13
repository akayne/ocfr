<?php
use Ramsey\Uuid\Uuid;

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO employees
    (personId, firstName, lastName, radioNumber, stationNumber,isActive, address,email,phone,dob,startDate,gender,position)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)'
);

$guid = Uuid::uuid4()->toString();

$stmt->execute([
  $personId, // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['address'],
  $_POST['email'],
  $_POST['phone'],
  $_POST['dob'],
  $_POST['startDate'],
  $_POST['gender'],
  $_POST['position']


]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../employee/?personid='.$personid);
