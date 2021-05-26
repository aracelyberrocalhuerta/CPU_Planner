
let addition = 0;
let count =0;
let r=0;
let countP=0;
let sum=0;
function add_data(){
    countP++;
    count++;
    let c=0;
//Declare variables

    let process;
    let p,a,b;
    let ave=0;

//Get value inputs Process, BurTime, Arrtime

    p = document.getElementById('Process').value;
    a = document.getElementById('ArrTime').value;
    b=parseInt(document.getElementById('BurTime').value);
    addition+=b;
    sum+=b;
//Concat Process value with String

    process='P-' + p;

//Get Elements

    let table=document.getElementById('table');
    let avg=document.getElementById('average');
//Create Elements

    let col1 =document.createElement('td');
    let col3 =document.createElement('td');
    let col2 =document.createElement('td');

    let row =document.createElement('tr');
    c++;
    r++;
    col1.setAttribute('id',r+"-"+c);
    c++;
    col3.setAttribute('id',r+"-"+c);
    c++;
    col2.setAttribute('id',r+"-"+c);

//Insert Strings Variables into respective column

    col1.innerText=process;
    col3.innerText=b;
    col2.innerText=a;
    ave=addition/count;
    avg.innerText =parseInt(ave);

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

//Function generate graphic
function generate(){

    let graphdiv;
    let graphdiv1;
    let graphdiv2;


    let btn;

//Get elements

    graphdiv = document.getElementById('graph');
    graphdiv1 = document.getElementById('graph-1');
    graphdiv2 = document.getElementById('graph-2');
    btn=document.getElementById('graphic');
    btn.style.display='none';

//Create elements
    let div1;
    let div2;
    let div3;
    let div4;
    div1=document.createElement("div");
    div2=document.createElement("div");
    div3=document.createElement("div");
    div4=document.createElement("div");
    div1.setAttribute("id","box-1")
    div2.setAttribute("id","box-2")
    div3.setAttribute("id","box-3")
    div4.setAttribute("id","box-4")
    graphdiv1.appendChild(div1);
    graphdiv1.appendChild(div2);
    graphdiv2.appendChild(div3);
    graphdiv2.appendChild(div4);

//Get values table
    let aux="";
    let name="";
    let text="";
    let num;
    for (let i = 1; i <= countP; i++) {
        aux=i+"-1";

        name=document.getElementById(aux).innerText;
        text=document.createElement("h4")
        text.setAttribute("id","number")
        text.innerText=name;
        div1.appendChild(text);
    }
    let auxi;
    let axi;
    for (let i = 1; i <= countP; i++) {
        aux=i+"-3";
        name=document.getElementById(aux).innerText;
        if(name!=0){
            let p=i-1;
            auxi=p+"-2";

            axi=name-auxi;
            name+=axi;
            console.log(auxi)
            console.log(name)
            console.log(axi)
            name=document.getElementById(auxi).innerText;
            text=document.createElement("div");
            text.setAttribute("id","divid")

            for (let k = 0; k < name; k++) {
                let text2=document.createElement("div");
                text2.setAttribute("id","divi")
                text.appendChild(text2);

            }

            aux=i+"-2";
            name=document.getElementById(aux).innerText;
            for (let k = 0; k < name; k++) {
                let text2=document.createElement("div");
                text2.setAttribute("id","divi2")
                text.appendChild(text2);
                div2.appendChild(text);
            }

        }else {
            text=document.createElement("div");
            text.setAttribute("id","divid")
            for (let k = 0; k < name; k++) {
                let text2=document.createElement("div");
                text2.setAttribute("id","divi")
                text.appendChild(text2);

            }
            let r;
            aux=i+"-2";
            name=document.getElementById(aux).innerText;

            for (let k = 0; k < name; k++) {
                let text2=document.createElement("div");
                text2.setAttribute("id","divi2")
                text.appendChild(text2);
                div2.appendChild(text);
            }
        }




    }

    sum=sum+5;

    for (let x = 0; x < sum ; x++) {
        num=document.createElement("h4");
        num.innerText=x;
        num.setAttribute("id","number1")
        div4.appendChild(num);
    }



//Insert table to Graphic DIV


}