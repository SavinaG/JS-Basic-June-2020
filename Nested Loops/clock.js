function clock(){

    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            for(let h = 0; h < 60; h++)
            console.log(`${i} : ${j} : ${h}`);
        }
    }
}
clock()