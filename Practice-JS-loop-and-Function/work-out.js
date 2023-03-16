function workOutPlan(workOutName){
    let bicepWorkOut = ['bicep maro', 'bicep dhoro', 'bicep jhakao', 'bicep nachao'];

    let chestWorkOut = ['gorbe buk fulao', 'push up maro','chesta koro','buko pattor tulo'];

    if(workOutName =='bicep' ){
        return bicepWorkOut;
    }
    if(workOutName =='chest' ){
        return chestWorkOut;
    }
    else{
        return 'janina re bhai';
    }
}
let workOut =workOutPlan('chest');
console.log(workOut)