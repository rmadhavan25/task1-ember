import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserService extends Service {
    isLogged = false;
    userPhone = null;
    keywordData = null;
    fileResponse = null;

    logIn(phone){
        this.isLogged = true;
        this.userPhone = phone;
    }


    updateKeywordData(data){
        this.keywordData = data;
    }

}
