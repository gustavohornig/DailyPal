export default {
  data () {
    return {
      addNewTask: false,
      title: '',
      imageUrl: '',
    }
  },
  methods: {
    emitNewTask() {
      let newTask = {
        "name" : this.title,
        "image" : this.imageUrl
      }
      this.$emit('new-task-created', newTask)
      this.title = ''
      this.imageUrl = ''
      this.addNewTask = false
    }
  }
}
