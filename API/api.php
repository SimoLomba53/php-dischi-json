<?php
  
  $apilist=file_get_contents(__DIR__."/../data/todo.json");

  header('Content-type:application/json');

  echo $apilist;


?>