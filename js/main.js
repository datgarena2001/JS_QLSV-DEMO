//Khởi tạo mảng
stdList = Array();
//tạo giá trị
function create() {
    btn = document.getElementById("btnAdd");
    btn.addEventListener('click',addStd);
    
    rootDom = document.getElementById('display');
    hoTenDom = document.getElementById('nameStudent');
    idStudentDom = document.getElementById('idStudent');
    classStudentDom = document.getElementById('classStudent');
    departmentStudentDom = document.getElementById('departmentStudent');
    mathStudentDom = document.getElementById('mathStudent');
    physicStudentDom = document.getElementById('physicStudent');
    chemistryStudentDom = document.getElementById('chemistryStudent');
    
    inputDom = document.getElementById('input');
    editDom = document.getElementById('edit');
    hoTenEditDom = document.getElementById('nameEditStudent');
    idStudentEditDom = document.getElementById('idEditStudent');
    classStudentEditDom = document.getElementById('classEditStudent');
    departmentStudentEditDom = document.getElementById('departmentEditStudent');
    mathStudentEditDom = document.getElementById('mathEditStudent');
    physicStudentEditDom = document.getElementById('physicEditStudent');
    chemistryStudentEditDom = document.getElementById('chemistryEditStudent');
}
function render() {
    rootDom.innerHTML = '<tr><th>STT</th><th>Họ và tên</th><th>Mã sinh viên</th><th>Lớp</th><th>Khoá</th><th>Toán</th><th>Lý</th><th>Hoá</th><th>Hành động</th></tr>';
    stdList.forEach(std => {
        rootDom.appendChild(createNodeStudent(std)); //<table><tr>...</tr></table>
    });
}
function renderSearch() {
    rootDom.innerHTML = '<tr><th>STT</th><th>Họ và tên</th><th>Mã sinh viên</th><th>Lớp</th><th>Khoá</th><th>Toán</th><th>Lý</th><th>Hoá</th><th>Hành động</th></tr>';
    arr.forEach(std => {
        rootDom.appendChild(createNodeStudent(std));
    });
}
function createNodeStudent(std) {
    nodeRow = document.createElement('tr'); // <tr></tr>

    nodeSTT = document.createElement('td'); // <td></td>
    nodeSTT.innerHTML = std.id;    //<td>id</td>
    nodeRow.appendChild(nodeSTT);   //<tr><td>id</td></tr>

    nodeHoten = document.createElement('td'); //<td></td>
    nodeHoten.innerHTML = std.hoTen; // <td>Hoten</td>
    nodeRow.appendChild(nodeHoten); //<tr><td>id</td><td>Hoten</td></tr>
    
    nodeMaSinhVien = document.createElement('td');
    nodeMaSinhVien.innerHTML = std.maSV;
    nodeRow.appendChild(nodeMaSinhVien);

    nodeLop = document.createElement('td');
    nodeLop.innerHTML = std.lop;
    nodeRow.appendChild(nodeLop);

    nodeKhoa = document.createElement('td');
    nodeKhoa.innerHTML = std.khoa;
    nodeRow.appendChild(nodeKhoa);

    nodeToan = document.createElement('td');
    nodeToan.innerHTML = std.toan;
    nodeRow.appendChild(nodeToan);

    nodeLy = document.createElement('td');
    nodeLy.innerHTML = std.ly;
    nodeRow.appendChild(nodeLy);

    nodeHoa = document.createElement('td');
    nodeHoa.innerHTML = std.hoa;
    nodeRow.appendChild(nodeHoa);
   
    nodeStatus = document.createElement('td'); //<tr><td></td>...<td></tr>
    nodeStatus.setAttribute('class','hanhdong');  // <td class="hanhdong"></td>
    nodeRow.appendChild(nodeStatus);  

    // Khởi tạo delete
    nodeDelete = document.createElement('button'); // <button>Xoá</button>
    nodeDelete.innerHTML = 'Xóa';
    nodeDelete.addEventListener("click", function () { // <td class="hanhdong"><button>Xoá</button></td>
        deleteStd(std.id);
    })
    nodeStatus.appendChild(nodeDelete);
    // Khởi tạo edit
    nodeEdit = document.createElement('button');
    nodeEdit.innerHTML = 'Sửa';
    nodeEdit.addEventListener('click',function() {
        editStd(std.id);
    })
    nodeStatus.appendChild(nodeEdit);
    // Khởi tạo complete
    // nodeComplete = document.createElement('button');
    // nodeComplete.innerHTML = 'complete';
    // nodeStatus.appendChild(nodeComplete);
 
    return nodeRow; // <tr><td>...</td></tr>
}
//create Student
id = 0;
function addStd(){ 
    id++;
    std = new Student(
        id,
        hoTenDom.value,
        idStudentDom.value,
        classStudentDom.value,
        departmentStudentDom.value,
        mathStudentDom.value,
        physicStudentDom.value,
        chemistryStudentDom.value
    );
    stdList.push(std);
    render();
}
function deleteStd(id){
    i = 0;
    for(;i < stdList.length; i++){
        if(stdList[i].id == id) break;
    }
    stdList.splice(i, 1);
    render();
}
let index;
function editStd(id){
    inputDom.style.display = 'none';
    stdList.forEach(std => {
        if(std.id == id){
            hoTenEditDom.value = std.hoTen;
            idStudentEditDom.value = std.maSV;
            classStudentEditDom.value = std.lop;
            departmentStudentEditDom.value = std.khoa;
            mathStudentEditDom.value = std.toan;
            physicStudentEditDom.value = std.ly;
            chemistryStudentEditDom.value = std.hoa;
            editDom.style.display = 'block';
            index = id;
        }
    });
}
function updateStd() {
    editDom.style.display = 'none';
    inputDom.style.display = 'block';
    id = index;
    stdList.forEach(std => {
        if(std.id == id){
            std.hoTen = hoTenEditDom.value;
            std.maSV =  idStudentEditDom.value  ;
            std.lop = classStudentEditDom.value;
            std.khoa = departmentStudentEditDom.value;
            std.toan = mathStudentEditDom.value;
            std.ly = physicStudentEditDom.value;
            std.hoa = chemistryStudentEditDom.value;
        }
    });
    render();
}
function search() {
    arr = new Array();
    key = document.getElementById('search').value;
   for (i = 0; i < stdList.length; i++) {
       if (stdList[i].hoTen.includes(key)) { // Nếu họ tên hắn chứa key
           stdList[i].id = arr.length + 1; // Đánh stt lại cho đẹp
           arr.push(stdList[i]); // Thêm thằng tìm kiếm đc vào mảng arr
       }
   }
   renderSearch();
}
function search2() {
    arr = new Array();
    key = document.getElementById('tenlop').value;
   for (i = 0; i < stdList.length; i++) {
       if (stdList[i].lop.includes(key)) {
           stdList[i].id = arr.length + 1;
           arr.push(stdList[i]);
       }
   }
   renderSearch();
}
function search3() {
    arr = new Array();
    key = document.getElementById('tenkhoa').value;
   for (i = 0; i < stdList.length; i++) {
       if (stdList[i].khoa.includes(key)) {
           stdList[i].id = arr.length + 1;
           arr.push(stdList[i]);
       }
   }
   renderSearch();
}
khoaList = Array();
function themkhoa() {
    tenKhoaDom = document.getElementById('themkhoa');
    i = khoaList.length + 1;
    a = new khoa(i,tenKhoaDom.value);
    khoaList.push(a);
    truyenKhoa();
}

