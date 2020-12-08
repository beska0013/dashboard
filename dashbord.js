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

 //mega menu dropdown end//

 //right navbar menu dropdown//

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







// document.getElementById("cusBtn3").onclick = function () { myFunction3() };

// function myFunction3() {
//   document.getElementById("cusDropdown3").classList.toggle("appear2");
// }