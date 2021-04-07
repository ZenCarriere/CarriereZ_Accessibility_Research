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

            <div class="showdiv">

            <h2 id="showtitle">Star Trek (1966)</h2>

                <video controls>
                    <source src="video/StarTrek.mp4" type="video/mp4">
                    <track label="English" kind="subtitles" srclang="en" src="captions/star.vtt">
                    Your browser does not support the video tag.
                </video>

            <h3 id="showstar">Starring: William Shatner, Leonard Nimoy, Nichelle Nichols, Deforest Kelley, and George Takei</h3>
            <p id="showplot">Star Trek is an American science-fiction television series created by Gene Roddenberry that follows the adventures of the starship USS Enterprise (NCC-1701) and its crew. It later acquired the retronym of Star Trek: The Original Series (TOS) to distinguish the show within the media franchise that it began.The show is set in the Milky Way galaxy, roughly during the 2260s. The ship and crew are led by Captain James T. Kirk (William Shatner), First Officer and Science Officer Spock (Leonard Nimoy), and Chief Medical Officer Leonard 'Bones' McCoy (DeForest Kelley). Shatner's voice-over introduction during each episode's opening credits stated the starship's purpose:Space: the final frontier. These are the voyages of the starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>

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