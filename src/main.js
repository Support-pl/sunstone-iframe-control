import { createApp } from 'vue';
import {
  Button,
  Divider,
  Col,
    Row,
  Radio, RadioButton, RadioGroup
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue';

const app = createApp(App);
app.use(Row).use(Col).use(Button).use(Divider).use(Radio).use(RadioButton).use(RadioGroup)
app.mount('#app');
