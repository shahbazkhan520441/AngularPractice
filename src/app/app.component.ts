import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent   {
  title = 'ParentToChild_ChildToParentRelationship';

  postTtle!:string;
  postDetails!:string;
  imageURL!:string;

  addBackground!:boolean;
  postURL!:string;

   objarray: Array<{ id: number; posttitle: string }> = [
    {
      id: 1,
      posttitle: 'post1',
    },
    {
      id: 2,
      posttitle: 'post2',
    },
    {
      id: 3,
      posttitle: 'post3',
    },
    {
      id: 4,
      posttitle: 'post4',
    },
  ];
  
  addNew(){
    this.objarray.push({id:5,posttitle:'post6'})
  }

  onDelete(post:any)
  {
   let index=this.objarray.indexOf(post)

   this.objarray.splice(index,1)

  }
  
}
