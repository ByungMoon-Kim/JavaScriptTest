$(function() {
  var cnt0 = 0;

  counterFn();

  function counterFn() {

    id0 = setInterval(count0Fn, 100);

    function count0Fn() {
      cnt0++;
      if (cnt0 > 99) {
        clearInterval(id0);
      } else {
        $(".number").text(cnt0);
      }
    }
  }
});