class Person{
  
    constructor(_name,_phon_no){
    console.log("hello constructor called")   
        this.name=_name
        this.phone_no=_phon_no
        console.log(" constructor name",this.name)
        console.log("constructor  phon no",this.phone_no)
    }

    setName(_name){
      this.name=_name    
    }

}

// create object

 let p1=new Person("ravi","88888888")
 console.log("name",p1.name)
 console.log("phone no",p1.phone_no)
 let p2=new Person("raj","89888888")
 console.log("name",p2.name)
 console.log("phone no",p2.phone_no)
 p1.setName("rahim")
 console.log("name after set",p1.name)