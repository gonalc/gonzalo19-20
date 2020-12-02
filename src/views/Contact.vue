<template>
  <div class="Contact">
    <h1 class="space-title1 text-center">Contact</h1>
    <p class="space-text page-width">
      If you have any question or suggestion, just say hi trough this awesome
      contact form. I will reply ASAP. Or not.
    </p>

    <form @submit="(e) => submitForm(e)" class="page-width">
      <div class="field">
        <label class="oswald" for="name">Name</label>
        <input v-model="name" class="garamond" name="name" type="text" />
        <p v-if="errName" class="err-msg">
          How can I reply to you if you don't tell me your name?
        </p>
      </div>

      <div class="field">
        <label class="oswald" for="email">Email address</label>
        <input v-model="email" class="garamond" name="email" type="email" />
        <p v-if="errMail" class="err-msg">Email address must be valid.</p>
      </div>

      <div class="field">
        <label class="oswald" for="message">Message</label>
        <textarea
          v-model="msg"
          rows="3"
          class="garamond text-medium"
          name="message"
          type="text"
        />
        <p v-if="errMsg" class="err-msg">
          Write a bit more, so I can know what you want.
        </p>
      </div>

      <div class="submit-container">
        <input
          class="btn negative oswald text-large submit-btn"
          type="submit"
          value="Send Message"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      errName: false,
      errMail: false,
      errMsg: false,
      name: "",
      email: "",
      msg: "",
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      if (this.name === "") this.errName = true;
      if (this.email === "") this.errMail = true;
      if (this.msg.length < 10) this.errMsg = true;

      if (!this.errMsg && !this.errName && !this.errMail) {
        const formData = {
          name: this.name,
          email: this.email,
          msg: this.msg,
        };
        console.log(formData);
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/styles/gonzalo.scss";

.Contact {
  color: white;
  padding-top: 80px;
  form {
    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      input,
      textarea {
        box-sizing: border-box;
        padding: 8px;
        font-size: $text-medium;
        margin: 10px 0;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid $yellow;
        color: white;
        &:focus {
          outline: none;
        }
      }
      .err-msg {
        color: $red;
        animation: fadeIn 0.3s ease-in-out forwards;
      }
    }
    .submit-container {
      display: flex;
      justify-content: center;
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>