const alling = document.body.querySelector(".pad");
const todo = document.getElementById("todos");
const box = document.getElementById("ht-box");
const list = document.getElementById("list");
const todoo = document.body.querySelector(".cl");
const mod = document.body.querySelector(".allmodal")
const vo = document.body.querySelector(".modalVorodito")
const Img = document.body.querySelector(".imes")
const dei = document.getElementById("dei")
const data = JSON.parse(localStorage.getItem("arrTodos"))
const hidmod = document.getElementById("hide-modal")
const categoryS = document.getElementById("category-s")
const FilCn = document.getElementById("filter-container")
const Serch = document.getElementById("Serch")

const arrTodos = data || [];
let editNum = null
const val = todo.value



function boxtodo() {
    todoo.classList.remove("cl")
};


function boxover() {
       todoo.classList.add("cl")
}
function boxclos() {
    mod.classList.add("bl")
}

function clice() {

   todoo.classList.add("cl")
   const val = todo.value
   const category = categoryS.value
   if(val.length >= 40){
de()
   }
   if (val){
    Img.classList.add("oimg")
    const Todonew = {
    id : arrTodos.length > 0 ? arrTodos.at(-1).id + 1 : 1,
    title: val ,
    isdone : false ,
    category: category,
  }
  
  arrTodos.push(Todonew)
  todo.value = ""
  cliceTodo(arrTodos , Todonew.id)

}

}
function Filtercat (category) {
const Filt = category === "همه" ? arrTodos : arrTodos.filter(itme => itme.category === category)
cliceTodo(Filt)
}
function cliceTodo(todos = arrTodos , newId = null){
window.localStorage.setItem("arrTodos" , JSON.stringify(arrTodos))




const temp = todos.map(itms => {
const isNew = itms.id === newId
    return `
            <div class="todo-item ${isNew ? 'todo-item-new' : ''}" id="dei" style="display: flex; align-items: center; justify-content: space-between;">
         <div style="display: flex;     align-items: baseline; ">
           
         <input  onchange="checkox(this,${itms.id})" type="checkbox" ${itms.isdone ? "checked" : ""} />
             <li style=" padding: 4px ;   list-style-type: none;" id="${itms.id}">
           
            
            ${itms.id === editNum ? `<input class="edited" id="edin" value="${itms.title}">` : `<span class="todo-title${itms.isdone ? ' done' : ''}">${itms.title}</span>`}
            
             <button onclick="del(${itms.id})" class="del">Delete</button>

             ${itms.id === editNum ? `<button class="save" onclick="Save()">Save </button>` : ` <button onclick="editItms(${itms.id})" class="edit" ${itms.isdone ? 'disabled' : ''}>Edit</button> ` }

             </li>
</div>
<div>
      <svg onclick="addtoogel()" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
    
</div>

</div>
    `
}).join("")
list.innerHTML = temp 
if(todos.length === 0){
    Img.classList.remove("oimg")
} else {
    Img.classList.add("oimg")
}

}

cliceTodo()


 function checkox(done , id){
    const indof = arrTodos.findIndex(itms => itms.id === id)
    
    arrTodos[indof].isdone = done.checked
   
    cliceTodo()
    }

  
function editItms(id){
    editNum = id
    cliceTodo()
   
}
function Save() {
const editin = document.getElementById("edin").value;
if(editin.length >= 40){
  de()
     }
if(editin){
    const find = arrTodos.findIndex(itms => itms.id === editNum)
    arrTodos[find].title = editin
}
editNum = null
cliceTodo()
}



function addtoogel(){
mod.classList.remove("bl")
}


 function del(Id) {
    const Idfound = arrTodos.findIndex(item => item.id === Id)
    const anm = document.getElementById(Id).parentElement.parentElement
    anm.classList.add("deleted")
setTimeout(() => {
    arrTodos.splice(Idfound , 1)
   cliceTodo()
},600)

   
}


function handle(evt){
if(evt.key === "Enter"){
    clice()
}
}

todo.addEventListener("keypress" , handle)

function Vorodi(){
if(localStorage.getItem("hidMod") === "true"){
    vo.classList.add("cl")
    return
}


    const temp = `
  
    <div class="dimodal">
          <a href="#">  <svg class="bast" onclick="boxclo()" style="position: absolute; " xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" fill="white"/>
        <path d="M7 17L16.8995 7.10051" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></a>
    
        <h2>راهنمایی ها
        <p>سلام دوست عزیز از اینکه مارو انتخاب کردی باعث افتخاره</p>
        <p>خوب به راهنمایی دقت کن تا به مشکل نخوری </p>
        <p>  برای شروع و گذاشتن یادداشت بر روی گزینه  Add task کلیک کن</p>
        <p>در ادامه با گزینه Delete و Edit مواجه میشی</p>
        <p>یادت باشه با زدن بر روی گزینه delete یادداشتت حذف میشه و راهی برای بازگشتش نیست</p>
       <p>یادت باشه بیشتر از 40 خط نمیتونی تایپ کنی خود به خود یادداشتت پاک میشه</p>
        <p>چیزی که روی سایت ثبت میکنی موندگاره و با خروجت چیزی پاک نمیشه </p>
        <p>اطلاعاتت جاش امنه رفیق با امنیت کامل فعالیت کن</p>
      <p class="bold">اگه همه رو نادیده گرفتی‌ میتونی با سه نقطه کنار یادداشتت باز راهنمایی رو ببینی</p>
      <label style="display: flex; align-items: center; gap: 5px;">
                <input type="checkbox" id="hide-modal"> دیگه نشون نده
            </label>
      <h3>[: Pedram </h3>
    </div>
    
    `
    vo.innerHTML = temp
    const hidmod = document.getElementById("hide-modal")
    hidmod.addEventListener("change" , MadBast)
    }
    function MadBast() {
        if(this.checked) {
            localStorage.setItem("hidMod" , "true")
            boxclo()
        }
    }
  
    function boxclo() {
        vo.classList.add("hiddd")

    }
    Vorodi()
    function de (){
dei.classList.add("hid")
    }
    function serchInput(evt){
const filterd = arrTodos.filter(itme => itme.title.toLowerCase().includes(evt.target.value.toLowerCase()))
cliceTodo(filterd)
    }
    Serch.addEventListener("input" , serchInput )