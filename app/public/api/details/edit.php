<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE certDetails
   SET name=?, dateReceived=?, dateExpired=?
   WHERE firstName = ?'
);
$stmt->execute([
  $_POST['name'],
  $_POST['dateReceived'],
  $_POST['dateExpired'],
  $_POST['firstName']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../details/');
