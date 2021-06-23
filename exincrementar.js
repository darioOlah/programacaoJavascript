let incrementar = num => {
    console.log(num);
    num++;
    if (num<10){
    incrementar(num) }
}
incrementar(1);