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

//flag//
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