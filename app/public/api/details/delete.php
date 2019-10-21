<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'DELETE FROM certDetails
   WHERE firstName = ?'
);

$stmt->execute([
  $_POST['firstName']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../details/');
