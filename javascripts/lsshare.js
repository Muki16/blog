<script type='text/javascript'>
//<![CDATA[
/* Facebook */
(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      status     : true,                             
      xfbml      : true                               
    });
    FB.Event.subscribe('edge.create', function(href, widget) {
        $.event.trigger({
            type: "pageShared",
            url: href
        }); 
    });
};
/* Twitter */
  window.twttr = (function (d,s,id) {
  var t, js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
  js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
  return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, "script", "twitter-wjs"));
twttr.ready(function (twttr) {
    twttr.events.bind('tweet', function (event) {
        $.event.trigger({
            type: "pageShared",
            url: event.target.baseURI
        });
    });
});
/* Google Plus */
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
function plusOned(obj){
    console.log(obj);
    $.event.trigger({
        type: "pageShared",
        url: obj.href
    });
}

/* Listen for the pageShared event */
$(document).on('pageShared',function(e){
    if(e.url == window.location.href){
        $(".secret").show();
        $(".secret-share").hide();
    }
});
//]]>
</script>

<style>
.secret {
 text-align:center;
 display:none
}
 
.secret-share {
    padding: 20px;
    text-align: center;
    border: 3px solid #ddd;
    background: #f8f8f8;
}

a.download-btn {
    text-transform: uppercase;
    font-size: 22px;
    background: #7b7b7b;
    padding: 10px 20px;
    display: inline-block;
    border: 1px solid #000000;
    text-decoration: none;
    color: #fff;
}

.secret-share .fb-like {
 margin-top: 0;
 top: -7px;
 position: relative;}

.secret-share .twitter-share-button {
    margin-right: 25px;
}

</style>
