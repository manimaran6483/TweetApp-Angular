import { Component, OnInit } from '@angular/core';
import { TweetResponse } from '../response/TweetResponse';
import { TweetService } from '../services/TweetService/tweet.service';
@Component({
  selector: 'app-mytweets',
  templateUrl: './mytweets.component.html',
  styleUrls: ['./mytweets.component.css']
})
export class MytweetsComponent implements OnInit {

  allTweets!:any[];
  allAvatars=[
    '../../assets/1.png',
      '../../assets/2.png',
      '../../assets/3.png',
      '../../assets/4.png',
      '../../assets/5.png',
      '../../assets/6.png',
      '../../assets/7.png',
      '../../assets/8.png',
      '../../assets/9.png',
      '../../assets/10.png'
  ]
  canEditAndDelete:boolean=true;
  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getTweetsofUser(sessionStorage.getItem('loginId')).subscribe(response =>{
      this.allTweets = response.data;
      this.allTweets.forEach( (tweet,index) =>{
        tweet.avatar=this.allAvatars[index%10];
      })
    })
  }
 
}
