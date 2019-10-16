<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO certDetails
    (name, agency, defaultExpiration)
  VALUES (?,?,?)'
);
$stmt->execute([
  $_POST['name'],
  $_POST['agency'],
  $_POST['defaultExpiration']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certification/');
