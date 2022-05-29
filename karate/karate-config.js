@ -1,29 +0,0 @@
function setup() {
    var config = {
        baseUrl: "https://https://lista-compras-api.herokuapp.com/api/v1"
    }

    return config;
}

function setup() {
    karate.configure("headers", {
        secret: "ak109sa1kj-amsasuil1"
    })
}



//ver qual dos dois funciona melhor

function setup() {

    var config = {
        baseUrl: "https://lista-compras-api.herokuapp.com/api/v1"
    }

    karate.configure("logPrettyRequest", true);
    karate.configure("logPrettyResponse", true);

    return config;
}
