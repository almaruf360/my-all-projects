let human = {
    name:'rahim',
    age:25,
    friends:['maruf', 'shamim', 'momin', 'afzal'],
    country:'bangladesh'

}
for (i = 0; i < human.friends.length; i++){
    let elements=human.friends[i];
    console.log('number of index',i,elements)
}
// console.log(human)