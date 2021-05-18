import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action} from '@ember/object';
import { inject as service } from '@ember/service';


export default class SearchController extends Controller {
    @tracked phoneNumber;
    @tracked password;
    @service router;
    @service user;

    @action
    async verifyUser(phone,pass){
        //check fields
        console.log(phone,pass)
        if(phone==undefined || pass==undefined || phone=="" || pass==""){
            alert('phone/password cannot be empty');
        }
        else{
            //api call
            let response = await fetch(`http://localhost:9090/SampleWebApp/signin?password=${pass}&phoneNumber=${phone}`);
            let data = await response.json();
            if(data.logInStatus==='OK'){
                this.user.logIn(phone);
                this.router.replaceWith('/');
            }
            else{
                alert(data.logInStatus);
            }
            
        }

        
    }
}