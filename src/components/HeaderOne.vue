<template>
 <header>
    <h1>{{ title }}</h1>
    <ButtonOne v-show="homePage" 
        @btn-click="$emit('toggle-add-task')"
        :text="showAddTask ? 'Close' : 'Add Task' "
        :color="showAddTask ? 'red' : 'green'"  
    />
 </header>
</template>

<script>
    
import ButtonOne from './ButtonOne'
    export default {
        name: 'HeaderOne',
        props: {
            title: String,  
            showAddTask: Boolean,    
        },
        components: {
            ButtonOne
        },
        computed: {
            homePage() {
                if(this.$route.path === '/') {
                   return true 
                } else {
                return false
                }
            } 
        },
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }


</style>