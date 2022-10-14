const Router = require("koa-router")
const router = new Router();
const list = require("./list")
const info = require("./info")
const edit = require("./edit")
const add = require("./add")
const delete1 = require("./delete")
// const moment = require("moment")
// const { queryFn, returnMsg, jwtVerify } = require("../../../utils");

//获取100条数据用于测试
// router.get('/', async ctx => {
    // for (let i = 0; i < 100; i++) {
    //     let sql = `INSERT INTO article VALUES (null,'你好${i}','世界${i}','wch','${moment().format("YYYY-MM-DD hh:mm:ss")}','<p>内容内容${i}</p>')`
    //     await queryFn(sql)
    // }
    // ctx.body = 123;
    // let index = 10;//从第10条数据开始查
    // let counts = 10;//查询10条数据返回给前端
    //查询
    //获取所有数据
    //用前端来分割
    /*  
    let sql =`SELECT * FROM article`;
    let result =await queryFn(sql)
    let arr=result.slice(index,index+counts)
    ctx.body =arr
     */
    //用mysql直接分割
    //查询有多少条数据
    // let sql =`SELECT COUNT(*) ROWS FROM article`;
    //从第十条开始,查询10条数据返回给前端
    // let sql = `SELECT *  FROM article LIMIT ${index},${counts}`;
    // let result = await queryFn(sql)
//     ctx.body = result
// })

router.use('/list', list.routes(), list.allowedMethods());
router.use('/info', info.routes(), info.allowedMethods());
router.use('/edit', edit.routes(), edit.allowedMethods());
router.use('/add', add.routes(), add.allowedMethods());
router.use('/delete', delete1.routes(), delete1.allowedMethods());


module.exports = router;