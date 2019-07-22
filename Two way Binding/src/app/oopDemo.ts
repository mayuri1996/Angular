class demo{
    num1:number;
    num2:number;

    constructor(val1:number,val2:number){
       this.num1 = val1;
       this.num2 = val2;
    }

    protected Add(){
        return this.num1+this.num2;
    }
    Area(){
       return this.Add();
    }
}

class demo1 extends demo{
    sub(){
        var result2 = this.Add();
        return this.num1-this.num2,result2;
    }
}

var obj = new demo1(3,7);
var result = obj.sub();
console.log(result);

