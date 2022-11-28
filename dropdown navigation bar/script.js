const active_features=document.querySelector(".active-features");
const featuresclick=document.querySelector(".featuresclick");
const active_company=document.querySelector(".active-company");
const clickcompany=document.querySelector(".clickcompany");
const arrowup=document.querySelector(".arrowup")
const arrowup1=document.querySelector(".arrowup1")
const menu=document.querySelector(".menu")
const closemenu=document.querySelector(".closemenu")
const menuclose=document.querySelector(".menuclose")

const lists=document.getElementById("lists")




featuresclick.addEventListener("click",()=>{
    active_features.classList.remove("active_features");
    active_features.classList.toggle("active");
    arrowup.classList.remove("arrowup");
    featuresclick.classList.toggle("featuresclicktoggle");
})
arrowup.addEventListener("click",()=>{
    active_features.classList.add("active_features");
    active_features.classList.remove("active");
    arrowup.classList.add("arrowup");
    featuresclick.classList.toggle("featuresclicktoggle");

})


clickcompany.addEventListener("click",()=>{
    active_company.classList.remove("active_company");
    active_company.classList.toggle("active1");
    arrowup1.classList.remove("arrowup1");
    clickcompany.classList.toggle("clickcompanytoggle");
    })
arrowup1.addEventListener("click",()=>{
    active_company.classList.add("active_company");
    active_company.classList.remove("active1");
    arrowup1.classList.add("arrowup1");
    clickcompany.classList.toggle("clickcompanytoggle");

})
menu.addEventListener("click",()=>{

    lists.classList.remove("listinactive")
    lists.classList.toggle("listactive")
    menu.classList.toggle("menuclose")
    menu.classList.toggle("menu")
    
});
closemenu.addEventListener("click",()=>{
    lists.classList.toggle("listinactive")
    lists.classList.remove("listactive")
    menu.classList.remove("menuclose")
    menu.classList.toggle("menu")



})