export default {
    state: {
        authors: []
    },
    mutations: {
        SET_AUTHORS(state, data) {
            state.authors = data;
        }
    },
    actions: {
        async fetchAuthors({ commit }) {
            let response = await axios.get("/getAuthors");
            let authors = response.data;
            authors.forEach(author => {
                author.isEditMode = true;
            });
            commit('SET_AUTHORS', authors);
        },
        async createAuthor({ dispatch }, authorName) {
            let response = await axios.post("/createAuthor", { authorName })
            dispatch('fetchAuthors');
        },
        async editAuthor({ dispatch }, objectAuthor) {
            let response = await axios.post("/updateAuthor", { author: objectAuthor })
            dispatch('fetchAuthors');
        },
        async deleteAuthor({ dispatch }, objectAuthor) {
            let response = await axios.post("/deleteAuthor", { author: objectAuthor })
            dispatch('fetchAuthors');
        },
    },
    getters: {
        getAuthors: state => state.authors
    },
}