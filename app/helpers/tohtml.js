import { helper } from '@ember/component/helper';

function tohtml([text]) {
    var parser = new DOMParser();
	var doc = parser.parseFromString(text, 'text/html');
	return doc.body;
  
}

export default helper(tohtml);