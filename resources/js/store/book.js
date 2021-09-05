export default {
    state: {
        book: []
    },
    mutations: {
        SET_BOOK(state, data) {
            state.book = data;
        },
    },
    actions: {
        async fetchBooks({ commit }) {
            let response = await axios.get('/getBooks');
            let books = response.data
            books.forEach(book => {
                book.isEditMode = true;
            });
            commit('SET_BOOK', books);
        },

        async createBook({ dispatch }, book) {
            let formBook = new FormData();
            console.log(book.bookCover);
            formBook.set('bookCover', book.bookCover);
            book = JSON.stringify(book);
            formBook.append('book', book);
            let response = await axios.post('/createBook', formBook);
            dispatch('fetchBooks', response.data);
        },

        async updateBook({ dispatch }, objectBook) {
            objectBook = JSON.stringify(objectBook);
            console.log(objectBook);
            let response = await axios.post('/updateBook', { objectBook });
            dispatch('fetchBooks', response.data);
        },
        async removeBook({ dispatch }, objectBook) {
            let response = await axios.post('/deleteBook', { objectBook });
            dispatch('fetchBooks', response.data);
        },
    },
    getters: {
        getBooks: state => state.book
    }
}