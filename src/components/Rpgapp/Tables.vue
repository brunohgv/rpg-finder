<template>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 md6 offset-md3>
            <v-card color="indigo" hover class="white--text mb-2" v-for="table in tables" :key="table.id" :to="'/tables/' + table.id">
              <v-container fluid grid-list-lg>
                <v-layout row>
                <v-flex xs5>
                  <v-card-media
                    :src="table.imageURL"
                    height="150px"
                    contain
                  ></v-card-media>
                </v-flex>
                  <v-flex xs7>
                    <v-card-title>
                      <div>
                        <div class="headline">{{ table.title }}</div>
                        <div>{{ table.city }}/{{ table.state }}</div>
                        <div><span v-for="day in table.days">{{ day }} </span></div>
                        <div>{{ table.system }}</div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  export default {
    computed: {
      tables () {
        return this.$store.getters.loadedTables
      }
    }
  }
</script>
