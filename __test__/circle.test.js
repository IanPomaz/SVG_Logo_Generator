const {Circle} = require('../library/shapes')

const shape = new Circle();
shape.setColor("blue");

test('Testing render method for the triangle',()=>expect(shape.render()).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />'));


