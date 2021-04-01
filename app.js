


let row = 1 ;

var arr = new Array();


function createRow(){

    // DeleteData();
    getData();

    
        let Name = document.querySelector('.name').value
        let number = document.querySelector('.number').value
        let date = document.querySelector('.date').value
        let cash = document.querySelector('.cash').value +"$"
        let table = document.querySelector('.table')
        let noData = document.querySelector('.noData')

     // the original td 
        noData.style.display = 'none'

        if(!name|| !number || !date ||!cash){
            alert('please provide All The Information')
        }
    // adding the table row
        let newRow = table.insertRow(row) 

    // adding the table to the inputs
        let cell1 = newRow.insertCell(0)
        let cell2 = newRow.insertCell(1)
        let cell3 = newRow.insertCell(2)
        let cell4 = newRow.insertCell(3)
        
        cell1.innerHTML = Name;
        cell2.innerHTML = number;
        cell3.innerHTML = date;
        cell4.innerHTML = cash;    

    // putting values to an array for using local storage
    arr.push({
        name:Name = document.querySelector('.name').value,
        number: number = document.querySelector('.number').value,
        date: date = document.querySelector('.date').value,
        cash: cash = document.querySelector('.cash').value +"$",
    });

    localStorage.setItem("localData", JSON.stringify(arr));
  
}

 getData = ()=>{
    let str = localStorage.getItem("localData");
    if (str!= null)
        arr = JSON.parse(str);
}

//  DeleteData = ()=>{
// localStorage.clear();
// }






























// function tableCreate() {
//     var body = document.getElementsByTagName('body')[0];
//     var tbl = document.createElement('table');

//     tbl.style.width = '100%';

//     var tbdy = document.createElement('tbody');

//     for (var i = 0; i < 3; i++) {
//       var tr = document.createElement('tr');
//       for (var j = 0; j < 2; j++) {
//         if (i == 2 && j == 1) {
//           break
//         } else {
//           var td = document.createElement('td');

//           td.appendChild(document.createTextNode('\u0020'))
//           i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
//           tr.appendChild(td)
//         }
//       }
//       tbdy.appendChild(tr);
//     }
//     tbl.appendChild(tbdy);
//     body.appendChild(tbl)
//    }
