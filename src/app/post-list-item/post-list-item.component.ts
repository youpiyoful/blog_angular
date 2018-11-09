import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikeElt: number;
  @Input() postDate: Date;

  constructor() {
    this.postDate = new Date();
  }

  ngOnInit() {
  }

  upLike() {
    if(isNaN(this.postLikeElt)){
      this.postLikeElt = 0;
    }
    this.postLikeElt++;
  }

  downLike() {
    if(isNaN(this.postLikeElt)){
      this.postLikeElt = 0;
    }
    this.postLikeElt--;
  }

  getColor(){
    if(this.postLikeElt > 0){
      return 'green';
    }
    else if(this.postLikeElt < 0){
      return 'red';
    }
    else{
      return 'black';
    }
  }
}
