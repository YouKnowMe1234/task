<template>
    <div style="margin-left: 20px">
        <h3>Sửa Lý Do</h3>
        <form>
            <div class="col-md-8" >
                <div class="form-group">
                    <label for="name">Tiêu Đề: </label>
                    <input type="text" class="form-control" v-model="reason.title" name="name" id="name" placeholder="Enter tilte..." >
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Mô Tả: </label>
                    <textarea class="form-control" v-model="reason.description" rows="5" name="description" id="description"></textarea>
                </div>
            </div>
             <div class="col-md-8">
               <div class="text-right">
                        <button type="reset" class="btn btn-default">Cancel</button>
                        <button type="button" class="btn btn-primary" @click="updateReason()">Save</button>
                    </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            reason_id: null,
            reason: null
        }
    },
    created() {
        this.reason_id = this.$route.params.id;
        this.getReasonFromId(this.reason_id);
    },
    methods: {
        getReasonFromId(id){
            axios.
                get('api/reason/'+id+"/edit")
                .then(res => {
                    console.log(res);
                    this.reason = res.data.data[0]
                })
        },
        updateReason(){
            axios.
                put('api/reason/'+this.reason_id,this.reason)
                .then(res =>{
                    this.$router.push({path:'/reason'});
                })
        }
    }
}
</script>
