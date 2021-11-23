const santa = document.querySelector('.santa.santa--walk');
const speak = santa.querySelector('.hukidashi.hukidashi--speak');
santa.addEventListener("mouseover",function(){
    santa.style.left=`110px`;
    speak.style.opacity=`10`;


});  
santa.addEventListener("mouseout",function(){
  santa.style.left=`50px`;
  speak.style.opacity=`0`;


});  
