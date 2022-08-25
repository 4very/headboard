// import {test1, test2} from './test1'

// all card classes need an id and a component
// the id will be supplied to match the object to the right child
// the componet will be statically assigned to all children

export class Card {
  id!: string;
  valid = true;
  public component = 'CardError';
  public rowSpan = 1;
  public colSpan = 1;
  public errorText = '';
  public errorSubText = '';
  public textColor = 'auto';
  public bgColor = 'auto';

  constructor (obj: { id: string }, id: string) {
    if (id !== obj.id) { throw new Error(`Id value of ${obj.id} doesn't match class id of ${id}!`); }
    Object.assign(this, obj);
    // this.component = `Card${obj.id.charAt(0).toUpperCase() + obj.id.slice(1)}`;
  }

  validate () {
    return true;
  }
}

export const defaultCardProps = {
  page: {
    type: String,
    default: String
  },
  id: {
    type: Number,
    default: Number
  }
};
