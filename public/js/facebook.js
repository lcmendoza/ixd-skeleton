function verify() {
  FB.init({
    appId: "app_id",
    status: true,
    cookie: true,
    xfbml: true
  }

  );

  function checkLoginState() {
    FB.getLoginStatus(function (response) {
      if (response.session) {
        top.location.href = "url to your app home page";
      }
      else {
        top.location.href = "https://www.facebook.com/dialog/oauth?client_id=APP_ID&redirect_uri=redirect_url&scope=email,read_stream";
      }
    })
  }
  verify();

  function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().

    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      $(".facebookLogin").hide();
      console.log('Successfully logged in with Facebook');
      FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
  }

  function changeUser(response) {
    console.log(response);
  }}