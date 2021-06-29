import taskWidget from '../components/task-widget'

export default {
  components: {
    taskWidget
  },
  data () {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-card-text-outline',
          title: 'Tasks',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      title: 'DailyPal'
    }
  }
}
