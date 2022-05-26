<template>
  <div style="margin-left: 20px">
      <h3>Thêm Lịch Nghỉ</h3>
        <form>
             <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Thời Gian: </label>
                        <select class="form-control" v-model="data.type">
                        <option value="half day-off">Nửa Ngày</option>
                        <option value="full day-off">Cả Ngày</option>
                    </select>
                </div>
            </div>
             <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Lý Do: </label>
                        <select class="form-control" v-model="data.reason_id">
                        <option v-for="reason in reasons" :key="reason.id" :value="reason.id">{{ reason.title }}</option>
                    </select>
                </div>
            </div>

             <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Ngày: </label>
                    <datetime v-model="data.day" input-class="form-control" format="YYYY-MM-DD" name='day'></datetime>
                </div>
            </div>
            <div class="col-md-8" v-show="data.type == 'half day-off'">
                <div class="form-group">
                    <label for="name">Thời Gian Bắt Đầu: </label>
                    <datetime v-model="data.time_start"  input-class="form-control" format="H:i" name='time_end'></datetime>
                </div>
            </div>
            <div class="col-md-8"  v-show="data.type == 'half day-off'">
                <div class="form-group">
                    <label for="name">Thời Gian Kết Thúc: </label>
                    <datetime v-model="data.time_end"  input-class="form-control" format="H:i" name='time_end'></datetime>
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Nhập Mô Tả: </label>
                    <textarea class="form-control" v-model="data.description" rows="5" name="description" id="description"></textarea>
                </div>
            </div>
             <div class="col-md-8">
               <div class="text-right">
                        <button type="reset" class="btn btn-default">Cancel</button>
                        <button type="button" class="btn btn-primary" @click="saveCalendar()">Save</button>
                    </div>
            </div>
        </form>
  </div>
</template>

<script>
import axios from 'axios';
import datetime from 'vuejs-datetimepicker';
export default {
    components:{datetime},
    data() {
        return {
            reasons: [],
            data: {
                type: null,
                day: null,
                time_start: null,
                time_end: null,
                reason_id: null,
                description: null
            }
        }
    },
    created() {
        this.getReason();
    },
    methods: {
        getReason(){
            axios
                .get('/api/reason')
                .then(res => {
                    // console.log(res.data);
                    this.reasons = res.data.data;
                });
        },

        saveCalendar() {
            axios
                .post('/api/calendar', this.data)
                .then(res => {
                    console.log(res);
                    this.reset();
                })
        },
        reset(){
            this.data.type = null,
            this.data.day = null,
            this.data.time_start = null,
            this.data.time_end = null,
            this.data.reason_id = null
        }
    }
}
</script>

<style>

</style>
