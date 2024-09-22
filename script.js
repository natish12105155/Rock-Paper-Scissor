var randomchoice;
var userchoice;
function rc()
{
    var rc=Math.random()*3;
    if(rc>=0 && rc<=1)
    {
        randomchoice='Rock';
    }
    else if(rc>1 && rc<=2)
    {
        randomchoice='Paper';
    }
    else
    {
        randomchoice='Scissor';
    }
    document.querySelector('#cc').value=randomchoice;
}
function uc(choice)
{
    userchoice=choice;
    document.querySelector('#uc').value=choice;
}
var userscore=0;
document.querySelector('#us').value=userscore;
var computerscore=0;
document.querySelector('#cs').value=computerscore;
function wc()
{
    if(userchoice=='Rock' && randomchoice=='Scissor')
    {
        userscore++;
        document.querySelector('#us').value=userscore;
    }
    else if(userchoice=='Paper' && randomchoice=='Rock')
    {
        userscore++;
        document.querySelector('#us').value=userscore;
    }
    else if(userchoice=='Scissor' && randomchoice=='Paper')
    {
        userscore++;
        document.querySelector('#us').value=userscore;
    }
    else if(userchoice===randomchoice)
    {
        console.log('Tie');
    }
    else
    {
        computerscore++;
        document.querySelector('#cs').value=computerscore;
    }

    if(userscore==3)
    {
    document.querySelector('#result').value='You win';
    }
    if(computerscore==3)
    {
        document.querySelector('#result').value='Computer win';
    }
}