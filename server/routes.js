const Router = require("koa-router");
const router = new Router();

const Api = require("./leadApi");

router.post("/api/create", async ctx => {
    const response = await Api.sendData('post', process.env.LEAD_API_URI + process.env.LEAD_API_ENDPOINT, ctx.request.body);
    ctx.status = response.status;
    ctx.body = { message: response.body.message, errors: response.body.errors }
});

module.exports = router;
