<script>
import axios from 'axios';
    export default {
        name: 'Projects',
        data(){
          return{
            projects:[],
            isLoading:true,
            paginatorData:{
                    current_page:1,
                    links:[],
                },
          }
        },
        methods:{
          getApi(apiUrl){
            this.isLoading = true;
            axios.get(apiUrl)
            .then(result=>{
              this.projects = result.data.results.data;
              this.isLoading = false;
              //paginator
              this.paginatorData.current_page = result.data.results.current_page;
              this.paginatorData.links = result.data.results.links;
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
      <div class="wrapper" v-else>
        <div class="project-lis">
          <ul>
          <li v-for="project in projects" :key="project.id">
            <h5>{{ project.title }}</h5>
          </li>
          </ul>
          <div class="paginator">
              <button
                  v-for="(link,index) in paginatorData.links"
                  :key="index"
                  v-html="link.label"
                  :disabled="link.active || !link.url"
                  @click="getApi(link.url)">
              </button>  
          </div>
        </div>
        <div class="attributes">
          <div class="types box">
            <ul>Tipi
              <li>tipo</li>
            </ul>
          </div>
          <div class="technologies box">
            <ul>Tecnologie
              <li>
                tecnologie
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
.paginator{
    display: flex;
    justify-content: flex-start;

    button{
        margin: 0 2px;
    }
}

.wrapper{
  display: flex;
}

.box{
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  margin-bottom: 10px;
}
</style>
