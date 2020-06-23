<?php
  if(!empty($_GET["id"])){
    $data=$_GET["id"];
  }else{
    $data="";
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <title>HTMLのformからデータを受けとる</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <form action="" method="get">
      <input type="hidden" name="id" value=<?php echo $data?>>
      <input type="text" name="aaa">
      <input type="submit">
    </form>
  </body>
</html>