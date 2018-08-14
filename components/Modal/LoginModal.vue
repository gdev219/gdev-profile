<template>
    <div class="login-modal">
      <div class="login-modal-wrapper">
        <div class="logo">
            로그인
        </div>
        <span class="cross-out" v-on:click="closeModal()"></span>
        <p>
          <input class="login-input id" v-model="email" placeholder="이메일 아이디">
        </p>
        <p>
          <input class="login-input pw" v-model="password" placeholder="비밀번호">
        </p>
        <p>
          <button class="button btn-login">로그인</button>
        </p>
        <p class="last">
          <label class="button btn-signup"><nuxt-link to="/signup" v-on:click.native="closeModal()">회원가입</nuxt-link></label>
        </p>
      </div>
    </div>  
</template>

<script>
export default {
  props: {
    flag: {
      type: Boolean
    }
  },
  data() {
    return {
      closeFlag: this.flag,
      email: "",
      password:""
    };
  },
  methods: {
    closeModal: function() {
      this.closeFlag = false;
      //2way binding
      this.$emit("update:flag", this.closeFlag);
    }
  }
};
</script>

<style lang="scss" scoped>
.login-modal {
  width: 400px;
  height: auto;
  background-color: #222222;
  color: black;
  z-index: 99999;
  margin: 0 auto;
  position: absolute;
  left: 100px;
  right: 0;
  top: 40%;
  color: white;
  transform: translateY(-50%);
  .login-modal-wrapper {
    padding: 20px;
    width: 280px;
    height: 100%;
    margin: 0 auto;
    p {
      width: 280px;
      height: 38px;
      .login-input {
        border: 1px solid rgba(0, 0, 0, 0.15);
        display: block;
        width: calc(100% -2em);
        height: 100%;
        border: 0;
        padding: 0 1em 0 1em;
      }
      .login-save-id{
        font-size: 14px;
        line-height: 14px;
        .login-save-checkbox {
          color: white;
          display: inline-block;
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }
      }
    }
    .last{
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
  }
  .btn-login {
    width: 100%;
    height: 100%;
    background-color: #e4e4e4;
    border: 0;
    padding: 0;
  }
  .btn-signup{
    font-size: 0.8em;
    float: right;
  }
  .cross-out {
    background-image: url("~assets/img/cross-out.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  .logo {
    font-size: 1.4vw;
  }
}
</style>
