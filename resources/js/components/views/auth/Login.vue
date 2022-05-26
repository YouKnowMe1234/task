<template>
<div>
     <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Đăng Nhập</h3></div>
                                    <div class="card-body">
                                        <form>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="data.email" id="inputAccount" type="email" placeholder="Account" />
                                                <label for="inputAccount">Tài Khoản</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="data.password" id="inputPassword" type="password" placeholder="Password" />
                                                <label for="inputPassword">Mật Khẩu</label>
                                            </div>
                                            <div class="form-check mb-3">
                                                <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="small" href="">Quên Mật Khẩu?</a>
                                                <a class="btn btn-primary" @click="login()">Đăng Nhập</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a href="#">Đăng Ký!</a></div>
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
import axios from 'axios';

export default {
    data(){
        return {
            data: {
                email: null,
                password: null
            }
        }
    },
    methods:{
        login(){
            if(this.data.email == null || this.data.password == null){
                alert("Ban phai dien day du thong tin!!");
                return;
            }

            axios
                .post('/api/login',this.data)
                .then(res=>{
                    // console.log(res.data.code)
                    if(res.data.code == 200){
                        this.$router.push({path: '/dashboard'});
                    }

                })
        }
    }
}
</script>

<style>

</style>
