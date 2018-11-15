class Animal {
  constructor(type, color) {
    this._type = type;
    this._color = color;
  }

  getColor() {
    return this._color;
  }
}

class Fish extends Animal {
  constructor(type, color) {
    super(type, color);
    var _fishType;
    this.setType = function(fishType) {
      _fishType = fishType;
    };
    this.getType = function() {
      return _fishType;
    };
  }

  getFishType() {
    this.getType();
  }
}

class Dog extends Animal {
  constructor(type, color) {
    super(type, color);
    var DogType = _dogType();
    this.setType = function(dogType) {
      _dogType = dogType;
    };
    this.getType = function() {
      return _dogType;
    };
  }

  getDogType() {
    this._getType();
  }
}

class DogType {
  constructor(typeName, furColor) {
    this._typeName = typeName;
    var _furColor = furColor;
    this.setFurColor = function(furColor) {
      _furColor = furColor;
    };
    this.getFurColor = function() {
      return _furColor;
    };
  }

  getFurColor() {
    this.getFurColor();
  }
}
