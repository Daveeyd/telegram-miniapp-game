import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BASE_URL } from './configurations/HttpConfiguration'

Vue.config.productionTip = false

Vue.prototype.$filters = {
    truncate(value: string = "", maxLength: number = 0) {
        if (value.length > maxLength) {
            return value.substring(0, maxLength) + '...';
        }
        return value;
    },
    numberFormat(value: number = 0) {
        if (Number.isInteger(value)) {
            return value.toLocaleString();
        } else {
            return value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
    },
    serverLinkFormat(link: string = "") {
        return BASE_URL + link;
    },
}

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')