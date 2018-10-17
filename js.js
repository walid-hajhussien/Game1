$('marquee').hide();
$('#br').click(function() {
  $('audio').get(0).play();
  if ($('.p1').css('left') != '711px') {
    $('#br').attr('disabled', 'true')
    $('.p1').animate({
      left: '+=44.4px'
    }, 500, function() {
      $('#br').prop("disabled", false)
    })
  }
})

$('#bl').click(function() {
  $('audio').get(0).play();
  if ($('.p1').css('left') != '267px') {
    $('#bl').attr('disabled', 'true')
    $('.p1').animate({
      left: '-=44.4px'
    }, 500, function() {
      $('#bl').prop("disabled", false)
    })
  }
})

$('#bd').click(function() {
  $('audio').get(0).play();
  if ($('.p1').css('top') != '613px') {
    $('#bd').attr('disabled', 'true')
    $('.p1').animate({
      top: '+=27.15px'
    }, 500, function() {
      $('#bd').prop("disabled", false)
    })
  }
})

$('#bu').click(function() {
  $('audio').get(0).play();
  if ($('.p1').css('top') != '70px') {
    $('#bu').attr('disabled', 'true')
    $('.p1').animate({
      top: '-=27.15px'
    }, 500, function() {
      $('#bu').prop("disabled", false)
    })
  }
})

$('#bg').click(function(){
  var left=$('.p1').css('left');
  var top=$('.p1').css('top');
  if(left==='400.2px' && top==='97.15px'){
    $('audio').get(1).play();
    $('#m2').hide();
    $('#m1').show();
  }else{
    $('audio').get(2).play();
    $('#m1').hide();
    $('#m2').show();
  }
})

// left(267)   top(70) 613
