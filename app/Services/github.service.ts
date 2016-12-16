import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
	private username: string;
	private client_id = '9b0ee1bc822a7f11bee5';
	private client_secret = '3bb8d20228754c39cfee44e780aee6e2a504de3e';

	constructor(private _http: Http){
		console.log('Github service Ready...');
		this.username = 'exitthebox';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}

	updateUser(username: string){

		this.username = username;

	}
}