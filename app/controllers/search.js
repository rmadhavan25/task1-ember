import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action} from '@ember/object';
import { inject as service } from '@ember/service';


export default class SearchController extends Controller {

    //variable to store the results from api call
    @tracked result;
    @tracked errorMessage;
    @tracked chartResult;
    @service user;

    @action
    async getFiles(directoryPath,keyword){
        console.log(directoryPath,keyword)
        if(directoryPath==undefined || keyword==undefined || directoryPath=="" || keyword==""){
            this.errorMessage = 'Please enter all the details';
        }
        else{
            this.chartResult = null;
            this.errorMessage = null;
            let response = await fetch(`http://localhost:9090/getMyFilesServer/webapi/getfile?keyword=${keyword}&directoryPath=${directoryPath}&phone=${this.user.userPhone}`);
            let data = await response.json();
            console.log(data);
            this.result = data;
            console.log(this.result);
        }
        
        
    }

    @action
    async getChartData(){
        this.result = null;
        let response = await fetch(`http://localhost:9090/getMyFilesServer/webapi/getchartdata?phone=${this.user.userPhone}`);
        let data  = await response.json();
        console.log(data);
        this.chartResult = data;
    }
    

}
