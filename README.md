# swiper
微信小程序轮播图组件，可以简单控制轮播图的高，是否显示槽点

**components**  
  
在微信小程序的components文件夹中添加swiper文件夹，然后把下载到的文件放进去  
  
    
**在需要引进组件的页面**  
  
1.在需要加入组件页面的xx.json文件下加入  
    ```"usingComponents": {  
        "swiper-component": "./../../components/swiper/swiper"  
    }```    
2.在需要加入组件页面的xx.wxml文件下加入  
```<swiper-component show="{{false}}" banners="{{banners}}" height="{{305}}"></swiper-component>```   
show：true/false,//是否显示槽点  
banners：Array，//轮播图的数组，结构：banners:[{image:'xxx',...},{image:'xxx',...}];(如果结构不一样可以更改swiper.wxml循环部分)  
height:number,//轮播图显示的高度，单位rpx   
