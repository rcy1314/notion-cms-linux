# linux服务器部署Notion站点
本项目已带依赖模块
安装前确保已有Nodejs 的环境
![image](https://cdn.jsdelivr.net/gh/rcy1314/tuchuang@main/NV/image.3y24z0o2jjy0.jpg)
在项目根目录执行
npm install
npm run build
![image](https://cdn.jsdelivr.net/gh/rcy1314/tuchuang@main/NV/image.3379mc68k4m0.jpg)
![image](https://cdn.jsdelivr.net/gh/rcy1314/tuchuang@main/NV/image.405k7s375o20.jpg)
pm2 持久化管理
npm install -g pm2
在项目目录下，启动进程
pm2 start npm --name mysite -- run start # --name 后面可以修改为你喜欢的名字
服务启动成功后，端口为 3000
![image](https://cdn.jsdelivr.net/gh/rcy1314/tuchuang@main/NV/image.2ibow69asv60.jpg)

