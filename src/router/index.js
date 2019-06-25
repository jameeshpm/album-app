import Vue from 'vue';
import VueRouter from 'vue-router';
import Albums from '@/components/Albums';
import Album from '@/components/Album';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Albums',
            component: Albums 
        },
        {
            path: '/album/:id',
            name: 'Album',
            props: true,
            component: Album
        }
    ]
})