1）安装mock;<br>
2）mock.js中写模拟数据<br>
3）gulpfile.js中引入mock.js<br>
并加入以下代码：<br>
 browserSync.init({<br>
        server: "./src/",<br>
        middleware: mock.data()<br>
    });
