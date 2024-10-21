export interface IUserData {
    userAliasId: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    emailVerified?: boolean;
    phoneVerified?: boolean;
    department?: string;
    kycStatus?: string;
    officeD365Id?: string;
  }
  
  export class LoginData {
    loginID = '';
    password = '';
    authorisationToken = '';
    userData = {} as IUserData;
    constructor(loginID: string, password: string, authorisationToken: string, userData: IUserData) {
      this.loginID = loginID;
      this.password = password;
      this.authorisationToken = authorisationToken;
      this.userData = userData;
    }
  }