function truyenKhoa() {
    a = document.getElementById('departmentStudent');
    b = document.getElementById('departmentEditStudent');
    c = document.getElementById('tenkhoa');

    a.appendChild(createOptionK(khoaList[khoaList.length-1])); //khoaList dai 1 pt khoaList[0];
    b.appendChild(createOptionK(khoaList[khoaList.length-1]));
    c.appendChild(createOptionK(khoaList[khoaList.length-1]));
}

function createOptionK(k) {
    op = document.createElement('option'); //<option></option>
    op.innerHTML = k.__tenkhoa;//<option>CNTT</option>
    op.setAttribute("value",k.__tenkhoa);//<option value="CNTT">CNTT</option>
    return op;
} 
lopList = Array();

function themlop() {
    tenLopDom = document.getElementById('themlop');
    i = lopList.length + 1;
    a = new lop(i,tenLopDom.value);
    lopList.push(a);
    truyenLop();
}

function truyenLop() {
    a = document.getElementById('classStudent');
    b = document.getElementById('classEditStudent');
    c = document.getElementById('tenlop');

    a.appendChild(createOptionL(lopList[lopList.length-1]));
    b.appendChild(createOptionL(lopList[lopList.length-1]));
    c.appendChild(createOptionL(lopList[lopList.length-1]));
}

function createOptionL(k) {
    op = document.createElement('option');
    op.innerHTML = k.__lop;
    op.setAttribute("value",k.__lop);
    return op;
}

window.onload = function (e) {
    create();
    render();
}

