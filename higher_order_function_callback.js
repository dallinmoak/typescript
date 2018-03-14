var dbQuery = function () {
    setTimeout(function () {
        console.log('query results');
    }, 3000);
};
function loadPage(q) {
    console.log("Header");
    q();
    console.log("sidebar");
    console.log("footer");
}
loadPage(dbQuery);
//# sourceMappingURL=higher_order_function_callback.js.map