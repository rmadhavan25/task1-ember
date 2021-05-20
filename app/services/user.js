import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserService extends Service {
    isLogged = false;
    userPhone = null;
    files = null;
    columns = null;
    keyword = null;

    logIn(phone){
        this.isLogged = true;
        this.userPhone = phone;
    }

    logOut(){
        this.isLogged=false;
        this.userPhone = null;
    }

    updateFiles(files){
        this.files = files;
    }

    updateColumns(columns){
        this.columns = columns;
    }

    updateKeyword(keyword){
        this.keyword = keyword;
    }

}
