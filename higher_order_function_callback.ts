var dbQuery = function() : void {
  setTimeout(() => {
    console.log('query results');
  }, 3000);
}

function loadPage(q : () =>  void) {
  console.log("Header");
  q();
  console.log("sidebar");
  console.log("footer");
}
  
loadPage(dbQuery);