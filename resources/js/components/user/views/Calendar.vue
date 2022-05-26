<template>
  <div>
         <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    Lịch Xin Nghỉ
                </div>

                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-sm ml-auto" style="margin-bottom: 10px">
                        <span class="fa fa-plus"></span>Thêm</button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Ngày</th>
                                <th>Lý do nghỉ</th>
                                <th>Thời Gian Bắt Đầu</th>
                                <th>Thời Gian Kết Thúc</th>
                                <th>Mô Tả</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="calendar in calendars" :key="calendar.id">
                                <td>{{ calendar.day }}</td>
                                <td>{{ calendar.reasons.title }}</td>
                                <td>{{ calendar.time_start }}</td>
                                <td>{{ calendar.time_end }}</td>
                                <td>ABCDF</td>
                                <td>
                                    <router-link :to="{name: 'EditCalendar', params:{id: calendar.id}}">
                                        <button id="myButton" class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
                                    </router-link>
                                    <button class="btn btn-danger btn-sm" @click="deletePersonalCalendar(calendar.id)"><span class="fa fa-trash" ></span></button>
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
           calendars: []
        }
    },
    created() {
        this.getPersonalCalendar();
    },
    methods: {
        getPersonalCalendar(){
            axios
                .get('/api/user-calendar')
                .then(res => {
                    console.log(res.data);
                    this.calendars = res.data.data;
                })
        },
        deletePersonalCalendar(id){
            axios
                .delete('api/calendar/'+id)
                .then(res => {
                    console.log(res.data);
                    this.getPersonalCalendar();
                })
        }
    }
}
</script>

<style>

</style>
