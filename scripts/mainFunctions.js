$(document).ready(function () {
  var popoverLoginTemplate = [
    '<div class="popover popover-login">',
    '<div class="arrow"></div>',
    '<div class="popover-content">',
      '<form class="px-4">',
        '<h3 class="text-center">Login</h3>',
        '<div class="form-group">',
         '<input type="e-mail" class="form-control" id="user-input" placeholder="E-mail">',
        '</div>',
        '<div class="form-group">',
          '<input type="password" class="form-control" id="password-input" placeholder="Password">',
        '</div>',
        '<button type="submit" class="btn btn-block">Login</button>',
        "<small class='form-text text-center'>Don't have account? <a>Sign Up</a> </small>",
      '</form>',
    '</div>',
  '</div>',
  ].join('');


  $('#favorites-button').tooltip({
    toggle: "tooltip",
    placement: "bottom",
    title: "Wish List",
    trigger: "hover",
  }).popover({
    content: "...",
    title: "Favorites",
    placement: "bottom",
  }).on('show.bs.popover', function () {
    $(this).tooltip('hide'),
      $(this).tooltip('disable'),
      $('#cart-button').popover('hide'),
      $('#login-button').popover('hide')
  }).on('hide.bs.popover', function () {
    $(this).tooltip('enable')
  });



  $('#cart-button').tooltip({
    toggle: "tooltip",
    placement: "bottom",
    title: "Cart",
    trigger: "hover",
  }).popover({
    content: "...",
    title: "Cart",
    placement: "bottom",
  }).on('show.bs.popover', function () {
    $(this).tooltip('hide'),
      $(this).tooltip('disable'),
      $('#favorites-button').popover('hide'),
      $('#login-button').popover('hide')
  }).on('hide.bs.popover', function () {
    $(this).tooltip('enable')
  });



  $('#login-button').tooltip({
    toggle: "tooltip",
    placement: "bottom",
    title: "Sign In",
    trigger: "hover"

  }).popover({
    html: true,
    title: "Login",
    placement: "bottom",
    template: popoverLoginTemplate

  }).on('show.bs.popover', function () {
    $(this).tooltip('hide'),
      $(this).tooltip('disable'),
      $('#cart-button').popover('hide'),
      $('#favorites-button').popover('hide')

  }).on('hide.bs.popover', function () {
    $(this).tooltip('enable')

  });


});