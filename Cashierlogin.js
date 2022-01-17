function validate() {  
  var email = document.reg_form.email;
  var Password = document.reg_form.Password;
  if (email.value.length <= 0) {  
    alert("Email is required");  
    fname.focus();  
    return false;  
  }  
  if (Password.value.length <= 0) {  
    alert("Password is required");  
    fname.focus();  
    return false;  
  }  
}