import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { StartTestService} from './startTest.service';
import { Question, ChoiceMember } from './startTest.model';
import { Subject } from 'rxjs';
import { TestService } from '../test/test.service';





@Component({
  selector: 'startTest',
  templateUrl: './startTest.component.html',
})
export class StartTestComponent  implements OnInit{
  pageActuel: number =1;
  private subcatgories:Question[]=[];
  dtTrigger: Subject<any> = new Subject();
  private map:Map<string,string>=new Map();
  testId:any;

  private choiceMemberArray:ChoiceMember[]=[];

    constructor(private router:Router ,private startTestService: StartTestService , private testService:TestService){ 

      this.testId=localStorage.getItem('testId');
      console.log("test  "+ this.testId); 
      
     
    }
  ngOnInit() {
    this.startTestService.getTestDetails(this.testId).subscribe(
      data=>{
        this.subcatgories=data;
        console.log(data[0].questions);
        this.dtTrigger.next();
      },err=>{
        console.log(err);
      }
    );

   }

   public getTestDetails() {
    this.startTestService.getTestDetails(this.testId).subscribe(
      data=>{
        this.subcatgories=data;
        this.dtTrigger.next();
      },err=>{
        console.log(err);
      }
    )
  }


 
  public totalQuestionsSize(){
    let questionsSize=0;
    this.subcatgories.forEach(subcatgory => {

        subcatgory.questions.forEach(question => {
          if(question.answers.length!=0){
            questionsSize=questionsSize+1;
          }
        });

    });
    return questionsSize;
  }
 
 
  public saveAnswer(questionId, answerId){
    this.map.set(questionId,answerId);
  }
 
  
  public showResult(){
    console.log("mapsize= "+this.map.size+" questionsize= "+this.totalQuestionsSize());
    if(this.map.size!==this.totalQuestionsSize()){
      alert("merci de repondre à toutes les questions avant de passer!");
      return;
    }
    let choiceMember=new ChoiceMember();
    choiceMember.id_test_member=1;
    this.map.forEach((value: string, key: string) => {
        choiceMember.id_question=key;
        choiceMember.id_answer=this.map.get(key); 
        this.choiceMemberArray.push(choiceMember);   
    })

    var json = '{ "choices":'+JSON.stringify(this.choiceMemberArray)+'}';
    this.startTestService.createMemberChoices(json)
    .subscribe(data =>{
      console.log(JSON.parse(JSON.stringify(data[0])));
      this.router.navigate(['/resultTable']);
    } , error => console.log('err'+error));

  }
  

  
}












 
  

  


