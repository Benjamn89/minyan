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





/* APPLYING THE SELECT 2  */
$(document).ready(function() {
    $('.js-example-basic-multiple').select2({
    width: '98%',
    theme: 'classic',
    language: {
     noResults: function () {
    return "לא נמצאו תוצאות";
  }
   },
   dropdownCss: { 'text-align': 'right'}
    });
});


$(document).ready(function() {
  $('.js-example-basic-single').select2({
  width: '98%',
  theme: 'classic',
  disabled: true
  });
});
/* APPLYING THE SELECT 2  */






/* STARTH SEARCHING ON CLICK */
 var toggle = () => {
$('.testing-div2').toggleClass('while-click')
 }
document.querySelector('.button-click').addEventListener('click', toggle)
/* STARTH SEARCHING ON CLICK */





/* Event Listener for the Search Button */
var rullTest = () => {
var checkValue3 =  $('#id_label_multiple3').select2('val')

if (checkValue3.length < 1) {
document.querySelector('.error-msg3').style.visibility = 'visible'
return null
}


if (document.querySelector('.sam-sam')) {
  clearSearch()
}


if (checkValue3.length > 0) {
  
  fetch('http://localhost:3000/query?' + checkValue3[0])
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
    for (var i = 0; i < data.length; i++) {

        checkValue3.forEach((el) => {

        if (data[i].street == el) {


          document.querySelector('.testing-div').insertAdjacentHTML('afterend', `<div class='wrapping-results'>
          <div class='row sam-sam'>
          
          <div class='col-sm'>
          <p>אשדוד</p>
          <p>רובע ${data[i].street}</p>
          </div>
          
          
          
          <div class='col-sm'>
          <p>שם רחוב/ בית כנסת</P>
          <p>${data[i].name}</p>
          </div>
          
          
          
          
          <div class='col-sm'>
          <p>שחרית: ${data[i].shahrit}</p>
          <p>מנחה: ${data[i].minha}</p>
          <p>ערבית: ${data[i].arvit}</p>
          </div>
          
          
          
          </div>
           </div>`)
        }
      })
    }
    contactBar(document.querySelectorAll('.wrapping-results').length)
  })
  .catch(err => {
    console.log('Unable to fetch')
  })

}
 }
 
 
 document.querySelector('.start-search-but').addEventListener('click', rullTest)
 /* Event Listener for the Search Button */
 
 
 
 /* Function that execute after user select on the select2 Element */
 $('#id_label_multiple3').on("select2:selecting", function(e) { 
   document.querySelector('.error-msg3').style.visibility = 'hidden'
});
/* Function that execute after select on the select2 Element */




/* TCLEAR SEARCHING */
var clearSearch = (e) => {
  console.log('Clear search running')
  $('.wrapping-results').remove();
  }
  /*CLEAR SEARCHING */




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



  /* ################## Play with the contact nav bar position ################## */
var contactBar = (e) => {
  if (e >= 2) {
  document.querySelector('.contact-bar').classList.add('contact-bar-scroll')
  } else {
  document.querySelector('.contact-bar').classList.remove('contact-bar-scroll')
  }
   }
  /* ################## Play with the contact nav bar position ################## */







