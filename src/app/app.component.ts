import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'ParentToChild_ChildToParentRelationship';

  parentMessage: string = 'message changed';

  acceptchildmessage!: string;


  userName!:String
 

  @ViewChild(PostComponent) childComponent!: PostComponent;

  constructor() {}

  ngAfterViewInit() {
    // Accessing the property of the child component
    console.log(this.childComponent);
    this.acceptchildmessage = this.childComponent.childMessage;
  }

  reciveMessage($event:any){
    console.log($event)
  }

  onKeyUp(){
    console.log(this.userName)
  }
}
