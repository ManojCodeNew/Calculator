var f1= document.querySelector('.f1')
var f2= document.querySelector('.f2')
var out=document.querySelector('.out')
// var button=document.querySelector('.button')
var button=document.querySelectorAll('.b')

// var sum=eval("2+2");
// console.log(sum);
// function mj()
// {
//    var m=parseInt(first.value)
//    var j=parseInt(second.value)
//  out.value=m
//  console.log(collect)
 
// }

for(var i=0;i<button.length;i++)
{
button[i].addEventListener("click",function fun(event)
{
  var op=event.currentTarget.textContent
  console.log(op);
  var string=f1.value+op+f2.value;
  console.log(eval(string));
  out.value=eval(string);
  // switch (op)
  // {
  // case "+":
  // var s=parseInt(f1.value)+parseInt(f2.value)
  // out.value=sum

  // case "+":
  // var s=parseInt(f1.value)+parseInt(f2.value)
  // out.value=sum

  // case "+":
  // var s=parseInt(f1.value)+parseInt(f2.value)
  // out.value=sum

  // case "+":
  // var s=parseInt(f1.value)+parseInt(f2.value)
  // out.value=sum

  // case "+":
  // var s=parseInt(f1.value)+parseInt(f2.value)
  // out.value=sum
  // }
});
}