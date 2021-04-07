export default {
    name: "TheUserComponent",

    props: ['liveuser'],

    template: `
    <section class="col-xs-12 col-sm-6 col-md-4 mx-auto">
        <div class="card rounded" @click="navToHome()">
            <div class="card-body text-center">
                <img :src="'images/' + liveuser.user_avatar" class="rounded-circle img-fluid">
                <p>{{ liveuser.user_name }}</p>
            </div>
        </div>
</section>`,

    created: function() {

        if (this.liveuser.user_avatar == null) {
            this.liveuser.user_avatar = "temp_avatar.jpg";
        }
    },

    methods: {
        navToHome() {
            this.$router.push({ name: "home", params: { currentuser: this.liveuser}});

            window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
        }
    }
}