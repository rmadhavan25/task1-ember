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
    async updateKeyword(event){
        //console.log("onchange fired");
        //console.log(this.directoryPath);
        this.keyword = event.target.value;
        // if(this.directoryPath!==undefined){

        //     this.errorMessage = null;
        //     this.chartResult = null;
        //     let response = await fetch(`http://localhost:9090/getMyFilesServer/webapi/getfile?keyword=${this.keyword}&directoryPath=${this.directoryPath}&phone=${this.user.userPhone}&searchbtn=false`);
        //     let data = await response.json();
        //     console.log(data);
        //     this.result = data;
        //     console.log(this.result);

        // }
        // else{
        //     this.errorMessage = "Please specify a directory";
        // }
        
    }

    @action
    updateDirectoryPath(event){
        this.directoryPath = event.target.value;
    }


   

    @action
    async getFiles(directoryPath,keyword){
        console.log(directoryPath,keyword)
        if(directoryPath==undefined || keyword==undefined || directoryPath=="" || keyword==""){
            this.errorMessage = 'Please enter all the details';
        }
        else{
            let skip = 0;
            this.result = null;
            this.chartResult = null;
            this.errorMessage = null;
            let response = await fetch(`http://localhost:9090/getMyFilesServer/webapi/getfile?keyword=${keyword}&directoryPath=${directoryPath}&phone=${this.user.userPhone}&skip=${skip}`);
            let data = await response.json();
            console.log("fetched once ",data);
            this.user.fileResponse = data;
            console.log("file  detail",data.files[0]);
            this.count++;
            this.result = this.user.fileResponse;
            
            if(data.files.length > 0){
                const interval = setInterval(async()=>{
                    this.result = null;
                    skip++;
                    let response = await fetch(`http://localhost:9090/getMyFilesServer/webapi/getfile?keyword=${keyword}&directoryPath=${directoryPath}&phone=${this.user.userPhone}&skip=${skip}`);
                    let data = await response.json();
                    console.log("fetched once ",data);
                    if(data.files.length < 1){
                        this.count++;
                        this.result = this.user.fileResponse ;
                        //break;
                        clearInterval(interval);
                    }
                    this.user.fileResponse.files.push(data.files[0]);
                    this.result = this.user.fileResponse ;
                    
                    
                    
                    
                },200)
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
