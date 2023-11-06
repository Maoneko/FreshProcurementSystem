<template>
    <div>
        <div class="header">
            <div class="open">
                <span v-if="!isCollapse" class="el-icon-s-fold" @click="changeMenu"></span>
                <span v-if="isCollapse" class="el-icon-s-unfold" @click="changeMenu"></span>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ['isCollapse'],
    methods: {
        changeMenu(){
            this.$emit('changeShow')
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    height: 50px;
    background-color: #1e78bf;
    color: white;
    line-height: 50px;

    .open{
        font-size: 22px;
        cursor: pointer;
    }
}
</style>