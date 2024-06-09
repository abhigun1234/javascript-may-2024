class Product{
  
constructor(_name,_price){

    this.productname=_name
    this._price=_price
    
    console.log("product constructor",this.productname)
}

// 

setProductName(name){
    this.productname=name
}
}
// object 
productArray=[]
let name=prompt("enter  producct name")
let price=prompt("enter  price of the product")
// new object 
let prodObj= new Product(name,price)
console.log("productObj",prodObj)
productArray.push(prodObj)
prodObj.setProductName()

console.log("product array",productArray)