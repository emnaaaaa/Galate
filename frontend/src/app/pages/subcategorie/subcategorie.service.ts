
import { Observable } from 'rxjs/Observable';

import {Injectable} from "@angular/core";

import { HttpClient, HttpRequest } from '@angular/common/http';
import {API_URL} from "../../app.constant";
import {SousCategorie} from "./subcategorie.model";




@Injectable({
    providedIn: 'root'
  })
export class SubcategorieService {
  private url:string=API_URL+"admin/";


  constructor(private http:HttpClient){

  }
  addSousCategorie(souscategorie: Object): Observable<Object> {
    return this.http.post(this.url+ 'createSubcategory',JSON.stringify(souscategorie), {responseType: 'text'});
  }

  getAllSousCategorie():Observable<SousCategorie[]>{
    return this.http.get<SousCategorie[]>(this.url+"getAllSubcategories");
  }
  getSousCategorieById(id:number):Observable<SousCategorie>{
    return this.http.get<SousCategorie>(this.url+"getSubcategoryById?id="+id);
  }
  getAllSubcategoriesByCategory(id:number):Observable<SousCategorie[]>{
    return this.http.get<SousCategorie[]>(this.url+"getAllSubcategoriesByCategory?id_category="+id);
  }
  updateSousCategorie(id:number,sousCategorie:any):Observable<any>{
    return this.http.post(this.url+"updateSubcategoryById?id"+id,sousCategorie,{responseType:'text'});
  }

  deleteSousCategorie(id:number):Observable<Object>{
    return this.http.post(this.url+"deleteSubcategoryById?id="+id, {responseType: 'text'});
  }

  getAllSubCateByIdTest(id:number):Observable<SousCategorie[]>{
    return this.http.get<SousCategorie[]>(this.url+"getAllSubcategoriesByTestId?id_test="+id);
  }
  getAllTest(id_subCat:number,id_test:number):Observable<any>{
    return this.http.get<any>(this.url+"getTestSubcategoryByTestIdAndSubcateoryId?testId="+id_test+"&subcategoryId="+id_subCat);
  }


  getAlltestQuestion(id:number):Observable<any>{
    return this.http.get<any>(this.url+'getAllQuestionsByTestSubcategories?testId='+id);
  }
  getAllSubCateByIdTest2(id:number):Observable<SousCategorie[]>{
    return this.http.get<SousCategorie[]>(this.url+"getAllTestSubcategoriesByTestAndSubcategoryIds?testId="+id);
  }

}


