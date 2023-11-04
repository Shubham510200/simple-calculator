var input_box=document.querySelector('#inputbox');
var equ=document.querySelector('#equation');
var his_show=document.getElementById('rightdiv')
function getValue(val)
{
    if (input_box.value==="0")
    {
        input_box.value= val;
    }
    else
    {
        input_box.value+=val;
    }

}



function solve()
{
    var equation=input_box.value;
    var ans=eval(equation);
    input_box.value=ans;
    equ.value= equation + "=";
    showHistory();
}

function clearAll()
{
    input_box.value="0";
    equ.value="";
}

function lastEle()
{
    if(input_box.value!='')
    {
        if(input_box.value.length>1)
        {
            input_box.value=input_box.value.slice(0,-1);
        }
        else
        {
            input_box.value=input_box.value.slice(0,-1);
            input_box.value='0'
        }
    }
    else
    {
        input_box.value='0';
    }
}

var num=1;
function getHistory(){
    if(num%2==1)
    {
        
        his_show.style.display="block";
    }
    else
    {
        his_show.style.display="none";
    }
    num++;

}

var hisBox=document.getElementById('History_body');

function showHistory(){
    var equation_val = equ.value;
    var ans = input_box.value;
    hisBox.innerHTML +=`<div class="history">
                            <h1>${equation_val}</h1>
                            <h1>${ans}</h1>
                       </div>`;
}

function clearHistory()
{
    var choice = confirm("Do you want to clear history!. . ");
    if(choice)
    {
        hisBox.innerHTML =" "; 
    }
}