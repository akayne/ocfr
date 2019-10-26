<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE certDetails
   SET firstName = ?, lastName = ?, name=?, dateReceived=?, dateExpired=?
   WHERE idnum = ?'
);
$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['name'],
  $_POST['dateReceived'],
  $_POST['dateExpired'],
  $_POST['idnum']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../details/');
