const koa  = require('koa');
const koaRouter = require('koa-router');

let app = new koa();
let router = new koaRouter

// 注册路由
app.use(router.routes()).use(router.allowedMethods())
router.get('/test',(ctx,next)=>{
		console.log(ctx.query)
		ctx.body='测试成功'
})
// 注册主页返回的数据
const indexData = require('./datas/index.json')

router.get('/getindexData',async (ctx)=>{
	ctx.set('Access-Control-Allow-Origin', '*')
	await new Promise(resolve => setTimeout(() => resolve(),2000))
	ctx.body={
		code: 200,
		data: indexData
	}
})
// 注册导航页数据
// const indexCateList = require('./datas/indexCateList.json')
// router.get('/getCategoryDatas', async (ctx,next)=>{
// 	ctx.body = indexCateList
// })
let indexCateList = require('./datas/indexCateList.json')
router.get('/getindexCateList', async (ctx, next) => {
	// 生成的H5应用存在跨域问题，通过CORS设置跨域配置
	ctx.set('Access-Control-Allow-Origin', '*')
	await new Promise(resolve => setTimeout(() => resolve(),2000))
	ctx.body = indexCateList;
});

// 分类页数据
const categoryDatas = require('./datas/categoryDatas.json')
router.get('/categoryDatas', async (ctx,next)=>{
	ctx.body = categoryDatas
})

















app.listen('3001',(err)=>{
	if(err) {
		console.log('报错了'+err)
	}else{
		console.log('服务启动成功3001端口监听中')
	}
})