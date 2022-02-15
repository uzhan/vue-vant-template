import Vue from 'vue'
// 在这里引入你所需的组件
import { Button, Skeleton, Loading as LoadingIcon, Dialog, List, Toast, Popup, Lazyload, Overlay, Icon, Tab, Tabs, Field, CellGroup, Image, Swipe, SwipeItem, PullRefresh, Cell, ActionSheet } from 'vant'

// 链式全局注册组件
Vue.use(Button).use(Skeleton).use(LoadingIcon).use(Dialog).use(List).use(Toast).use(Popup).use(Lazyload).use(Overlay).use(Icon).use(Image).use(SwipeItem).use(Swipe).use(PullRefresh).use(Cell).use(ActionSheet).use(Tab).use(Tabs).use(Field).use(CellGroup)
