<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top__search">
        <div class="header__top__search-create-icon-box">
          <div
            @click="switchSelectCategory"
            v-if="user.role_id === 2"
            class="header__top__search-create-icon"
          ></div>
          <div v-if="selectCategoryShow" class="header__selectAuthors">
            <div class="header__selectAuthor-box">
              <ul class="header__selectAuthor-items">
                <li
                  v-for="(objectCategory, categoryKey) in getCategories"
                  :key="categoryKey"
                  class="header__selectAuthor-item"
                >
                  <input
                    :disabled="objectCategory.isEditMode"
                    v-model="objectCategory.name"
                    type="text"
                    class="header__selectAuthor__item-name"
                  />
                  <img
                    @click="editCategoryModeSwitch(objectCategory)"
                    :src="editIcon"
                    class="header__selectAuthor__item-edit"
                  />
                  <div
                    @click.prevent="saveEditCategory(objectCategory)"
                    class="header__selectAuthor__item-edit-save"
                  ></div>
                  <div
                    @click.prevent="removeCategory(objectCategory)"
                    class="header__selectAuthor__item-delete"
                  ></div>
                </li>
                <form
                  @submit.prevent="makeCategory"
                  class="header__selectAuthor-createForm"
                  action=""
                >
                  <input
                    v-model="createCategoryName"
                    placeholder="Имя категории..."
                    class="header__selectAuthor__createForm-input"
                    type="text"
                  />
                  <div class="header__selectAuthor__createForm-group">
                    <button
                      type="submit"
                      class="header__selectAuthor__createForm-submit"
                    >
                      создать
                    </button>
                  </div>
                </form>
              </ul>
            </div>
          </div>
        </div>
        <input placeholder="категория" class="header__top__search-category" />
        <div class="header__top__search-create-icon-box">
          <div
            @click="switchSelectAuthor"
            v-if="user.role_id === 2"
            class="header__top__search-create-icon"
          ></div>
          <div v-if="selectAuthorShow" class="header__selectAuthors">
            <div class="header__selectAuthor-box">
              <ul class="header__selectAuthor-items">
                <li
                  v-for="(objectAuthor, authorKey) in getAuthors"
                  :key="authorKey"
                  class="header__selectAuthor-item"
                >
                  <input
                    :disabled="objectAuthor.isEditMode"
                    v-model="objectAuthor.name"
                    type="text"
                    class="header__selectAuthor__item-name"
                  />
                  <img
                    @click="editAuthorModeSwitch(objectAuthor)"
                    :src="editIcon"
                    class="header__selectAuthor__item-edit"
                  />
                  <div
                    @click.prevent="saveEditAuthor(objectAuthor)"
                    class="header__selectAuthor__item-edit-save"
                  ></div>
                  <div
                    @click.prevent="removeAuthor(objectAuthor)"
                    class="header__selectAuthor__item-delete"
                  ></div>
                </li>
                <form
                  @submit.prevent="makeAuthor"
                  class="header__selectAuthor-createForm"
                  action=""
                >
                  <input
                    v-model="createAuthorName"
                    placeholder="Имя автора..."
                    class="header__selectAuthor__createForm-input"
                    type="text"
                  />
                  <div class="header__selectAuthor__createForm-group">
                    <button
                      type="submit"
                      class="header__selectAuthor__createForm-submit"
                    >
                      создать
                    </button>
                  </div>
                </form>
              </ul>
            </div>
          </div>
        </div>
        <input placeholder="автор" class="header__top__search-author" />
        <div class="header__top__search-create-icon-box">
          <div
            @click="switchSelectBook"
            v-if="user.role_id === 1 || 2"
            class="header__top__search-create-icon"
          ></div>
          <div v-if="selectBookShow === true" class="header__createBook">
            <form
              @submit.prevent="makeBook"
              class="header__createBook__book-form"
            >
              <div class="header__createBook__book-cover">
                <img
                  :src="bookFormCover"
                  class="header__createBook__book-image"
                />
                <input
                  @change="uploadBookCover"
                  id="headerBookSelectImage"
                  type="file"
                  class="header__createBook__book-selectImage"
                />
                <label
                  for="headerBookSelectImage"
                  class="header__createBook__book-selectImage-label"
                ></label>
              </div>
              <div class="header__createBook__book-group">
                <input
                  v-model="bookName"
                  class="header__createBook__book-name"
                  placeholder="Название"
                />
                <div class="header__createBook__book-author">
                  <v-select
                    v-model="authors"
                    :items="getAuthors"
                    item-text="name"
                    item-value="id"
                    attach
                    chips
                    label="Авторы"
                    multiple
                  ></v-select>
                </div>
                <div class="header__createBook__book-category">
                  <v-select
                    v-model="categories"
                    :items="getCategories"
                    item-text="name"
                    item-value="id"
                    attach
                    chips
                    label="Категории"
                    multiple
                  ></v-select>
                </div>
                <textarea
                  v-model="bookDescr"
                  class="header__createBook__book-descr"
                  placeholder="Описание"
                />
                <button type="submit" class="header__createBook__book-submit">
                  создать
                </button>
              </div>
            </form>
          </div>
        </div>
        <input
          v-model="searchBookName"
          @input="searchOfName"
          placeholder="книга"
          class="header__top__search-book"
        />
      </div>
      <div class="header__top__auth">
        <router-link v-if="user == ''" to="/login" class="header__top__auth-reg"
          >Авторизация</router-link
        >
        <router-link
          v-if="user == ''"
          to="/register"
          class="header__top__auth-reg"
          >Регистрация</router-link
        >
        <a v-if="user" class="header__top__auth-logout" @click.prevent="logout"
          >Выйти</a
        >
      </div>
    </div>
    <div class="container">
      <div class="header__main">
        <form
          v-for="(objectBook, keyBook) in getBooks"
          :key="keyBook"
          @submit.prevent="makeBook"
          class="header__createBook__book-form"
        >
          <div class="header__createBook__book-cover">
            <img
              :src="objectBook.path"
              class="header__createBook__book-image"
            />
            <input
              v-if="objectBook.user_id == user.id"
              @change="uploadBookCover"
              id="headerBookSelectImage"
              type="file"
              class="header__createBook__book-selectImage"
            />
            <label
              v-if="objectBook.user_id == user.id"
              for="headerBookSelectImage"
              class="header__createBook__book-selectImage-label"
            ></label>
          </div>
          <div class="header__createBook__book-group">
            <img
              @click="switchEditBook(objectBook)"
              :src="editIcon"
              class="header__selectAuthor__item-edit header__createBook-edit"
            />
            <div
              @click.prevent="saveEditBook(objectBook)"
              class="
                header__selectAuthor__item-edit-save header__createBook-save
              "
            ></div>
            <div
              @click.prevent="deleteBook(objectBook)"
              class="
                header__selectAuthor__item-delete header__createBook-delete
              "
            ></div>
            <input
              v-model="objectBook.name"
              :disabled="objectBook.isEditMode"
              class="header__createBook__book-name"
              placeholder="Название"
            />
            <div class="header__createBook__book-author">
              <v-select
                :disabled="objectBook.isEditMode"
                v-model="objectBook.authors"
                :items="getAuthors"
                item-text="name"
                item-value="id"
                attach
                chips
                label="Авторы"
                multiple
              ></v-select>
            </div>
            <div class="header__createBook__book-category">
              <v-select
                :disabled="objectBook.isEditMode"
                v-model="objectBook.categories"
                :items="getCategories"
                item-text="name"
                item-value="id"
                attach
                chips
                label="Категории"
                multiple
              ></v-select>
            </div>
            <textarea
              v-model="objectBook.description"
              :disabled="objectBook.isEditMode"
              class="header__createBook__book-descr"
              placeholder="Описание"
            />
          </div>
        </form>
      </div>
      <!-- <div class="header__pagination">
        <div class="header__pagination-group">
          <ul class="header__pagination-list">
            <li><a href="#">1</a></li>
          </ul>
        </div>
      </div> -->
    </div>
  </header>
