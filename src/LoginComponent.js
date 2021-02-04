import React from 'react';
import FacebookLogin from 'react-facebook-login';


class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  responseFacebook(response) {
    console.log(response);
    console.log(response.id)
    var id = response.id
    window.FB.api(
      "/"+id+"/accounts",
      function (responsee) {
        if (responsee && !responsee.error) {
          console.log(responsee)
        }
      }
  );
  }

  loadFbLoginApi() {

        window.fbAsyncInit = function() {
            window.FB.init({
                appId      : 325286625361086,
                cookie     : true,  // enable cookies to allow the server to access
                // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v9.0' // use version 2.1
            });
        };

        console.log("Loading fb api");
          // Load the SDK asynchro1ously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
  }

  componentDidMount() {
        this.loadFbLoginApi();
    }

    testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      window.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
      });
    }

    statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      if (response.status === 'connected') {
        this.testAPI();
      } else if (response.status === 'not_authorized') {
          console.log("Please log into this app.");
      } else {
          console.log("Please log into this facebook.");
      }
    }

    checkLoginState () {
       window.FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }

    handleFBLogin() {
      window.FB.login(this.checkLoginState());
        }

    render() {
        return (
          
                // <div>
                //   <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=325286625361086&autoLogAppEvents=1" nonce="I6hRhN5L"></script> 

                //  <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
                //     <button
                //         classNames = "btn-facebook"
                //         id         = "btn-social-login"
                //         onClick = {this.handleFBLogin}
                //         >
                //             <span className="fa fa-facebook"></span> Sign in with Facebook
                //     </button>
                      <FacebookLogin
                        appId="1088597931155576"
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,pages_show_list,pages_messaging,pages_manage_metadata"
                        callback={this.responseFacebook}
                      />

                      

               );
    }
}

export default LoginComponent;