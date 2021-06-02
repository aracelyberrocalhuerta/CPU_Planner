let ArrTime, BurTime , Start, End, T, E, P = 0;
let Process = "P-";
let table, row_table, col_table;
let cont_process = 1;
let cont=0;
let burTime_sum=0;
let burTime_sum2=0;
let burTime_last=0;
let cont_row = 1;
let cont_col = 1;
let num1="";
let num2="";
let burTime_Array = [];
let arrTime_Array = [];
let suma=0;
let avg=0;
let average;



function generate_mini_table() {

    //get Elements

    ArrTime = document.getElementById('ArrTime').value;
    BurTime = document.getElementById('BurTime').value;
    table = document.getElementById("table-row");
    average=document.getElementById("average");

    //create Elements
    row_table = document.createElement("tr");
    col_1 = document.createElement("td");
    col_2 = document.createElement("td");
    col_3 = document.createElement("td");
    col_4 = document.createElement("td");
    col_5 = document.createElement("td");
    col_6 = document.createElement("td");
    col_7 = document.createElement("td");
    col_8 = document.createElement("td");

    Process = "P-" + cont_process;

    //insert Process
    col_1.innerText = Process;
    row_table.appendChild(col_1);

    //insert Arrival Time
    col_2.innerText = ArrTime;
    row_table.appendChild(col_2);

    //insert Burst Time
    col_3.innerText = BurTime;
    row_table.appendChild(col_3);


    //Add values into array
    arrTime_Array.push(ArrTime);
    burTime_Array.push(BurTime);


    //for (let i = 0; i < arrTime_Array.length ; i++) {
      //  console.log(arrTime_Array[i])
    //}


    //Start
    if (ArrTime==0){
        col_4.innerText=0;
        burTime_sum+=parseInt(BurTime)
        T=burTime_sum-ArrTime;
        if(arrTime_Array[cont]==arrTime_Array[cont-1]){

        }
    }else{

        col_4.innerText=burTime_sum;
        burTime_sum+=parseInt(BurTime);
        T=burTime_sum-ArrTime;
    }

    //End
    burTime_sum2+=parseInt(BurTime);
    col_5.innerText=burTime_sum2;

    row_table.appendChild(col_4);
    row_table.appendChild(col_5);

    //Average
    avg=burTime_sum2/cont_process;
    average.innerText=parseInt(avg);

    //T
    col_6.innerText=T;
    row_table.appendChild(col_6);

    //E


    //insert row into Table
    table.appendChild(row_table)


    //Set Attribute
   // col_table.setAttribute("id", cont_row + "-" + cont_col);

    cont_process++;
    cont++;
}

