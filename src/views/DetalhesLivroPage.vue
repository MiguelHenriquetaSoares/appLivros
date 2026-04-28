<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue'

const route = useRoute()
const livros = [
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    descricao: 'Um dos maiores clássicos da literatura brasileira.',
    imagem: 'https://covers.openlibrary.org/b/id/8231996-L.jpg'
  },
  {
    id: 2,
    titulo: '1984',
    autor: 'George Orwell',
    descricao: 'Uma distopia sobre vigilância e controle.',
    imagem: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
  },
  {
    id: 3,
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    descricao: 'Uma história poética sobre a vida e o amor.',
    imagem: 'https://covers.openlibrary.org/b/id/10523338-L.jpg'
  },
  {
    id: 4,
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
    descricao: 'A jornada de um jovem bruxo.',
    imagem: 'https://covers.openlibrary.org/b/id/7984916-L.jpg'
  },
  {
    id: 5,
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    descricao: 'Uma épica aventura na Terra Média.',
    imagem: 'https://covers.openlibrary.org/b/id/8231856-L.jpg'
  }
]

const livro = computed(() =>
  livros.find(l => l.id == Number(route.params.id))
)
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding fundo">

      <IonCard v-if="livro">

        <img :src="livro.imagem" />

        <IonCardHeader>
          <IonCardTitle>{{ livro.titulo }}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <p><b>Autor:</b> {{ livro.autor }}</p>
          <p>{{ livro.descricao }}</p>
        </IonCardContent>

      </IonCard>

    </IonContent>
  </IonPage>
</template>

<style>
.fundo {
  --background: linear-gradient(135deg, #141e30, #243b55);
}

ion-card {
  border-radius: 20px;
}
</style>