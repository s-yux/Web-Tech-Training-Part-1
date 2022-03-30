function check(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value
    var mobile = document.getElementById("mobile").value
    var pass = document.getElementById("password").value

    var name_regex = new RegExp('[a-zA-Z]');
    name_regex.test(name) ? null : alert("Name field isn't valid.")

    var email_regex = new RegExp('[a-z0-9.]+@[a-z]+\.([a-z]{2,3})$');
    email_regex.test(email) ? null : alert("Email field isn't valid.")

    // var mobile_regex = new RegExp('[0-9]');
    // mobile_regex.test(mobile) ? null : alert("Mobile field isn't valid.")
    //
    // var pass_regex = new RegExp('[0-9]');
    // pass_regex.test(pass) ? null : alert("Password field isn't valid.")
}

