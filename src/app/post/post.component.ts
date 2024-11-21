import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'list of posts';

  postparent: string = 'message coming from post parent';

  childMessage: string = 'data from child component to parent component';

  @Input() fromParent!: string;

 messageonclick='message on click form child to parent';

 @Output() messageEvent=new EventEmitter<string>();



  constructor() {}

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageEvent.emit(this.messageonclick);
  }
}
