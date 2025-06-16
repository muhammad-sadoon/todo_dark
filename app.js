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
