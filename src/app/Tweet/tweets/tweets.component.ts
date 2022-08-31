import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/TweetService/tweet.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  allTweets!: [];

  tweet = {
    id: "25956489",
    tweet: "Antoher Tweet to update",
    tag: "testupdate",
    postedDate: "29-07-2022 10:34:08",
    updateDate: "29-07-2022 10:34:08",
    userId: "1206181",
    likeCount: "2",
    replyCount: "0",
    loginId: "testreg6"
  }
  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getAllTweets().subscribe(data => {
      this.processTweets(data);
    });
  }


  processTweets(response: any) {
    this.allTweets = response.data ? response.data : null;
    if (this.allTweets == null) {
      window.alert("Failed to fetch Tweets");
    }
  }

}
