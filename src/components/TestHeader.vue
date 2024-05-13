<template> 

<button class="lg:hidden" @click="menu">Menu</button>

<div  v-if="openMenu" class="lg:hidden">
    <ul>
        <li>Home1</li>
        <li>Home1</li>
        <li>Home1</li>
        <li>Home1</li>
        <li>Home1</li>
        <li>Home1</li>
        <li>Home1</li>
        <li>Home1</li>
        <li>Home1</li>
    </ul>
</div>
    
</template>


<script>

export default{
    data(){
        return{
            openMenu:false 
        }
    },
    methods:{
        menu(){
            this.openMenu=!this.openMenu
        }
    },
}

</script>

<style scoped>

</style>