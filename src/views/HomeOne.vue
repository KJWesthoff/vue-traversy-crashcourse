<template>
 
    <AddTask  v-show="showAddTask" @add-task="addTask"></AddTask>
    <TasksOne @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />

</template>

<script>
import TasksOne from '../components/TasksOne'
import AddTask from '../components/AddTask.vue'


export default {
    name: 'HomeOne',
    props: {
      showAddTask:Boolean,
    },
    components: {
        TasksOne,
        AddTask,
    },
    data() {
        return {
      tasks: [],
      }  
    },
    methods: {


    async addTask(task) {
      //console.log("add task fired with ", task)
      const res = await fetch("api/tasks", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },

    async deleteTask(id) {
      if (confirm("Are you sure?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        })

        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('error deleting task')
      }
    },

    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      
      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
      
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updateTask)

      })
      const data = await res.json()
      this.tasks = this.tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task)
    },


    async fetchTasks() {
      const res = await fetch('api/tasks')
      const data = await res.json()

      return data

    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)
      const data = await res.json()

      return data

    }

  },

  async created() {
    this.tasks = await this.fetchTasks()
  }
    
}

</script>