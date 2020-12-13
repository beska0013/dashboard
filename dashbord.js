//left navbar//

//sideBar btn//
document.getElementById('switchSidebar').onclick = function () {sidebarSwitch()}

function sidebarSwitch(){
  document.getElementById('mainSidebar').classList.toggle('sidebar-collapse')
  document.getElementById('secondarySidebar').classList.toggle('secondary-sidebar-show')
  document.getElementById('mainLogo').classList.toggle('sidebar-collapse')
  document.getElementById('secondaryLogo').classList.toggle('logo-dark-show')
}

// mega menu dropdown//

 const megaBtn = document.getElementById('megaBtn')
 const megaMenu = document.getElementById('megaMenu')
 
 
 function closeMegaMenu(e) {
   if(e.target == megaBtn) {
     megaMenu.classList.toggle('appear')
   }
   else {
     megaMenu.classList.remove('appear')
   }
 }

 document.addEventListener('click', closeMegaMenu)

 ////

 
//left navbar end//

 //right navbar menu dropdown//

 //hidden search form//
 const modalBtn = document.getElementById('modalBtn')
 const modalDropdown = document.getElementById('modal')
 
 
 function closeModalMenu(e) {
   if(e.target == modalBtn) {
     modalDropdown.classList.toggle('appear2')
   }
   else {
     modalDropdown.classList.remove('appear2')
   }
 }

 document.addEventListener('click', closeModalMenu)
 ///////

//flag//
 const modalBtn1 = document.getElementById('modalBtn1')
 const modalDropdown1 = document.getElementById('modal1')
 
 
 function closeModalMenu1(e) {
   if(e.target == modalBtn1) {
     modalDropdown1.classList.toggle('appear2')
   }
   else {
     modalDropdown1.classList.remove('appear2')
   }
 }

 document.addEventListener('click', closeModalMenu1)
 ///////

//custom-box//
 const modalBtn2 = document.getElementById('modalBtn2')
 const modalDropdown2 = document.getElementById('modal2')
 
 
 function closeModalMenu2(e) {
   if(e.target == modalBtn2) {
     modalDropdown2.classList.toggle('appear2')
   }
   else {
     modalDropdown2.classList.remove('appear2')
   }
 }

 document.addEventListener('click', closeModalMenu2)
 /////
 
 //bell///
 const modalBtn3 = document.getElementById('modalBtn3')
 const modalDropdown3 = document.getElementById('modal3')
 
 
 function closeModalMenu3(e) {
   if(e.target == modalBtn3) {
     modalDropdown3.classList.toggle('appear2')
   }
   else {
     modalDropdown3.classList.remove('appear2')
   }
 }

 document.addEventListener('click', closeModalMenu3)
//////

//  HENRY//
 const modalBtn4 = document.getElementById('modalBtn4')
 const modalDropdown4 = document.getElementById('modal4')
 
 
 function closeModalMenu4(e) {
   if(e.target == modalBtn4) {
     modalDropdown4.classList.toggle('appear2')
   }
   else {
     modalDropdown4.classList.remove('appear2')
   }
 }

 document.addEventListener('click', closeModalMenu4)
///////

// header-modal-sidebar//

document.getElementById("headerModalSidebarBtn").onclick = function () {closeHeaderModalSidebar()}

function closeHeaderModalSidebar() {
  document.getElementById("headerModalSidebar").classList.toggle('switch-in');
}
  window.onclick = function (e){
    if(e.target == document.getElementById("headerModalSidebar")){
      document.getElementById("headerModalSidebar").classList.remove('switch-in');
    }
  }
 //////

///cross//
document.getElementById("switchOff").onclick = function () {switchOffBtn()}
function switchOffBtn() {
  document.getElementById("headerModalSidebar").classList.remove('switch-in');
}
//right navbar menu dropdown end//

// secondary sidebar//
document.getElementById("secondarySidebarItemsTitle").onclick = function () {titlefBtn()}
function titlefBtn() {
  document.getElementById("secondarySideBox").classList.toggle('secondary-sidebar-box-show');
}

