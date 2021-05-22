import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class SearchRoute extends Route {
    
    @service user;
    @service router;

    beforeModel(){
        if(!this.user.isLogged){
            this.router.replaceWith('sign-in');
        }
        
    }

    async model(){
        //api call goes here;
        let response = await fetch(`http://localhost:9090/SampleWebApp/keyworddata?phone=${this.user.userPhone}`);
        let data = await response.json();
        return data;
        //this.user.updateKeywordData(data);
    }
  
}


