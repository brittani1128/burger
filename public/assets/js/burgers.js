$(function(){
    $(".addCart").on("click", function(event){
        var id = $(this).data("id");
        var newState = {
            inCart: true
        }
        
        // Send PUT request
        $.ajax("/api/burgers/" + id, {
            type:"PUT",
            data: newState
        }).then(function(){
            console.log("Added to cart!");
            location.reload();
        });

    });

    $(".removeCart").on("click", function(event){
        var id = $(this).data("id");
        var newState = {
            inCart: false
        }
        
        // Send PUT request
        $.ajax("/api/burgers/" + id, {
            type:"PUT",
            data: newState
        }).then(function(){
            console.log("Removed from cart!");
            location.reload();
        });

    });

    $(".submit").on("click", function(event){
        event.preventDefault();
        var newBurger = {
            name: $("#newBurgerName").val().trim(),
            inCart: false
        };
      
        //Send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(data){
            console.log("Added new burger");
            console.log(data);
            location.reload();
        });
    });

    $(".delete").on("click", function(event){
        var id = $(this).data("id");
      
        //Send DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE" 
        }).then(function(data){
            console.log("Deleted burger");
            location.reload();
        });
    }); 
})