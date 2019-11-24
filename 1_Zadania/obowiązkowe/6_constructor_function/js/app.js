function Basket() {
    this.products = [];
    this.sum = 0;
    }
Basket.prototype.addProduct = function(name, price) {
    this.products.push({
        name : name,
        price : price



    });
}

Basket.prototype.showBasket = function() {
    console.table(this.products)
}




