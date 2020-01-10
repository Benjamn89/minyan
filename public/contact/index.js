/* ######################### Expand the button navigation bar while cliking #########################*/
var counter2 = true;
var minimizeNav = (event) => {

  if (counter2) {
    document.querySelector('.nav-button').style.height = '200px'
    $('.nav-click-button').fadeIn(1000)
  }

  if (counter2 === false) {
    document.querySelector('.nav-button').style.height = '70px'
    $('.nav-click-button').fadeOut(500);
  }
  counter2 = !counter2
}

document.querySelector('.nav-img-button').addEventListener('click', minimizeNav)
/* ######################### Expand the button navigation bar while cliking #########################*/






/* ######################### APPLYING THE SELECT 2 #########################  */
$(document).ready(function() {
  $('.js-example-basic-single').select2({
    width: '150px',
    language: {
      noResults: function() {
        return "לא נמצאו תוצאות";
      }
    },
    disabled: true
  });
});
/* ######################### APPLYING THE SELECT 2 ######################### */







/*  ######################### Execute function wile cliking on the send report button ######################### */

var inputs = document.querySelectorAll('.general-all')

var sendReport = (e) => {

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length > 0) {
      console.log('do some')
    } else {
      inputs[i].classList.add('change-bord-col')
    }
  }
}


document.querySelector('.send-report-but').addEventListener('click', sendReport)


/*  ######################### Execute function wile cliking on the send report button ######################### */






/* remove the red border from the input fields while cliking */
var removeBorder = (e) => {
  if (e.target.classList.contains('change-bord-col')) {
    e.target.classList.remove('change-bord-col')
    console.log('Was Removed!')
  }
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', removeBorder)
}
/* remove the red border from the input fields while cliking */



/* Scrolling to the Contact Bar */
var scrollFun = () => {
    $('html, body').animate({
        scrollTop: $(".contact-bar").offset().top
    }, 1500);
    return false;
}

$('.p-contact').click(scrollFun)
$('.make-contact').click(scrollFun)
/* Scrolling to the Contact Bar */







