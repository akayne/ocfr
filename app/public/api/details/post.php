<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO certDetails
    (firstName, lastName,name, dateReceived, dateExpired)
   VALUES (?,?,?,?,?)'
);
$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['name'],
  $_POST['dateReceived'],
  $_POST['dateExpired']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../details/');
