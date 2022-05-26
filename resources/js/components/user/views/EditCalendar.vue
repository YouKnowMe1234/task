<template>
  <div style="margin-left: 20px">
      <h3>Sửa Lịch Nghỉ</h3>
        <form>
             <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Thời Gian: </label>
                        <select class="form-control">
                        <option value="half day-off">Nửa Ngày</option>
                        <option value="full day-off">Cả Ngày</option>
                    </select>
                </div>
            </div>
             <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Lý Do: </label>
                        <select class="form-control" >
                        <option>ABC</option>
                        <option>ABC</option>
                        <option>ABC</option>
                    </select>
                </div>
            </div>

             <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Ngày: </label>
                    <datetime input-class="form-control" format="YYYY-MM-DD" name='day'></datetime>
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Thời Gian Bắt Đầu: </label>
                    <datetime  input-class="form-control" format="H:i" name='time_end'></datetime>
                </div>
            </div>
            <div class="col-md-8" >
                <div class="form-group">
                    <label for="name">Thời Gian Kết Thúc: </label>
                    <datetime  input-class="form-control" format="H:i" name='time_end'></datetime>
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Nhập Mô Tả: </label>
                    <textarea class="form-control" rows="5" name="description" id="description"></textarea>
                </div>
            </div>
             <div class="col-md-8">
               <div class="text-right">
                        <button type="reset" class="btn btn-default">Cancel</button>
                        <button type="button" class="btn btn-primary">Save</button>
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
    data(){
        return {
            calendar_id: null,
            personalCalendar: null
        }
    },
    created() {
        this.calendar_id = this.$route.params.id
        this.getPersonCalFromId(this.calendar_id);
    },
    methods: {
        getPersonCalFromId(id){
            axios
                .get('api/calendar/'+id+'/edit')
                .then(res =>{
                    console.log(res.data.data[0]);
                    this.personalCalendar = res.data.data[0];
                })
        }
    }
}
</script>

<style>

</style>
