import { Component, Input, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/TweetService/tweet.service';
import { UtilService } from 'src/app/services/UtilService/util.service';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.css']
})
export class TweetItemComponent implements OnInit {

  @Input() tweet: any;
  @Input() canEditAndDelete!:boolean;
  isLiked :boolean =false;
  showReply:boolean = false;
  showEdit:boolean = false;
  constructor(private tweetService : TweetService,private utilService :UtilService) { }

  ngOnInit(): void {
  }


  onLikeClick(){
    this.isLiked = !this.isLiked;
    let request = this.utilService.getLikeTweetRequest('Y',sessionStorage.getItem("loginId"),this.tweet.id,'');
    this.tweetService.likeTweet(request,sessionStorage.getItem('loginId'),this.tweet.id).subscribe( response => {
      let statusCode = response.responseHeader.transactionNotification.statusCode;
      if(statusCode ==='0'){
        this.tweet.likeCount = Number(this.tweet.likeCount )+1;
      }
    },(response:any)=>{
      let RegError=response.error.responseHeader.transactionNotification.remarks.messages[0].description;
      window.alert(RegError);
    });


  }

  openreply(){
    this.showReply=!this.showReply;
  }

  replyTweet(replyText:string){
    let array = replyText.split('#',2);
    let tweet = array[0].toString();
    let tag = array[1]? array[1].toString() : "";
    let tagLength = tag.length;
    let request = this.utilService.getReplyRequest(tweet,tag,sessionStorage.getItem('loginId'),this.tweet.id);
    if((tagLength<=50 || tag === "") && tweet.length>0){
      this.tweetService.replyTweet(request,sessionStorage.getItem('loginId'),this.tweet.id).subscribe(response=>{
        let statusCode = response.responseHeader.transactionNotification.statusCode;
        if(statusCode ==='0'){
          window.alert("Reply Added Success..!");
        }else{
          let RegError=response.responseHeader.transactionNotification.remarks.messages[0].description;
          window.alert(RegError);
        }
        this.openreply();
      },(response:any)=> {
        let RegError=response.error.responseHeader.transactionNotification.remarks.messages[0].description;
        window.alert(RegError);
        this.openreply();
      });
    }
  }

  onEdit(){
    this.showEdit=!this.showEdit;
  }
  onDelete(){
    if(confirm("Are you sure you want to delete this Tweet?")){
      console.log("Pressed Yes");
    }else{
      console.log("Pressed No");
    }
    // window.prompt("Are you sure you want to delete this Tweet?");
  }

  editTweet(editText:string){
    let array = editText.split('#',2);
    let tweet = array[0].toString();
    let tag = array[1]? array[1].toString() : "";
    let tagLength = tag.length;
    let request = this.utilService.getUpdateTweetRequest(tweet,tag,sessionStorage.getItem('loginId'),sessionStorage.getItem('userId'));
    if((tagLength<=50 || tag === "") && tweet.length>0){
      this.tweetService.updateTweet(request,sessionStorage.getItem('loginId'),this.tweet.id).subscribe(response=>{
        let statusCode = response.responseHeader.transactionNotification.statusCode;
        if(statusCode ==='0'){
          window.alert("Tweet Update Success..!");
          this.tweet.tweet=editText;
        }else{
          let RegError=response.responseHeader.transactionNotification.remarks.messages[0].description;
          window.alert(RegError);
        }
        this.onEdit();
      },(response:any)=> {
        let RegError=response.error.responseHeader.transactionNotification.remarks.messages[0].description;
        window.alert(RegError);
        this.onEdit();
      });
    }
  }

}
