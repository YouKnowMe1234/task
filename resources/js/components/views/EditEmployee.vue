<template>
  <div style="margin-left: 20px">
        <h3>Sửa Nhân Viên</h3>
        <form>
            <div class="col-md-8">
                <div class="form-group">
                <label for="name">Họ Tên: </label>
                <input type="text" v-model="employeeData.name" class="form-control" name="name" id="name" placeholder="Enter name...">
            </div>
            </div>
            <div class="col-md-8">
                   <div class="form-group">
                <label for="name">Ngày Sinh: </label>
                 <datepicker
                        v-model="employeeData.dob"
                        input-class="form-control"
                    ></datepicker>
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="phone">SDT: </label>
                    <input type="text" v-model="employeeData.phone" class="form-control" name="phone" id="phone" placeholder="Enter phone...">
                </div>
            </div>
            <div class="col-md-8">
                  <div class="form-group">
                <label for="accpunt">Chức Vụ: </label>
                <input type="text" v-model="employeeData.role" class="form-control" name="role" id="role" placeholder="Enter Role...">
            </div>
            </div>
            <div class="col-md-8">
                 <div class="form-group">
                <label for="email">Email: </label>
                <input type="email" v-model="employeeData.email" class="form-control" name="email" id="email" placeholder="Enter email...">
            </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                <div class="form-group">
                    <label for="level">Cấp Bậc: </label>
                        <select class="form-control" v-model="employeeData.level">
                        <option>Internship</option>
                        <option>Fresher</option>
                        <option>Junior</option>
                        <option>Sennior</option>
                    </select>
                </div>
            </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                <label for="image">Chọn Ảnh: </label>
                <input type="file"  class="form-control" name="image w-150px" id="image">
            </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                <label for="status">Trạng Thái: </label>
                    <select class="form-control" v-model="employeeData.status">
                    <option value="active">Kích Hoạt</option>
                    <option value="inactive">Chưa Kích Hoạt</option>
                </select>
            </div>
            </div>
            <div class="col-md-8">
                <div class="text-right">
                <button type="button" class="btn btn-default">Cancel</button>
                <button type="button" class="btn btn-primary" @click="updateEmployee()">Save</button>
            </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';

export default {
    components: {
        Datepicker
    },
    data(){
        return {
            employee_id: null,
            employeeData: null
        }
    },
    created() {
        this.employee_id = this.$route.params.id;
        this.getEmployeeFromId(this.employee_id);
    },
    methods: {
        getEmployeeFromId(id){
            axios
                .get('/api/employee/'+id+'/edit')
                .then(res => {
                    this.employeeData = res.data.data[0];
                })
        },
        updateEmployee(){
            axios
                .put('api/employee/'+this.employee_id,this.employeeData)
                .then(res => {
                    this.$router.push({path: '/employee'});
                })
        },
        format_date(value) {
            if(value) {
                return moment(String(value)).format("YYYY-MM-DD");
            }
        }
    }
}
</script>
