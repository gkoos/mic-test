const fetch = require("node-fetch");

jsonToQueryString = json => {
    return Object.keys(json).map(key => {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}

sendData = async (method, url, body) => {
    const authData = {
        access_token: process.env.LEAD_API_TOKEN,
        pGUID: process.env.LEAD_API_PGUID,
        pAccName: process.env.LEAD_API_PACCNAME,
        pPartner: process.env.LEAD_API_PPARTNER,
    };

    const response = await fetch(url, {
        method,
        body: jsonToQueryString({ ...authData, ...body }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const responseBody = await response.json();

    return { status: response.status, body: responseBody };
}

module.exports = { sendData };