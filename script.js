var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click',(e)=>{
        btntext = e.target.innerText;
        //  if(btntext =='x')
        //  {
        //      btntest = '*';
        //  }
        // if(btntext =='/')
        // {
        //     btntest = '/';
        // }
        screen.value+=btntext;
    });
}
function sin()
{
    screen.value = Math.sin(screen.value);
}
function cos()
{
    screen.value = Math.cos(screen.value);
}
function tan()
{
    screen.value = Math.tan(screen.value);
}
function pow()
{
    screen.value = Math.pow(screen.value);
}
function sqrt()
{
    screen.value = Math.sqrt(screen.value);
}
function log()
{
    screen.value = Math.log(screen.value);
}
function pi()
{
    screen.value = 3.14159265359;
}
function e()
{
    screen.value = 2.71828182846;
}
function fact()
{
    var i,num,f;
    f=1
    num=sreen.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }
    i=i-1;
    screen.value=f;
}
function backspc()
{
    screen.value = screen.value.substr(0,screen.value.length-1);
}