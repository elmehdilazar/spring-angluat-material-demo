export interface Student {
  id:number,
  code:string,
  firstName:string,
  lastname:string,
  programeId:string,
  photo:string
}
export interface Payment {
  id:number,
  date:string,
  amount:number,
  type:string,
  status:string
 file:string,
  student:Student
}
export enum PaymentTYpe {
  CASH,CHECK,TRANSFER,DEPOSIT,
}
export enum PaymentStatus {
  CREATED,VALIDATED,REJECTED
}
