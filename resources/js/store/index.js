import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import category from './category'
import author from './author'
import book from './book'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        category,
        author,
        book,
        auth
    }
})
