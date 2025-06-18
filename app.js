var items = document.querySelectorAll(".page_3_bottom ul li");
var handlerParentDev = document.querySelector(".page_3_bottom ul")
var arr = [];
items.forEach((v) => {
    arr.push(v)
})
console.log(arr)
function pervious_btn() {
    var lastItem = arr.pop()
    handlerParentDev.removeChild(lastItem)
    handlerParentDev.appendChild(lastItem)
    arr.unshift(lastItem)
}
function next_btn() {
    var firstItem = arr.shift()
    handlerParentDev.removeChild(firstItem)
    handlerParentDev.appendChild(firstItem)
    arr.push(firstItem)
}
var items_2 = document.querySelectorAll(".commit_boxes ul li");
var handlerParentDev_2 = document.querySelector(".commit_boxes ul")
var arr_2 = [];
items_2.forEach((v) => {
    arr_2.push(v)
})
console.log(arr_2)
function pervious_btn_2() {
    var lastItem = arr_2.pop()
    handlerParentDev_2.removeChild(lastItem)
    handlerParentDev_2.appendChild(lastItem)
    arr_2.unshift(lastItem)
}
function next_btn_2() {
    var firstItem = arr_2.shift()
    handlerParentDev_2.removeChild(firstItem)
    handlerParentDev_2.appendChild(firstItem)
    arr_2.push(firstItem)
}
function toggle(arg){
    console.log(arg.style)
    if(arg.style.height == "100px"){
        arg.style.height = "0px";
    }else{
        arg.style.height = "100px";
    }

}