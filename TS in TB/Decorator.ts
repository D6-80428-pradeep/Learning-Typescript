function f(param1: number, param2: string, param3: boolean) {  
    console.log(`f(): evaluated with parameters: ${param1}, ${param2}, ${param3}`);  
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {  
        console.log("f(): called");  
    };  
}  
  
class C {  
    @f(2, "hello", true)  
    method() {}  
}  

const c = new C();
c.method();

