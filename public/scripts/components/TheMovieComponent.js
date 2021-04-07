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

            <div class="moviediv">

            <h2 id="movietitle">Jaws (1975)</h2>

                <video controls>
                    <source src="video/JawsTrailer.mp4" type="video/mp4">
                    <track label="English" kind="subtitles" srclang="en" src="captions/jaws.vtt">
                    Your browser does not support the video tag.
                </video>

            <h3 id="moviedirect">Directed by: Steven Spielberg</h3>
            <h3 id="moviestar">Starring: Roy Scheider, Richard Dreyfuss, Robert Shaw, and Lorraine Gary</h3>
            <p id="movieplot">During a beach party at dusk on Amity Island, a young woman, Chrissie Watkins, goes skinny dipping in the ocean. While treading water, she is violently pulled under. The next day, her partial remains are found on shore. The medical examiner's conclusion that the death was due to a shark attack leads police chief Martin Brody to close the beaches. Mayor Larry Vaughn persuades him to reverse his decision, fearing that the town's summer economy will be ruined and points out that the town has never had trouble with sharks. The coroner tentatively concurs with the mayor's theory that Chrissie was killed in a boating accident. Brody reluctantly accepts their conclusion until the shark kills a young boy, Alex Kintner, in full view of a crowded beach. A bounty is placed on the shark, causing an amateur shark-hunting frenzy, and local professional shark fisherman Quint offers to catch and kill it for $10,000. Meanwhile, consulting oceanographer Matt Hooper examines Chrissie's remains, and confirms her death was caused by a shark—an unusually large one.</p>

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