export default {
    name: "TheDefaultComponent",
    template: `
        <div class="container">
            <div class="board">
                <h1 class="title">Accessibility Demo</h1>
                <p class="prompt">Select one of the logos below to access the content</p>
                <hr class="my-4">   
                <div class="images">
                    <img src="images/note.png" alt="song logo" id="note" @click="GoSong()">
                    <img src="images/Jaws.png" alt="movie logo"  id="jaws" @click="GoMovie()">
                    <img src="images/Star.png" alt="show logo"  id="star" @click="GoShow()">
                </div>        
            </div>
        </div>
     `,

     methods:{
        GoSong() {

            this.$router.push({ name: "song"});
        },

        GoMovie() {

            this.$router.push({ name: "movie"});
        },

        GoShow() {

            this.$router.push({ name: "show"});
        }
     }
}