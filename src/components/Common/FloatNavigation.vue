<template>
        <div>
            <b-col sm="12" class="d-block d-md-none"  >
                <b-row>
                    <b-col>
                        <div class="box-shadown">home</div>
                    </b-col>
                    <b-col  >
                    <div class="box-shadown"> message </div>
                    </b-col>
                    <b-col >
                    <div class="box-shadown"> report </div>
                    </b-col>
                </b-row>
            </b-col>
            <div class="d-none d-md-block float-navigation"  >
                <div class="box-shadown">H</div>
                 <div class="box-shadown">M</div>
                 <div class="box-shadown">R</div>
            </div>

        </div>
</template>

<style scoped>
.float-navigation{
    position: absolute;
    z-index: 2;
    right: -50px;
    top: 0px;

}
</style>