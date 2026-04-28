import { createRouter, createWebHistory } from '@ionic/vue-router'

import LoginPage from '../views/LoginPage.vue'
import CadastroPage from '../views/CadastroPage.vue'
import RecuperarSenhaPage from '../views/RecuperarSenhaPage.vue'
import HomePage from '../views/HomePage.vue'
import DetalhesLivroPage from '../views/DetalhesLivroPage.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/cadastro', component: CadastroPage },
  { path: '/recuperar', component: RecuperarSenhaPage },
  { path: '/home', component: HomePage },
  { path: '/detalhes/:id', component: DetalhesLivroPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router