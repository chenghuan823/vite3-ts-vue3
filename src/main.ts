import { createApp } from 'vue'
import 'vant/lib/index.css'     //vant样式写在上面
import '@/assets/style.css'
import App from './App.vue'
import store from './store'     //自动引入index.ts
import router from './router'
import {Button,NavBar,Tabbar,TabbarItem,Checkbox,CheckboxGroup,Icon,Popup,Swipe, SwipeItem,List,PullRefresh,ActionBarIcon,Sticky,Search,Loading,Field,SwipeCell,Uploader,Form,ActionSheet,DatetimePicker,Picker,Toast} from 'vant'
import './utils/rem'
import {directives} from './utils/common'


const app=createApp(App)
directives(app)
app.use(Button)
app.use(NavBar)
app.use(Tabbar)
app.use(Checkbox)
app.use(CheckboxGroup)
app.use(TabbarItem)
app.use(Icon)
app.use(Popup)
app.use(Swipe)
app.use(SwipeItem)
app.use(List)
app.use(PullRefresh)
app.use(ActionBarIcon)
app.use(Sticky)
app.use(Search)
app.use(Loading)
app.use(Field)
app.use(SwipeCell)
app.use(Uploader)
app.use(Form)
app.use(ActionSheet)
app.use(DatetimePicker)
app.use(Picker)
app.use(Toast)
app.use(store)
app.use(router)
app.mount('#app')

