class SVG {
    constructor(){
        this.textEl = ""
        this.shapeEl = ""
    }
render(){
    return `<svg version = "1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
}
setText(text,color){
    if (text > 3) {
        throw new Error("Must be less than three characters")
    }
    this.textEl=`<text x="50" y="50" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
}
setShape(shape){
    this.shapeEl=shape.render()
}

getSVGString() {
    return this.render();
}
}
module.exports = SVG