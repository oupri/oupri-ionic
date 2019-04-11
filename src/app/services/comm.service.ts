import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommService {
  api_base: string

  constructor(private http: HttpClient) {

    this.api_base = '';//'http://localhost:3000/api'
  }

  createMember(alias) {
    return this.http.post<any>(this.api_base + '/members', { alias: alias })
  }
}
