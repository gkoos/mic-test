const fetch = require("node-fetch");
const ajv = require("ajv")({ allErrors: true });
const normalise = require('ajv-error-messages');

const schema = require("./schema.json");

validateParams = async (ctx, next) => {
    const valid = ajv.validate(schema, ctx.request.body);
    if (!valid) {
        ctx.status = 400;
        ctx.body = { message: "Format errors on validation", errors: normalise(ajv.errors) }
        return;
    }

    await next();
}

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

module.exports = { sendData, validateParams };