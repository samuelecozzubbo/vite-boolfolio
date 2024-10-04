<script>
import axios from 'axios';
    export default{
        name:'Contacts',
        data(){
            return{
                name:'',
                email:'',
                message:'',
                errors:{
                    name:[],
                    email:[],
                    message:[],
                },
            }
        },
        methods:{
            sendForm(){
                //console.log(this.name);
                this.sending=true;

                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }

                //chiamo con axios api store
                axios.post('http://127.0.0.1:8000/api/send-email', data)
                    .then(res=>{
                      console.log(res.data);
                      if(!res.data.success){
                            this.errors = res.data.errors;
                        }else{
                            this.sent = true;
                            this.errors = {
                                name:[],
                                email:[],
                                message:[],
                            }
                        }
                    })
                    .catch( er => {
                      console.log(er.message);
                      
                    })
              
            },
        }
}
</script>

<template>
  <div class="container">
    <h1>Contacts</h1>
    <form  action="#" @submit.prevent="sendForm">
        <div>
            <label for="name">Nome</label>
            <input v-model="name" type="text" id="name" placeholder="Nome">
            <p class="error">{{ errors.name?.toString() }}</p>
        </div>
        <div>
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" placeholder="Email">
            <p class="error">{{ errors.email?.toString() }}</p>
        </div>
        <div>
            <label for="message">Messaggio</label>
            <textarea v-model="message" id="message" rows="10" placeholder="Messaggio"></textarea>
            <p class="error">{{ errors.message?.toString() }}</p>
        </div>
        <button type="submit">Invia</button>
        <button type="reset">Annulla</button>
    </form>
  </div>
</template>

<style>
label{
    display: block;
    margin-bottom: 5px;
    margin-top: 10px
}
input,textarea{
    width: 80%;
    border-radius: 5px;
    padding: 10px
}
.error{
    color: yellow;
    font-size: .9rem;
    margin: 0;
}
</style>
