<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="indigo--text">Crie uma mesa</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateTable">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
            <v-text-field name="title" label="Título" id="title" v-model="title" required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-radio-group v-model="radioGroup">
                <v-radio
                  label="Online"
                  value="online"
                ></v-radio>
                <v-radio
                  label="Presencial"
                  value="presencial"
                ></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
            <v-text-field :disabled="isOnline" name="city" label="Cidade" id="city" v-model="city" :required="!isOnline"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
            <v-text-field :disabled="isOnline" name="state" label="Estado" id="state" v-model="state" :required="!isOnline"></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
            <v-text-field name="system" label="Sistema" id="system" v-model="system" required></v-text-field>
            </v-flex>
          </v-layout>

            <v-layout row>
              <v-flex sm6 offset-sm3>
                <v-flex xs12 sm6>
                  <v-checkbox label="Domingo" v-model="days" value="Domingo"></v-checkbox>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-checkbox label="Segunda" v-model="days" value="Segunda"></v-checkbox>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-checkbox label="Terça" v-model="days" value="Terça"></v-checkbox>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-checkbox label="Quarta" v-model="days" value="Quarta"></v-checkbox>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-checkbox label="Quinta" v-model="days" value="Quinta"></v-checkbox>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-checkbox label="Sexta" v-model="days" value="Sexta"></v-checkbox>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-checkbox label="Sábado" v-model="days" value="Sábado"></v-checkbox>
                </v-flex>
              </v-flex>
            </v-layout>

          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="imageUrl"
              label="Link da imagem"
              id="image-url"
              v-model="imageUrl"
              required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" width="100%">
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-flex xs12 sm3>
              <v-text-field name="minPlayers" label="Mínimo de Jogadores" id="minPlayers" v-model="minPlayers" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm3>
              <v-text-field name="maxPlayers" label="Máximo de Jogadores" id="maxPlayers" v-model="maxPlayers" required></v-text-field>
              </v-flex>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex sm6 offset-sm3>
              <v-text-field multi-line name="description" label="Descrição" id="description" v-model="description" required></v-text-field>
            </v-flex>
          </v-layout>

          {{ days }}

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn dark class="indigo" :disabled="!formIsValid" type="submit">Criar Mesa</v-btn>
            </v-flex>
          </v-layout>

        </form>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        city: '',
        state: '',
        system: '',
        imageUrl: '',
        description: '',
        minPlayers: '',
        maxPlayers: '',
        days: [],
        radioGroup: 'online'
      }
    },
    computed: {
      formIsValid () {
        return (this.title !== '' && this.system !== '' && this.radioGroup === 'online' &&
        this.imageUrl !== '' && this.description !== '' && this.minPlayers !== '' && this.maxPlayers !== '') ||
        (this.title !== '' && this.system !== '' && this.radioGroup === 'presencial' && this.city !== '' && this.state !== '' &&
        this.imageUrl !== '' && this.description !== '' && this.minPlayers !== '' && this.maxPlayers !== '')
      },
      isOnline () {
        return this.radioGroup === 'online'
      }
    },
    methods: {
      onCreateTable () {
        if(!this.formIsValid) {
          return
        }
        const tableData = {
          title: this.title,
          system: this.system,
          radioGroup: this.radioGroup,
          city: this.city,
          state: this.state,
          imageUrl: this.imageUrl,
          days: this.days,
          description: this.description,
          minPlayers: this.minPlayers,
          maxPlayers: this.maxPlayers,
          date: new Date(),
          id: 'hajdkhj213kfladjlas'

        }
        this.$store.dispatch('createTable', tableData)
        this.$router.push('/tables/' + tableData.id)
      }
    }
  }
</script>
