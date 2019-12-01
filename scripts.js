function toggleSection(sectionId) {
  const toggle = document.getElementById(sectionId).querySelector(".toggle-section");
  const upArrow = document.getElementById(sectionId).querySelector("#up-arrow");
  const downArrow = document.getElementById(sectionId).querySelector("#down-arrow");
  console.log(toggle.style.display);
  if ((toggle.style.display === "none") | (toggle.style.display === "")) {
    toggle.style.display = "block";
    upArrow.style.display = "inline";
    downArrow.style.display = "none";
  } else {
    toggle.style.display = "none";
    upArrow.style.display = "none";
    downArrow.style.display = "inline";
  }
}

function copyURL(){
  const url = window.location.href
  const input =document.createElement('input');
  document.body.appendChild(input);
  input.value = url;
  input.select();
  document.execCommand('copy', false);
  input.remove();
  // change button text, wait 5 seconds and then change back
  const button = document.getElementById("copy-link-button");
  button.textContent = "Copied!"
  setTimeout(function() {button.textContent = "Share link"}, 4000);
}

//
function fbShare() {

}


// Twitter SDK
window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
    
      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };
    
      return t;
    }(document, "script", "twitter-wjs"));

// Facebook SDK
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
