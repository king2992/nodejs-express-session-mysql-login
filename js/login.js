$(document).ready(function(){
    $(".ajaxSend").on('click', function(){
        var email = $("input[name=email]").val()
        var password = $("input[name=password]").val()
        var loginInfo = {'email' : email , 'password' : password};

        $.sendAjax(loginInfo)

    })
});

$.sendAjax = function(loginInfo){
        var email = loginInfo.email
        var password = loginInfo.password
        var resultDiv = document.getElementsByClassName('result')[0]
        $.ajax({
          url : "/login",
          type : "POST",
          dataType : "JSON",
          data : {"email" : email, "password" : password} 
        })

        .done(function(json){
             if(json === 1) window.location.href = "/"
             else resultDiv.innerHTML = 'your email is not found.'
        })

        .fail(function(xhr, status, errorThrown){
            if(xhr.status === 500) alert("시스템 내부 장애가 발생했습니다.")
        })
    }