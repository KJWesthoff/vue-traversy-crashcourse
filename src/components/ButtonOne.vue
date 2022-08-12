<template>
    <button @click="onClick()" :style="{background:props.color}" class="btn">{{ props.text }}</button>

</template>


<script setup>
import { defineEmits, defineProps } from 'vue';
const props = defineProps({
    text:String,
    color:String,
})

const emits = defineEmits(['btn-click'])

const onClick = () => {
    emits('btn-click')
}

</script>




<!-- <script>
    export default {
        name:'ButtonOne',
        props: {
            text:String,
            color:String,
        },
        methods:{
            onClick() {
                this.$emit('btn-click')
            }
        }
    
    }



</script> -->