/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// function for when clicking on big project
function myFunction() {

    document.getElementById("jsbuttonbig").className = "jsbuttonclicked";
    document.getElementById("jsbuttondata").className = "jsbutton";
    document.getElementById("jsbuttongames").className = "jsbutton";
    document.getElementById("jsbuttoncode").className = "jsbutton";
    document.getElementById("jsbuttondesign").className = "jsbutton";
    document.getElementById("jsbuttonvideo").className = "jsbutton";
    
    document.getElementById("uno").style.display = "block";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("quatro").style.display = "none";
    document.getElementById("cinco").style.display = "none";
    document.getElementById("seis").style.display = "none";

    // change .button background-color: transparent; TO background-color: #EA244D
    
}

// function for when clicking on data
function myFunction2() {

    document.getElementById("jsbuttonbig").className = "jsbutton";
    document.getElementById("jsbuttondata").className = "jsbuttonclicked";
    document.getElementById("jsbuttongames").className = "jsbutton";
    document.getElementById("jsbuttoncode").className = "jsbutton";
    document.getElementById("jsbuttondesign").className = "jsbutton";
    document.getElementById("jsbuttonvideo").className = "jsbutton";
    
    document.getElementById("uno").style.display = "none";  
    document.getElementById("dos").style.display = "block";
    document.getElementById("tres").style.display = "none";
    document.getElementById("quatro").style.display = "none";
    document.getElementById("cinco").style.display = "none";
    document.getElementById("seis").style.display = "none";

}

// etc
function myFunction3() {

  document.getElementById("jsbuttonbig").className = "jsbutton";
  document.getElementById("jsbuttondata").className = "jsbutton";
  document.getElementById("jsbuttongames").className = "jsbuttonclicked";    
  document.getElementById("jsbuttoncode").className = "jsbutton";
  document.getElementById("jsbuttondesign").className = "jsbutton";
  document.getElementById("jsbuttonvideo").className = "jsbutton";
    
  document.getElementById("uno").style.display = "none";
  document.getElementById("dos").style.display = "none";
  document.getElementById("tres").style.display = "block";
  document.getElementById("quatro").style.display = "none";
  document.getElementById("cinco").style.display = "none";
  document.getElementById("seis").style.display = "none";

}

function myFunction4() {

  document.getElementById("jsbuttonbig").className = "jsbutton";
  document.getElementById("jsbuttondata").className = "jsbutton";
  document.getElementById("jsbuttongames").className = "jsbutton";    
  document.getElementById("jsbuttoncode").className = "jsbuttonclicked";
  document.getElementById("jsbuttondesign").className = "jsbutton";
  document.getElementById("jsbuttonvideo").className = "jsbutton";
    
  document.getElementById("uno").style.display = "none";
  document.getElementById("dos").style.display = "none";
  document.getElementById("tres").style.display = "none";
  document.getElementById("quatro").style.display = "block";
  document.getElementById("cinco").style.display = "none";
  document.getElementById("seis").style.display = "none";

}

function myFunction5() {

  document.getElementById("jsbuttonbig").className = "jsbutton";
  document.getElementById("jsbuttondata").className = "jsbutton";
  document.getElementById("jsbuttongames").className = "jsbutton";    
  document.getElementById("jsbuttoncode").className = "jsbutton";
  document.getElementById("jsbuttondesign").className = "jsbuttonclicked";
  document.getElementById("jsbuttonvideo").className = "jsbutton";
    
  document.getElementById("uno").style.display = "none";
  document.getElementById("dos").style.display = "none";
  document.getElementById("tres").style.display = "none";
  document.getElementById("quatro").style.display = "none";
  document.getElementById("cinco").style.display = "block";
  document.getElementById("seis").style.display = "none";

}

function myFunction6() {

  document.getElementById("jsbuttonbig").className = "jsbutton";
  document.getElementById("jsbuttondata").className = "jsbutton";
  document.getElementById("jsbuttongames").className = "jsbutton";    
  document.getElementById("jsbuttoncode").className = "jsbutton";
  document.getElementById("jsbuttondesign").className = "jsbutton";
  document.getElementById("jsbuttonvideo").className = "jsbuttonclicked";
    
  document.getElementById("uno").style.display = "none";
  document.getElementById("dos").style.display = "none";
  document.getElementById("tres").style.display = "none";
  document.getElementById("quatro").style.display = "none";
  document.getElementById("cinco").style.display = "none";
  document.getElementById("seis").style.display = "block";

}

function openingModal(modal, btn, span) {

    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

}

openingModal(document.getElementById("myModal1"), document.getElementById("myBtn1"), document.getElementsByClassName("close1")[0])
openingModal(document.getElementById("myModal2"), document.getElementById("myBtn2"), document.getElementsByClassName("close2")[0])
openingModal(document.getElementById("myModal3"), document.getElementById("myBtn3"), document.getElementsByClassName("close3")[0])
openingModal(document.getElementById("myModal4"), document.getElementById("myBtn4"), document.getElementsByClassName("close4")[0])
openingModal(document.getElementById("myModal5"), document.getElementById("myBtn5"), document.getElementsByClassName("close5")[0])
openingModal(document.getElementById("myModal6"), document.getElementById("myBtn6"), document.getElementsByClassName("close6")[0])
openingModal(document.getElementById("myModal7"), document.getElementById("myBtn7"), document.getElementsByClassName("close7")[0])
openingModal(document.getElementById("myModal8"), document.getElementById("myBtn8"), document.getElementsByClassName("close8")[0])
openingModal(document.getElementById("myModal9"), document.getElementById("myBtn9"), document.getElementsByClassName("close9")[0])
// removed some around
openingModal(document.getElementById("myModal11"), document.getElementById("myBtn11"), document.getElementsByClassName("close11")[0])
openingModal(document.getElementById("myModal12"), document.getElementById("myBtn12"), document.getElementsByClassName("close12")[0])
openingModal(document.getElementById("myModal13"), document.getElementById("myBtn13"), document.getElementsByClassName("close13")[0])
openingModal(document.getElementById("myModal14"), document.getElementById("myBtn14"), document.getElementsByClassName("close14")[0])
openingModal(document.getElementById("myModal15"), document.getElementById("myBtn15"), document.getElementsByClassName("close15")[0])
openingModal(document.getElementById("myModal16"), document.getElementById("myBtn16"), document.getElementsByClassName("close16")[0])
openingModal(document.getElementById("myModal17"), document.getElementById("myBtn17"), document.getElementsByClassName("close17")[0])
openingModal(document.getElementById("myModal18"), document.getElementById("myBtn18"), document.getElementsByClassName("close18")[0])
openingModal(document.getElementById("myModal19"), document.getElementById("myBtn19"), document.getElementsByClassName("close19")[0])

openingModal(document.getElementById("myModal21"), document.getElementById("myBtn21"), document.getElementsByClassName("close21")[0])
openingModal(document.getElementById("myModal22"), document.getElementById("myBtn22"), document.getElementsByClassName("close22")[0])
openingModal(document.getElementById("myModal23"), document.getElementById("myBtn23"), document.getElementsByClassName("close23")[0])

openingModal(document.getElementById("myModal24"), document.getElementById("myBtn24"), document.getElementsByClassName("close24")[0])

