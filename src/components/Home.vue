<template>
  <v-jumbotron>
   <v-container fill-height>
     <v-layout align-center>
       <v-flex>
         <h3 class="display-3">{{ title }}</h3>
         <span class="subheading">{{ text }}</span>
         <v-divider class="my-3"></v-divider>
         <v-btn v-for="btn in btns" :key="btns.text" large color="primary" class="mx-0" :to="btn.link">{{ btn.text }}</v-btn>
       </v-flex>
     </v-layout>
   </v-container>
 </v-jumbotron>
</template>

<script>
export default{
  data () {
    return {
      title: 'Quer jogar RPG?',
      text: 'Aqui você pode procurar e divulgar mesas online ou presenciais. Que tal começar agora mesmo?',
      btns: [
        {
          text: 'Procurar Mesas',
          link: '/tables'
        },
        {
          text: 'Criar Mesa',
          link: '/table/new'
        }
      ]
    }
  }
}
</script>
