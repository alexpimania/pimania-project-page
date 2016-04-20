function makeLink() {
      var email = document.getElementById("email").value;
      var cc = document.getElementById("cc").value;
      var bcc = document.getElementById("bcc").value;
      var subject = document.getElementById("subject").value;
      var body = document.getElementById("body").value;
      var link = "mailto:" + email + "?CC=" + cc + "&BCC=" + bcc + "&subject=" + subject + "&body=" + body;
      document.getElementById("link").href = link;
      var target = document.getElementById('link');
      var wrap = document.createElement('div');
      wrap.appendChild(target.cloneNode(true));
      document.getElementById("result").value = wrap.innerHTML;
      var boxlist = ["email", "cc", "bcc", "subject", "body"];
      for (var i = 0; i < boxlist.length; i++) {
        document.getElementById(boxlist[i]).value = "";
      }
    }
  window.onload = function() {
    function updateFeed() 
    {
        var feedImage = document.getElementById("feed");
        feedImage.src = feedImage.src.split("?")[0] + "?currentTime=" + new Date().getTime();
    }
    function updateCat()
    {
      var catImage = document.getElementById("cat");
      catImage.src="http://thecatapi.com/api/images/get?format=src&type=gif&currentTime=" + new Date().getTime();
    }
    
    updateFeed();
    updateCat();
    
    setInterval(updateCat, 10000);
    setInterval(updateFeed, 20000);
  }