document.getElementById("secondarySidebarItemsTitle2").onclick = function () {titlefBtn2()}
function titlefBtn2() {
  document.getElementById("secondarySideBox2").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move").classList.toggle('icon-rotate');
}
//ecomerce//

document.getElementById("secondarySidebarItemsTitle3").onclick = function () {titlefBtn3()}
function titlefBtn3() {
  document.getElementById("secondarySideBox3").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move2").classList.toggle('icon-rotate');
}

//crypto
document.getElementById("secondarySidebarItemsTitle4").onclick = function () {titlefBtn4()}
function titlefBtn4() {
  document.getElementById("secondarySideBox4").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move3").classList.toggle('icon-rotate');
}

//email//
document.getElementById("secondarySidebarItemsTitle5").onclick = function () {titlefBtn5()}
function titlefBtn5() {
  document.getElementById("secondarySideBox5").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move4").classList.toggle('icon-rotate');
}

//Invoice
document.getElementById("secondarySidebarItemsTitle6").onclick = function () {titlefBtn6()}
function titlefBtn6() {
  document.getElementById("secondarySideBox6").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move5").classList.toggle('icon-rotate');
}

//project
document.getElementById("secondarySidebarItemsTitle7").onclick = function () {titlefBtn7()}
function titlefBtn7() {
  document.getElementById("secondarySideBox7").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move6").classList.toggle('icon-rotate');
}
//tasks
document.getElementById("secondarySidebarItemsTitle8").onclick = function () {titlefBtn8()}
function titlefBtn8() {
  document.getElementById("secondarySideBox8").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move7").classList.toggle('icon-rotate');
}
//contact
document.getElementById("secondarySidebarItemsTitle9").onclick = function () {titlefBtn9()}
function titlefBtn9() {
  document.getElementById("secondarySideBox9").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move8").classList.toggle('icon-rotate');
}
//authentication
document.getElementById("secondarySidebarItemsTitle10").onclick = function () {titlefBtn10()}
function titlefBtn10() {
  document.getElementById("secondarySideBox10").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move9").classList.toggle('icon-rotate');
}
//Utility
document.getElementById("secondarySidebarItemsTitle11").onclick = function () {titlefBtn11()}
function titlefBtn11() {
  document.getElementById("secondarySideBox11").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move10").classList.toggle('icon-rotate');
}
//Ui elements
document.getElementById("secondarySidebarItemsTitle12").onclick = function () {titlefBtn12()}
function titlefBtn12() {
  document.getElementById("secondarySideBox12").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move11").classList.toggle('icon-rotate');
}
//Forms
document.getElementById("secondarySidebarItemsTitle13").onclick = function () {titlefBtn13()}
function titlefBtn13() {
  document.getElementById("secondarySideBox13").classList.toggle('secondary-sidebar-box-show2');
}
//Tables
document.getElementById("secondarySidebarItemsTitle14").onclick = function () {titlefBtn14()}
function titlefBtn14() {
  document.getElementById("secondarySideBox14").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move12").classList.toggle('icon-rotate');
}
//charts
document.getElementById("secondarySidebarItemsTitle15").onclick = function () {titlefBtn15()}
function titlefBtn15() {
  document.getElementById("secondarySideBox15").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move13").classList.toggle('icon-rotate');
}
//icons
document.getElementById("secondarySidebarItemsTitle16").onclick = function () {titlefBtn16()}
function titlefBtn16() {
  document.getElementById("secondarySideBox16").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move14").classList.toggle('icon-rotate');
}
//maps
document.getElementById("secondarySidebarItemsTitle17").onclick = function () {titlefBtn17()}
function titlefBtn17() {
  document.getElementById("secondarySideBox17").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move15").classList.toggle('icon-rotate');
}
//multi level
document.getElementById("secondarySidebarItemsTitle18").onclick = function () {titlefBtn18()}
function titlefBtn18() {
  document.getElementById("secondarySideBox18").classList.toggle('secondary-sidebar-box-show2');
  document.getElementById("move16").classList.toggle('icon-rotate');
}