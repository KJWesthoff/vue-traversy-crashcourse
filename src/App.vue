<template>
  <div class="container">
    <HeaderOne @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" title="Task Tracker" />
   
    <router-view :showAddTask="showAddTask"></router-view>
    <FooterOne/>
      </div>

</template>

<script>
import HeaderOne from './components/HeaderOne'
import FooterOne from './components/FooterOne'




export default {
  name: 'App',
  components: {
    HeaderOne,
    FooterOne
   
 
},
  data() {
    return {
      
      showAddTask: false,
    }
  },

  methods: {
    toggleAddTask() {
      //console.log("toggle task firing with:", this.showAddTask)
      this.showAddTask = !this.showAddTask
    },



  async created() {
    this.tasks = await this.fetchTasks()
  }

  }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
