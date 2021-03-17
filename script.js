//  The script below will link my button with an alert, which will be shown later.
document.getElementById('button1').addEventListener('click', displayalert)
//  The function below will cause the button to make the alert.
function displayalert () {
  alert(document.getElementById('textbox').value)
}
