var dartBoard = require("../throwing-darts.js");
var chai = require('chai');
var expect = chai.expect;

describe('Throwing darts function', function(){
  it('should exist', function(){
    expect(dartBoard).to.be.a('function');
  });

  it('should return a number', function(){
    expect(dartBoard([1,2,3])).to.be.a('number');
  });

  it('should correctly return the score', function(){
    expect(dartBoard([1,5,11])).to.equal(15);
    expect(dartBoard([15,20,30])).to.equal(0);
    expect(dartBoard([1,2,3,4])).to.equal(140);
    expect(dartBoard([])).to.equal(0);
  });

  it('should throw an error when given invalid input', function(){
    expect(dartBoard.bind(null,["hello", "world"])).to.throw(TypeError);
    expect(dartBoard.bind(null,"frogs")).to.throw(TypeError);
    expect(dartBoard.bind(null,{})).to.throw(TypeError);
    expect(dartBoard.bind(null,{"cheese" : "burger"})).to.throw(TypeError);
    expect(dartBoard.bind(null,[-1, 5, 5])).to.throw(TypeError);
    expect(dartBoard.bind(null,[1, 2, "cheese"])).to.throw(TypeError);
  });

});
