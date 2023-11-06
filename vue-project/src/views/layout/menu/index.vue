<template>
    <div>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#112f50" text-color="#fff"
            active-text-color="#ffd04b" router :collapse="isCollapse">
            <el-menu-item>
                <span slot="title">首客生鲜采购系统</span>
            </el-menu-item>
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>

            <el-submenu index="/product">
                <template slot="title">
                    <i class="el-icon-s-cooperation"></i>
                    <span>产品管理</span>
                </template>
                <el-menu-item index="/product/list">
                    <i class="el-icon-setting"></i>
                    <span slot="title">产品列表</span>
                </el-menu-item>
                <el-menu-item index="/product/category">
                    <i class="el-icon-setting"></i>
                    <span slot="title">产品分类</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="/order">
                <template slot="title">
                    <i class="el-icon-s-cooperation"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item index="/order/orderlist">
                    <i class="el-icon-menu"></i>
                    <span slot="title">订单列表</span>
                </el-menu-item>
                <el-menu-item index="/order/collect">
                    <i class="el-icon-menu"></i>
                    <span slot="title">汇总清单</span>
                </el-menu-item>
                <el-menu-item index="/order/examine">
                    <i class="el-icon-menu"></i>
                    <span slot="title">订单审核</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="/advertise">
                <template slot="title">
                    <i class="el-icon-s-cooperation"></i>
                    <span>广告管理</span>
                </template>
                <el-menu-item index="/advertise/adlist">
                    <i class="el-icon-menu"></i>
                    <span slot="title">广告列表</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    props: ['isCollapse']
}
</script>

<style lang="less" scoped>
.el-menu {
    border-right: 0;

    /deep/ .is-active {
        background-color: #1e78bf !important;
        color: white !important;
    }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
</style>