</template>

<script>
import editIcon from "../assets/images/post-footer-edit.svg";
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    editIcon: editIcon,
    searchBookName: "",
    user: {},
    authors: [],
    categories: [],
    authorsSelect: [],
    bookFormCover: "",
    bookCover: "",
    bookName: "",
    editModeBookName: true,
    bookDescr: "",
    editModeBookDescr: true,
    createCategoryName: "",
    createAuthorName: "",
    editCategoryName: false,
    editCategoryShow: false,
    selectBookShow: false,
    selectAuthorShow: false,
    selectCategoryShow: false,
  }),
  computed: {
    ...mapGetters(["getCategories", "getAuthors", "getBooks"]),
  },
  methods: {
    ...mapActions([
      "fetchCategories",
      "createCategory",
      "editCategory",
      "deleteCategory",
      "fetchAuthors",
      "createAuthor",
      "editAuthor",
      "deleteAuthor",
      "createBookCover",
      "createBook",
      "fetchBooks",
      "updateBook",
      "removeBook",
    ]),
    searchOfName() {
      var booksNameList = [];
      this.getBooks.forEach((book) => {
        booksNameList.push(book.name);
      });
      function filterItems(query) {
        return booksNameList.filter(function (el) {
          return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
      }
      let resultSearsh = filterItems(this.searchBookName);

      this.getBooks.forEach((book) => {
        resultSearsh.indexOf(book.name);

        console.log(this.getBooks);
      });
    },

    uploadBookCover(e) {
      this.bookCover = e.target.files[0];

      this.bookFormCover = URL.createObjectURL(this.bookCover);
    },

    async makeBook() {
      let book = {
        bookName: this.bookName,
        bookDescr: this.bookDescr,
        authors: this.authors,
        categories: this.categories,
        bookCover: this.bookCover,
      };
      this.createBook(book);

      this.bookName = await "";
      this.bookDescr = await "";
      this.authors = await "";
      this.categories = await "";
      this.bookCover = await "";
      this.bookFormCover = await "";
    },

    switchEditBook(objectBook) {
      objectBook.isEditMode = !objectBook.isEditMode;
    },

    saveEditBook(objectBook) {
      this.updateBook(objectBook);
    },

    deleteBook(objectBook) {
      this.removeBook(objectBook);
    },

    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    },
    switchSelectBook() {
      this.selectBookShow = !this.selectBookShow;
    },

    switchSelectCategory() {
      this.selectCategoryShow = !this.selectCategoryShow;
    },
    makeCategory() {
      let categoryName = JSON.stringify(this.createCategoryName);
      this.createCategory(categoryName);
      this.createCategoryName = "";
    },
    editCategoryModeSwitch(objectCategory) {
      objectCategory.isEditMode = !objectCategory.isEditMode;
    },
    saveEditCategory(objectCategory) {
      this.editCategory(objectCategory);
      objectCategory.isEditMode = !objectCategory.isEditMode;
    },
    removeCategory(objectCategory) {
      this.deleteCategory(objectCategory);
    },
    switchSelectAuthor() {
      this.selectAuthorShow = !this.selectAuthorShow;
    },
    makeAuthor() {
      let authorName = JSON.stringify(this.createAuthorName);
      this.createAuthor(authorName);
      this.createAuthorName = "";
    },
    editAuthorModeSwitch(objectAuthor) {
      objectAuthor.isEditMode = !objectAuthor.isEditMode;
    },
    saveEditAuthor(objectAuthor) {
      this.editAuthor(objectAuthor);
      objectAuthor.isEditMode = !objectAuthor.isEditMode;
    },
    removeAuthor(objectAuthor) {
      this.deleteAuthor(objectAuthor);
    },
  },
  async mounted() {
    await axios.get("/getUser").then((response) => (this.user = response.data));
    this.fetchCategories();
    this.fetchAuthors();
    this.fetchBooks();
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_style-catalog";
</style>