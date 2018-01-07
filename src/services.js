
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

const queryService = function (store) {
  return new Promise((resolve, reject) => {
    const actions = queries.map(i => {
      return new Promise((resolve, reject) => {
        store.dispatch('queries/addItem', i)
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
    title: 'Laptop'
  },
  {
    id: 2,
    title: 'Mobile'
  },
  {
    id: 3,
    title: 'Television'
  },
  {
    id: 4,
    title: 'Sound Monitors'
  },
  {
    id: 5,
    title: 'Bookshelf'
  },
  {
    id: 6,
    title: 'Fridge'
  },
  {
    id: 7,
    title: 'Washing Maschine'
  }
]

const queries = [
  {
    id: 101,
    title: 'When is the next iPhone out?',
    params: [
      {
        name: 'When',
        queryName: 'date',
        extractedValue: '@data',
        referencedValue: 'yes',
        color: '#dfffaa'
      },
      {
        name: 'next',
        queryName: 'next',
        extractedValue: '@next',
        referencedValue: 'yes',
        color: '#fff8ae'
      },
      {
        name: 'iPhone',
        queryName: 'phone-model',
        extractedValue: '@phone-model',
        referencedValue: 'yes',
        color: '#fed1aa'
      }
    ]
  },
  {
    id: 102,
    title: 'Which is the best iPhone versions ever?',
    params: [
      {
        name: 'Which',
        queryName: 'which',
        extractedValue: '@which',
        referencedValue: 'yes',
        color: '#dfffaa'
      },
      {
        name: 'iPhone',
        queryName: 'phone-model',
        extractedValue: '@phone-model',
        referencedValue: 'yes',
        color: '#fed1aa'
      },
      {
        name: 'best',
        queryName: 'best',
        extractedValue: '@best',
        referencedValue: 'yes',
        color: '#fff8ae'
      }
    ]
  },
  {
    id: 103,
    title: 'How much is iPhone 7 in Singapore and Malaysia?',
    params: [
      {
        name: 'much',
        queryName: 'cost',
        extractedValue: '@cost',
        referencedValue: 'yes',
        color: '#fed1aa'
      },
      {
        name: 'iPhone 7',
        queryName: 'phone-model',
        extractedValue: '@phone-model',
        referencedValue: 'yes',
        color: '#fff8ae'
      },
      {
        name: 'Singapore',
        queryName: 'country',
        extractedValue: '@country',
        referencedValue: 'No',
        color: '#dfffaa'
      },
      {
        name: 'Malaysia',
        queryName: 'country',
        extractedValue: '@country',
        referencedValue: 'Yes',
        color: '#dfffaa'
      }
    ]
  }
]

export default {
  intentService,
  entityService,
  queryService
}
