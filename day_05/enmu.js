var Response;
(function (Response) {
    Response[Response["No"] = 0] = "No";
    Response[Response["Yes"] = 1] = "Yes";
})(Response || (Response = {}));
function respond(recipient, message) {
    // ...
}
respond("Princess Caroline", Response.Yes);
