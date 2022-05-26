<template>
    <div style="margin-left: 20px">
        <h3>Thêm Lý Do</h3>
        <form>
            <div class="col-md-8" >
                <div class="form-group">
                    <label for="name">Nhập Tiêu Đề: </label>
                    <input type="text" v-model="reasonData.title" class="form-control" name="name" id="name" placeholder="Enter tilte..." required>
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Nhập Mô Tả: </label>
                    <textarea class="form-control" v-model="reasonData.description" rows="5" name="description" id="description"></textarea>
                </div>
            </div>
             <div class="col-md-8">
               <div class="text-right">
                        <button type="reset" class="btn btn-default">Cancel</button>
                        <button type="button" class="btn btn-primary" @click="storeReason()">Save</button>
                    </div>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {

    data(){
        return {
            reasonData: {
                title: "",
                description: ""
            }
        }
    },

    methods: {
        storeReason(){
            if(this.validate() == true){
                axios
                .post('/api/reason',{
                    title: this.reasonData.title,
                    description: this.reasonData.description
                })
                .then(res => {
                    this.$router.push({name: 'Reason'});
                })
            }
        },
        validate(){
            if(this.reasonData.title == "" || this.reasonData.description == ""){
                alert("Nhập đầy đủ thông tin!!");
                return false;
            }
            return true;
        }
    }
}
</script>
