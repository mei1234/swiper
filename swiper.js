// components/swiper/swiper.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        banners: {
            type: Array,//轮播图数组
        },
        height: Number, //轮播图的高度
        show: Boolean, //是否显示点
    },

    /**
     * 组件的初始数据
     */
    data: {
        swiper: {
            indicatorDots: false,
            interval: 3000, //自动切换时间间隔
            duration: 1500, //滑动动画时长
            current: 0, //当前所在滑块的 index
            currentTab: 0,
        },
    },
    pageLifetimes: {
        show: function() {
            console.log('show', this.data.show);

        },
        hide: function() {
            // 页面被隐藏
        },
        resize: function(size) {
            // 页面尺寸变化
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        swiperChange: function(e) {
            this.setData({
                'swiper.current': e.detail.current
            });
        },
        swiperChangeTab: function(e) {
            this.setData({
                'swiper.currentTab': e.detail.current
            });
        },
    }
})