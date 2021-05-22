import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

 

export default class ChartRoute extends Route {
    @service user;
    @service router;

    beforeModel(){
        if(!this.user.isLogged){
            this.router.replaceWith('sign-in');
        }
    }

    async model(){
        let response = await fetch(`http://localhost:9090/SampleWebApp/getchartdata?phone=${this.user.userPhone}`);
        let data  = await response.json();
        console.log(data);
        return data;
        
    }

    
}