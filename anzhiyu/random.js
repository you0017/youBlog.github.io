var posts=["2024/09/09/1.自定义vue/","2024/09/10/2.自定义hashMap/","2024/10/28/3.基于反射，根据参数和类动态生成实例对象/","2024/10/28/4.简单的关系型数据库返回数据封装成类/","2024/09/09/5.简单的自定义java类反向生成sql表的注解及功能类/","2024/11/26/6.dubbo简单使用/","2024/12/06/7.数据生成excel表/","2024/12/06/8.excel表生成截图并添加水印/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };