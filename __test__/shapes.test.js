
const {Circle,Square,Triangle} = require("../library/shapes")
// const { test } = require("node:test")

describe("Circle", () => {
    test("It should render a circle",() => {
        const shape = new Circle()
        const expectedShape = `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />`
        shape.setColor("red")
        expect(shape.render()).toEqual(expectedShape)
        })
})
