<template>
<div :key="task.id" v-for="task in tasks" >
    <TaskOne @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />

</div>
</template>

<script>
import TaskOne from './TaskOne.vue'

    export default {
        name:'TasksOne',
        props: {
            tasks:Array,
        },
        components: {
    TaskOne,
    
    },
    emits: ['delete-task', 'toggle-reminder']
    
}

</script>