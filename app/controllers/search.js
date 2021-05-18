import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action} from '@ember/object';
import { inject as service } from '@ember/service';


export default class SearchController extends Controller {

    //variable to store the results from api call
    @tracked result;
    @tracked loading;
    @service user;

    @action
    logOut(){
        this.user.logOut();
    }
    
    //function to fetch the files using the user inputs
    @action
    async getFiles(directoryPath,keyword){
        console.log(directoryPath,keyword)
        if(directoryPath==undefined || keyword==undefined || directoryPath=="" || keyword==""){
            alert('Please enter all the details');
        }
        else{
            this.loading = "loading...";
            let response = await fetch(`http://localhost:9090/SampleWebApp/getfile?keyword=${keyword}&directoryPath=${directoryPath}`);
            let data = await response.json();
            console.log(data);
            this.result = data;
            this.loading="No Files To Display";
        }
        
        
    }
    

}
