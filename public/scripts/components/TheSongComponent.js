export default {
    name: "TheSongComponent",
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

            <div class="songdiv">
                <h2>May I Have This Dance</h2>

                <h3>Francis And The Lights</h3>

                <audio controls>
                    <source src="audio/MayIHaveThisDance.mp3" type="audio/mpeg">
                    Your browser does not support the audio tag.
                </audio>



                <h2 id="lyricstitle">Lyrics</h2>
                <p class="lyrics">
                    In the ground, we bury<br>
                    The seeds of a pear tree<br>
                    All the things we carried<br>
                    Now we're down to our bare feet<br>
                </p>

                <p class="lyrics" id="secondlyrics">
                    May I have this dance?<br>
                    To make it up to you<br>
                    Can I say something crazy?<br>
                    I love you<br>
                    Give me both your hands<br>
                    To make it up to you<br>
                    Let me spin and excite you<br>
                </p>
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