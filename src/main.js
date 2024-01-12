import { createApp } from 'vue'
import App from './App.vue'
import AddUniversity from "@/components/AddUniversity.vue";

import './index.css'

const app = createApp(App);

app.mount('#app');
app.component('add-university', AddUniversity);