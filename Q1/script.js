const obj = {
    firstName :"fatmaal",
    address : "cairo",
    age : 26
}

const handler = {
    set: function(obj,prop,value){
        if(prop === "firstName"){
            if(value.length==7 && typeof(value)==="string") {
                 obj[prop] = value 
            }
            else{
                throw " this is wrong firstName"
            }
        }
        else if(prop === "address") {
            if(typeof(value)==="string"){
                obj[prop] = value
            }
            else{
                throw "Addres must be string only"
            }
            
        }

        else if (prop === "age"){
            if((value >= 25) && (value <= 60)) {
                obj[prop] = value
            }
            else {
                throw " Age is at not correct region"
            }
        }
    }
}

const p = new Proxy(obj,handler)
p.firstName = "gamalll"
p.address = "Assuit"
p.age = 55
console.log(p)


