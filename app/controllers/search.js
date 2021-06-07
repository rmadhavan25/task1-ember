import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action} from '@ember/object';
import { inject as service } from '@ember/service';




export default class SearchController extends Controller {

    //variable to store the results from api call
    @tracked result;
    @tracked errorMessage;
    @tracked chartResult;
    @tracked keyword;
    @tracked directoryPath;
    @service user;

    @action
    updateKeyword(event){
        this.keyword = event.target.value;    
    }

    @action
    updateDirectoryPath(event){
        this.directoryPath = event.target.value;
    }

    
   

    @action
    getFiles(directoryPath,keyword){
        console.log(directoryPath,keyword)
        if(directoryPath==undefined || keyword==undefined || directoryPath=="" || keyword==""){
            this.errorMessage = 'Please enter all the details';
        }
        else{
            this.chartResult = null;
            let allFileDetail = {
                keyword:"null",
                columns:[],
                files:[]
            }
            let fileInfo = {
                name:"null",
                type:"null"
            }

            allFileDetail.columns.push('ALLFILES');
            allFileDetail.columns.push('TYPE');
            allFileDetail.keyword = this.keyword;
            
            let client = new WebSocket(`ws://127.0.0.1:9090/getMyFilesServer/getfile?keyword=${this.keyword}&directory=${this.directoryPath}&phone=${this.user.userPhone}`);
            const updateFileResult = (fileName,fileType) => {
                this.result = null;
                fileInfo.name = fileName;
                fileInfo.type = fileType;
                allFileDetail.files.push(fileInfo);
                this.result = allFileDetail;
                console.log(this.result);
                
            }

            const updateNoFilesResult = () => {
                this.result = allFileDetail;
            }
            
            function sleep(milliseconds) {
                var start = new Date().getTime();
                for (var i = 0; i < 1e7; i++) {
                  if ((new Date().getTime() - start) > milliseconds){
                    break;
                  }
                }
              }
            client.onmessage = function(event) {
                let msg = event.data;
                if(msg==="null"){
                    client.close();
                    updateNoFilesResult();
                    console.log("socket closed");
                }
                else{
                    let fileDetails = msg.split(",");
                    sleep(250);
                    updateFileResult(fileDetails[0],fileDetails[1]);
                }
                
            }
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

