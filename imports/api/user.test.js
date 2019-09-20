const add = (a,b)=>{
    if(typeof b!=='number'){
        return a+a;
    }
    return a+b;
};
//test for the first return
it('should add two numbers',function(){
    const res = add(11,9);

    if (res!==20){
        throw new Error('Sum was not equal to expected value')
    }
});
//test for the second return
it('should double a single number',function () {
    const res =add(44);

    if(res!==88){
        throw new Error('Number was not doubled')
    }
});
