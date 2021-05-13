import Route from '@ember/routing/route';
import { action } from '@ember/object';

let directoryPath = "D:/house";
let keyword = "sam";

export default class SearchRoute extends Route {
    
        async model(){
        let response = await fetch(`http://localhost:8080/getfile?keyword=${keyword}&directoryPath=${directoryPath}`);
        let data = await response.json();
        console.log(data);
        return data;
    }
}


