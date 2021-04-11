function areaOfFigures(arg1,arg2,arg3){
    let figure=arg1
    let lenght=Number(arg2)
    let sides=Number(arg3)
    let area=0
    if(figure=="square"){
        area=lenght*lenght
    }else if(figure=="rectangle"){
        area=lenght*sides
    }else if(figure=="circle"){
        area=Math.PI*lenght*lenght
    }else {
        area=lenght*sides/2
    }
    console.log(area.toFixed(3))
}
areaOfFigures("circle","6")