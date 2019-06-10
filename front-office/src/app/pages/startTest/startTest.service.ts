import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {API_URL} from "../../app.constant";
import { Question } from './startTest.model';


@Injectable()
export class StartTestService {
  private url:string=API_URL+"admin/";
  private url2:string=API_URL+"member/";
  private urlCalcul:string=API_URL+"calcul/";

  constructor(private http: HttpClient) { }
  
  getTestDetails(testId:number):Observable<Question[]>{
    return this.http.get<Question[]>(this.url+'getAllQuestionsByTestSubcategories?testId='+testId);
  }

  /*createMemberChoices(choices: Object): Observable<Object> {
    return this.http.post(`${this.url2}` + `createMemberChoices`, choices);
  }*/

  getTestMember(testId:number, memberId:number): Observable<Object> {
    return this.http.get(this.url2 +'getTestMemberByMemberIdAndTestId?idMember='+memberId+'&idTest='+testId);
  }
  
  
  saveTestResult(testId:number, memberId:number, choices: Object): Observable<Object> {
    return this.http.post(this.urlCalcul +'saveTestResult?id_test='+testId+'&id_member='+memberId,choices);
  }
}
