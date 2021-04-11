function fishTank(lenght, width, height, persent){
    let fullTank = ((lenght * width * height) * 0.001);
    let partTank = persent * 0.01;

    console.log(fullTank * (1 - partTank));

}
fishTank("1", "2", "3", "4");