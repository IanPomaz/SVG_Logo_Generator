const {Square} = require('../library/shapes')

const shape = new Square();
shape.setColor("blue");

test('Testing render method for the triangle',()=>expect(shape.render()).toEqual('<rect width="100" height="100" rx="15" fill="blue"/>'));
