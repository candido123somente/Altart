    $(function(){
        $('#favorites-button').tooltip({
            toggle: "tooltip",
            placement: "bottom",
            title: "Wish List",
        }); 
    });

    $(function(){
        $('#cart-button').tooltip({
            toggle: "tooltip",
            placement: "bottom",
            title: "Cart",
        }); 
    });
    
    $(function () {
  $('#login-button').popover({
    content:"Sign In or Register",
    title: "Login",
    placement: "bottom",
  })
})
