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

const email = ref('')
const senha = ref('')
const erro = ref('')

const router = useRouter()

function entrar() {if (!email.value || !senha.value) {
    erro.value = 'Preencha todos os campos'
    return
  }

  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null')

  if (!usuario) {
    erro.value = 'Nenhuma conta cadastrada'
    return
  }

  if (email.value === usuario.email && senha.value === usuario.senha) {
    erro.value = ''
    router.push('/home')
  } else {
    erro.value = 'Email ou senha inválidos'
  }
}
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding fundo">

      <div class="box">

        <h1>📚 App Livros</h1>

        <IonInput
          label="Email"
          label-placement="floating"
          v-model="email"
        />

        <IonInput
          type="password"
          label="Senha"
          label-placement="floating"
          v-model="senha"
        />

        <IonButton expand="block" @click="entrar">
          Entrar
        </IonButton>

        <IonText color="danger" v-if="erro">
          <p>{{ erro }}</p>
        </IonText>

        <IonButton fill="clear" @click="router.push('/recuperar')">
          Esqueci a senha
        </IonButton>

        <IonButton fill="clear" @click="router.push('/cadastro')">
          Criar conta
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
  margin-top: 100px;
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