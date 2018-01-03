
const intentService = function (store) {
  return new Promise((resolve, reject) => {
    const actions = intents.map(i => {
      return new Promise((resolve, reject) => {
        store.dispatch('intent/addItem', i)
          .then(resolve)
          .catch(reject)
      })
    })

    Promise.all(actions).then(resolve).catch(reject)
  })
}

const entityService = function (store) {
  return new Promise((resolve, reject) => {
    const actions = entities.map(i => {
      return new Promise((resolve, reject) => {
        store.dispatch('entities/addItem', i)
          .then(resolve)
          .catch(reject)
      })
    })

    Promise.all(actions).then(resolve).catch(reject)
  })
}

const intents = [
  {
    id: 1,
    title: 'video.download'
  },
  {
    id: 2,
    title: 'video.play'
  },
  {
    id: 3,
    title: 'video.search'
  },
  {
    id: 4,
    title: 'video_controls.stop'
  },
  {
    id: 5,
    title: 'video_controls.play'
  },
  {
    id: 6,
    title: 'video_controls.rewind'
  },
  {
    id: 7,
    title: 'video_controls.forward'
  },
  {
    id: 8,
    title: 'video_controls.repeat'
  },
  {
    id: 9,
    title: 'video_controls.resume'
  }
]
const entities = [
  {
    id: 1,
    title: 'video.download'
  },
  {
    id: 2,
    title: 'video.play'
  },
  {
    id: 3,
    title: 'video.search'
  },
  {
    id: 4,
    title: 'video_controls.stop'
  },
  {
    id: 5,
    title: 'video_controls.play'
  },
  {
    id: 6,
    title: 'video_controls.rewind'
  },
  {
    id: 7,
    title: 'video_controls.forward'
  },
  {
    id: 8,
    title: 'video_controls.repeat'
  },
  {
    id: 9,
    title: 'video_controls.resume'
  }
]

export default {
  intentService,
  entityService
}
