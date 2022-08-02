interface IDiscount{
    apply(value: number): number;
    showCalculation(price: number): string;
}

class Discount {
    protected _value: number;

    constructor(value: number = 0) {
        this._value = value;

    }
}

class FixedDiscount extends Discount implements IDiscount{

    constructor(value: number){
        super(value);
    }

        apply(price: number): number {
            return Math.max(0, price - this._value);
        }

        showCalculation(price: number): string {
            return price + "€ -  "+ this._value +"€ (min 0 €)";
        }

}

class VariableDiscount extends Discount implements IDiscount{

    constructor(value: number){
        super(value);
    }

    apply(price: number): number {
        return (price - (price * this._value / 100));
    }

    showCalculation(price: number): string {
        return price + " € -  "+ this._value +"%";
    }

}

class NoDiscount implements IDiscount{

    apply(price: number): number {
        return price;
    }

    showCalculation(price: number): string {
        return "No discount";
    }
}



class Product {
    private _name : string;
    private _price : number;
    private _discount : any;

    constructor(name: string, price: number, discount: Discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }

    get name(): string {
        return this._name;
    }

    get discount(): any {
        return this._discount;
    }

    get originalPrice(): number {
        return this._price;
    }

    //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    calculatePrice() : number {
        return this._discount.apply(this._price);
    }

    showCalculation() : string {
        return this._discount.showCalculation(this._price);
    }
}

class shoppingBasket {
    //this array only accepts Product objects, nothing else
    private _products: Product[] = [];

    get products(): Product[] {
        return this._products;
    }

    addProduct(product: Product) {
        this._products.push(product);
    }
}

let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount(10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount()));

const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);

    tableElement.appendChild(tr);
});

/* this is another way to make the exercise

//This is called a Union, the discountType can only contain the following 2 values:
type discountType = VariableDiscount | FixedDiscount | NoDiscount;

interface Discount {
    //In the old discount class we had 2 methods we will use these for our interface
    //We will still use they parameters they had before and the same output for the method
    apply(price:number):number;
    showCalculation(price:number):string;
}

//In our newly created VariableDiscount class we implement our Discount interface
class VariableDiscount implements Discount{

    //we add the value variable
    private _value: number;

    //we make a constructor
    constructor(value: number) {
        this._value = value;
    }

    apply(price: number): number {
        //we return calculation from the old.ts apply method for the variable discount
        return (price - (price * this._value / 100));
    }

    showCalculation(price: number): string {
        //we return calculation from the old.ts showCalculation method for the variable discount
        return price + " € -  "+ this._value +"%";
    }

}

class FixedDiscount implements Discount{

    private _value: number;

    constructor(value: number) {
        this._value = value;
    }

    apply(price: number): number {
        return Math.max(0, price - this._value);
    }

    showCalculation(price: number): string {
        return price + "€ -  "+ this._value +"€ (min 0 €)";
    }

}

class NoDiscount implements Discount{

    private _value: number;

    constructor(value: number = 0) {
        this._value = value;
    }

    apply(price: number): number {
        return price;
    }

    showCalculation(price: number): string {
        return "No discount";
    }

}

class Product {
    private _name : string;
    private _price : number;
    private _discount : discountType;

    constructor(name: string, price: number, discount: discountType) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }

    get name(): string {
        return this._name;
    }

    get discount(): discountType {
        return this._discount;
    }

    get originalPrice(): number {
        return this._price;
    }

    //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    calculatePrice() : number {
        return this._discount.apply(this._price);
    }

    showCalculation() : string {
        return this._discount.showCalculation(this._price);
    }
}

class shoppingBasket {
    //this array only accepts Product objects, nothing else
    private _products: Product[] = [];

    get products(): Product[] {
        return this._products;
    }

    addProduct(product: Product) {
        this._products.push(product);
    }
}

let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount(10)));
//cart.addProduct(new Product('Chair', 25, new FixedDiscount(-10))); -- = + it adds up
cart.addProduct(new Product('Table', 50, new VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount()));
cart.addProduct(new Product('Sofa', 1099, new VariableDiscount(30)));

const tableElement = <HTMLTableElement> document.querySelector('#cart tbody');

cart.products.forEach((product: Product) => {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);

    tableElement.appendChild(tr);

});
 */