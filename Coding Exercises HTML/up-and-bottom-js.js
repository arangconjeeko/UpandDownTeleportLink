
var bottomPage = document.getElementById('bottomPage');
var topPage = document.getElementById('topPage');
var lastScrollTop = 0;

bottomPage.addEventListener('click', scrollBottom);
topPage.addEventListener('click', scrollTop);

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
element.addEventListener('scroll', function(){ // element.addEventListener('scroll', function(){ or window.addEventListener('scroll', function(){

  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    bottomPage.style.display = 'none';
    topPage.style.display = '';
  } else {
    bottomPage.style.display = '';
    topPage.style.display = 'none';
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);
function scrollBottom() {
  window.scrollTo(0,document.body.scrollHeight);
  bottomPage.style.display = 'none';
  topPage.style.display = '';
}
function scrollTop() {
  window.scrollTo(0, 0);
  topPage.style.display = 'none';
  bottomPage.style.display = '';
}