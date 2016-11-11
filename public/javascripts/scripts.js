/**
 * Created by MaC on 2016-10-14.
 */
/* use downloaded jquery
find any html element with the class "confirmation"
 */
$('.confirmation').on('click', function(){
    return confirm('Are you sure you want to delete this?');
})


// password check on register form
var validate = $('#registerForm').validate({
    rules: {
        confirm : {
            required : true,
            equalTo : '#password' // this is same id as the id given to the password in the register.ejs
        }
    },
    messages :{
        confirm: {
            equalTo: 'Your Passwords do not match'
}
    }
})