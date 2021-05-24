

function add_data(){
//Declare variables

    let process;
    let p,a,b;

//Get value inputs Process, BurTime, Arrtime

    p = document.getElementById('Process').value;
    b = document.getElementById('BurTime').value;
    a = document.getElementById('ArrTime').value;

//Concat Process value with String

    process='P' + p;

//Get Elements

    let table=document.getElementById('table');

//Create Elements

    let col1 =document.createElement('td');
    let col2 =document.createElement('td');
    let col3 =document.createElement('td');
    let row =document.createElement('tr');

//Insert Strings Variables into respective column

    col1.innerText=process;
    col2.innerText=b;
    col3.innerText=a;

//Insert columns into row

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

//Insert row into table

    table.appendChild(row);

//Clean inputs value
    p = document.getElementById('Process').value = "";
    b = document.getElementById('BurTime').value = "";
    a = document.getElementById('ArrTime').value = "";
}
function generate(){

//Declare variables

    let graphdiv;
    let col;
    let row;

//Get elements

    graphdiv = document.getElementById('graph');

//Get values table


}