let ArrTime, BurTime = 0;
let Process = "P-";
let mini_table, row_table, col_table;
let cont_process = 1;
let cont = 0;
let burTime_sum = 0;
let array = [];
let avg = 0;
let average;
let max_table
let values;
let ArrTimeArray = [], BurTimeArray = [], ProcessArray = [];
let Arrayvalues = [];
let Arrayvaluescopy = [];
let aux;
let aux1 = 0;
let aux2 = 0;
let p = 0;
let example = 0;
let suma = 0;
let m = 0;

function generate_mini_table() {

    //get Elements
    ArrTime = document.getElementById('ArrTime').value;
    BurTime = document.getElementById('BurTime').value;
    mini_table = document.getElementById("mini-table");
    average = document.getElementById("average");

    //create Elements
    row_table = document.createElement("tr");
    col_1 = document.createElement("td");
    col_2 = document.createElement("td");
    col_3 = document.createElement("td");

    Process = "P-" + cont_process;

    //Average
    burTime_sum += parseInt(BurTime);
    avg = burTime_sum / cont_process;
    average.innerText = parseInt(avg);

    //insert Process
    col_1.innerText = Process;
    row_table.appendChild(col_1);

    //insert Arrival Time
    col_2.innerText = ArrTime;
    row_table.appendChild(col_2);

    //insert Burst Time
    col_3.innerText = BurTime;
    row_table.appendChild(col_3);

    //insert row into Table
    mini_table.appendChild(row_table)

    //array
    values = ArrTime + ":" + BurTime + ":" + Process;

    Arrayvalues.push([parseInt(ArrTime), parseInt(BurTime), Process]);

    cont_process++;
    ArrTime = document.getElementById('ArrTime').value="";
    BurTime = document.getElementById('BurTime').value="";
}

function generate_max_table(start) {

    mini_table = document.getElementById("mini-table");
    max_table = document.getElementById("big-table");

    mini_table.style.display = "none";
    max_table.style.display = "block";

    //ordenar por Arrival Time
    Arrayvalues.sort(sortFunction);

    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        } else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }

    console.table(Arrayvalues);

    //Start


    if (Arrayvalues.length == 1) {
        Arrayvalues[0].push(Arrayvalues[0][0]);
    } else if (Arrayvalues.length > 1) {
        for (let i = 0; i <= Arrayvalues.length -1; i++) {
            Arrayvalues[i].push(suma);
            suma += Arrayvalues[i][1];
        }

    }

    //End
    for (let i = 0; i < Arrayvalues.length; i++) {

        Arrayvalues[i].push(Arrayvalues[i][3]+Arrayvalues[i][1])

    }

    //T
    for (let i = 0; i < Arrayvalues.length; i++) {

        Arrayvalues[i].push(Arrayvalues[i][4]-Arrayvalues[i][0])

    }

    //E
    for (let i = 0; i < Arrayvalues.length; i++) {

        Arrayvalues[i].push(Arrayvalues[i][5]-Arrayvalues[i][1])

    }

    //P
    for (let i = 0; i < Arrayvalues.length; i++) {

        Arrayvalues[i].push(Arrayvalues[i][5]/Arrayvalues[i][1])

    }


    colocar_datos();
    generate_chart();

}

function colocar_datos() {

    let burTime_sum2 = 0;
    let burTime_sum = 0;
    let T = 0;
    Arrayvalues.sort(compareThirdColumn);

    function compareThirdColumn(a, b) {
        if (a[2] === b[2]) {
            return 0;
        } else {
            return (a[2] < b[2]) ? -2 : 2;
        }
    }

    for (let i = 0; i < Arrayvalues.length; i++) {

        let max_table = document.getElementById("big-table");
        let row_table = document.createElement("tr");
        let col_1 = document.createElement("td");
        let col_2 = document.createElement("td");
        let col_3 = document.createElement("td");
        let col_4 = document.createElement("td");
        let col_5 = document.createElement("td");
        let col_6 = document.createElement("td");
        let col_7 = document.createElement("td");
        let col_8 = document.createElement("td");

        //Process
        col_1.innerText = Arrayvalues[i][2];
        row_table.appendChild(col_1);

        //Arrive Time
        col_2.innerText = Arrayvalues[i][0];
        row_table.appendChild(col_2);

        //Burst Time
        col_3.innerText = Arrayvalues[i][1];
        row_table.appendChild(col_3);

        //Start

        col_4.innerText = Arrayvalues[i][3];
        row_table.appendChild(col_4);

        //End

        col_5.innerText = Arrayvalues[i][4];
        row_table.appendChild(col_5);

        //T
        col_6.innerText = Arrayvalues[i][5];
        row_table.appendChild(col_6);

        //E
        col_7.innerText = Arrayvalues[i][6];
        row_table.appendChild(col_7);

        //P
        col_8.innerText = Arrayvalues[i][7];
        row_table.appendChild(col_8);


        max_table.appendChild(row_table);


    }


}

function generate_chart() {

    let graphdiv;
    let graphdiv1;
    let graphdiv2;
    let btn;
    let text;
    let num;

//Get elements

    graphdiv = document.getElementById('graph');
    graphdiv1 = document.getElementById('graph-1');
    graphdiv2 = document.getElementById('graph-2');
    btn = document.getElementById('graphic');
    btn.style.display = 'none';

//Create elements
    let div1;
    let div2;
    let div3;
    let div4;
    div1 = document.createElement("div");
    div2 = document.createElement("div");
    div3 = document.createElement("div");
    div4 = document.createElement("div");
    div1.setAttribute("id", "box-1")
    div2.setAttribute("id", "box-2")
    div3.setAttribute("id", "box-3")
    div4.setAttribute("id", "box-4")
    graphdiv1.appendChild(div1);
    graphdiv1.appendChild(div2);
    graphdiv2.appendChild(div3);
    graphdiv2.appendChild(div4);


    for (let i = 0; i < Arrayvalues.length; i++) {
        text = document.createElement("h4")
        text.setAttribute("id", "number")
        text.innerText = Arrayvalues[i][2];
        div1.appendChild(text);
    }

    for (let x = 0; x < cont_process + 15; x++) {
        num = document.createElement("h4");
        num.innerText = x;
        num.setAttribute("id", "number1")
        div4.appendChild(num);
    }


    for (let i = 0; i < Arrayvalues.length; i++) {

        let row = document.createElement("div");
        row.setAttribute("id", "divid")

        div2.appendChild(row);
        let obt = Arrayvalues[i][3];
        console.log("casilla" + obt)
        for (let j = 0; j < parseInt(obt); j++) {

            let casilla = document.createElement("div");
            casilla.setAttribute("id", "casilla")
            row.appendChild(casilla);


        }
        let auxi = Arrayvalues[i][1];
        for (let d = 0; d < parseInt(auxi); d++) {
            let casilla_verde = document.createElement("div");
            casilla_verde.setAttribute("id", "divi2")
            row.appendChild(casilla_verde);
        }

    }

}
