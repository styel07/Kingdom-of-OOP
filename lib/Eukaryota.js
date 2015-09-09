import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing {

  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name,uniCellular, true, false, asexual, mobile, heterotroph);

    this.heterotroph = heterotroph;
  }


 get heterotroph(){
    return this._heterotroph;
  }

  set heterotroph( heterotroph ){
    this._heterotroph = heterotroph;
  }

  get autotroph(){
    return !this._heterotroph;
  }

  set autotroph( autotroph ){
    this._heterotroph = !autotroph;
  }
}

// trueNucleus = true
// anaerobic = false