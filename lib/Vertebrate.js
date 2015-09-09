import Bilateral from './Bilateral';
export default class Vertebrate extends Bilateral {

  constructor(name){
    super(name);
    this.body = 'vertebral-column';
  }
}