var Kajabi = Kajabi || {};

Kajabi.currentSiteUser = {
    "id" : "-1",
    "type" : "Guest",
    "contactId" : "",
  };

Kajabi.theme = {
    activeThemeName: "Encore Page",
    previewThemeId: 2158186419,
    editor: false
  };

if (typeof (window.rudderanalytics) === "undefined") {
          !function(){"use strict";window.RudderSnippetVersion="3.0.3";var sdkBaseUrl="https://cdn.rudderlabs.com/v3"
          ;var sdkName="rsa.min.html";var asyncScript=true;window.rudderAnalyticsBuildType="legacy",window.rudderanalytics=[]
          ;var e=["setDefaultInstanceKey","load","ready","page","track","identify","alias","group","reset","setAnonymousId","startSession","endSession","consent"]
          ;for(var n=0;n<e.length;n++){var t=e[n];window.rudderanalytics[t]=function(e){return function(){
          window.rudderanalytics.push([e].concat(Array.prototype.slice.call(arguments)))}}(t)}try{
          new Function('return import("")'),window.rudderAnalyticsBuildType="modern"}catch(a){}
          if(window.rudderAnalyticsMount=function(){
          "undefined"==typeof globalThis&&(Object.defineProperty(Object.prototype,"__globalThis_magic__",{get:function get(){
          return this},configurable:true}),__globalThis_magic__.globalThis=__globalThis_magic__,
          delete Object.prototype.__globalThis_magic__);var e=document.createElement("script")
          ;e.src="".concat(sdkBaseUrl,"index.html").concat(window.rudderAnalyticsBuildType,"index.html").concat(sdkName),e.async=asyncScript,
          document.head?document.head.appendChild(e):document.body.appendChild(e)
          },"undefined"==typeof Promise||"undefined"==typeof globalThis){var d=document.createElement("script")
          ;d.src="https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&amp;features=Symbol%2CPromise&amp;callback=rudderAnalyticsMount",
          d.async=asyncScript,document.head?document.head.appendChild(d):document.body.appendChild(d)}else{
          window.rudderAnalyticsMount()}window.rudderanalytics.load("2apYBMHHHWpiGqicceKmzPebApa","https://kajabiaarnyhwq.dataplane.rudderstack.com/",{})}();
        }

if (typeof (window.rudderanalytics) !== "undefined") {
          rudderanalytics.page({"account_id":"2148246205","site_id":"2148272918"});
        }

if (typeof (window.rudderanalytics) !== "undefined") {
          (function () {
            function AnalyticsClickHandler (event) {
              const targetEl = event.target.closest('a') || event.target.closest('button');
              if (targetEl) {
                rudderanalytics.track('Site Link Clicked', Object.assign(
                  {"account_id":"2148246205","site_id":"2148272918"},
                  {
                    link_text: targetEl.textContent.trim(),
                    link_href: targetEl.href,
                    tag_name: targetEl.tagName,
                  }
                ));
              }
            };
            document.addEventListener('click', AnalyticsClickHandler);
          })();
        }

!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.agent='plkajabi';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                                                                      document,'script','https://connect.facebook.net/en_US/fbevents.js');


fbq('init', '1154678208966349', {"ct":"","country":null,"em":"","fn":"","ln":"","pn":"","zp":""});
fbq('track', "PageView");

/* Custom JS Added Via Theme Settings */
  /* Javascript code goes here */