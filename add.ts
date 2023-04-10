import { isId, isImage, isPrice, isDesc, isName } from "./script.js"

interface displayproduct {
    id: string,
    name: string,
    price: string,
    description: string,
    image: any
}

export class CRUD {
    id = isId;
    name = isName;
    img = isImage;
    price = isPrice;
    description = isDesc;
    setUrl: string = ""
    add() {

        // const id = isId.value;
        // let image = isImage.files[0];
        let product: displayproduct[];
        const fr: any = new FileReader();
        fr.readAsDataURL(this.img.files[0]);
        fr.addEventListener('load', () => {
            let url = fr.result;
            if (localStorage.getItem("ProductDetail") == null) {
                product = [];
            }
            else {
                product = JSON.parse(localStorage.getItem("ProductDetail")!);
            }

            product.push({
                id: this.id.value,
                name: this.name.value,
                image: url,
                price: this.price.value,
                description: this.description.value
            });

            //Convert a JavaScript object into a string with JSON.stringify(). now productArray is string and ready to sent to localstorage
            localStorage.setItem("ProductDetail", JSON.stringify(product));
            location.reload();

        });


    }
    //#region showData

    showData() {

        let product : displayproduct[];
        if (localStorage.getItem("ProductDetail") == null) {
            product = [];
        }
        else {
            //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
            product = JSON.parse(localStorage.getItem("ProductDetail")!);
        }
        let html = "";
        product.forEach(function (element: any, index: any) {

            html += "<tr class='productItems'>";
            html += "<td> <b>" + element.id + " </b></td>";
            html += "<td>" + element.name + "</td>";
            html += "<td><img src='" + element.image + "' width='80px' height='80px'></td>";
            html += "<td>" + element.price + "</td>";
            html += "<td>" + element.description + "</td>";
            html += `<td><button class="btn btn-outline-success ms-5 edit" data-id=${index}>Edit </button></td>`;
            html += `<td><button class="btn btn-outline-danger ms-5 delete" data-id=${index}>Delete </button></td>`;
            html += "<tr>";

        });
        document.querySelector("#dataTable1 tbody")!.innerHTML = html;

    }
//#endregion showData

    //#region  DeleteData
    DeleteData(element: number) {
        let product : displayproduct[];
        if (localStorage.getItem("ProductDetail") == null) {
            product = [];
        }
        else {
            product = JSON.parse(localStorage.getItem("ProductDetail")!);
        }
        let confirmation = confirm("Do you want to Delete Product : " + product[element].name + ".");
        if (confirmation == true) {
            product.splice(element, 1);
            localStorage.setItem("ProductDetail", JSON.stringify(product));
            window.location.reload();
            this.showData();
        }
    }
//#endregion DeleteData

    //#region  EditData
    EditData(index: number) {
        //  let image = isImage.files ;
        let product: displayproduct[];
        var url = this.setUrl;
        console.log(url);

        var fileInput =
            document.getElementById('inImage');


        if (localStorage.getItem("ProductDetail") == null) {
            product = [];
        }
        else {
            product = JSON.parse(localStorage.getItem("ProductDetail")!);
        }
        this.id.value = product[index].id;
        this.name.value = product[index].name;

        this.price.value = product[index].price;
        this.description.value = product[index].description;
        document.getElementById("btnInsert")!.style.display = "none";
        document.getElementById("btnUpdate")!.style.display = "block";

        document.querySelector("#btnUpdate")!.addEventListener('click', function () {

            let id = isId;
            let name = isName
            let price = isPrice
            let description = isDesc
            let image = isImage
            const fr: any = new FileReader();
            let img = image.files as any
            fr.readAsDataURL(img[0]);
            fr.addEventListener('load', () => {
                let url = fr.result;

                product[index].id = id.value;
                product[index].name = name.value;
                product[index].price = price.value;
                product[index].image = url;
                product[index].description = description.value;


                localStorage.setItem("ProductDetail", JSON.stringify(product)!);
            });

            document.getElementById("btnInsert")!.style.display = "none";
            document.getElementById("btnUpdate")!.style.display = "block";
            window.location.reload();
        })


    }
    //#endregion EditData
}
