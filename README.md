# linux服务器部署Notion站点
**请先修改必要参数参数
更详细的搭建教程（带教程视频）：https://mp.weixin.qq.com/s?__biz=MzUzODgyNDc5Ng==&mid=2247484376&idx=1&sn=c2edfa882337ae137b154447482e9e80&chksm=fad09aebcda713fd6fa0a2132ef48340da410ce4e80cafaeac7bdeeea44343ef70b05522a7cf#rd


修改后再进行安装
安装前确保已有Nodejs 的环境
版本选择V14.17.6
在项目根目录执行**
```
npm install
npm run build
```
![image](https://cdn.jsdelivr.net/gh/rcy1314/tuchuang@main/NV/image.405k7s375o20.jpg)
**pm2 持久化管理**
```
npm install -g pm2
```
**在项目目录下，启动进程**
```
pm2 start npm --name mysite -- run start # --name 后面可以修改为你喜欢的名字
```
**服务启动成功后，端口为 3000，再域名反代即可**

初始代码来源：[https://github.com/transitive-bullshit/nextjs-notion-starter-kit ](https://github.com/transitive-bullshit/nextjs-notion-starter-kit )
样式修改来源：[https://github.com/zhimiaoli/nextjs-notion-blog](https://github.com/zhimiaoli/nextjs-notion-blog)

**本项目已带依赖模块，可一键安装**
