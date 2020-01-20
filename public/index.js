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
var rullTest = async () => {
var checkValue3 =  $('#id_label_multiple3').select2('val')

if (checkValue3.length < 1) {
document.querySelector('.error-msg3').style.visibility = 'visible'
return null
}


if ($('.resultes-wrapping-div')) {
  $('.resultes-wrapping-div').remove()
}


if (checkValue3.length > 0) {
 
  document.querySelector('.not-found').style.display = 'none'
  document.querySelector('.wrapping-spinner').style.display = 'block'

  var myFetch = []
  for (var i = 0; i < checkValue3.length; i++) {
    await fetch('/query?' + checkValue3[i])
    .then(response => {
      return response.json()
    })
    .then(data => {
      myFetch = [...myFetch, ...data]
      return myFetch
    })
    .catch(err => {
      console.log('Unable to fetch')
    })
  } // Completed the first looping
   

  document.querySelector('.wrapping-spinner').style.display = 'none'

  if (myFetch.length < 1) {
    document.querySelector('.not-found').style.display = 'block'
  } else {

    for (var i = 0; i < myFetch.length; i++) {
         
      var shabat, shabatshaa, shabatshab, shabatshac, shabatmina, shabatminb, shabatarv;
      shabat = shabatshaa = shabatshab = shabatshac = shabatmina = shabatminb = shabatarv = ''

      if (myFetch[i].shabat) {
        shabatshaa = `<p class='inner-p'><strong>שחרית א:</strong> ${myFetch[i].shabatshaa}`
        shabatmina = `<p class='inner-p'><strong>מנחה א:</strong> ${myFetch[i].shabatmina}`
        shabatarv = `<p class='inner-p'><strong>ערבית:</strong> ${myFetch[i].shabatarv}`
        shabat = ''} else {shabat = `<p class='inner-p'>אין</p>`}

     if (myFetch[i].shabatshab) {
       shabatshab = `<p class='inner-p'><strong>שחרית ב:</strong> ${myFetch[i].shabatshab}`
     }
     if (myFetch[i].shabatshac) {
      shabatshac = `<p class='inner-p'><strong>שחרית ג:</strong> ${myFetch[i].shabatshac}`
    }
    if (myFetch[i].shabatminb) {
      shabatminb = `<p class='inner-p'><strong>מנחה ב:</strong> ${myFetch[i].shabatminb}`
    }


      var areaName = `<p class='inner-p'>רובע ${myFetch[i].street}</p>`
      var syngogoName = `<p class='inner-p'>רובע ${myFetch[i].name}</p>`
      var shahrita = `<p class='inner-p'><strong>שחרית א:</strong> ${myFetch[i].shahrita}</p>`
      
      if (myFetch[i].shahritb) {
        var shahritb = `<p class='inner-p'><strong>שחרית ב:</strong> ${myFetch[i].shahritb}</p>`
      } else {var shahritb = ''}

      if (myFetch[i].shahritc) {
        var shahritc = `<p class='inner-p'><strong>שחרית ג:</strong> ${myFetch[i].shahritc}</p>`
      } else {var shahritc = ''}

      var minhaa = `<p class='inner-p'><strong>מנחה א:</strong> ${myFetch[i].minhaa}</p>`

      if (myFetch[i].minhab) {
        var minhab = `<p class='inner-p'><strong>מנחה ב:</strong> ${myFetch[i].minhab}</p>`
      } else {var minhab = ''}

      var arvita = `<p class='inner-p'><strong>ערבית א:</strong> ${myFetch[i].arvita}</p>`

      if (myFetch[i].arvitb) {
        var arvitb = `<p class='inner-p'><strong>ערבית ב:</strong> ${myFetch[i].arvitb}</p>`
      } else {var arvitb = ''}



      document.querySelector('.testing-div').insertAdjacentHTML('afterend', `<div class='resultes-wrapping-div'>
      <div class='inner-resulet-div inner-div-one'>
        <p class='inner-p-head'>אזור</p>
        ${areaName}
      </div>
      <div class='inner-resulet-div inner-div-two'>
      <p class='inner-p-head'>שם רחוב/ בית כנסת</P>
      ${syngogoName}
       </div>
      <div class='inner-resulet-div inner-div-three'>
        <p class='inner-p-head'>זמני תפילה</p>
        ${shahrita}
        ${shahritb}
        ${shahritc}
        ${minhaa}
        ${minhab}
        ${arvita}
        ${arvitb}
      </div>
      <div class='inner-resulet-div inner-div-four'>
        <p class='inner-p-head'>זמני תפילות בשבת</p>
        ${shabat}
        ${shabatshaa}
        ${shabatshab}
        ${shabatshac}
        ${shabatmina}
        ${shabatminb}
        ${shabatarv}
      </div>
       </div>`)
   }
  }
  

contactBar(document.querySelectorAll('.resultes-wrapping-div').length)




} // Close of the if statemant
 } // Closing of the rullTest function
 
 
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
  if (e >= 3) {
  document.querySelector('.contact-bar').classList.add('contact-bar-scroll')
  } else {
  document.querySelector('.contact-bar').classList.remove('contact-bar-scroll')
  }
   }
  /* ################## Play with the contact nav bar position ################## */