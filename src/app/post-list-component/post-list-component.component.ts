import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreated_at: string;
  @Input() loveIts: Number;
  
    
  increment() { this.loveIts++; }
  decrement()  { this.loveIts--; }

  constructor() { }

  ngOnInit() {
  }
  getColor() {
       if(this.loveIts >= 1 ) {
           return 'green';
       } else if(this.loveIts <= -1) {
           return 'red';
       }
   }
}
