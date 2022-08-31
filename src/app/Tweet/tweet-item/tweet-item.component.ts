import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.css']
})
export class TweetItemComponent implements OnInit {

  @Input() tweet: any;
  isLiked :boolean =false;
  constructor() { }

  ngOnInit(): void {
  }


  onLikeClick(){
    this.isLiked = !this.isLiked;

    // like logic
  }
}
