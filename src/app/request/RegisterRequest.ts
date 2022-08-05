import { RequestHeader } from "./RequestHeader";

export class RegisterRequest{
    requestHeader: RequestHeader;
    loginId: string;
    password: string;
    emailId:string;
    firstName:string;
    lastName:string;
    confirmPassword:string;
    contactNumber:string;

    constructor(requestHeader:RequestHeader,loginId:string,password:string,
        emailId:string,firstName:string,lastName:string,confirmPassword:string,contactNumber:string){
        this.loginId=loginId;
        this.password=password;
        this.requestHeader=requestHeader;
        this.confirmPassword=confirmPassword;
        this.emailId=emailId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.contactNumber=contactNumber;
    }
}