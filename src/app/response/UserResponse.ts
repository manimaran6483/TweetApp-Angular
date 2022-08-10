import { ResponseHeader } from "./ResponseHeader";

export class UserResponse {
    responseHeader!: ResponseHeader;
    data:any;

    constructor(responseHeader:ResponseHeader,data:any){
        this.data=data;
        this.responseHeader=responseHeader;
    }
}