<template>
  <header class="header">
    <div class="container">
      <div class="menu col-4">
        <div class="menu-group">
          <h1 class="menu__title">Авторизация</h1>
          <form @submit.prevent="submitHandler" class="menu__form__register">
            <div class="menu__input-group">
              <input
                placeholder="Эл. адрес"
                type="text"
                class="menu__register-input"
                v-model.trim="email"
                :class="{
                  invalid:
                    ($v.email.$dirty && !$v.email.required) ||
                    ($v.email.$dirty && !$v.email.email),
                }"
              />
              <div class="menu__invalid-items">
                <div
                  class="menu__invalid-item"
                  v-if="$v.email.$dirty && !$v.email.required"
                >
                  Поле Email не должно быть пустым
                </div>
                <div
                  class="menu__invalid-item"
                  v-else-if="$v.email.$dirty && !$v.email.email"
                >
                  Введите корретный Email
                </div>
              </div>
            </div>
            <div class="menu__input-group">
              <input
                placeholder="Пароль"
                type="password"
                class="menu__register-input"
                v-model.trim="password"
              />
              <div class="menu__invalid-items">
                <div
                  class="menu__invalid-item"
                  v-if="$v.password.$dirty && !$v.password.required"
                >
                  Введите пароль
                </div>
                <div
                  class="menu__invalid-item"
                  v-else-if="$v.password.$dirty && !$v.password.minLength"
                >
                  Пароль должен быть
                  {{ $v.password.$params.minLength }} символов. Сейчас он
                  {{ password.length }}
                </div>
              </div>
            </div>
            <label class="menu__submit-button-label" for="formSumbitButton">
              Авторизироваться
            </label>
            <input
              id="formSumbitButton"
              class="menu__submit-button"
              type="submit"
            />
          </form>
          <router-link
            to="/register"
            class="btn-flip menu__button-route"
            data-back="перейти"
            data-front="Регистрация"
          ></router-link>
          <router-link
            to="/"
            class="btn-flip menu__button-route"
            data-back="перейти"
            data-front="К каталогу"
          ></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "login",
  data: () => ({
    sessionId: {},
    email: "",
    password: "",
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await axios.post("/login", {
          email: formData.email,
          password: formData.password,
        });
        this.$router.push(`/`);
      } catch (e) {}
    },
  },
};
</script>

<style scoped  lang="scss">
@import "../assets/scss/style-authentication";
</style>