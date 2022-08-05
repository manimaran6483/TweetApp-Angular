export class RequestHeader{
    consumer:{
        id: string,
        name: string,
        businessTransactionType:string,
        type:string,
        requestDateTime: Date,
        hostName: string
    };
    transactionId:string;

    constructor(consumer:any,transactionId:string){
        this.consumer=consumer;
        this.transactionId=transactionId;
    }
}