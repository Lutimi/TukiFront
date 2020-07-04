import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  urlBackend = 'https://tukifinal.herokuapp.com'

  constructor(private http: HttpClient) {
  }

  login(paramaters): Observable<Object> {
    return this.http.post<Object[]>(
      this.urlBackend +'/api/v1/login', paramaters, this.httpOptions
    );
  }
}
