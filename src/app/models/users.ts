export class Users {
    subscribe(arg0: (response: any) => void): Users {
      throw new Error('Method not implemented.');
    }
    constructor(
            public email: string = "",
            public password?: string
        ) {}
        
}
