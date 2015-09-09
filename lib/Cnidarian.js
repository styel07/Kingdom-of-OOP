import Animal from './Animal';

export default class Cnidarian extends Animal {

  constructor(name, symmetry){
    super(name, symmetry);
    this.symmetry = 'radial';
  }
}
