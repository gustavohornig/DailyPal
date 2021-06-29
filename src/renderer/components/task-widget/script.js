import draggable from 'vuedraggable'
import createTaskForm from './create-task-form'

export default {
  components: {
    draggable,
    createTaskForm
  },
  data () {
    return {
      taskList: [
        {
          "name": "Eren",
          "image": "https://i.pinimg.com/originals/20/95/05/2095055292562afcc22ca06b392b3e0e.png",
        },
        {
          "name": "Levi",
          "image": "https://i.pinimg.com/736x/88/5d/db/885ddba2251e3cf293a5555e5904ec14.jpg",
        },
      ]
    }
  },
  methods: {
    updateTaskList(value) {
      console.log('VALOR- >', value)
      this.taskList.push(value)
    }
  }
}
