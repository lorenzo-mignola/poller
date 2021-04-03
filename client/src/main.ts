// import VueApolloOption from '@vue/apollo-option';
import { DefaultApolloClient } from '@vue/apollo-composable';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import apolloClient from './graphql/client';
import router from './router';
import store from './store/index';

const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
