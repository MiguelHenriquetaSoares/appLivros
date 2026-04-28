<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonText
} from '@ionic/vue'

const nome = ref('')
const email = ref('')
const senha = ref('')
const confirmar = ref('')
const erro = ref('')

const router = useRouter()

function cadastrar() {if (!nome.value || !email.value || !senha.value || !confirmar.value) {
    erro.value = 'Preencha todos os campos'
    return
  }

  if (senha.value !== confirmar.value) {
    erro.value = 'As senhas não coincidem'
    return
  }

  // salvar no localStorage
  const usuario = {
    nome: nome.value,
    email: email.value,
    senha: senha.value
  }

  localStorage.setItem('usuario', JSON.stringify(usuario))

  alert('Conta criada!')
  router.push('/login')
}
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding fundo">

      <div class="box">

        <h1>📝 Cadastro</h1>

        <IonInput label="Nome" label-placement="floating" v-model="nome" />
        <IonInput label="Email" label-placement="floating" v-model="email" />
        <IonInput type="password" label="Senha" label-placement="floating" v-model="senha" />
        <IonInput type="password" label="Confirmar Senha" label-placement="floating" v-model="confirmar" />

        <IonButton expand="block" @click="cadastrar">
          Criar conta
        </IonButton>

        <IonText color="danger" v-if="erro">
          <p>{{ erro }}</p>
        </IonText>

        <IonButton fill="clear" @click="router.push('/login')">
          Voltar
        </IonButton>

      </div>

    </IonContent>
  </IonPage>
</template>

<style>
.fundo {
  --background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
}

.box {
  margin-top: 80px;
  padding: 20px;
  border-radius: 20px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  text-align: center;
}

h1 {
  color: white;
  margin-bottom: 20px;
}
</style>