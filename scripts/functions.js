    $(function(){

        $('#favorites-button').tooltip({
            toggle: "tooltip",
            placement: "bottom",
            title: "Wish List",
            trigger: "hover",
        }).popover({
            content:"...",
            title: "Favorites",
            placement: "bottom",
          }).on('show.bs.popover', function(){
            $(this).tooltip('hide'),
            $(this).tooltip('disable'),
            $('#cart-button').popover('hide'),
            $('#login-button').popover('hide')
        }).on('hide.bs.popover', function() {
            $(this).tooltip('enable')
          });



        $('#cart-button').tooltip({
            toggle: "tooltip",
            placement: "bottom",
            title: "Cart",
            trigger: "hover",
        }).popover({
            content:"...",
            title: "Cart",
            placement: "bottom",
          }).on('show.bs.popover', function(){
            $(this).tooltip('hide'),
            $(this).tooltip('disable'),
            $('#favorites-button').popover('hide'),
            $('#login-button').popover('hide')
        }).on('hide.bs.popover', function() {
            $(this).tooltip('enable')
          });



        $('#login-button').tooltip({
            toggle: "tooltip",
            placement: "bottom",
            title: "Sign In",
            trigger: "hover",
        }).popover({
            content:"Sign In or Register",
            title: "Login",
            placement: "bottom",
          }).on('show.bs.popover', function() {
            $(this).tooltip('hide'),
            $(this).tooltip('disable'),  
            $('#cart-button').popover('hide'),
            $('#favorites-button').popover('hide')
          }).on('hide.bs.popover', function() {
            $(this).tooltip('enable')
          });

});
