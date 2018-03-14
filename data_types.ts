let paidAccount : boolean = true;
let value : number = 34.2;
let age : number = 22;
let fullName : string = "Dallin Moak"

//Array
var ages : number[] = [33, 28, 11];

//tuple
let player : [number, string, number, number];
player = [3, 'Corerra', .333, 33];

//enum
enum Stage {Approved, Pending, Rejected};
let job : Stage = Stage.Pending //apparently you can call these like methods

//Any
var apiData : any[] = [234, "asdf", false];

//void
function printOut(msg: string) : void {
  console.log(msg);
}