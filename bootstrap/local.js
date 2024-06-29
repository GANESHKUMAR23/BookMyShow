
var link="hi";

function register(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var role = "Administration";
    var url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXQ0NCxsbG0tLTPz8/MzMy+vr6ysrK6urrGxsa3t7fJycnCwsLExMS/v7/T09Ourq5JzreYAAAFBElEQVR4nO2diY6jMBBEOUzAhNj//7cTcgEhJA4UcXlUT1ppZ7Qaudbtvuz0ZJkQQgghhBBCCCGEEEIIIYQQQgghhBBC7IFz7vwn9ip2wjnTVdYWRWGrY5v9N5kua+rc5w98Xrf/SaMzE3k3kUXzXzS61s7kXTVaE3ttCJxZ0HfReEx/G8tqWV8vsY69wI245p28C0XsNW6ifGOgg8Qy9jJXE7CBae+ie38CR9jYS11HkIXeqMsEUxxzCNaX9ylOUTVJqXRN+AY+VPq6ib3uYNzxe4EXkakkcuE+Zq4xiURug8BeY0e/ja7eIvAssSKXuFVgn6tSS9xmognsIkIgdVGFEXiW2MZWssDaODjnEFvKAisymSVOsbW8pMUJzHPGqrEE6uPcxAKqkPAkbo70UzxfodHUUIU5YRfOZSeoxNh6XuEM8Cx6zjrKAU2V7yBecBamkDFe9OCiYhVbygKuQimkLRMNKi5aVoUO5U95FaLcKa2VwuI+q6fJsiNI4TG2kEU6jEDC1PsOSiFjDXwFZKUFraNBeRrWpO0MJqkhLS0uYBQSG2kGifjEnhSkkHkLIVZKvYUQX8qbk/YgIj5vtO/ZXiDSXj3d2NyqIb4+7Ckru7UE5haIuL2wFXE+A7phYw4WqNKJdxdR18C8lQXqHpi20QZrefMqRHVLeRWiKnzeViKoqU+dt0HMlPCdwgCk1cbbDc5A3pS6ekJcIDI/v8wQm0ics13Z/EKROBhe2frKlDpUXHFNMf9UbKg8z/rMZIor23UCT4b9DA6sU9jFXnY461Jw5uJ+xqrmPn2cGLOq2qfOR59ZFfiJi6Y5a97VJBAJx6xo2VDfqc35vruf2BauOIncd2qv+NKdJvjB/C9T8JRi4Z1vPm6Z3CG8Er6LiQr8oqeRqsDguE/emXlDaIM4sVg/IrR7mlRRMSY8r6HuAb8jOP1OqqroeRyrwFI/OSs19tGOCJLo7/2ZKpG9PI2dY8CwoWFQRO4L/nGDrunnCw0Pmz7nNYPA0+UrQ61xmCFohm+9H6k0zMEo798oaTU6M+Ta467Sm7tvf3gMFhoSIFaNY335tN4rT6/7/H4UCKdDJyo+W33Slz+XtM1sxKf3dtzjfiqYveXyOa59UQtOJwa6rD3WRS/Mn//pwVbNxBTnNx2+6GiM1TULMeF5G5zLSmNaY56H0C0NQKOYVevK42EpIPjQCL4YUvzhFPlEns1zYW03Sw2Ywebat5mPtzEH8nXFx3hefLhQmruo+c/wVRRrdeVp0TynGo/LHqMfoxzCx/8oPC+95+L66u7FaXLOHD/awPAzDj8tIt9OQF7YhLpry8tc9n40e1a2XR0u76bxZxP5vtd3W6LPC2ttbW3R/33FD/hV6QEb6rVC4y8eSJsvjQss0e796i10AvJ+HPaVuGa+bFoSCQTuexFnYou7suNlKnYq22p2e1qEm6+zlb1e3sDG62zG75PBIUd5bWYXhTxbOGqTI+E5hT27XDnGFjVhj8ucjshI8z0+owicpwdhhyf9sSU9gZ9CRJGRjsA/waHypD3wg0h2DHdIv8mMFB8RoeO6MYBdDWiYABB0zKdzNGhnyhbve8DJ91e/wek3YGtE7Nh8DNjnRYSuFKyQLWfrwYZ81OBVJNjqgi9YgBVSNaHuYBUShkNwc5+k2T0Bq7D/jdp0QBUKIYQQQgghhBBCCCGEEEIIIYQQQgghRBL8AQ0uSH3mtzwoAAAAAElFTkSuQmCC";
    // var url="data:image/avif;base64,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";

   if(password === cpassword){
        let data = {name:name,email:email,passowrd:password,role:role,url:url}

        localStorage.setItem("userinfo",
            JSON.stringify(
            [...JSON.parse(localStorage.getItem("userinfo") || "[]"),
            {user:data}
            ]
        ));
   }
  
    location.replace("login.html")

 }



 function login()
 {

   let users = [...JSON.parse(localStorage.getItem("userinfo"))];
   let email = document.getElementById("email").value;
   let passowrd = document.getElementById("pswd").value;


   for(var rec in users){

     let checkEmail = users[rec]['user']['email'];
     let checkpswd =  users[rec]['user']['passowrd'];

     console.log(checkEmail, checkpswd);
     console.log(email, passowrd);
   
     if(checkEmail === email && checkpswd === passowrd){
        localStorage.setItem("current",email);
        location.replace("profile.html")
         
     }

     
   }
   }

   function editNavigate(){
        location.replace("editprofile.html");
        
   }



   function saved(){

    
    let updatename = document.getElementById("edit_name").value;
    let updateemail = document.getElementById("edit_email").value;
    let updaterole = document.getElementById("edit_role").value; 
    let updateid = document.getElementById("edit_id").value; 

    let users = [...JSON.parse(localStorage.getItem("userinfo"))];
    let current_email = localStorage.getItem("current");

    for(var rec in users){

        if(current_email === users[rec]['user']['email']){

           users[rec]['user']['name'] = updatename;
           users[rec]['user']['email'] = updateemail;
           users[rec]['user']['role'] = updaterole;
           users[rec]['user']['url'] = localStorage.getItem("MyImage");
           


    }
    console.log(users);
    
    localStorage.removeItem("userinfo");
    localStorage.setItem("current",updateemail);

    for(var rec in users){

        let data = users[rec]['user'];

        localStorage.setItem("userinfo",
            JSON.stringify(
            [...JSON.parse(localStorage.getItem("userinfo") || "[]"),
            {user:data}
            ]
        ));
       
    }

    location.replace("profile.html")
    console.log(users);



    
   }

   
   }



   function addMovie(){

    // alert("Hiiiiiiiiiiiiii");

    let image = document.getElementById("movieImg").value;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let genre = document.getElementById("genre").value;
    let language = document.getElementById("language").value;
    let cast = document.getElementById("cast").value;
    let crew = document.getElementById("crew").value;
    let price = document.getElementById("price").value;


    if(image)
    {
        
        let data = {imgUrl:localStorage.getItem("movieImg"),title:title,description:description,genre:genre,language:language,cast:cast,crew:crew,price:price};


        localStorage.setItem("movieInfo",
            JSON.stringify(
            [...JSON.parse(localStorage.getItem("movieInfo") || "[]"),
            {movie:data}
            ]
        ));
        location.replace("adminhome.html");

    }
    else{
        alert("Please Select The Poster");
    }


    

    
    


   }


   



  
 
  







