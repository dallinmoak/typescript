interface User {
  email :string;
  firstName : string;
  lastName : string;
}

function profile(user: User) : string {
  return `Welcome, ${user.firstName} ${user.lastName}.`;
}

var realUser = {
  email: 'a@b.c',
  firstName: 'Dallin',
  lastName: 'Moak'
};

console.log(profile(realUser));