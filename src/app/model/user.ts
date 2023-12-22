export class User {
    constructor(
        public photo: File,
        public firstName: string,
        public lastName: string,
        public age: number,
        public interest: string,
        public addressType: string,
        public address1: string,
        public address2: string,
        public companyAddress1: string,
        public companyAddress2: string
      ) {}

}
