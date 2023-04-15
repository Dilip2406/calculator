const output1=document.getElementById('output1');
const output2=document.getElementById('output2');
let num1;
let operator;
let num2;
let count=0;



function checkNumber(x) {

    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){
    
        // check if it is integer
        if (Number.isInteger(x)) {
            return x;
        }
        else {

            return x.toPrecision(4)
        }
    
    } 
}


function add(a,b){
    let answer=a+b;
    answer=checkNumber(answer);
    return answer;
}

function subtract(a,b)
{   
    let answer=a-b;
    answer=checkNumber(answer);
    return answer;
}

function multiply(a,b)
{
    let answer=a*b;
    answer=checkNumber(answer);
    return answer;

}

function divide(a,b)
{ 
    if(b==0)
    {
        return 'GOTCHA  ERROR';
    }
    let answer=a/b;
    answer=checkNumber(answer);
    return answer;
   
}

function operate(a,b,c)
{   
    let ans;
    if(c=='+')
    {   
        ans=add(a,b);
    }
    else if(c=='-')
    {

        console.log(a,b);
        ans=subtract(a,b);

    }
    else if(c=='*')
    {
        ans=multiply(a,b)

    }
    else if(c=='/')
    {
        ans=divide(a,b);

    }
    num1=ans;

    output2.innerHTML=ans;
    previd='=';

    return ;
}

function back_space()
{   
    if(output2.innerHTML.length==1)
    {
        output2.innerHTML="0";
        return;
    }
    output2.innerHTML=output2.innerHTML.substring(0,output2.innerHTML.length -1);
}

function clearout()
{
    output1.innerHTML="";
    output2.innerHTML="0";
    count=0;
    num1=undefined;
    num2=undefined;
    operator=undefined;
    previd=undefined;

    document.getElementById(".").disabled = false;
    
}

let previd;
const btn=document.querySelectorAll('button');


btn.forEach(item => item.addEventListener('click',function(e)
{   
    
    if ((/[+\-*/=]/.test(previd)) &&(/[+\-*/=]/.test(this.id)))
    {
        previd=this.id;
        operator=this.id;
        return;
    }

    if(this.id=='.')
    {
        document.getElementById(".").disabled = true;
    }

  if(this.id=='bs')
  {
    back_space();
    return;
  }
   if (this.id=='C')
   {
     return;

   }
    if (this.id=='root')
    {
        output2.innerHTML=Math.sqrt(Number(output2.innerHTML));
        return;

    }

    if(this.id=='perc')
    {
        output2.innerHTML=Number(output2.innerHTML)*100;
        return;
    }
    
    if (this.id=='=')
    {   
    
        if(operator!=undefined){
            num2=Number(output2.innerHTML);
            operate(num1,num2,operator);
            
            
        }
        return;
    }

   if(this.id=='+')
    {   
        if ((previd!='+')&& (count!=0))
        {  
            num2=Number(output2.innerHTML);
            operate(num1,num2,operator);
            return;
            
        }
        if(count==0)
            {
                num1=Number(output2.innerHTML);
                operator='+';
                count++;
                previd='+';
                return;
            }
        num2=Number(output2.innerHTML);
        num1=add(num1,num2);
        output2.innerHTML=num1;
        previd='+';
        operator='+';

        return;
    }

    if (this.id=='-')
    {   
        if ((previd!='-')&&(count!=0))
        {  
            num2=Number(output2.innerHTML);
            operate(num1,num2,operator);
            previd='-';
            operator='-';
            return;
            
        }
        if(count==0)
        {
            num1=Number(output2.innerHTML);
            operator='-';
            count++;
            previd='-';
            return;
        }
        num2=Number(output2.innerHTML);
        num1=subtract(num1,num2);
        output2.innerHTML=num1;
        previd='-';
        operator='-';

        return;
    }
    
    
    if (this.id=='*')
    {   
        if ((previd!='*')&&(count!=0))
        {  
            num2=Number(output2.innerHTML);
            operate(num1,num2,operator);
            previd='*';
            operator='*';
            return;
            
        }

        if(count==0)
        {
            num1=Number(output2.innerHTML);
            operator='*';
            count++;
            previd='*';
            return;
        }
        num2=Number(output2.innerHTML);
        num1=multiply(num1,num2);
        output2.innerHTML=num1;
        previd='*';
        operator='*';

        return;
    }

    if (this.id=='/')
    {   
        if ((previd!='/')&&(count!=0))
        {  
            num2=Number(output2.innerHTML);
            operate(num1,num2,operator);
            previd='/';
            operator='/';
            return;
            
        }
        if(count==0)
        {
            num1=Number(output2.innerHTML);
            operator='/';
            count++;
            previd='/';
            return;
        }
        num2=Number(output2.innerHTML);
        num1=multiply(num1,num2);
        output2.innerHTML=num1;
        previd='/';
        operator='/';


        return ;
    }

    
    if(output2.innerHTML=='0')
    {
        output2.innerHTML='';
    }

    
    if (/[+\-*/=]/.test(previd))
    {   

        document.getElementById(".").disabled = false;

         output2.innerHTML =`${this.id}`;
         previd=this.id;

    }
    
    else
    {
        output2.innerHTML +=`${this.id}`;
        previd=this.id;
    }
}
));



