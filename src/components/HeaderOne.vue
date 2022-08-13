<template>
 <header>
    <h1>{{ props.title }}</h1>
    <ButtonOne v-show=homePage 
        @btn-click="$emit('toggle-add-task')"
        :text="showAddTask ? 'Close' : 'Add Task' "
        :color="showAddTask ? 'red' : 'green'"  
    />
 </header>
</template>


<script setup>
 
import { defineProps, computed } from 'vue';
import {useRoute } from 'vue-router';
import ButtonOne from './ButtonOne.vue'

const props = defineProps({
    title:String,
    showAddTask:Boolean
})

const route = useRoute()



const homePage = computed(() => {
    if(route.path === '/') {
        return true 
        } else {
        return false
        }
})
 
</script>


<!-- <script>
 
 

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
</script> -->

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }


</style>