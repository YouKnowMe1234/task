<template>
    <div>
         <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Tạo Tài Khoản</h3></div>
                                    <div class="card-body">
                                        <form>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="data.name" id="inputName" type="text" placeholder="Name" />
                                                <label for="inputName">Họ Tên</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="data.phone" id="inputPhone" type="text" placeholder="Phone" />
                                                <label for="inputAccount">SDT</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="data.email" id="inputEmail" type="email" placeholder="Email" />
                                                <label for="inputEmail">Email</label>
                                            </div>
                                             <div class="form-floating mb-3">
                                                <input class="form-control" v-model="data.dob" id="inputDOB" type="email" placeholder="DOB" />
                                                <label for="inputEmail">Ngày sinh</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="data.level" id="inputLevel" type="email" placeholder="Level" />
                                                <label for="inputEmail">Level</label>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" v-model="data.password" id="inputPassword" type="password" placeholder="Create a password" />
                                                        <label for="inputPassword">Mật Khẩu</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" v-model="confirm_password" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                                        <label for="inputPasswordConfirm">Xác Nhận Mật Khẩu</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4 mb-0">
                                                <div class="d-grid"><a class="btn btn-primary btn-block" @click="register()">Tạo Tài Khoản</a></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a>Have an account? Go to login</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import axois from 'axios';
export default {
    data(){
        return {
            data: {
                name: null,
                email: null,
                password: null,
                dob: null,
                level: null,
                role: 'admin',
                status: 'active',
                phone: null
            },
            confirm_password: null
        }
    },

    created() {

    },

    methods: {
        register(){
            if(this.confirm_password != this.data.password){
                alert("Mật khẩu xác nhận sai!!");
                return;
            }
            axois
                .post('api/register',this.data)
                .then(res => {
                    this.$router.push({path: '/login'});
                });
        }
    }
}
</script>

<style>

</style>
