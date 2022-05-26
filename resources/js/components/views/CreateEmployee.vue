<template>
    <div style="margin-left: 20px">
        <h3>Thêm Nhân Viên</h3>
        <form action="" enctype="multipart/form-data">
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
                    <label for="name">SDT: </label>
                    <input type="text" v-model="employeeData.phone" class="form-control" name="phone" id="phone" placeholder="Enter phone...">
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Email: </label>
                    <input type="email" v-model="employeeData.email" class="form-control" name="email" id="email" placeholder="Enter email...">
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Mật Khẩu: </label>
                    <input type="password" v-model="employeeData.password" class="form-control" name="pasword" id="pasword" placeholder="Enter pasword...">
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Cấp Bậc: </label>
                        <select class="form-control" v-model="employeeData.level">
                        <option>Internship</option>
                        <option>Fresher</option>
                        <option>Junior</option>
                        <option>Sennior</option>
                    </select>
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="image">Ảnh Đại Diện: </label>
                    <input type="file" @change="onchangeImage" class="form-control" name="image" id="image">
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="name">Trạng Thái: </label>
                        <select class="form-control" v-model="employeeData.status">
                        <option value="active">Kích Hoạt</option>
                        <option value="inactive">Chưa Kích Hoạt</option>
                    </select>
                </div>
            </div>
            <div class="col-md-8">
                <div class="text-right">
                    <button type="button" class="btn btn-default">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="addEmployee()">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import axios from 'axios';
import moment from 'moment';

export default {
    components: {
        Datepicker
    },
    data(){
        return {
            employeeData: {
                name: null,
                dob: null,
                phone: null,
                image: null,
                password: null,
                email: null,
                level: null,
                status: null
            }
        }
    },

    methods: {
        //them nhan vien
        addEmployee() {
            axios
                .post('api/employee',{
                    name: this.employeeData.name,
                    dob: this.format_date(this.employeeData.dob),
                    phone: this.employeeData.phone,
                    image: this.employeeData.image,
                    account: this.employeeData.account,
                    password: this.employeeData.password,
                    email: this.employeeData.email,
                    level: this.employeeData.level,
                    status: this.employeeData.status
                })
                .then(res => {
                    console.log(res.data);
                    this.reset();
                    // this.$router.push({name: 'createEmpl'});
                });

        },
        //reset input
        reset() {
                this.employeeData.name = null,
                this.employeeData.dob = null,
                this.employeeData.phone = null,
                this.employeeData.image = null,
                this.employeeData.account = null,
                this.employeeData.password = null,
                this.employeeData.email = null,
                this.employeeData.level = null,
                this.employeeData.status = null
        },
        //bat thay doi neu co file
        onchangeImage(e) {
            this.employeeData.image = e.target.files[0];
            console.log(this.employeeData.image)
        },
        //format ngay
        format_date(value) {
            if (value) {
                return moment(String(value)).format("YYYY-MM-DD");
            }
        }
    }
}
</script>
