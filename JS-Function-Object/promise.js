const getData = new Promise ((resolve, reject) =>{
    // resolve(1000);
    const num =Math.random()*10;
    console.log(num);

    if (num < 5){
        resolve(10000)
    }
    else{
    reject ('no data available');

    }

    reject ('no data available');
})

getData
    .then(data => console.log(data + 12))
    .catch(error => console.log('ERR',error))