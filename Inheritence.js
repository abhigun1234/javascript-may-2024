class Parent{

    constructor(){
  console.log(" parent")

    }
}

class Child extends Parent{
constructor(){
    super()
    console.log(" child")
   
}
    
}

class GrandChild extends Child{
    constructor(){
        super()
        console.log(" grand child")
       
    } 
}

let g1=new GrandChild()