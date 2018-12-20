<template>
    <div class="item">
        <item-header></item-header>
    </div>
</template>
<script>
import axios from 'axios'
import itemHeader from './itemHeader'
    export default{
        name:'item',
        data(){
            return{
               
            }
        },
        components:{
            itemHeader
        }
    }
</script>
<style scoped>

</style>
