import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { TweetService } from 'src/app/services/TweetService/tweet.service';
import { UtilService } from 'src/app/services/UtilService/util.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  invalidTag = false;
  constructor(private tweetService : TweetService,private utilService :UtilService) { }

  ngOnInit(): void {
  }


  onSubmit(formdata:NgForm){
    let data= formdata.value.posttext.toString();
    let array = data.split('#',2);
    let tweet = array[0].toString();
    let tag = array[1]? array[1].toString() : "";
    let tagLength = tag.length;
    if((tagLength<=50 || tag === "") && tweet.length>0){
      this.invalidTag = false;
      let request = this.utilService.getPostTweetRequest(tweet,tag,
        sessionStorage.getItem("userId"), sessionStorage.getItem("loginId"));
        console.log(request);
      this.tweetService.postTweet(request,sessionStorage.getItem("loginId")).subscribe(response =>{
        console.log(response);
      let statusCode = response.responseHeader.transactionNotification.statusCode;
        if(statusCode ==='0'){
          window.alert("Post Added Success..!");
          this.newItemEvent.emit("reload");
        }
      },(response:any)=> {
        let RegError=response.error.responseHeader.transactionNotification.remarks.messages[0].description;
        window.alert(RegError);
      });
      formdata.reset();
    }else{
      this.invalidTag = true;
    }
    
  }

}
