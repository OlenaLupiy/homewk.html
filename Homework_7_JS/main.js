function getUp(){
    return new Promise((resolve, reject) =>{
setTimeout(()=>{
    console.log(`Wake up`)
    resolve (`Done`)
}, 1000)}
    )}

function cleanFace() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Clean the face');
            resolve(`Done`);
        }, 500)
    })
}
function doExercise(time){
    return new Promise((resolve, reject) =>{
setTimeout(()=>{

    if (time>20){
        console.log('Do morning exercise')
    resolve('Done')}
    reject (`ERROR`)
}, 2000)
    })
}
function checkForecast() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(`Check the weather`);
            resolve(`Done`)
        }, 200)
    })

}
function wearClothes(clothes){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(`Open the box`);
            if(clothes){
                console.log(`Take on clothes`);
                resolve(`Dress`)
            }
            reject(`ERROR`)
        }, 5000)
    } )
}
function goToWork(weatherGood ) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(weatherGood){
                console.log(`Go for a walk`);
                resolve(`Done`)
            }
            reject(`Error`)
        }, 3000)
    })

}
function work(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(`Work`);
            resolve(`You make money`)
        }, 1000)
    })
}
function restHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(`Have a good time`);
            resolve(`Rest`)
        })
    })

}

getUp()
    .then(value =>{
     console.log(value);
     console.log(1);
     return cleanFace()
})
    .then(value => {
        console.log(value);
        console.log(2);
        return doExercise(25)
    })
    .then(value => {
        console.log(value);
        console.log(3);
        return checkForecast()
    })
    .then(value => {
        console.log(value);
        console.log(4);
        return wearClothes(`dress`);
    })
    .then(value => {
        console.log(value);
        console.log(5);
        return goToWork(`sun`)
    })
    .then(value => {
        console.log(value);
        console.log(6);
        return work()
    })
    .then(value => {
        console.log(value);
        console.log(7)
        return restHome();
    })
    .then(value => {
        console.log(value);
        console.log(8);
    })
.catch(reason => {
    console.log(reason)
});




