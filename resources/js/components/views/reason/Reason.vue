<template>
    <div>
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                Bảng Danh Mục Lý Do
        </div>
        <div class="col-md-8" style="margin:auto">
             <div class="form-outline">
            <input type="search" v-model="search" id="form1" class="form-control" placeholder="Search..." aria-label="Search" />
        </div>
        </div>


        <div class="card-body">
                 <export-excel
                        class   = "btn btn-success"
                        :data = "reasons"
                        type = "xlsx"
                        worksheet = "My Worksheet"
                        name    = "reason.xls">
                    Export Excel
                    </export-excel>
            <!-- <button type="button" class="btn btn-primary btn-sm ml-auto" style="margin-bottom: 10px" v-on:click="newModal()">
                <span class="fa fa-plus"></span>Thêm</button> -->
            <table class="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Lý Do</th>
                    <th>Mô Tả</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="reason in reasons" :key="reason.id">
                        <td>{{ reason.id }}</td>
                        <td>{{ reason.title }}</td>
                        <td>{{ reason.description }}</td>
                        <td>
                            <router-link :to="{name: 'EditReason', params:{id: reason.id}}">
                                <button id="myButton" class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
                            </router-link>
                            <!-- <button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button> -->
                            <button type="button" class="btn btn-danger btn-sm" @click="deleteReason(reason.id)"><span class="fa fa-trash"></span></button>
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

export default {
    data(){
        return {
            reasons: [],
            search: null
      }
    },
    created() {
        this.getReason();
    },
    watch: {
        search(after,before){
            this.getDataSearch();
        }
    },
    methods: {
        getReason() {
            axios
                .get('/api/reason')
                .then(res => {
                    this.reasons = res.data.data
                })
        },
        deleteReason(id){
            axios
                .delete('/api/reason/'+id)
                .then(res =>{
                    this.getReason();
                })
        },
        getDataSearch() {
            axios
                .get('api/search-reason',{params: {search: this.search}})
                .then(res =>{
                    // console.log(res.data.data);
                    this.reasons = res.data.data;
                })
        }
    }
}
</script>
