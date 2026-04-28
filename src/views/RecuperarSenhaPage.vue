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
const mensagem = ref('')

const router = useRouter()

function recuperar() {
  if (!email.value) {
    mensagem.value = 'Digite seu email'
    return
  }

  mensagem.value = 'Email de recuperação enviado!'
}
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding fundo">

      <div class="box">

        <h1>🔑 Recuperar</h1>

        <IonInput
          label="Digite seu email"
          label-placement="floating"
          v-model="email"
        />

        <IonButton expand="block" @click="recuperar">
          Enviar
        </IonButton>

        <IonText color="success" v-if="mensagem">
          <p>{{ mensagem }}</p>
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