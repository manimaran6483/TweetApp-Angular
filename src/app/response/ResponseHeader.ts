export class ResponseHeader {

    transactionNotification!: {
        status:string,
        statusCode: string,
        responseDateTime: string,
        transactionId: string,
        remarks: {
            messages: [any]
        }
    }

    constructor(tnotification:any){
        this.transactionNotification=tnotification;
    }
}