<script>
import axios from 'axios';
    export default{
        name:'ProjectDetail',
        data(){
            return{
                project:{
                    title:'',
                    description:'',
                    img:'',
                    image_original_name:'',
                    created_at:'',
                    type:'',
                    technologies: [],
                },
            }
    },
    methods:{
            getApi(slug){
                //console.log(slug);
                axios.get('http://127.0.0.1:8000/api/project-by-slug/' + slug)
                .then(res => {
                    //console.log(res.data);
                    if(res.data.success){
                        this.project = res.data.project;
                        console.log(this.project);
                        
                    }else{
                        console.log('ERRORE');
                        
                    }
                    
                })
                
            }
    },
    mounted(){
            //ottengo lo slug
            //qua ci sono tutte le info che arrivano
            //del componente e i parametri
            
            //console.log(this.$route.params.slug);
            const slug = this.$route.params.slug;
            this.getApi(slug);
    }
    
        
}


</script>

<template>
<h1> Dettaglio progetto: {{ project.title }}</h1>
<p>{{ project.description }}</p>
<p>{{ project.created_at }}</p>
<img :src="project.img" :alt="project.title">
</template>
<style lang="scss" scoped>
img{
    max-width: 50%
}
</style>
