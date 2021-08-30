import CC from 'cookieconsent';

function cookieConsent(){
  // var num = 1;
  //  function addCookie(){
  //     document.cookie = num+" = "+num;
  //     num++;
  //  }
  //  function listCookies(){
  //     var result = document.cookie;
  //     document.getElementById("list").innerHTML = result;
  //  }
  //  function removeCookies() {
  //     var res = document.cookie;
  //     var multiple = res.split(";");
  //     for(var i = 0; i < multiple.length; i++) {
  //        var key = multiple[i].split("=");
  //        document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
  //     }
  //  }

  //  document.getElementById('addcookie').addEventListener('click',  () => addCookie() );
  //  document.getElementById('listcookies').addEventListener('click', () => listCookies() );
  //  document.getElementById('removecookies').addEventListener('click', () => removeCookies() );

  function clearCookies() {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
  };

  window.cookieconsent.initialise({
    type: 'opt-out',
    revokable:true,
    onInitialise: function (status) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        // enable cookies
      }
      if (type == 'opt-out' && !didConsent) {
        // disable cookies
        // do nothing I guess
      }
    },
    onStatusChange: function(status, chosenBefore) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        // enable cookies
      }
      if (type == 'opt-out' && !didConsent) {
        // disable cookies
        clearCookies();
      }
    },
    onRevokeChoice: function() {
      var type = this.options.type;
      if (type == 'opt-in') {
        // disable cookies
        clearCookies();
      }
      if (type == 'opt-out') {
        // enable cookies
      }      
    },
    onPopupClose: function() {
      document.querySelector('.footer-copyright').appendChild(document.querySelector('.cc-revoke'));
    },
    law: {
     regionalLaw: true,
    },
    location: true,
   });
   if (document.querySelector('.cc-revoke')) {
     document.querySelector('.footer-copyright').appendChild(document.querySelector('.cc-revoke'));
   }
}

export { cookieConsent }