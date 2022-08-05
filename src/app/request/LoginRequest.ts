import { RequestHeader } from "./RequestHeader";

export class LoginRequest{
    requestHeader: RequestHeader;
    loginID: string;
    password: string;

    constructor(requestHeader:RequestHeader,loginId:string,password:string){
        this.loginID=loginId;
        this.password=password;
        this.requestHeader=requestHeader;
    }
}