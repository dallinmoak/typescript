var paidAccount = true;
var value = 34.2;
var age = 22;
var fullName = "Dallin Moak";
//Array
var ages = [33, 28, 11];
//tuple
var player;
player = [3, 'Corerra', .333, 33];
//enum
var Stage;
(function (Stage) {
    Stage[Stage["Approved"] = 0] = "Approved";
    Stage[Stage["Pending"] = 1] = "Pending";
    Stage[Stage["Rejected"] = 2] = "Rejected";
})(Stage || (Stage = {}));
;
var job = Stage.Pending; //apparently you can call these like methods
//Any
var apiData = [234, "asdf", false];
//void
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=data_types.js.map