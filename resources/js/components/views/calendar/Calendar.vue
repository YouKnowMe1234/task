<template>
     <div>
         <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    Lịch Xin Nghỉ
                </div>
                <div class="col-md-8" style="margin:auto">
                    <div class="form-group">
                            <select class="form-control" v-model="search">
                            <option value="">Search</option>
                            <option v-for="reason in reasons" :key="reason.id" :value="reason.id">{{ reason.title }}</option>
                        </select>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Ngày</th>
                                <th>Họ Tên</th>
                                <th>Hình Thức</th>
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
                                <td>{{ calendar.users.name }}</td>
                                <td>
                                    {{ calendar.type }}
                                </td>
                                <td>{{ calendar.reasons.title }}</td>
                                <td>{{ calendar.time_start }}</td>
                                <td>{{ calendar.time_end }}</td>
                                <td>ABCDF</td>
                                <td>
                                    <button class="btn btn-danger btn-sm" @click="deleteCalendar(calendar.id)"><span class="fa fa-trash" ></span></button>
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
import SpringCalendar from "vue-spring-calendar";
;
export default {
        components: {
            SpringCalendar
        },
    data(){
        return {
            calendars: [],
            reasons: [],
            search: "",
            events:[
            {
                title:'Event 1',
                startDate:'2020-04-09 08:00',
                endDate:'2020-04-09 12:00',
            },
            {
                title:'Event 2',
                startDate:'2022-05-09 09:00',
                endDate:'2022-05-09 12:00',
            },
            {
                title:'Event 3',
                startDate:'2022-05-09 12:00',
                endDate:'2022-05-09 16:00',
            },
            ]
        }
    },
    created() {
        this.getCalendar();
        this.getReason();
    },
    watch: {
        search(after,before){
            this.getDataSearch();
        }
    },
    methods: {
        getReason(){
            axios
                .get('api/reason')
                .then(res => {
                    this.reasons = res.data.data;
                })
        },
        getCalendar(){
            axios
                .get('api/calendar')
                .then(res => {
                    console.log(res.data);
                    this.calendars = res.data.data;
                })
        },
        deleteCalendar(id){
            axios
                .delete('api/calendar/'+id)
                .then(res => {
                    console.log(res.data);
                    this.getCalendar()
                })
        },
        getDataSearch(){
            axios
                .get('api/search-calendar',{params:{search: this.search}})
                .then(res => {
                    this.calendars = res.data.data;
                })
        }
    }
}
</script>

<style>

</style>
