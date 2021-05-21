import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserService extends Service {
    isLogged = false;
    userPhone = null;
    keywordData = null;

    logIn(phone){
        this.isLogged = true;
        this.userPhone = phone;
    }

    logOut(){
        this.isLogged=false;
        this.userPhone = null;
    }

    updateKeywordData(data){
        this.keywordData = data;
    }

}
