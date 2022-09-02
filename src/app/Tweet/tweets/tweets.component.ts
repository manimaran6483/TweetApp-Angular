import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/TweetService/tweet.service';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  allTweets!: any[];
  allAvatars = [
    '../../../assets/1.png',
      '../../../assets/2.png',
      '../../../assets/3.png',
      '../../../assets/4.png',
      '../../../assets/5.png',
      '../../../assets/6.png',
      '../../../assets/7.png',
      '../../../assets/8.png',
      '../../../assets/9.png',
      '../../../assets/10.png'
  ];
  canEditAndDelete:boolean=false;

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getAllTweets().subscribe(data => {
      this.processTweets(data);
    });
  }


  processTweets(response: any) {
    this.allTweets = response.data ? response.data : null;
    this.allTweets = this.allTweets.slice(0,10);
    this.allTweets.forEach( (tweet,index) =>{
      tweet.avatar=this.allAvatars[index%10];
    })
    if (this.allTweets == null) {
      window.alert("Failed to fetch Tweets");
    }
  }
 

  

}
