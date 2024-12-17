export interface IUserData {
    flatNo:number;
    flatId:number;
    flatName:string;
    flatAddress:string;
  }

  export class LoginData {
    userID = 0;
    userName = '';
    authorisationToken = '';
    userData = {} as IUserData;
    constructor(userId: number, userName: string, authorisationToken: string, userData: IUserData) {
      this.userID = userId;
      this.userName = userName;
      this.authorisationToken = authorisationToken;
      this.userData = userData;
    }
  }

  export class sendOTPData {
    sendOTP = false;
    constructor(sendOTP:boolean) {
      this.sendOTP = sendOTP;
    }
  }