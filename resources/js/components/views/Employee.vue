<template>
    <div>
         <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    Bảng Nhân Viên
                </div>
                <div class="col-md-8" style="margin:auto">
                    <div class="form-outline">
                        <input type="search" v-model="search" id="form1" class="form-control" placeholder="Search..." aria-label="Search" />
                    </div>
                </div>
                <div class="card-body">
                    <export-excel
                        class   = "btn btn-success"
                        :data = "employees"
                        type = "xlsx"
                        worksheet = "My Worksheet"
                        name    = "employees.xls">
                    Export Excel
                    </export-excel>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Họ Tên</th>
                                <th>SDT</th>
                                <th>Email</th>
                                <th>Ngày Sinh</th>
                                <th>Chức Vụ</th>
                                <th>Cấp Bậc</th>
                                <th>Trạng Thái</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="employee in employees" :key="employee.id">
                                <td>{{ employee.id }}</td>
                                <td>{{ employee.name }}</td>
                                <td>{{ employee.phone }}</td>
                                <td>{{ employee.email }}</td>
                                <td>{{ employee.dob }}</td>
                                <td>{{ employee.role }}</td>
                                <td>{{ employee.level }}</td>
                                <td>{{ employee.status }}</td>
                                <td>
                                     <router-link :to="{name: 'EditEmpl', params:{id: employee.id}}">
                                        <button id="myButton" class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
                                    </router-link>
                                    <button class="btn btn-danger btn-sm" @click="deleteEmployee(employee.id)"><span class="fa fa-trash" ></span></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios';
import excel from 'vue-excel-export';
export default {

    data(){
        return {
           employees: [],
           search: null
        }
    },
    created() {
        this.getEmployee();
    },
    watch: {
        search(after,before){
            this.getDataSearch();
        }
    },
    methods: {
        getEmployee(){
            axios
                .get('/api/employee')
                .then(res => {
                    // console.log(res.data);
                    this.employees = res.data.data;
                })
        },
        deleteEmployee(id){
            axios
                .delete('api/employee/'+id)
                .then(res => {
                    this.getEmployee();
                })
        },
        getDataSearch(){
            axios
                .get('/api/search-employee',{params:{search: this.search}})
                .then(res => {
                    // console.log(res.data.data);
                    this.employees = res.data.data
                })
        }

    }
}
</script>
