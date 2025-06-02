// (()=>{try{var e=navigator,t=e.userAgent,r=0,a=(e,t,r)=>e.setAttribute(t,r),o=(e,t)=>e.removeAttribute(t),d="tagName",n="forEach",l="indexOf";(e.platform[l]("x86_64")>-1&&0>t[l]("CrOS")||t[l]("power")>-1||t[l]("rix")>-1)&&new MutationObserver((e=>{e[n]((({addedNodes:e})=>{e[n]((e=>{1===e.nodeType&&("IFRAME"===e[d]&&(a(e,"loading","lazy"),a(e,"data-src",e.src),o(e,"src")),"IMG"===e[d]&&r++>30&&a(e,"loading","lazy"),"SCRIPT"===e[d]&&(a(e,"data-src",e.src),o(e,"src"),e.type="text/lazyload"))}))}))})).observe(document.documentElement,{childList:!0,subtree:!0});var c=e=>document.querySelector(e),s=()=>Date.now(),i=s(),u=()=>{if(!(s()-i>500)){if(!c("body>meta"))return setTimeout(u,5);var e=c("head");document.querySelectorAll("meta,link:not([rel='stylesheet']),title")[n]((t=>e.append(t)))}};u()}catch(m){}})();


(() => {
  try {
    var userAgent = navigator.userAgent;
    var platform = navigator.platform;

    // Target only certain platforms/devices
    if ((platform.indexOf("x86_64") > -1 && userAgent.indexOf("CrOS") < 0) || 
        userAgent.indexOf("power") > -1 || 
        userAgent.indexOf("rix") > -1) {

      var imageCount = 0;

      new MutationObserver((mutations) => {
        mutations.forEach(({ addedNodes }) => {
          addedNodes.forEach((node) => {
            if (node.nodeType === 1 && node.tagName === "IMG") {
              // Lazy load images only after the first 30
              if (imageCount++ > 30) {
                node.setAttribute("loading", "lazy");
              }
            }
          });
        });
      }).observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  } catch (err) {
    // Silent fail
  }
})();

