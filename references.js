$(document).ready(function(){
    $("#after").hide();
    $("#send").click(function(){
        
        str = $("#mail").val();
        console.log(str=="");
        if(str=="")
        {
            alert("Please check your mail.");
        }
        else
        {
            $.ajax({
              type: "POST",
              url: "http://localhost:8086/api/send_mail",
              data: {mail_id:str},
            }).done(function(){
                Console.log("success");
                $("#after").show();
                $("#send").hide();
            }).fail(function(){
                alert("Unknown error occured");
            });
        }
    });
    
});