const {Triangle} = require('../library/shapes')

const shape = new Triangle();
shape.setColor("blue");

test('Testing render method for the triangle',()=>expect(shape.render()).toEqual('<polygon points="100 0, 0 ,0 50, 100" fill="blue"/>'));