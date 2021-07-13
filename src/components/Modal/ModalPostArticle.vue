<template>
  <b-modal :hideFooter="true" :hideHeader="true" centered id="modal-3" title="BootstrapVue">
    <h3>Tạo bài viết</h3>
      <div @paste="onPaste" style="max-height:300px; overflow-y:auto">
          <div class="search-box">
            <textarea  v-model="feedText" placeholder="Hãy chia sẻ gì đó"/>
          </div>
          <div class="image-box">
              <div v-for="img in prepareUploads" :key="img.url" class="image-item">
              <img :src="img.url">
              <div class="close" @click="removeImage(img)">
                <img src="@/assets/Images/feed/ic_delete.png"/>
              </div>
              </div>
          </div>
      </div> 
       <div class="post-toolbar">
         <img class="avatar-view" :src="data.avatar | avatar" /> 
         <div class="more-view">
           <div style="float:right">
             <img @click="openSelectImage" class="button" src="@/assets/Images/feed/ic_post_image.png"/>
             <img class="button" src="@/assets/Images/feed/ic_post_video.png"/>
            </div>
           <div>Thêm vào bài viết</div> 
          </div> 
       </div>
       <br/>
       <input type="file" name="file" ref="input_file" style="display:none"  v-on:change="handleFileUpload()" />
       <div style="padding: 10px">
         <b-button  @click="submitPost" class="w-100" block variant="success" :disabled="feedText=='' && prepareUploads.length == 0"> Đăng</b-button> 
       </div>
  </b-modal>
</template>

<script>

 
export default {
  name: "ModalPostArticle",
  data() {
    return {
      feedText: "",
      prepareUploads : [], 
    };
  }, 
  props:["data"],
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
     onPaste(event){
         var item = null;
 
        for (var i = 0; i < event.clipboardData.items.length ; i++) {
          let temp = event.clipboardData.items[i]
          if (temp.kind == "file"){
            item =  temp
          }
        }

        if (item == null){
          return
        } 
        
        if (item.type.indexOf("image") === 0)
        {
            var blob = item.getAsFile();
            
            var reader = new FileReader();
            reader.onload =(event) => {
                 console.log(event)
                  this.prepareUploads.push({file:blob ,url:  event.target.result })
            }; 
            reader.readAsDataURL(blob);
        }
    },
    submitPost(){
        this.$emit("submit",{
          content:{text:this.feedText, image: this.prepareUploads},
          type: "POST" 
        })
        this.hideModal()
        this.feedText = ""
        this.prepareUploads = []
    },
     handleFileUpload() { 
      let file = this.$refs.input_file.files[0];
      if (file == null) {
        return;
      }
     this.prepareUploads.push({file:file,url: URL.createObjectURL(file)})
    },
    openSelectImage(){
        this.$refs.input_file.click();
    },
    removeImage(image){
      let index=  this.prepareUploads.indexOf(image)
      if (index >=0 ){
         this.prepareUploads.splice(index,1)
      }
    }
  },
  watch:{ 
  }
};
</script>

<style scoped> 
.image-item .close {
  position: absolute;
  top:10px;
  right:10px;
  cursor: pointer;
  filter: drop-shadow(0px 0px 4px #000000);
}
.image-item {
  position: relative;
  padding: 10px;
}
.image-box img{ 
  width: 100%;
}
.avatar-view {
  width: 30px;
  height: 30px; 
  background-color: #EFEFEF;
  border-radius: 15px;
  position: absolute;
  top:10px

}
.more-view {
  position: relative ;
  margin-left: 50px;
  padding: 10px 20px;  
  background: #FAFAFA;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color:#666666
}

.button{
  margin:0px 5px;
  cursor: pointer;
}

.post-toolbar {
  padding:2px 10px;
  position: relative;
}
.search-box textarea {
  width:100% ;
  outline: none;
  border:none;
  background-color: rgb(247, 253, 250);
  border-radius: 8px;
  padding:10px;
  min-height: 99px;
  
}
h3{
  font-size:18px;
  font-weight: 800;
  padding:10px;
  text-align: center;
}
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