<template>
  <div class="box-shadown tutor-info">
    <h2>Thông Tin Chi Tiết</h2>

    <b-row class="content">
      <b-col xs="12" sm="12" md="6">
        <div>
            <h2>Giới thiệu</h2>
            <b-form-textarea
              id="textarea"
              v-model="introduce"
              placeholder="Nhập giới thiệu về bạn"
              rows="3"
              max-rows="6"
            ></b-form-textarea> 
        </div>
        <div class="space"/>
        <div> 
          <h2>Trường đại học</h2>
          <InputInfoBox title="Trường đại học">
          <input  v-model="university.name"  class="input" placeholder="Nhập tên trường đại học"/>
          </InputInfoBox>
          <InputInfoBox title="Khoa">
          <input  v-model="university.major" class="input"  placeholder="Nhập tên khoa" />
          </InputInfoBox>
          <InputInfoBox  title="Năm nhập học">
          <input class="input" v-model="university.date_admission"  placeholder="Nhập năm nhập học" />
          </InputInfoBox>
        </div>
        <div> 
          <h2>Trường trung học phổ thông</h2>
          <InputInfoBox title="Trường trung học phổ thông">
          <input v-model="hsh.name" class="input" placeholder="Nhập tên trường trung học phổ thông"/>
          </InputInfoBox>
          <InputInfoBox title="Năm tốt nghiệp">
          <input v-model="hsh.date_graduation" class="input"  placeholder="Nhập năm tốt nghiệp" />
          </InputInfoBox> 
        </div>

        <div>
            <h2>Khác</h2>
            <b-form-textarea
              id="textarea"
              v-model="other"
              placeholder="Nội dung khác mà bạn muốn thông tin thêm..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
            <br>
        </div>

      </b-col>
       <b-col xs="12" sm="12" md="6">
        <div>
          <h2>Giải thưởng</h2>
          <InputInfoBox  v-for="item in prize" :key="item.name"  :title="item.name"  :size="14">
          <span style="font-size:12px">{{item.desc}}</span>
          </InputInfoBox>
          <b-button  @click="openModalAddPrize" class="small-button"  variant="outline-success" > <b-icon icon="plus"></b-icon> Thêm giải thưởng </b-button> 
        </div>
        <div class="space"/>
         <div>
          <h2>Chứng chỉ/Băng cấp</h2>
          <InputInfoBox  v-for="item in certs" :key="item.name"  :title="item.name" :size="14">
          <span style="font-size:12px">{{item.desc}}</span>
          </InputInfoBox>
          <b-button @click="openModalAddCert" class="small-button"  variant="outline-success" > <b-icon icon="plus"></b-icon> Thêm chứng chỉ </b-button> 
        </div>
        <div class="space"/>
        <div>
          <h2>Kỹ năng</h2>
          <InputInfoBox  v-for="item in skills" :key="item.name"  :title="item.name" :size="14">
          <span style="font-size:12px">{{item.rate}} star(s)</span>
          </InputInfoBox>
          <b-button @click="openModalAddSkill" class="small-button"  variant="outline-success" > <b-icon icon="plus"></b-icon> Thêm kỹ năng </b-button> 
        </div>
      </b-col> 
    </b-row>
    <br/>
    <div style="margin-left: -5px">
        <b-col xs="12" md="12">
           
          <b-button 
          @click="submitUpdate"
            class="btn-action"
            variant="success"
            >Lưu thông tin</b-button
          > 
        </b-col>
      </div>
      <ModalAddSkill  @submit="submitAddSkill($event)" ref="modal_skill"/>
      <ModalAddCert :type="this.addType" @submit="submitAddCert($event)" ref="modal_cert"/>
  </div>
</template>
 
<script>
import ModalAddSkill  from "../Modal/ModalAddSkill.vue";
import ModalAddCert  from "../Modal/ModalAddCert.vue";
import InputInfoBox from "./InputInfoBox.vue";
import { createNamespacedHelpers } from "vuex";
import i18next from "@/common/i18n"

const { mapState, mapActions } = createNamespacedHelpers("profile");
export default {
  name: "TutorInfo",
  data() {
    return {
      hasTutorInfo: false,
      introduce:"",
      hsh : {name:"THPT Việt Nam - Ba Lan",date_graduation: "2018"},
      university : {name:"Học viện kỹ thuật mật mã",date_admission: "2023",major:"Công nghệ thông tin"},
      other:"đẹp trai",
      skills:[],
      certs:[],
      prize:[],
      addType:0
    };
  },
  components: {
    InputInfoBox,
    ModalAddSkill,
    ModalAddCert
  },
  mounted() {

    this.getInfo("60c9bdf3b84e25040481b85b")

  },
  computed: {
    ...mapState(
        {
            "loading":"isUpdateTutorLoading",
            "errorMessage":"updateTutorMessage",
            "isError": "isUpdateTotalError",
            "tutorData":"getTutorData"
        }), 
  },
  methods: {
    submitUpdate(){ 
      let data = {
        skill: this.skills,
        prize: this.prize,
        certificate: this.certs,
        hight_school: this.hsh,
        university: this.university,
        other: this.other,
        introduce: this.introduce
      }
      this.updateInfo(data)
    },
    openModalAddPrize() {
      this.addType = 0
      this.$refs.modal_cert.showModal()
    },
    openModalAddCert() {
      this.addType = 1
      this.$refs.modal_cert.showModal()
    },
    openModalAddSkill(){
      this.addType = -1
      this.$refs.modal_skill.showModal()
    },
    submitAddCert(e){
      var arrays = []
      if ( e.type == 0 ){
       arrays = this.prize || []
      } else  if ( e.type == 1 ){
       arrays = this.certs || []
      }

      arrays.push(e)

      if ( e.type == 0 ){
        this.prize = arrays
      } else  if ( e.type == 1 ){
        this.certs  = arrays
      }
      
    },
    submitAddSkill(e){
      if (this.skills == null){
        this.skills = []
      }
      this.skills.push(e)
    },
    ...mapActions({
      'getInfo': "actionGetTutorInfo",
      'updateInfo': "actionUpdateTutor"
    }),
  },
  watch: {
     isError(val){
       if (!val){
         return
       }

       let messsage = this.errorMessage
        if (Array.isArray(this.errorMessage)){
          messsage = this.errorMessage.join(", ")
        }
        this.$swal("",i18next.t(messsage))
     },
     tutorData(val){
       if (val == null){
         return
       }
       this.introduce = val.introduce
        this.other = val.other
        this.hsh = val.hight_school
        this.university = val.university
        this.certs = val.certificate || []
        this.skills = val.skill || []
        this.prize = val.prize || [] 
       

     }
  },
};
</script>

 
<style scoped>
 

.tutor-info {
  padding: 20px; 

}

.tutor-info hr {
  margin: 5px 0px;
}
.tutor-info h2 {
  font-size: 16px;
  color: #333333;
  font-weight: bold;
  padding-bottom: 5px;
}

.tutor-info .content h2 {
color: #666666;
 font-size: 14px;
}

.tutor-info .input {
  outline: none;
  border: none;
  background: transparent;
  color: #888888;
  width:100%;
}


.tutor-info .small-button {
  padding-top:5px !important;
   padding-bottom:5px !important;
   font-size: 12px;
}

.space {
  padding:5px
}
.btn-action {
  margin: 5px;
  display: inline-block;
}
 
</style>

