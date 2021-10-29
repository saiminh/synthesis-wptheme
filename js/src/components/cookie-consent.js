import CC from 'cookieconsent';

function cookieConsent(){

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

  function addCookies() {
    //creating asynchronous loadScript function
    const loadScript = (src, async = true, type = "text/javascript") => {
      return new Promise((resolve, reject) => {
        try {
          const el = document.createElement("script");
          const container = document.head || document.body;

          el.type = type;
          el.async = async;
          el.src = src;

          el.addEventListener("load", () => {
            resolve({ status: true });
          });

          el.addEventListener("error", () => {
            reject({
              status: false,
              message: `Failed to load the script ${src}`
            });
          });

          container.appendChild(el);
        } 
        catch (err) {
          reject(err);
        }
      })
    };

    //asynchronously loading GA
    loadScript("https://www.googletagmanager.com/gtag/js?id=G-BTHDQ2MN8L")
    .then((data) => {
        console.log("Google Analytics script loaded successfully", data);
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BTHDQ2MN8L', {
        'cookie_expires': 182 * 24 * 60 * 60
      });
    })
    .catch((err) => {
        console.error(err);
    })

  };
  
  window.cookieconsent.initialise({
    type: 'opt-in',
    revokable: true,
    cookie:{
      secure: true,
      expiryDays: 182,
    },      
    onInitialise: function (status) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        addCookies();        
      }
      if (type == 'opt-out' && !didConsent) {
        clearCookies();
      }
    },
    onStatusChange: function(status, chosenBefore) {
      console.log(this.hasConsented() ? 'enable cookies' : 'disable cookies');
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        addCookies();
      }
      if (type == 'opt-out' && !didConsent) {
        clearCookies();
      }
    },
    onRevokeChoice: function() {
      var type = this.options.type;
      if (type == 'opt-in') {
        clearCookies();
      }
      if (type == 'opt-out') {
        addCookies();
      }      
    },
    onPopupClose: function() {
      document.querySelector('.footer-copyright').appendChild(document.querySelector('.cc-revoke'));
    },
    law: {
     regionalLaw: true,
    },
    location: true,
    content: {
      allow: 'Accept Cookies',
      deny: 'Decline Cookies',
      link: 'Cookie Policy',
      href: '/cookie-policy',
      message: '<p>This website uses strictly necessary cookies to enable the website to function, namely to secure our website and to save certain preferences and repeat visits, including recording your cookies preferences.</p><p>If you agree, we would also like to use non-essential cookies to enable us to observe traffic levels to the website which allows us to understand interaction with the website and helps us to improve the website and our services.</p><p>To learn more about this, visit our Cookie Policy. You may consent or decline to the use of non-essential cookies by clicking “Accept Cookies” or “Decline Cookies” below.</p>',
    }
   });
   if (document.querySelector('.cc-revoke')) {
     document.querySelector('.footer-copyright').appendChild(document.querySelector('.cc-revoke'));
   }
}

export { cookieConsent }