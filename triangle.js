//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(x, y, z) {
    this.input = [x, y, z]
    
    this.input.sort(function(a, b){return a-b})

    console.log(this.input)
    // throw new Error("Remove this statement and implement this function");
  }

   

  kind() 
  { 
    if(this.input[0] === this.input[2]) {
      return "equilateral"
    } else if( (this.input[0] === this.input[1]) || (this.input[1] === this.input[2]) ) {
      return "isosceles"
    }
    return "scalene"

    
    
}
}
  
