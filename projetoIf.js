let nome        = 'Tainá'
let XP          = 5463
let nivel       = ''

if(XP <= 1000){
    nivel = 'Ferro'
    console.log('O Herói de nome, '+ nome + ' está no nível '+ nivel +'.')
    //Se XP for menor do que 1.000 = Ferro

} else if((XP >= 1001) && (XP <= 2000)){
    nivel = 'Bronze'
    console.log('O Herói de nome, '+ nome + ' está no nível '+ nivel +'.')
    //Se XP for entre 1.001 e 2.000 = Bronze

} else if((XP >= 2001) && (XP <= 5000)){
    nivel = 'Prata'
    console.log('O Herói de nome, '+ nome + ' está no nível '+ nivel +'.')
    //Se XP for entre 2.001 e 5.000 = Prata

} else if((XP >= 5001) && (XP <= 7000)){
    nivel = 'Ouro'
    console.log('O Herói de nome, '+ nome + ' está no nível '+ nivel +'.')
    //Se XP for entre 5.001 e 7.000 = Ouro

} else if((XP >= 7001) && (XP <= 8000)){
    nivel = 'Platina'
    console.log('O Herói de nome, '+ nome + ' está no nível '+ nivel +'.')
    //Se XP for entre 7.001 e 8.000 = Platina

} else if((XP >= 8001) && (XP <= 9000)){
    nivel = 'Ascendente'
    console.log('O Herói de nome, '+ nome + ' está no nível '+ nivel +'.')
    //Se XP for entre 8.001 e 9.000 = Ascendente

} else if((XP >= 9001) && (XP <= 10000)){
    nivel = 'Imortal'
    console.log('O Herói de nome, '+ nome + ' está no nível '+ nivel +'.')
    //Se XP for entre 9.001 e 10.000= Imortal

} else{
    nivel = 'Radiante'
    console.log('O Herói de nome, '+ nome + ' está no nível '+ nivel +'.')
    //Se XP for maior ou igual a 10.001 = Radiante
}