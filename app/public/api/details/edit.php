<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE certDetails
   SET dateReceived = ?, dateExpired = ?
   WHERE personId = ?, certId = ?'
);
$stmt->execute([

  $_POST['dateReceived'],
  $_POST['dateExpired'],
  $_POST['personId'],
  $_POST['certId']

]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certification/');
