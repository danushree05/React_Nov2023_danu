<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="form.js"></script>
    
</head>
<body>
   <form>
    <fieldset>
    <h1>FORM</h1>
    <label for="a" >USERNAME:</label>
    <input type="text" id="a" placeholder="enter your name"><br><br>
    <label for="b">PASSWORD:</label>
    <input type="text" id="b" placeholder="enter your password">
    <br><br>
    Already signed in?<br><br>
    <input type="radio" name="button"><label>YES</label><br>
    <input type="radio" name="button"><label>NO</label>
    <br><br>
    Logging through?<br><br>
    <input id="x" type="checkbox"><label for="x">Google</label><br>
    <input id="y" type="checkbox"><label for="y">Facebook</label><br><br>
    <label>DOB: </label>&nbsp&nbsp
    <input type="date"><br><br>
    <label>Other Option:</label>
    <select>
        <option value="phone number">phone number</option>
        <option value="email">email</option>
        </select><br><br>
        <input type="submit" value="submit">
    </fieldset>
   </form>
   <hr>
   <form>
    <h2>JAVASCRIPT</h2>
    <input id="name" type="text" placeholder="enter your name">
    <input type="button" onclick="clickevent()" value="click here">
  </form>
  <hr>
  <form>
    <h1>Largest of two numbers</h1>
    <input id="firstnum" type="text" placeholder="enter first number">
    <input id="secondnum" type="text" placeholder="enter second number">
    <input type="button" onclick="clickevent()" value="find">


  </form>

   
</body>
</html>