function playbutton1()
{
    form1.screen.value+='1';

}

function playbutton2()
{
    form1.screen.value+='2';
}

function playbutton3()
{
    form1.screen.value+='3';
}
function playbutton4()
{
    form1.screen.value+='4';
}

function playbutton5()
{
    form1.screen.value+='5';
}
function playbutton6()
{
    form1.screen.value+='6';
}

function playbutton7()
{
    form1.screen.value+='7';
}
function playbutton8()
{
    form1.screen.value+='8';
}
function playbutton9()
{
    form1.screen.value+='9';
}
function playbutton0()
{
    form1.screen.value+='0';
}

function add()
{
    form1.screen.value+='+';
}

function sub()
{
    form1.screen.value+='-';
}

function mul()
{
    form1.screen.value+='*';

}
function div()
{
    form1.screen.value+='/';
}
function equal()
{
    form1.screen.value=eval(form1.screen.value);
}


function clean()
{
    document.getElementById('screen').value = '';
}


