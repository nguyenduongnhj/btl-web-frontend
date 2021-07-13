<template>
        <div>
            <b-col sm="12" class="d-block d-md-none"  >
                <b-row>
                    <b-col class="text-center">
                        <div class="box-shadown"><img src="@/assets/Images/profile/ic_donate.png"/></div>
                    </b-col>
                    <b-col class="text-center" >
                    <div class="box-shadown"> <img src="@/assets/Images/profile/ic_message.png"/></div>
                    </b-col>
                    <b-col class="text-center" >
                    <div class="box-shadown"> <img src="@/assets/Images/profile/ic_report.png"/></div>
                    </b-col>
                </b-row>
            </b-col> 

        </div>
</template>

<style scoped>
.float-navigation{
    position: absolute;
    z-index: 2;
    right: -55px;
    top: 0px;

}
.box-shadown{
     padding:10px 10px;
     cursor: pointer;
}
</style>