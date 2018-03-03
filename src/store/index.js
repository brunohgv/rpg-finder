import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedTables: [
      {
        imageURL: '/static/doc-images/d&d.png',
        id: 'sjahdkjdalkksald',
        title: 'Mesa de d&d legal',
        creationDate: '2018-03-03',
        city: 'Olinda',
        state: 'PE',
        system: 'Dungeons and Dragons',
        days: [
          'Sabado'
        ],
        minPlayers: '5',
        maxPlayers: '8',
        creator: {
          name: 'Adriana',
          email: 'adriana@gmail.com',
          phone: '81998384598'
        }
      },
      {
        imageURL: '/static/doc-images/dungeonsanddragons.png',
        id: 'lkfjkdhakdajshdl',
        title: 'Mesa de d&d secundária',
        creationDate: '2018-03-02',
        city: 'Recife',
        state: 'PE',
        system: 'Dungeons and Dragons',
        days: [
          'domingo',
          'segunda'
        ],
        minPlayers: '4',
        maxPlayers: '8',
        creator: {
          name: 'Bruno',
          email: 'brunohgv2@gmail.com',
          phone: '81998384598'
        }
      },
      {
        imageURL: '/static/doc-images/dungeonsanddragons.png',
        id: 'gfsadasdasd',
        title: 'Mesa de d&d bugada',
        creationDate: '2018-03-02',
        city: 'João Pessoa',
        state: 'PB',
        system: 'Dungeons and Dragons',
        days: [
          'Terça'
        ],
        minPlayers: '4',
        maxPlayers: '8',
        creator: {
          name: 'Bruno',
          email: 'brunohgv2@gmail.com',
          phone: '81998384598'
        }
      }
    ],
    user: {
      id: 'shdlkajhd',
      savedTables: ['lkfjkdhakdajshdl']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedTables (state) {
      return state.loadedTables.sort((tableA, tableB) => {
        return tableA.creationDate > tableB.creationDate
      })
    },
    loadedTable (state) {
      return (tableId) => {
        return state.loadedTables.find((table) => {
          return table.id === tableId
        })
      }
    }
  }
})
