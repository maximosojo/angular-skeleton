import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from  './auth.service';
import { appconfig } from 'src/appconfig';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiRoot: string;
  token: string
  id: string

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
      this.apiRoot = appconfig.path;
  }

  private getHeaders() {
    const token = this.authenticationService.getCurrentToken();
    const headers = new HttpHeaders({
        'Authorization' : `Bearer ${token}`,
        'Content-Type' : 'application/json'
    });
    return headers;
  }

  /**
   * POST
   *
   * @author  Máximo Sojo <maxsojo13@gmail.com>
   * @param   { string }  url   Url de solicitud
   * @param   { json }  data  Data a enviar en Body
   * @return  Response
   */
  post(url, data) {
    const headers = this.getHeaders();
    return this.http.post(`${this.apiRoot}${url}`,data, { headers })
  }

  /**
   * GET
   * 
   * @author  Máximo Sojo <maxsojo13@gmail.com>
   * @param   { string }  url   Url de solicitud
   * @return  Response
   */
  get(url) {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiRoot}${url}`,{ headers })
  }

  /**
   * PUT
   * 
   * @author  Máximo Sojo <maxsojo13@gmail.com>
   * @param   { string }  url   Url de solicitud
   * @param   { json }  data  Data a enviar en Body
   * @return  Response
   */
  put(url,data) {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiRoot}${url}`,data,{ headers })
  }
}