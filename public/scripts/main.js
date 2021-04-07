import DefaultComponent from './components/TheDefaultComponent.js';
import SongComponent from './components/TheSongComponent.js';
import MovieComponent from './components/TheMovieComponent.js';
import ShowComponent from './components/TheShowComponent.js';


const router = new VueRouter({
    routes: [
        { path: '/', name: 'root', component: DefaultComponent},
        { path: '/song', name: 'song', component: SongComponent},
        { path: '/movie', name: 'movie', component: MovieComponent},
        { path: '/show', name: 'show', component: ShowComponent}

    ]
});

(() => {
    const vm = new Vue({
        data: {
        },

        created: function() {
            
        },

        methods: {
        },

        components: {
            

        },

        router

    }).$mount("#app");
})();