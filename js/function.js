var inputtableList = '';
var tableList = 10;
function getInputValue() {
    var inputtableList = document.getElementById('pageSet');
    alert(inputtableList.value);
    tableList = parseInt(inputtableList.value);
    buildTable(myArray,page=1)
}
buildTable(myArray,page=1)




console.log(tableList);
//화면에 보여질 tableList수


buildTable(myArray, page=1) 
function buildTable(data, page) { 
    var table = document.getElementById('table1') 
    var totalPage = Math.ceil(data.length / tableList);
    // 소수점 첫째자리 올림
    
    var startPage = ((page-1)*tableList)+1;
    var endPage = startPage+tableList-1;

    var paginationHTML = '';
    table.innerHTML = '';
 
    var tableHead = `<tr> 
                      <th>상품명</th> 
                      <th>가격</th> 
                      <th>상품이미지</th> 
                      <th style="width:100px;">바로가기</th>
                    </tr>` 

    table.innerHTML = tableHead
    for (var i=startPage; i < endPage+1; i++) { 
        var row = `<tr> 
                    <td>${data[i].productName}</td> 
                    <td style="width:150px">${data[i].productPrice}원</td> 
                    <td style="width:200px; height:200px;"><img src=${data[i].productImage} width="200" height="200"></td> 
                    <td><a href=${data[i].productUrl} target="_blank">최저가</a></td> 
                  </tr>` 
        table.innerHTML += row 
    } 
   
    

    for (var i=1; i < totalPage+1; i++ ) {
        var pagingID = "ID"+i;
        // className을 개별 지정해둬야 클릭 시 이벤트를 할당할 수 있음
        paginationHTML += "<a style='cursor:pointer'" + "class=" + pagingID + ">"+i+" </a>";
        console.log(pagingID);
        }
    
    pagination.innerHTML = paginationHTML;
    console.log(startPage);
    console.log(endPage);



    for (var i=1; i < totalPage+1; i++) {
    if (!!document.querySelector(".ID"+i)) {pageClick(i);}
    }

    //if (!!document.querySelector(".ID"+i)) {pageClick(i);}
    //if (!!document.querySelector(".ID2"+2)) {pageClick(2);}
}

function pageClick(pageNum) {
    document.querySelector(".ID"+pageNum).addEventListener('click', () => {
            buildTable(myArray,pageNum);
            console.log("ID"+pageNum+" 생성");
        });
}