<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="indigo--text">{{ table.title }}</h3>
          </v-card-title>
          <v-card-media
            :src="table.imageURL"
            height="200px"
            contain
          ></v-card-media>
          <v-card-text>
            <div>
              Nome: {{ table.title }}
            </div>
            <div>
              Sistema: {{ table.system }}
            </div>
            <div>
              Localidade: {{ table.city }}/{{ table.state }}
            </div>
            <div>
              Dias: <span v-for="day in table.days">{{ day }} </span>
            </div>
            <div>
              Quantidade de jogadores: {{ table.minPlayers }}-{{ table.maxPlayers }}
            </div>
            <div>
              Criador(a): {{ table.creator.name }}
            </div>
            <div>
              Contato: {{ table.creator.email }} / {{ table.creator.phone }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn>Adicionar à lista</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      table () {
        return this.$store.getters.loadedTable(this.id)
      }
    }
  }
</script>
