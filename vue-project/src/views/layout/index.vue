<template>
    <div class="layout">
        <div class="menu">
            <Menu :isCollapse="isCollapse"></Menu>
        </div>

        <div class="content" :class="{small:isCollapse}">
            <Content @changeShow="changeShow" :isCollapse="isCollapse"></Content>
        </div>
    </div>
</template>

<script>
import Menu from './menu/index.vue'
import Content from './content/index.vue'

export default {
    data(){
        return {
            isCollapse: false
        }
    },
    methods: {
        changeShow(){
            this.isCollapse = !this.isCollapse
        }
    },
    components:{
        Menu,
        Content
    }
}

</script>

<style lang="less" scoped>
.layout{
    .menu{
        background-color: #112f50;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
    }

    .content{
        padding-left: 200px;
    }

    .small{
        padding-left: 64px;
    }
}
</style>