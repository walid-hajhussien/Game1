var current=0;
var users=[];
var firstImage=[];
var secondImage=[];


$('document').ready(function() {

  $('.form2').hide();
  $('audio').each(function(index, value) {
    value.volume = 0.2;
  })
  $('marquee#m1,marquee#m2').hide();

  //begin button
  $('#bs').click(function() {
    $('audio').get(0).play();
    var name=$('#name').val();
    var age=$('#age').val();
    if (name === '') {
      $('#note1').text('Enter your Name')
      return;
    } else if (age === '') {
      $('#note2').text('Enter your Age')
      return
    }
    createUser(name,age);
    $('.form1').hide();
    $('body').css('background-color','black')
    $('body').css('color','white')
    $('body').css('background-image','url()')
    $('.form2').show();



  })
  //name text
  $('#name').blur(function() {
    if ($('#name').val() === '') {
      $('#note1').text('Enter your Name')
    } else {

      $('#note1').text('')
    }
  })

  $('#name').change(function() {

    var name = $('#name').val()

    $('#note3').text('Welcome ' + name)

  })


  //age text
  $('#age').blur(function() {
    if ($('#age').val() === '') {
      $('#note2').text('Enter your Age')
    } else {
      $('#note2').text('')
    }
  })


  $('#br').click(function() {
    $('audio').get(0).play();
    $('.control').css('background-color', 'darkgray')
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
    $('.control').css('background-color', 'darkgray')
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
    $('.control').css('background-color', 'darkgray')
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
    $('.control').css('background-color', 'darkgray')
    if ($('.p1').css('top') != '70px') {
      $('#bu').attr('disabled', 'true')
      $('.p1').animate({
        top: '-=27.15px'
      }, 500, function() {
        $('#bu').prop("disabled", false)
      })
    }
  })

  $('#bg').click(function() {
    var left = $('.p1').css('left');
    var top = $('.p1').css('top');
    if (left === '400.2px' && top === '97.15px') {
      $('audio').get(1).play();
      $('#m2').hide();
      $('#m1').show();
      $('.control').css('background-color', 'green')
    } else {
      $('audio').get(2).play();
      $('#m1').hide();
      $('#m2').show();
      $('.control').css('background-color', 'red')
    }
  })
})
//generate ID function
function generateId(start){
return function (){
  start++;
  return start
}
}

var count1=generateId(0);
// function create user
function createUser(name,age){
  var obj={
    userName:name,
    age     :age,
    result  :0,
    id      :count1()
  }
current=obj.id;
users.push(obj);
}
//Add image
function addImage(url1,url2){
  firstImage.push(url1);
  secondImage.push(url2);
}

//Random function
function randomImage(){
  return Math.floor(Math.random()*firstImage.length);
}

// left(267)   top(70) 613
