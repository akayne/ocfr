<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE certDetails
   SET certId=?, dateReceived=?, dateExpired=?
   WHERE personId = ?'
);
$stmt->execute([
  $_POST['certId'],
  $_POST['dateReceived'],
  $_POST['dateExpired'],
  $_POST['personId']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../details/');
