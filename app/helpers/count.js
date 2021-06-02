import { helper } from '@ember/component/helper';

function count([num]) {
  let str = num;
  console.log(num);
  return str;
  
}

export default helper(count);