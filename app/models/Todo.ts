export default interface Todo{
    // constructor(public id : number, public title : string, public completed : boolean) {}
    id:number,
    title:string,
    completed:boolean,
    date : any,
    [index : number] : string
}