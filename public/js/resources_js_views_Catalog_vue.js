(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Catalog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_post_footer_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/post-footer-edit.svg */ "./resources/js/assets/images/post-footer-edit.svg");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      editIcon: _assets_images_post_footer_edit_svg__WEBPACK_IMPORTED_MODULE_1__.default,
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
      selectCategoryShow: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["getCategories", "getAuthors", "getBooks"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(["fetchCategories", "createCategory", "editCategory", "deleteCategory", "fetchAuthors", "createAuthor", "editAuthor", "deleteAuthor", "createBookCover", "createBook", "fetchBooks", "updateBook", "removeBook"])), {}, {
    searchOfName: function searchOfName() {
      var _this = this;

      var booksNameList = [];
      this.getBooks.forEach(function (book) {
        booksNameList.push(book.name);
      });

      function filterItems(query) {
        return booksNameList.filter(function (el) {
          return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
      }

      var resultSearsh = filterItems(this.searchBookName);
      this.getBooks.forEach(function (book) {
        resultSearsh.indexOf(book.name);
        console.log(_this.getBooks);
      });
    },
    uploadBookCover: function uploadBookCover(e) {
      this.bookCover = e.target.files[0];
      this.bookFormCover = URL.createObjectURL(this.bookCover);
    },
    makeBook: function makeBook() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var book;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                book = {
                  bookName: _this2.bookName,
                  bookDescr: _this2.bookDescr,
                  authors: _this2.authors,
                  categories: _this2.categories,
                  bookCover: _this2.bookCover
                };

                _this2.createBook(book);

                _context.next = 4;
                return "";

              case 4:
                _this2.bookName = _context.sent;
                _context.next = 7;
                return "";

              case 7:
                _this2.bookDescr = _context.sent;
                _context.next = 10;
                return "";

              case 10:
                _this2.authors = _context.sent;
                _context.next = 13;
                return "";

              case 13:
                _this2.categories = _context.sent;
                _context.next = 16;
                return "";

              case 16:
                _this2.bookCover = _context.sent;
                _context.next = 19;
                return "";

              case 19:
                _this2.bookFormCover = _context.sent;

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    switchEditBook: function switchEditBook(objectBook) {
      objectBook.isEditMode = !objectBook.isEditMode;
    },
    saveEditBook: function saveEditBook(objectBook) {
      this.updateBook(objectBook);
    },
    deleteBook: function deleteBook(objectBook) {
      this.removeBook(objectBook);
    },
    logout: function logout() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.$store.dispatch("logout");

              case 2:
                _this3.$router.push("/login?message=logout");

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    switchSelectBook: function switchSelectBook() {
      this.selectBookShow = !this.selectBookShow;
    },
    switchSelectCategory: function switchSelectCategory() {
      this.selectCategoryShow = !this.selectCategoryShow;
    },
    makeCategory: function makeCategory() {
      var categoryName = JSON.stringify(this.createCategoryName);
      this.createCategory(categoryName);
      this.createCategoryName = "";
    },
    editCategoryModeSwitch: function editCategoryModeSwitch(objectCategory) {
      objectCategory.isEditMode = !objectCategory.isEditMode;
    },
    saveEditCategory: function saveEditCategory(objectCategory) {
      this.editCategory(objectCategory);
      objectCategory.isEditMode = !objectCategory.isEditMode;
    },
    removeCategory: function removeCategory(objectCategory) {
      this.deleteCategory(objectCategory);
    },
    switchSelectAuthor: function switchSelectAuthor() {
      this.selectAuthorShow = !this.selectAuthorShow;
    },
    makeAuthor: function makeAuthor() {
      var authorName = JSON.stringify(this.createAuthorName);
      this.createAuthor(authorName);
      this.createAuthorName = "";
    },
    editAuthorModeSwitch: function editAuthorModeSwitch(objectAuthor) {
      objectAuthor.isEditMode = !objectAuthor.isEditMode;
    },
    saveEditAuthor: function saveEditAuthor(objectAuthor) {
      this.editAuthor(objectAuthor);
      objectAuthor.isEditMode = !objectAuthor.isEditMode;
    },
    removeAuthor: function removeAuthor(objectAuthor) {
      this.deleteAuthor(objectAuthor);
    }
  }),
  mounted: function mounted() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.get("/getUser").then(function (response) {
                return _this4.user = response.data;
              });

            case 2:
              _this4.fetchCategories();

              _this4.fetchAuthors();

              _this4.fetchBooks();

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*[data-v-41cd806c],\n*[data-v-41cd806c]::after,\n*[data-v-41cd806c]::before {\n  box-sizing: border-box;\n}\n.container[data-v-41cd806c] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.header[data-v-41cd806c] {\n  display: flex;\n  flex-direction: column;\n}\n.header__top[data-v-41cd806c] {\n  background-color: #908372;\n  display: flex;\n  height: 70px;\n  width: 100%;\n}\n.header__top__search[data-v-41cd806c] {\n  display: flex;\n  justify-content: center;\n  width: 70%;\n}\n.header__top__search input[data-v-41cd806c] {\n  min-width: 170px;\n  width: 25%;\n  height: 70%;\n  margin: auto 10px;\n}\n.header__top__search-create-icon-box[data-v-41cd806c] {\n  width: 30px;\n  height: 30px;\n  margin: auto;\n}\n.header__top__search-create-icon[data-v-41cd806c] {\n  position: relative;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  margin: auto;\n}\n.header__top__search-create-icon[data-v-41cd806c]:hover {\n  background-color: blanchedalmond;\n}\n.header__top__search-create-icon[data-v-41cd806c]::after {\n  position: absolute;\n  top: 15px;\n  content: \"\";\n  width: 30px;\n  height: 1px;\n  background-color: black;\n}\n.header__top__search-create-icon[data-v-41cd806c]::before {\n  position: absolute;\n  top: 15px;\n  content: \"\";\n  transform: rotate(90deg);\n  width: 30px;\n  height: 1px;\n  background-color: black;\n}\n.header__top__auth[data-v-41cd806c] {\n  margin: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30%;\n}\n.header__top__auth-reg[data-v-41cd806c] {\n  padding: 0 5px;\n  height: 40px;\n  width: 150px;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n  justify-content: center;\n  text-align: center;\n  background-color: #B49578;\n  color: white;\n  margin: 5px;\n}\n.header__top__auth-reg[data-v-41cd806c]:hover {\n  border: 1px solid white;\n}\n.header__top__auth-logout[data-v-41cd806c] {\n  background-color: #B49578;\n  text-decoration: none;\n  cursor: pointer;\n  color: white;\n  display: flex;\n  align-items: center;\n  width: 70px;\n  justify-content: center;\n  height: 100%;\n}\n.header__createBook[data-v-41cd806c] {\n  background-color: #ECE9E0;\n  border: 2px solid #B49578;\n  padding: 20px;\n  position: absolute;\n  z-index: 99999;\n  top: 70px;\n}\n.header__createBook__book-form[data-v-41cd806c] {\n  display: flex;\n  width: 500px;\n  border: 1px solid #B49578;\n  height: 700px;\n  margin: 15px auto;\n}\n.header__createBook__book-cover[data-v-41cd806c] {\n  position: relative;\n  padding: 15px 0px 15px 15px;\n  height: 100%;\n  width: 60%;\n}\n.header__createBook__book-image[data-v-41cd806c] {\n  position: absolute;\n  padding: 15px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.header__createBook__book-selectImage[data-v-41cd806c] {\n  display: none;\n}\n.header__createBook__book-selectImage-label[data-v-41cd806c] {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  margin: 10px;\n}\n.header__createBook__book-selectImage-label[data-v-41cd806c]::after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 0;\n  background-color: black;\n  width: 30px;\n  height: 1px;\n}\n.header__createBook__book-selectImage-label[data-v-41cd806c]::before {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 0;\n  transform: rotate(90deg);\n  background-color: black;\n  width: 30px;\n  height: 1px;\n}\n.header__createBook__book-group[data-v-41cd806c] {\n  position: relative;\n  padding: 15px 0;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n}\n.header__createBook__book-group div[data-v-41cd806c] {\n  text-align: center;\n}\n.header__createBook-edit[data-v-41cd806c] {\n  position: absolute;\n  width: 25px !important;\n  height: 25px !important;\n  background-color: #B49578;\n  top: 0;\n  right: 5px;\n  margin: 7px;\n}\n.header__createBook-save[data-v-41cd806c] {\n  position: absolute !important;\n  background-color: #B49578 !important;\n  display: flex;\n  justify-content: center;\n  right: 40px;\n  border: 1px solid white;\n  top: 0;\n  width: 25px !important;\n  height: 25px !important;\n}\n.header__createBook-delete[data-v-41cd806c] {\n  position: absolute !important;\n  right: 80px;\n  top: 0;\n  background-color: #B49578;\n}\n.header__createBook__book-name[data-v-41cd806c] {\n  height: 8% !important;\n  margin: 5px auto !important;\n  border: 1px solid #B49578 !important;\n  width: 90% !important;\n  padding: 5px !important;\n}\n.header__createBook__book-author[data-v-41cd806c] {\n  width: 90% !important;\n  margin: 5px auto !important;\n}\n.header__createBook__book-category[data-v-41cd806c] {\n  width: 90% !important;\n  margin: 5px auto !important;\n}\n.header__createBook__book-descr[data-v-41cd806c] {\n  height: 61%;\n  width: 90%;\n  margin: 8px auto auto auto;\n  padding: 5px;\n  border: 1px solid #B49578;\n  resize: none;\n}\n.header__createBook__book-submit[data-v-41cd806c] {\n  width: 90%;\n  margin: 5px auto auto auto;\n  border: 1px solid #B49578;\n  outline: none;\n  background-color: white;\n}\n.header__createBook__book-submit[data-v-41cd806c]:hover {\n  background-color: #908371;\n}\n.header__selectAuthors[data-v-41cd806c] {\n  margin-top: 20px;\n  position: absolute;\n  z-index: 99999;\n}\n.header__selectAuthor-box[data-v-41cd806c] {\n  background-color: #ECE9E0;\n}\n.header__selectAuthor-items[data-v-41cd806c] {\n  list-style: none;\n  border: 1px solid #EAB67C;\n  padding: 0;\n  margin: 0;\n}\n.header__selectAuthor-item[data-v-41cd806c] {\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #B49578;\n  margin: 5px;\n  padding: 5px;\n  border: 1px solid #EAB67C;\n}\n.header__selectAuthor__item-name[data-v-41cd806c] {\n  color: white !important;\n  margin-right: 8px;\n}\n.header__selectAuthor__item-edit[data-v-41cd806c] {\n  cursor: pointer;\n  margin: 2px;\n  width: 16px;\n  height: 16px;\n}\n.header__selectAuthor__item-edit-save[data-v-41cd806c] {\n  position: relative;\n  cursor: pointer;\n  margin: 2px;\n  width: 16px;\n  height: 16px;\n}\n.header__selectAuthor__item-edit-save[data-v-41cd806c]::after {\n  content: \"\";\n  position: absolute;\n  transform: rotate(113deg);\n  background-color: white;\n  bottom: 8px;\n  left: 6px;\n  width: 16px;\n  height: 1px;\n}\n.header__selectAuthor__item-edit-save[data-v-41cd806c]::before {\n  content: \"\";\n  position: absolute;\n  transform: rotate(245deg);\n  background-color: white;\n  bottom: 5px;\n  left: 4px;\n  width: 10px;\n  height: 1px;\n}\n.header__selectAuthor__item-delete[data-v-41cd806c] {\n  position: relative;\n  cursor: pointer;\n  margin: 2px;\n  width: 16px;\n  height: 16px;\n}\n.header__selectAuthor__item-delete[data-v-41cd806c]::after {\n  content: \"\";\n  position: absolute;\n  transform: rotate(135deg);\n  background-color: white;\n  bottom: 8px;\n  left: 0;\n  width: 16px;\n  height: 1px;\n}\n.header__selectAuthor__item-delete[data-v-41cd806c]::before {\n  content: \"\";\n  position: absolute;\n  transform: rotate(45deg);\n  background-color: white;\n  bottom: 8px;\n  left: 0;\n  width: 16px;\n  height: 1px;\n}\n.header__selectAuthor-createForm[data-v-41cd806c] {\n  display: flex;\n  justify-content: center;\n}\n.header__selectAuthor__createForm-group[data-v-41cd806c] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.header__selectAuthor__createForm-input[data-v-41cd806c] {\n  width: 90% !important;\n  margin: auto 5px;\n  border: 1px solid #B49578;\n}\n.header__selectAuthor__createForm-submit[data-v-41cd806c] {\n  color: white;\n  margin: 7px;\n  background-color: #EAB67C;\n  border: 1px solid #B49578;\n  outline: none;\n}\n.header__main[data-v-41cd806c] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/images/post-footer-edit.svg":
/*!*********************************************************!*\
  !*** ./resources/js/assets/images/post-footer-edit.svg ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/post-footer-edit.svg?40dcf8b4ac38a0a1eb99734f59177d94");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_0_id_41cd806c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_0_id_41cd806c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_0_id_41cd806c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/Catalog.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Catalog.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Catalog_vue_vue_type_template_id_41cd806c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Catalog.vue?vue&type=template&id=41cd806c&scoped=true& */ "./resources/js/views/Catalog.vue?vue&type=template&id=41cd806c&scoped=true&");
/* harmony import */ var _Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalog.vue?vue&type=script&lang=js& */ "./resources/js/views/Catalog.vue?vue&type=script&lang=js&");
/* harmony import */ var _Catalog_vue_vue_type_style_index_0_id_41cd806c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss& */ "./resources/js/views/Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Catalog_vue_vue_type_template_id_41cd806c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Catalog_vue_vue_type_template_id_41cd806c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "41cd806c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Catalog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Catalog.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Catalog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_0_id_41cd806c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=style&index=0&id=41cd806c&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/views/Catalog.vue?vue&type=template&id=41cd806c&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Catalog.vue?vue&type=template&id=41cd806c&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_template_id_41cd806c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_template_id_41cd806c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_template_id_41cd806c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Catalog.vue?vue&type=template&id=41cd806c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=template&id=41cd806c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=template&id=41cd806c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Catalog.vue?vue&type=template&id=41cd806c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "header" }, [
    _c("div", { staticClass: "header__top" }, [
      _c("div", { staticClass: "header__top__search" }, [
        _c("div", { staticClass: "header__top__search-create-icon-box" }, [
          _vm.user.role_id === 2
            ? _c("div", {
                staticClass: "header__top__search-create-icon",
                on: { click: _vm.switchSelectCategory }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.selectCategoryShow
            ? _c("div", { staticClass: "header__selectAuthors" }, [
                _c("div", { staticClass: "header__selectAuthor-box" }, [
                  _c(
                    "ul",
                    { staticClass: "header__selectAuthor-items" },
                    [
                      _vm._l(_vm.getCategories, function(
                        objectCategory,
                        categoryKey
                      ) {
                        return _c(
                          "li",
                          {
                            key: categoryKey,
                            staticClass: "header__selectAuthor-item"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: objectCategory.name,
                                  expression: "objectCategory.name"
                                }
                              ],
                              staticClass: "header__selectAuthor__item-name",
                              attrs: {
                                disabled: objectCategory.isEditMode,
                                type: "text"
                              },
                              domProps: { value: objectCategory.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    objectCategory,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "header__selectAuthor__item-edit",
                              attrs: { src: _vm.editIcon },
                              on: {
                                click: function($event) {
                                  return _vm.editCategoryModeSwitch(
                                    objectCategory
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "header__selectAuthor__item-edit-save",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.saveEditCategory(objectCategory)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "header__selectAuthor__item-delete",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.removeCategory(objectCategory)
                                }
                              }
                            })
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          staticClass: "header__selectAuthor-createForm",
                          attrs: { action: "" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.makeCategory.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.createCategoryName,
                                expression: "createCategoryName"
                              }
                            ],
                            staticClass:
                              "header__selectAuthor__createForm-input",
                            attrs: {
                              placeholder: "Имя категории...",
                              type: "text"
                            },
                            domProps: { value: _vm.createCategoryName },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.createCategoryName = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(0)
                        ]
                      )
                    ],
                    2
                  )
                ])
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "header__top__search-category",
          attrs: { placeholder: "категория" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "header__top__search-create-icon-box" }, [
          _vm.user.role_id === 2
            ? _c("div", {
                staticClass: "header__top__search-create-icon",
                on: { click: _vm.switchSelectAuthor }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.selectAuthorShow
            ? _c("div", { staticClass: "header__selectAuthors" }, [
                _c("div", { staticClass: "header__selectAuthor-box" }, [
                  _c(
                    "ul",
                    { staticClass: "header__selectAuthor-items" },
                    [
                      _vm._l(_vm.getAuthors, function(objectAuthor, authorKey) {
                        return _c(
                          "li",
                          {
                            key: authorKey,
                            staticClass: "header__selectAuthor-item"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: objectAuthor.name,
                                  expression: "objectAuthor.name"
                                }
                              ],
                              staticClass: "header__selectAuthor__item-name",
                              attrs: {
                                disabled: objectAuthor.isEditMode,
                                type: "text"
                              },
                              domProps: { value: objectAuthor.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    objectAuthor,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "header__selectAuthor__item-edit",
                              attrs: { src: _vm.editIcon },
                              on: {
                                click: function($event) {
                                  return _vm.editAuthorModeSwitch(objectAuthor)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "header__selectAuthor__item-edit-save",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.saveEditAuthor(objectAuthor)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "header__selectAuthor__item-delete",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.removeAuthor(objectAuthor)
                                }
                              }
                            })
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          staticClass: "header__selectAuthor-createForm",
                          attrs: { action: "" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.makeAuthor.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.createAuthorName,
                                expression: "createAuthorName"
                              }
                            ],
                            staticClass:
                              "header__selectAuthor__createForm-input",
                            attrs: {
                              placeholder: "Имя автора...",
                              type: "text"
                            },
                            domProps: { value: _vm.createAuthorName },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.createAuthorName = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(1)
                        ]
                      )
                    ],
                    2
                  )
                ])
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "header__top__search-author",
          attrs: { placeholder: "автор" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "header__top__search-create-icon-box" }, [
          _vm.user.role_id === 1 || 2
            ? _c("div", {
                staticClass: "header__top__search-create-icon",
                on: { click: _vm.switchSelectBook }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.selectBookShow === true
            ? _c("div", { staticClass: "header__createBook" }, [
                _c(
                  "form",
                  {
                    staticClass: "header__createBook__book-form",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.makeBook.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "header__createBook__book-cover" },
                      [
                        _c("img", {
                          staticClass: "header__createBook__book-image",
                          attrs: { src: _vm.bookFormCover }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "header__createBook__book-selectImage",
                          attrs: { id: "headerBookSelectImage", type: "file" },
                          on: { change: _vm.uploadBookCover }
                        }),
                        _vm._v(" "),
                        _c("label", {
                          staticClass:
                            "header__createBook__book-selectImage-label",
                          attrs: { for: "headerBookSelectImage" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "header__createBook__book-group" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.bookName,
                              expression: "bookName"
                            }
                          ],
                          staticClass: "header__createBook__book-name",
                          attrs: { placeholder: "Название" },
                          domProps: { value: _vm.bookName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.bookName = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "header__createBook__book-author" },
                          [
                            _c("v-select", {
                              attrs: {
                                items: _vm.getAuthors,
                                "item-text": "name",
                                "item-value": "id",
                                attach: "",
                                chips: "",
                                label: "Авторы",
                                multiple: ""
                              },
                              model: {
                                value: _vm.authors,
                                callback: function($$v) {
                                  _vm.authors = $$v
                                },
                                expression: "authors"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "header__createBook__book-category" },
                          [
                            _c("v-select", {
                              attrs: {
                                items: _vm.getCategories,
                                "item-text": "name",
                                "item-value": "id",
                                attach: "",
                                chips: "",
                                label: "Категории",
                                multiple: ""
                              },
                              model: {
                                value: _vm.categories,
                                callback: function($$v) {
                                  _vm.categories = $$v
                                },
                                expression: "categories"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.bookDescr,
                              expression: "bookDescr"
                            }
                          ],
                          staticClass: "header__createBook__book-descr",
                          attrs: { placeholder: "Описание" },
                          domProps: { value: _vm.bookDescr },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.bookDescr = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "header__createBook__book-submit",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("\n                создать\n              ")]
                        )
                      ]
                    )
                  ]
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.searchBookName,
              expression: "searchBookName"
            }
          ],
          staticClass: "header__top__search-book",
          attrs: { placeholder: "книга" },
          domProps: { value: _vm.searchBookName },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchBookName = $event.target.value
              },
              _vm.searchOfName
            ]
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header__top__auth" },
        [
          _vm.user == ""
            ? _c(
                "router-link",
                {
                  staticClass: "header__top__auth-reg",
                  attrs: { to: "/login" }
                },
                [_vm._v("Авторизация")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.user == ""
            ? _c(
                "router-link",
                {
                  staticClass: "header__top__auth-reg",
                  attrs: { to: "/register" }
                },
                [_vm._v("Регистрация")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.user
            ? _c(
                "a",
                {
                  staticClass: "header__top__auth-logout",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.logout.apply(null, arguments)
                    }
                  }
                },
                [_vm._v("Выйти")]
              )
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "header__main" },
        _vm._l(_vm.getBooks, function(objectBook, keyBook) {
          return _c(
            "form",
            {
              key: keyBook,
              staticClass: "header__createBook__book-form",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.makeBook.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "header__createBook__book-cover" }, [
                _c("img", {
                  staticClass: "header__createBook__book-image",
                  attrs: { src: objectBook.path }
                }),
                _vm._v(" "),
                objectBook.user_id == _vm.user.id
                  ? _c("input", {
                      staticClass: "header__createBook__book-selectImage",
                      attrs: { id: "headerBookSelectImage", type: "file" },
                      on: { change: _vm.uploadBookCover }
                    })
                  : _vm._e(),
                _vm._v(" "),
                objectBook.user_id == _vm.user.id
                  ? _c("label", {
                      staticClass: "header__createBook__book-selectImage-label",
                      attrs: { for: "headerBookSelectImage" }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "header__createBook__book-group" }, [
                _c("img", {
                  staticClass:
                    "header__selectAuthor__item-edit header__createBook-edit",
                  attrs: { src: _vm.editIcon },
                  on: {
                    click: function($event) {
                      return _vm.switchEditBook(objectBook)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "\n              header__selectAuthor__item-edit-save header__createBook-save\n            ",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.saveEditBook(objectBook)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "\n              header__selectAuthor__item-delete header__createBook-delete\n            ",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.deleteBook(objectBook)
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: objectBook.name,
                      expression: "objectBook.name"
                    }
                  ],
                  staticClass: "header__createBook__book-name",
                  attrs: {
                    disabled: objectBook.isEditMode,
                    placeholder: "Название"
                  },
                  domProps: { value: objectBook.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(objectBook, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "header__createBook__book-author" },
                  [
                    _c("v-select", {
                      attrs: {
                        disabled: objectBook.isEditMode,
                        items: _vm.getAuthors,
                        "item-text": "name",
                        "item-value": "id",
                        attach: "",
                        chips: "",
                        label: "Авторы",
                        multiple: ""
                      },
                      model: {
                        value: objectBook.authors,
                        callback: function($$v) {
                          _vm.$set(objectBook, "authors", $$v)
                        },
                        expression: "objectBook.authors"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "header__createBook__book-category" },
                  [
                    _c("v-select", {
                      attrs: {
                        disabled: objectBook.isEditMode,
                        items: _vm.getCategories,
                        "item-text": "name",
                        "item-value": "id",
                        attach: "",
                        chips: "",
                        label: "Категории",
                        multiple: ""
                      },
                      model: {
                        value: objectBook.categories,
                        callback: function($$v) {
                          _vm.$set(objectBook, "categories", $$v)
                        },
                        expression: "objectBook.categories"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: objectBook.description,
                      expression: "objectBook.description"
                    }
                  ],
                  staticClass: "header__createBook__book-descr",
                  attrs: {
                    disabled: objectBook.isEditMode,
                    placeholder: "Описание"
                  },
                  domProps: { value: objectBook.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(objectBook, "description", $event.target.value)
                    }
                  }
                })
              ])
            ]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "header__selectAuthor__createForm-group" },
      [
        _c(
          "button",
          {
            staticClass: "header__selectAuthor__createForm-submit",
            attrs: { type: "submit" }
          },
          [_vm._v("\n                    создать\n                  ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "header__selectAuthor__createForm-group" },
      [
        _c(
          "button",
          {
            staticClass: "header__selectAuthor__createForm-submit",
            attrs: { type: "submit" }
          },
          [_vm._v("\n                    создать\n                  ")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);