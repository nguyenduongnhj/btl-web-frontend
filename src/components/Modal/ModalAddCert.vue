<template>
  <b-modal
    :hideFooter="true"
    :hideHeader="true"
    centered
    id="modal-2"
    title="BootstrapVue"
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        label="Tên"
        label-for="name-input"
        invalid-feedback="Bạn cần nhận tên"
        :state="nameState"
      >
        <b-form-input
          id="name-input"
          v-model="name"
          :state="nameState"
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group
        label="Thời gian"
        label-for="name-input" 
      >
        <b-form-input
          id="name-input"
          v-model="desc"
        ></b-form-input>
      </b-form-group>
      <br/>
      <div style="float: right">
        <b-button @click="hideModal" variant="default">Đóng</b-button>
        <b-button type="submit" variant="success"> Lưu </b-button>
      </div>
    </form>
  </b-modal>
</template>

<script>
export default {
  name: "ModalAddCert",
  data() {
    return {
      name: "",
      desc: "Năm 2021",
      rate: 1,
      nameState: null,
    };
  },
  props:["type"],
  components: {},
  methods: {
    showModal() {
      this.$root.$emit("bv::show::modal", "modal-2", "#btnShow");
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-2", "#btnShow");
    },
    toggleModal() {
      this.$root.$emit("bv::toggle::modal", "modal-2", "#btnToggle");
    },
    handleSubmit() {
      if (this.name == "") {
        this.nameState = false;
        return;
      }

      this.$emit("submit", { type: this.type, name: this.name, desc: this.desc }); 
      this.desc= "Năm 2021",
      this.nameState = null; 
      this.name = "";
      this.rate = 1;
      this.hideModal()
    },
  },
};
</script>

<style scoped>
</style>