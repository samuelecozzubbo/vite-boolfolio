<script>
import axios from 'axios';
    export default {
        name: 'Projects',
        data(){
          return{
            projects:[],
          }
        },
        methods:{
          getApi(apiUrl){
            axios.get(apiUrl)
            .then(result=>{
              this.projects = result.data.results;
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
</template>

<style lang="scss">

</style>
