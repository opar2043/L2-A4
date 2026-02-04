
export interface Menu  {
   _id : string,
   name: string,
   price: string,
   image: string,
   category : string ,
   availability : string ,
   description : string ,
   time : string ,
   itemNeeds: string[],
   type: string
}

export enum Role {
    ADMIN = 'admin' ,
    CUSTOMER = 'customer',
    PROVIDER = 'provider'
}