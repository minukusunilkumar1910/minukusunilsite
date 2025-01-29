let sidebar = document.querySelector(".sidebar")
let hamb = document.querySelector(".hamburger")
let closeb = document.querySelector(".closedbar")
 
 
hamb.addEventListener("click",()=>
{
   
   sidebar.classList.remove("close");
   closeb.style.display="flex";
   
 
});

closeb.addEventListener("click",()=>
   {
   sidebar.classList.add("close");
   closeb.style.display="none";
   
    
})



let slideclose = document.querySelectorAll(".sidebar a")


for(sl of slideclose)
{
   sl.addEventListener("click",()=>
      {
         
         sidebar.classList.add("close");
         closeb.style.display="none";
         closeb.style.zIndex=0;
      });
}