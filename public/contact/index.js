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
  var counter = 0;
  
  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length > 0) {
      counter++
    } else {
      inputs[i].classList.add('change-bord-col')
    }
  }
  if (counter === inputs.length) {
  document.querySelector('.send-report-but').textContent = 'שולח מסמך'
  loadSpinner()
  sendEmail()
  }
}


document.querySelector('.send-report-but').addEventListener('click', sendReport)


/*  ######################### Execute function wile cliking on the send report button ######################### */






/* remove the red border from the input fields while cliking */
var removeBorder = (e) => {
  if (e.target.classList.contains('change-bord-col')) {
    e.target.classList.remove('change-bord-col')
    console.log('Border removed!')
  }
   if (document.querySelector('.send-report-but').textContent !== 'שלח מסמך') {
   document.querySelector('.send-report-but').textContent = 'שלח מסמך'
   document.querySelector('.vi-img').style.opacity = '0'
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



/* Load the spinner after clicking on the send button
 */
var loadSpinner = () => {
  document.querySelector('.send-report-but').insertAdjacentHTML('beforeend', `<i class="fa fa-spinner fa-spin spinner-but"></i>`)
  }
  /* Load the spinner after clicking on the send button
  */




  /* Send the report to the email when all the field is filled */
var sendEmail = (e) => {
  setTimeout(() => {
  
  $('.spinner-but').remove()
  document.querySelector('.send-report-but').textContent = 'מסמך נשלח'
  document.querySelector('.vi-img').style.opacity = '1'
  $('.general-all').val('');
  }, 1500)
  }
  /* Send the report to the email when all the field is filled */


  

    /* ################## FUNCTION TO FADE OUT THE PAGE ################## */
    var fadeInPage = () => {
      document.querySelector('#fader').classList.add('fade-in')
      }
      $('.img-click').click(fadeInPage)
      $('.p-click').click(fadeInPage)
      $('.report-us').click(fadeInPage)
    /* ################## FUNCTION TO FADE OUT THE PAGE ################## */




