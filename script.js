let person = {
    x: {
        name: 'wallace',
        age: 30,
        weight: 88.6
    },
    y: {
        name: 'wallace',
        age: 30,
        weight: 88.6
    },

}
for (let property in person) {
    console.log(property)
    console.log(person[property].name)
    person[property].name='trocado';
    console.log(person[property].name)
}