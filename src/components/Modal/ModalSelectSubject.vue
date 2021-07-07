<template>
  <b-modal :hideFooter="true" :hideHeader="true" centered id="modal-3" title="BootstrapVue">
      <div>
          <div class="search-box">
            <img src="@/assets/Images/Search_alt.png"/><input v-model="search" placeholder="Tìm kiếm tên môn"/>
           </div>
      </div> 
      
      <div class="content">
        <div  v-for="item in displaySubjects" :key="item.id"  class="item" @click="handleSelectItem(item)">
            <img src="@/assets/Images/ic_star.png"/>
            <div  class="item-title">{{item.name_subject}}</div>
        </div> 
      <div> 

      </div>
      </div>
    <template #modal-header>
      <div class="w-100">
        <b> Tên kỹ năng</b>
      </div>
    </template>
  </b-modal>
</template>

<script>

var listData = [
  {name_subject:"Toán",id:"1"},
  {name_subject:"Lý",id:"2"},
  {name_subject:"Ngữ Văn",id:"3"},
  {name_subject:"Hóa Học",id:"4"},
  {name_subject:"Liên minh huyền thoại",id:"5"},
  {name_subject:"Giáo dục công dân",id:"6"},
  {name_subject:"Lịch sử",id:"7"},
  {name_subject:"Lập trình C",id:"8"},
  {name_subject:"Lập trình Mobile",id:"9"},
]
export default {
  name: "ModalSelectSubject",
  data() {
    return {
      search: "",
      rate: 1,
      nameState:null,
      subjects: listData,
      displaySubjects: listData
    };
  }, 
  components: {},
  methods: {
    showModal() {
      this.$root.$emit("bv::show::modal", "modal-3", "#btnShow");
    },
    hideModal() { 
      this.$root.$emit("bv::hide::modal", "modal-3", "#btnShow");
    },
    toggleModal() {
      this.$root.$emit("bv::toggle::modal", "modal-3", "#btnToggle");
    },
    handleSelectItem(item) {
      this.$emit("submit",item)
      this.hideModal()
      this.search = ""
      this.nameState = null
    },
    nornalText(val){
      return   val.toLowerCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }
  },
  watch:{
    search(val){
      if (val == ""){
        this.displaySubjects = this.subjects
        return 
      } 
      let searchEntry = this.nornalText(val) 
      this.displaySubjects = this.subjects.filter((n)=>this.nornalText(n.name_subject) .indexOf(searchEntry) >=0)
    }
  }
};
</script>

<style scoped> 
.content {
overflow-y: auto;
overflow-x: hidden;
margin:20px 10px;
max-height: 400px;
}
.content .item {
position: relative;
height: 40px;
padding-top: 4px;
}

.content .item:hover {

cursor: pointer;
background-color: #EBFAF2;
}

.content .item  .item-title { 
  position: relative;
  left: 40px;
  font-size: 16px;
  top:4px;
  font-weight: bold;
}
.content .item img{
position: absolute;
}

.search-box{
padding:10px;
position: relative;
}

.search-box input {
  border-radius: none;
  border: none;
  outline: none;
  width: calc(100% - 40px);
  position: relative;
  left: 40px;
  font-size: 16px;
  top:5px 
}
.search-box img {
position: absolute;
}
</style>