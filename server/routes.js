const Router = require("koa-router");
const router = new Router();

router.post("/api/create", async ctx => {
    ctx.body = { status: "ok" };
});

module.exports = router;
