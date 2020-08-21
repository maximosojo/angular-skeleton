import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
   * Returns the localStorage value by name
   * @param name localStorage name
   */
  public getItem(name: string) {
    if (!name) {
      return null;
    }

    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name));
    }

    return null;
  }

  /**
   * Deletes the localStorage with given name
   * @param name localStorage name
   * @param path path of the domain
   */
  public deleteItem(name: string) {
    localStorage.removeItem(name);
  }

  /**
   * Creates/sets the localStorage
   * @param name
   * @param value 
   */
  public setItem(name: string, value: string) {
    localStorage.setItem(name, JSON.stringify(value));
  }
}
