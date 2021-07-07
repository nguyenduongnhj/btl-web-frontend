<template>
  <b-modal :hideFooter="true" centered id="modal-1" title="BootstrapVue">
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        label-for="name-input"
        invalid-feedback="Bạn cần nhận tên kỹ năng"
        :state="nameState"
      >
        <b-form-input
          id="name-input"
          v-model="name"
          :state="nameState" 
        ></b-form-input>

        <fieldset class="rating">
          <input type="radio" id="star5" name="rating" value="5" />
          <label class="full" for="star5" title="Awesome - 5 stars"> </label>
          <input v-model="rate"  type="radio" id="star4half" name="rating" value="4.5" /><label
            class="half"
            for="star4half"
            title="Pretty good - 4.5 stars"
          ></label>
          <input v-model="rate" type="radio" id="star4" name="rating" value="4" /><label
            class="full"
            for="star4"
            title="Pretty good - 4 stars"
          ></label>
          <input v-model="rate" type="radio" id="star3half" name="rating" value="3.5" /><label
            class="half"
            for="star3half"
            title="Meh - 3.5 stars"
          ></label>
          <input v-model="rate" type="radio" id="star3" name="rating" value="3" /><label
            class="full"
            for="star3"
            title="Meh - 3 stars"
          ></label>
          <input type="radio" id="star2half" name="rating" value="2.5" /><label
            class="half"
            for="star2half"
            title="Kinda bad - 2.5 stars"
          ></label>
          <input v-model="rate" type="radio" id="star2" name="rating" value="2" /><label
            class="full"
            for="star2"
            title="Kinda bad - 2 stars"
          ></label>
          <input v-model="rate" type="radio" id="star1half" name="rating" value="1.5" /><label
            class="half"
            for="star1half"
            title="Meh - 1.5 stars"
          ></label>
          <input v-model="rate" type="radio" id="star1" name="rating" value="1" /><label
            class="full"
            for="star1"
            title="Sucks big time - 1 star"
          ></label>
          <input v-model="rate" type="radio" id="starhalf" name="rating" value="0.5" /><label
            class="half"
            for="starhalf"
            title="Sucks big time - 0.5 stars"
          ></label>
          <input  v-model="rate"
            type="radio"
            class="reset-option"
            name="rating"
            value="reset"
          />
        </fieldset>
      </b-form-group>
      <div style="float: right">
        <b-button @click="hideModal" variant="default">Đóng</b-button>
        <b-button type="submit" variant="success"> Lưu </b-button>
      </div>
    </form>

    <template #modal-header>
      <div class="w-100">
        <b> Tên kỹ năng</b>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "ModalAddSkill",
  data() {
    return {
      name: "123",
      rate: 1,
      nameState:null
    };
  }, 
  components: {},
  methods: {
    showModal() {
      this.$root.$emit("bv::show::modal", "modal-1", "#btnShow");
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
    toggleModal() {
      this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
    },
    handleSubmit() {
      if (this.name == ""){
        this.nameState = false
        return
      } 
      this.nameState = null;
      this.$emit("submit",{name:this.name, rate:this.rate * 1})
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
      this.name= ""
      this.rate = 1
    },
  },
};
</script>

<style scoped>
fieldset,
label {
  margin: 0;
  padding: 0;
}

.rating > [id^="star"] {
  display: none;
}

.rating > label:before {
  margin: 5px;
  font-size: 2.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > .half:before {
  content: "\f089";
  position: absolute;
}

.rating > label {
  color: #ddd;
  float: right;
}

.rating > [id^="star"]:checked ~ label,
.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ffd700;
}

.rating > [id^="star"]:checked + label:hover,
.rating > [id^="star"]:checked ~ label:hover,
.rating > label:hover ~ [id^="star"]:checked ~ label,
.rating > [id^="star"]:checked ~ label:hover ~ label {
  color: #ffed85;
}

.reset-option {
  display: none;
}

.reset-button {
  margin: 6px 12px;
  background-color: rgb(255, 255, 255);
  text-transform: uppercase;
}

.mt-100 {
  margin-top: 100px;
}
</style>