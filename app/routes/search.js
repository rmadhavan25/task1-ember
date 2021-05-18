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
  
}


