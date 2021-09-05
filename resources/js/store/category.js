export default {
    state: {
        categories: [],
    },
    mutations: {
        SET_CATEGORIES(state, data) {
            state.categories = data;
        }
    },
    actions: {
        async fetchCategories({ commit }) {
            let response = await axios.get("/getCategory");
            let categories = response.data;
            categories.forEach(category => {
                category.isEditMode = true;
            });
            commit('SET_CATEGORIES', categories);
        },
        async createCategory({ dispatch }, categoryName) {
            let response = await axios.post("/createCategory", { categoryName });
            dispatch('fetchCategories');
        },
        async editCategory({ dispatch }, objectCategory) {
            let response = await axios.post("/updateCategory", { category: objectCategory })
            dispatch('fetchCategories');
        },
        async deleteCategory({ dispatch }, objectCategory) {
            let response = await axios.post("/deleteCategory", { category: objectCategory })
            dispatch('fetchCategories');
        },
    },
    getters: {
        getCategories: state => state.categories,
    },
}