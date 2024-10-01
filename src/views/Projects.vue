<script>
import axios from 'axios';
    export default {
        name: 'Projects',
        data(){
          return{
            projects:[],
            isLoading:true,
          }
        },
        methods:{
          getApi(apiUrl){
            this.isLoading = true;
            axios.get(apiUrl)
            .then(result=>{
              this.projects = result.data.results.data;
              this.isLoading = false;
              console.log(this.projects);
            })
            .catch(error=>{
              console.error('Errore durante la chiamata API:',error);
            });
          }
        },
        mounted(){
          this.getApi('http://127.0.0.1:8000/api');
        }
    }
    
</script>

<template>
    <h1>Progetti</h1>
    <div class="container">
      <div v-if="isLoading" class="loading">
        Caricamento
      </div>
      <div v-else>
        <ul>
          <li v-for="project in projects" :key="project.id">
            <h5>{{ project.title }}</h5>
          </li>
        </ul>
      </div>
    </div>
</template>

<style lang="scss">

</style>
