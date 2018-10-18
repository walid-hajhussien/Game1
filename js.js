var current = 0;
var level = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var found = x1 + x2 + x3;
var timer;
var users = [];
var firstImage = [];
var secondImage = [];
var direction = [];


$('document').ready(function() {

  $('.form2').hide();
  //


  //



  $('audio').each(function(index, value) {
    value.volume = 0.2;
  })
  $('#img1,#img2').hide();

  //begin button
  $('#bs').click(function() {
    $('audio').get(0).play();
    var name = $('#name').val();
    var age = $('#age').val();
    if (name === '') {
      $('#note1').text('Enter your Name')
      return;
    } else if (age === '') {
      $('#note2').text('Enter your Age')
      return
    }
    createUser(name, age);
    $('.form1').hide();
    $('body').css('background-color', 'black')
    $('body').css('color', 'white')
    $('body').css('background-image', 'url()')
    $('.form2').show();
    var count = 0;
    var random = setInterval(function() {
      count++;
      var index = randomImage();
      $('#imgp1').attr('src', firstImage[index])
      $('#imgp2').attr('src', secondImage[index])
      if (count === 6) {
        clearInterval(random)
        $('#imgp1').attr('src', firstImage[level])
        $('#imgp2').attr('src', secondImage[level])
        level++;
        $('#v1').text(level);
      }

    }, 200)
    var count2 = 0;
    timer = setInterval(function() {
      count2++;
      $('#v3').text(Math.floor(count2 / 60) + ' : ' + count2 % 60);

    }, 1000)


    $('#v2').text(found);
    $('#v4').text(name);

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
    $('#img1,#img2').hide();
    $('audio').get(0).play();
    $('.control').css('background-color', 'darkgray')
    $('#th').css('background-color', 'black')
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
    $('#img1,#img2').hide();
    $('audio').get(0).play();
    $('.control').css('background-color', 'darkgray')
    $('#th').css('background-color', 'black')
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
    $('#img1,#img2').hide();
    $('audio').get(0).play();
    $('.control').css('background-color', 'darkgray')
    $('#th').css('background-color', 'black')
    if ($('.p1').css('top') != '660px') {
      $('#bd').attr('disabled', 'true')
      $('.p1').animate({
        top: '+=27.35px'
      }, 500, function() {
        $('#bd').prop("disabled", false)
      })
    }
  })
  //up button 113-660 px 547
  $('#bu').click(function() {
    $('#img1,#img2').hide();
    $('audio').get(0).play();
    $('.control').css('background-color', 'darkgray')
    $('#th').css('background-color', 'black')
    if ($('.p1').css('top') != '113px') {
      $('#bu').attr('disabled', 'true')
      $('.p1').animate({
        top: '-=27.35px'
      }, 500, function() {
        $('#bu').prop("disabled", false)
      })
    }
  })

  $('#bg').click(function() {
    var left = $('.p1').css('left');
    var top = $('.p1').css('top');
    if ((left === direction[level - 1].left1 && top === direction[level - 1].top1) ||
      (left === direction[level - 1].left2 && top === direction[level - 1].top2) ||
      (left === direction[level - 1].left3 && top === direction[level - 1].top3)) {
      $('audio').get(1).play();
      if (left === direction[level - 1].left1) {
        x1 = 1;
      } else if (left === direction[level - 1].left2) {
        x2 = 1;
      } else if (left === direction[level - 1].left3) {
        x3 = 1;
      }

      found = x1 + x2 + x3;
      $('#v2').text(found);
      $('#img2').hide();
      $('#th').css('background-color', 'green')
      $('.control').css('background-color', 'green')
      $('#img1').show();
    } else {
      $('audio').get(2).play();
      $('#img1').hide();
      $('.control').css('background-color', 'red')
      $('#th').css('background-color', 'red')
      $('#img2').show();
    }
    if (found === 3) {
      level++;
      if (level > firstImage.length) {
        $('.form2').hide();
        $('#img1,#img2').hide();

        $('body').css('background-image', 'url(pic/end.gif)')
      } else {
        $('#v1').text(level);
        found = 0;
        $('#v2').text(found);
        x1 = x2 = x3 = 0;
        $('#imgp1').attr('src', firstImage[level - 1])
        $('#imgp2').attr('src', secondImage[level - 1])
        $('.p1').css('top', '113px')
        $('.p1').css('left', '267px')
        $('#th').css('background-color', 'black')
        $('.control').css('background-color', 'black')
        $('#img1,#img2').hide();
      }
    }

  })
})
//generate ID function
function generateId(start) {
  return function() {
    start++;
    return start
  }
}

var count1 = generateId(0);
var count2 = generateId(0);
// function create user
function createUser(name, age) {
  var obj = {
    userName: name,
    age: age,
    result: 0,
    id: count1()
  }
  current = obj.id;
  users.push(obj);
}
//Add image
function addImage(url1, url2, top1, top2, top3, left1, left2, left3) {
  firstImage.push(url1);
  secondImage.push(url2);
  var obj = {
    id: count2,
    url1: url1,
    url2: url2,
    top1: top1,
    left1: left1,
    top2: top2,
    left2: left2,
    top3: top3,
    left3: left3
  }
  direction.push(obj)
}
addImage('pic/1.png', 'pic/1.1.png', '140.35px', '222.4px', '249.75px', '400.2px', '711px', '355.8px')
addImage('pic/2.png', 'pic/2.1.png', '167.7px', '304.45px', '249.75px', '533.4px', '622.2px', '311.4px')
addImage('pic/3.png', 'pic/3.1.png', '304.45px', '468.55px', '660px', '400.2px', '489px', '622.2px')

//Random function
function randomImage() {
  return Math.floor(Math.random() * firstImage.length);
}

// top1 ='167.7px'    top2='304.45px'      top3='249.75px'      left1='533.4px'    left2='622.2px'  left3='311.4px'
