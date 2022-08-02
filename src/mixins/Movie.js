export default {
    methods: {
        setSelectedMovie (movie) {
            this.$store.commit('setSelectedMovie', movie);
        }
    }
}