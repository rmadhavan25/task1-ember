import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action} from '@ember/object';

let result = "";
export default class SearchController extends Controller {

    //variable to store the results from api call
    @tracked result;
    
    //function to fetch the files using the user inputs
    @action
    async getFiles(directoryPath,keyword){
        console.log(directoryPath,keyword)
        if(directoryPath==undefined || keyword==undefined || keyword=="" || directoryPath==""){
            directoryPath="*";
            keyword="*";
        }
        let response = await fetch(`http://localhost:8080/getfile?keyword=${keyword}&directoryPath=${directoryPath}`);
        let data = await response.json();
        console.log(data);
        this.result = data;
        
    }
    

}
