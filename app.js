'use strict'

let windowWidth = $(window).width();
let colors = [0, 20, 40, 60, 80, 100, 120, 140, 160,];
$('#a').css('background-color', `hsl(${colors[0]}, 100%, 50%)`);
$('#b').css('background-color', `hsl(${colors[1]}, 100%, 50%)`);
$('#c').css('background-color', `hsl(${colors[2]}, 100%, 50%)`);
$('#d').css('background-color', `hsl(${colors[3]}, 100%, 50%)`);
$('#e').css('background-color', `hsl(${colors[4]}, 100%, 50%)`);
$('#f').css('background-color', `hsl(${colors[5]}, 100%, 50%)`);
$('#g').css('background-color', `hsl(${colors[6]}, 100%, 50%)`);
$('#h').css('background-color', `hsl(${colors[7]}, 100%, 50%)`);
$('#i').css('background-color', `hsl(${colors[8]}, 100%, 50%)`);

function updater () {
  for(let i = 0; i < colors.length; i++) {
    colors[i]+= 10;
    if (colors[i] > 360) { colors[i] = 0; }
  }
}

$(window).on('resize', function () {
  $('#a').css('background-color', `hsl(${colors[0]}, 100%, 50%)`);
  $('#b').css('background-color', `hsl(${colors[1]}, 100%, 50%)`);
  $('#c').css('background-color', `hsl(${colors[2]}, 100%, 50%)`);
  $('#d').css('background-color', `hsl(${colors[3]}, 100%, 50%)`);
  $('#e').css('background-color', `hsl(${colors[4]}, 100%, 50%)`);
  $('#f').css('background-color', `hsl(${colors[5]}, 100%, 50%)`);
  $('#g').css('background-color', `hsl(${colors[6]}, 100%, 50%)`);
  $('#h').css('background-color', `hsl(${colors[7]}, 100%, 50%)`);
  $('#i').css('background-color', `hsl(${colors[8]}, 100%, 50%)`);
  updater();
});