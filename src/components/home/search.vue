<template>
    <div class="searchIt">
        <input type="text" placeholder="饿了吗搜索你想吃的东西">
    </div>
</template>
<script>
    export default{
        name:'search',
        data(){
            return{}
        }
    }
</script>
<style scoped>
    .searchIt{
        width: 100%;
        height: 38px;
        margin-left: 10px;

    }
    .searchIt input{
        width:97%;
        height:100%;
        outline: none;
        border: none;
        margin-top: 10px;
        padding-left: 20px;
    }
</style>
