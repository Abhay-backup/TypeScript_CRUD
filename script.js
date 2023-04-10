import { CRUD } from './add.js';
export let isId = document.getElementById('inId');
export let isName = document.getElementById('inName');
export let isPrice = document.getElementById('inPrice');
export let isDesc = document.getElementById('inDescription');
export let isImage = document.getElementById('inImage');
var opt = new CRUD();
opt.showData();
const del = document.querySelectorAll('.delete');
const edit = document.querySelectorAll('.edit');
let ins = document.getElementById("btnInsert");
// var imgURL :string;
ins.addEventListener("click", function () {
    opt.add();
});
// isImage.onchange =function(e){
// 	let image = e.target as HTMLInputElement
// 	var fr = new FileReader();
// 	let url = image.files as any
// 	fr.readAsDataURL(url[0]);
// 	fr.addEventListener('load', () => {
// 	   opt.setUrl =  fr.result as string;
// 	   //showData();
// 	});
// }
for (let d of del) {
    d.addEventListener('click', function () {
        opt.DeleteData(d.dataset['id']);
    });
}
for (let e of edit) {
    e.addEventListener('click', function () {
        opt.EditData(e.dataset['id']);
    });
}
// Add Data
// window.onload = function showData() {
// 	let product;
// 	if (localStorage.getItem("ProductDetail") == null) {
// 		product = [];
// 	}
// 	else {
// 		//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
// 		product = JSON.parse(localStorage.getItem("ProductDetail")!);
// 	}
// 	let html = "";
// 	product.forEach(function (element:any, index:any) {
// 		html += "<tr class='productItems'>";
// 		html += "<td> <b>" + element.id + " </b></td>";
// 		html += "<td>" + element.name + "</td>";
// 		html += "<td><img src='" + element.image + "' width='80px' height='80px'></td>";
// 		html += "<td>" + element.price + "</td>";
// 		html += "<td>" + element.description + "</td>";
// 		html += "<td><button class='btn btn-outline-success ms-5' onclick='btnEdit(" + index + ")'>Edit </button></td>";
// 		html += "<td><button class='btn btn-outline-danger ms-5' onclick='btnDelete(" + index + ")'>Delete </button></td>";
// 		html += "<tr>";
// 	});
// 	document.querySelector("#dataTable1 tbody")!.innerHTML = html;
// }
//
