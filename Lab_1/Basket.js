var products = [{
    name: "test",
    price: 12.9,
    inventory: 20
}, {
    name: "test2",
    price: 30,
    inventory: 80
}];

class ProductLineItem {
    constructor(product) {
        this.product = product;
        this.quantity = 1;
        this.inventory -= 1;
    }

    get name() {
        return this.product.name;
    }

    set inventory(inventory) {
        this.product.inventory = inventory;
    }

    get inventory() {
        return this.product.inventory;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get quantity() {
        return this._quantity;
    }

    get price() {
        return this.product.price;
    }

    get totalPrice() {
        return this.product.price * this.quantity;
    }

    set updateInventory(value) {
        this.inventory += this.quantity - value;
        this.quantity = value;
    }
}

var basket = (function () {
    let myBasket = new Array();
    return {
        addProduct: function (productID) {
            let prod = new ProductLineItem(products[productID]);
            let idx = myBasket.findIndex((element, index, array) => element.name === products[productID].name);

            if (idx > -1) {
                myBasket[idx].updateInventory = ++myBasket[idx].quantity;
            } else myBasket.push(prod);
        },

        removeProduct: function (productID) {
            myBasket[productID].updateInventory = 0;
            return myBasket.splice(productID, 1);
        },

        updateProductQuantity: function (productID, quantity) {
            let basket = myBasket[productID];
            basket.updateInventory = quantity;
        },

        getTotalPrice: function () {
            let totalPrice = 0;
            myBasket.forEach(function (cur, i, arr) {
                totalPrice += cur.totalPrice;
            });
            return totalPrice;
        }
    }
})();
