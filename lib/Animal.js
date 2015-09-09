import Eukaryota from './Eukaryota';

export default class Animal extends Eukaryota {

  constructor(name, symmetry){ //, uniCellular, asexual, mobile, heterotroph){
    super(name, false, false, true, true, symmetry );
    this.name = name;
    this._symmetry = symmetry;
  }

  get symmetry() {
    return this._symmetry;
  }

  set symmetry( symmetry ) {
    this._symmetry = symmetry;
  }
}