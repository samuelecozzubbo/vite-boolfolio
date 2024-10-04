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
            types:[],
            technologies:[],
          }
        },
        methods:{
          getApi(apiUrl,type='projects'){
            this.isLoading = true;
            axios.get(apiUrl)
            .then(result=>{
              console.log(result.data);
              if(type== 'projects'){
                this.projects = result.data.results.data;
                this.isLoading = false;
                //paginator
                this.paginatorData.current_page = result.data.results.current_page;
                this.paginatorData.links = result.data.results.links;
                console.log(this.projects);
              }else{
                this[type]=result.data;
              }
              
              
            })
            .catch(error=>{
              console.error('Errore durante la chiamata API:',error);
            });
          }
        },
        mounted(){
          this.getApi('http://127.0.0.1:8000/api','projects');
          this.getApi('http://127.0.0.1:8000/api/types','types');
          this.getApi('http://127.0.0.1:8000/api/technologies','technologies');

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
              <router-link  :to="{name: 'projectdetail', params:{slug: project.slug}}">
                <h5>{{ project.title }}</h5>
              </router-link>
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
              <li v-for="type in types" :key="type.id">
                {{ type.name }}
              </li>

            </ul>
          </div>
          <div class="technologies box">
            <ul>Tecnologie
              <li v-for="technology in technologies" :key="technology.id">
                {{ technology.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
a{
  color: white;
  text-decoration: none;
  &:hover{
    color: aqua;
  }
}
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

.attributes{
  display: flex;
  gap: 10px;
    .box{
      padding: 10px;
      border-radius: 5px;
      border: 1px solid white;
      margin-bottom: 10px;
}
}


</style>
