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

