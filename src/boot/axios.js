// import Vue from 'vue';
import axios from 'axios';

const HTTPClient = axios.create({
    baseURL: process.env.API
});

export { HTTPClient };

// Vue.prototype.$axios = axios;
