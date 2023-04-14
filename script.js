const output1=document.getElementById('output1');
const output2=document.getElementById('output2');


function add(a,b){
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    return a/b;
}

function operate(a,b,c)
{   
    let ans;
    if (c=='+')
    {
        ans=add(a,b);
    }
    else if(c=='-'){
        ans=subtract(a,b);

    }
    else if(c=='/')
    {
        ans=divide(a,b);
    }
    else if(c=='*')
    {
        ans=multiply(a,b);
    }
}

function clearout()
{
    output1.innerHTML="";
    output2.innerHTML="";
}

const btn=document.querySelectorAll('button');
btn.forEach(item => item.addEventListener('click',function(e)
{   
  
    
    
    if (this.id=='=')
    {
        operate();
        return;
    }
    
    if (this.id=='*')
    {
        output2.innerHTML+='&times;';
        return;
    }
    output2.innerHTML +=`${this.id}`;
    
}
));

