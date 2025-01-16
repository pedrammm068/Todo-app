const alling = document.body.querySelector(".pad");
const todo = document.getElementById("todos");
const box = document.getElementById("ht-box");
const list = document.getElementById("list");
const todoo = document.body.querySelector(".cl");
const mod = document.body.querySelector(".allmodal")
const vo = document.body.querySelector(".modalVorodito")
const Img = document.body.querySelector(".imes")
const data = JSON.parse(localStorage.getItem("arrTodos"))



const arrTodos = data || [];
let editNum = null



const toast = Toastify({
    text: "انجام شد قربونت برم",
    duration: 3000,
    close: true,
    gravity: "bottom",
    position: "right", 
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "red",
    },
    onClick: function(){} // Callback after click
  })
  const tick = Toastify({
    text: "روچشم،حتما سه نقطه رو باز کن",
    duration: 3000,
    close: true,
    gravity: "bottom",
    position: "right", 
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "",
    },
    onClick: function(){} // Callback after click
  })


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
   if (val){
    Img.classList.add("oimg")
    tick.showToast()
    const Todonew = {
    id : arrTodos.length > 0 ? arrTodos.at(-1).id + 1 : 1,
    title: val ,
    isdone : false 
  }
  
  arrTodos.push(Todonew)
  todo.value = ""
  cliceTodo()
}
    
}
function cliceTodo(){
window.localStorage.setItem("arrTodos" , JSON.stringify(arrTodos))




const temp = arrTodos.map(itms => {

    return `
              <div style="display: flex;    align-items: center; justify-content: space-between;">
         <div style="display: flex;  ">
           
         <input  onchange="checkox(this,${itms.id})" type="checkbox" ${itms.isdone ? "checked" : ""} />
             <li style=" padding: 4px ;   list-style-type: none;" id="${itms.id}">
           
             ${itms.id === editNum ? `<input class="edited" id="edin"  value="${itms.title}">` : ` <span>${itms.title}</span>` }
           
             <button onclick="del(${itms.id})" class="del">Delete</button>

             ${itms.id === editNum ? `<button class="save" onclick="Save()">Save </button>` : `             <button onclick="editItms(${itms.id})" class="edit">Edit</button> ` }

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

}

cliceTodo()


 function checkox(done , id){
    const indof = arrTodos.findIndex(itms => itms.id === id)
    
    arrTodos[indof].isdone = done.checked
   
    cliceTodo()
    }
    
// function check(){
//     if( isdone = true){
//          tick.showToast()
//    console.log(isdone)
//     }
//     cliceTodo()
//  }

  
function editItms(id){
    editNum = id
    cliceTodo()
   
}
function Save() {
const editin = document.getElementById("edin").value;

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
function showToast(){

}


 function del(Id) {
    const Idfound = arrTodos.findIndex(item => item.id === Id)

    arrTodos.splice(Idfound , 1)
    toast.showToast()
   cliceTodo()

   
}


function handle(evt){
if(evt.key === "Enter"){
    clice()
}
}

todo.addEventListener("keypress" , handle)


function Vorodi(){


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
        <p>چیزی که روی سایت ثبت میکنی موندگاره و با خروجت چیزی پاک نمیشه </p>
        <p>اطلاعاتت جاش امنه رفیق با امنیت کامل فعالیت کن</p>
      <p class="bold">اگه همه رو نادیده گرفتی‌ میتونی با سه نقطه کنار یادداشتت باز راهنمایی رو ببینی</p>
        <h3>[: Pedram </h3>
    </div>
    
    `
    vo.innerHTML += temp
    }
  
    function boxclo() {
        vo.classList.add("cl")

    }
    Vorodi()
