import { helper } from '@ember/component/helper';

function highlight([text,key]) {
  const matchingKey = new RegExp(key,"gi");
  const original = text;

  return original.replace(matchingKey,(match)=>`<mark>${match}</mark>`);
  
}

export default helper(highlight);