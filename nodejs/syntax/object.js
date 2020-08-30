var members = ['안성만', '정영미', '안준영', '안주현'];
console.log(members[0]);
var i = 0;
while(i<members.length){
    console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
    'me':'안준영',
    'father':'안성만',
    'mother':'정영미',
    'sister':'안주현'
}
console.log(roles.designer);

for(var n in roles){
    console.log('object => ', n, 'value => ', roles[n]);
}