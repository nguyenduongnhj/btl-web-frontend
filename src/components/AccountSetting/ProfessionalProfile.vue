<template>
  <div class="box-shadown tutor-info">
    <h2>Hồ sơ chuyên môn</h2>
    <div class="content">

      <b-row>
      <b-col xs ="12" md = "6">
        <h3>Bạn đang là</h3>
        <select class="form-control" v-model="position"> 
          <option>Bấm đề chọn</option>
          <option value="0">Sinh viên</option>
          <option value="1">Đang đi làm</option>
        </select>
      </b-col>
      <b-col xs ="12" md = "6">
         <h3>Hình thức dạy</h3>
         <b-button-group>
          <b-button @click="touchType('offline')" :variant="getTypeVariant('offline')" >Gặp mặt</b-button>
          <b-button  @click="touchType('online')"  :variant="getTypeVariant('online')" >Trực tuyến</b-button> 
        </b-button-group>
      </b-col>
      </b-row> 
      <b-row>
       <b-col xs ="12" md = "6"> 
          <h3> Môn học sẽ dạy</h3>
            <b-button @click="openModalSubject" class="small-button"  variant="outline-success" > <b-icon icon="plus"></b-icon> Thêm môn học </b-button> 
        </b-col>
      </b-row> 
    </div>
    <div class="space"/>
    <InputInfoBox v-for="item in subjects" :key="item.id" :title="'Chủ để cho môn '+item.name_subject" :size="14">
     <div class="space"/>
      <b-button class="btn-cate" v-for="cate in item.cates" :key="cate"   :variant="getCateVariant(item,cate)"  @click="clickSelectCate(item,cate)"  >{{cate}} </b-button>  
    </InputInfoBox>
    <div> 
      <div class="space"/>
      <h3> Lịch có thể nhận lớp </h3>

      <table  class="table table-desktop  d-md-table d-none d-md-block table-responsive  w-100" > 
        <tbody style="width:100%">
          <tr>
            <td v-for="item in date" :key="item">{{item}}</td> 
          </tr>
          <tr>
            <td  v-for="item in date" :key="item" scope="row">
               <b-button  @click="clickSelectDate(item,0)" class="date" :variant="getDateVariant(item, 0)" block>
                  Sáng
                </b-button>  
          
            </td>
          </tr>
           <tr>
            <td  v-for="item in date" :key="item" scope="row">
               <b-button @click="clickSelectDate(item,1)" class="date" :variant="getDateVariant(item, 1)" block>
                  Chiều
                </b-button>  
          
            </td>
          </tr>
           <tr>
            <td  v-for="item in date" :key="item" scope="row">
               <b-button @click="clickSelectDate(item,2)" class="date" :variant="getDateVariant(item, 2)" block>
                  Tối
                </b-button>  
          
            </td>
          </tr>
        </tbody>
      </table>
    </div>
     <br/>
    <div style="margin-left: -5px">
        <b-col xs="12" md="12">
           
          <b-button 
            @click="onSubmitForm"
            class="btn-action"
            variant="success"
            >Lưu thông tin</b-button
          >
     
        </b-col>
      </div>
      <ModalSelectSubject @submit="onSubmitSelectSubject" ref="modal_subject"/>
  </div>
</template>
 
<script>
import ModalSelectSubject  from "../Modal/ModalSelectSubject.vue";
import InputInfoBox from "./InputInfoBox.vue"; 
export default {
  name: "ProfessionalProfile", 
  data() {
    return {
      position:"0",
      subjects:[],
      classSchedule:[],
      type:"offline",
      date: ["Th.2","Th.3","Th.4","Th.5","Th.6","Th.7","C.N"],
      seleteData: {},
      dayString: ["morning","afternoon","night"]
    }
  },
  components: {
    InputInfoBox,
    ModalSelectSubject
  },
  methods:{
    openModalSubject() {
      this.addType = 1
      this.$refs.modal_subject.showModal()
    },
    getTypeVariant(type){
      return (this.type == type)?"success":"default"
    },
    getCateVariant(item,cate){
      if(item.selectCate.indexOf(cate) > -1){
        return "success"
      }
      return "default"
    },
    getDateVariant(item,date){
      if (this.seleteData[item] == null || this.seleteData[item].indexOf(date)<0) {
        return "default"
      }
      return "success"
    },
    touchType(type){
      this.type = type
    },
    onSubmitForm() {
      let data = { 
          "position": this.position,
          "subject":[],
          "class_schedule":  [],
          "type":this.type
      }
      let classSchedule = [] 
      var subjects = []
     
      for (let x in this.seleteData) {
        let schedule = this.seleteData[x].map(m=>this.dayString[m])
        classSchedule.push({day: x, section: schedule})
      }

      for (let x in this.subjects) {
        let subject = this.subjects[x]
        subjects.push({id: x, topic: subject.selectCate})
      }

      data.subject = subjects
      data.class_schedule =  classSchedule

      console.log(JSON.stringify(data))
       
    },
    clickSelectCate(item,cate){
     
      var selectCate = item.selectCate
      let index = selectCate.indexOf(cate)
      if ( index > -1){
        selectCate.splice(index,1) 
      } else {
       selectCate.push(cate)
      }
      item.selectCate = selectCate
      this.subjects[item.id] = item
      this.subjects = {...this.subjects}
    },
    onSubmitSelectSubject(item) {
      if ( this.subjects[item.id] != null ) {
        return
      }
      this.subjects[item.id] = {id: item.id,name_subject: item.name_subject,selectCate:[],cates:["Toán 1","Toán 2","Toán 3"]}
      this.subjects = {...this.subjects}
    }, 
    clickSelectDate(item,date){
      console.log(date)
      var data =  this.seleteData[item] || []
      if (data[item] == null) {
        data[item] = []
      }
      let index = data.indexOf(date) 
      if (index >=0){
         data.splice(index,1)
      } else {
        data.push(date)
      }
      
      this.seleteData[item] = data
      this.seleteData = {...this.seleteData}
    }
  }
};
</script>

 <style >
  .tutor-info .btn-default{
  background-color: #F0F0F0;
  }
 </style>
<style scoped>
 .btn-cate{
 margin:2px
 }
 .date {
 width:60px; 
 font-size: 14px;
 }
 .date .btn-none{
  background-color: #F0F0F0;
 }
 tr{
 font-size: 14px;
 }

.tutor-info .small-button {
  padding-top:5px !important;
   padding-bottom:5px !important;
   font-size: 12px;
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
.tutor-info h3 {
  font-size: 14px;
  color: #666666;
  font-weight: bold; 
  margin:0px;
  padding:10px 0px;
}
.space {
  padding:5px
}
 

.tutor-info {
  padding: 20px; 

}
</style>

