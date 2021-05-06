import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorageService } from '../services/local-storage.service';
import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User;
    itemKey: string;
    tokenKey: string;

    constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
        this.itemKey = 'ssupp.current';
        this.tokenKey = 'ssupp.token';
    }

    /**
     * Register current user
     */
    public setCurrentUser(data) {        
        this.localStorageService.setItem(this.itemKey, data);
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        if (!this.user) {
            this.user = this.localStorageService.getItem(this.itemKey);
        }
        return this.user;
    }

    // Registra el token de la sesion actual
    public setCurrentToken(data) { 
        this.localStorageService.setItem(this.tokenKey, data);
    }

    // Retorna el token logueado en la sesión
    public getCurrentToken() {
        const token = this.localStorageService.getItem(this.tokenKey);
        let currentToken = false;
        if (token) {
            currentToken = token.token;
        }

        return currentToken;
    }

    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        this.localStorageService.deleteItem(this.itemKey);
        this.user = null;
    }
}

