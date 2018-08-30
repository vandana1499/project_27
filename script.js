var submit=document.getElementById('submit');
var date=document.getElementById('date');
submit.addEventListener('click',()=>{
let d=date.valueAsDate;
var mnth=d.getMonth();
var dt=d.getDate();
var n=date.valueAsNumber;
var box=document.getElementById('box');
box.innerHTML='<p>Your birth date is:'+dt ;
box.innerHTML+='<br><p>month is:'+mnth;
box.innerHTML+='<br><p>According to your date,month and year,<p> ';
var r=n%100000;
r/=10;
console.log(r);
if(r==0)
{
    box.innerHTML+='<p>You will be the richest person on the earth</p>';
}
else if(r===1)
{
    box.innerHTML+='<p>You will be the richest person on the earth</p>';
}
else if(r===2)
{
    box.innerHTML+='<p>You will be the richest person on the earth</p>';
}
else if(r===3)
{
    box.innerHTML+='<p>You will be the richest person on the earth</p>';
}
else if(r===4)
{
    box.innerHTML+='<p>You will be the richest person on the earth</p>';
}
else if(r===5)
{
    box.innerHTML+='<p>You will be the richest person on the earth</p>';
}
else if(r===6)
{
    box.innerHTML+='<p>You will be the richest person on the earth</p>';
}
else if(r===7)
{
    box.innerHTML+='<p>You will be the richest person on the earth</p>';
}
else if(r===8)
{
    box.innerHTML+='<p>You will be the richest person on the earth</p>';
}
else if(r===9)
{
    box.innerHTML+='<p>You will be the richest person on the earth</p>';
}

});