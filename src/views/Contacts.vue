<script>
    export default{
        name:'Contacts',
        data(){
            return{
                name:'',
                email:'',
                message:'',
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
            
        </div>
        <div>
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" placeholder="Email">
            
        </div>
        <div>
            <label for="message">Messaggio</label>
            <textarea v-model="message" id="message" rows="10" placeholder="Messaggio"></textarea>
            
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
</style>
