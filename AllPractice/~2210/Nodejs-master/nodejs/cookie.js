let http = require("http");
let cookie = require("cookie");
http.createServer((request, response) => {
    console.log(request.headers.cookie);
    let cookies = {};
    if (request.headers.cookie !== undefined) {
        cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies.yummi_cookie);
    response.writeHead(200, {
        "Set-Cookie": [
            "yummi_cookie=choco",
            "tasty_cookie=strawberry",
            `Permanent=cookies; Max-Age=${60 * 60 * 24 * 30}`,
            "Secure=Secure; Secure",
            "HttpOnly=HttpOnly; HttpOnly",
            "Path=Path; Path=/cookie",
            "Domain=Domain; Domain=o2.org",
        ],
    });
    response.end("Cookie!!");
}).listen(3000);
