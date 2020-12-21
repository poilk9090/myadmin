<!--  -->
<template>
<div class='myadmin-dashboard'>
    <el-row>
        <el-col :span='4' >
            <el-menu :style="{backgroundColor:'#F9F9F9'}" text-color='#fff'  active-text-color='#29DB6F' background-color='#3A3F4A'>
                <el-menu-item index='dasboard'>
                    <i class="el-icon-s-home"></i>
                    <span slot="title">系统首页</span>
                </el-menu-item>
                <!-- 产品管理开始 -->
                <el-submenu :index="">
                    <template slot="title">
                        <i class="el-icon-s-platform"></i>
                        <span>产品管理</span>
                    </template>
                    <el-menu-item v-for="(item, subIndex) in "
                        :index="subIndex + 1"
                        :key="item.key">
                            {{item.title}}
                    </el-menu-item>
                </el-submenu>
                
                <!-- 产品管理结束 -->
            </el-menu>
        </el-col>
        <el-col :span='20'></el-col>
    </el-row>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>

</style>