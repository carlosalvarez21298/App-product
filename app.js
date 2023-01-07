const btnSubmit = document.querySelector(".btn-submit");
const products = document.querySelector(".products");

class Product{
    constructor({name, price, stock}){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    static success(){
        const success = document.querySelector(".success");
        success.classList.remove("no-display");

        const successTime = setTimeout(function(){

            success.classList.add("no-display");
        }, 2000);

    }
    
    
    static deleteItem(){
        const deleteItem = document.querySelector(".delete");
        deleteItem.classList.remove("no-display");
        
        const deleteTime = setTimeout(function(){
            
            deleteItem.classList.add("no-display");
        }, 2000);
    }
    
    static deleteProduct(element){
        if(element.className === "fa")
            element.parentElement.remove();

    }

    addProduct(){
        const products = document.querySelector(".products");

        const product = document.createElement("li");
        product.classList.add("product-list");
        product.innerHTML = `<strong>Name: </strong>${this.name} <strong>Price: </strong>${this.price} <strong>Stock: </strong>${this.stock} <i style="font-size:24px" class="fa" value="hola">&#xf1f8;</i>`;

        products.appendChild(product);
    }

}

btnSubmit.addEventListener("click", function(e){
    
    const name = document.querySelector("#product-name").value;
    const price = document.querySelector("#product-price").value;
    const stock = document.querySelector("#product-stock").value;

    const newProduct = new Product({name: name, price: price, stock: stock});

    newProduct.addProduct();

    Product.success();

    document.querySelector("#product-name").value ="";
    document.querySelector("#product-price").value ="";
    document.querySelector("#product-stock").value ="";

    e.preventDefault();
    
    
});

products.addEventListener("click", function(e){
    Product.deleteProduct(e.target);
    Product.deleteItem();
    
});


