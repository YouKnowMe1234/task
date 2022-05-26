<template>
   <div id="layoutAuthentication">
            <div id="layoutAuthentication_content" >
                <main>
                    <div class="container" v-show="step == 1">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Reset Password</h3></div>
                                    <div class="card-body">
                                        <div class="small mb-3 text-muted">Nhập email của bạn và chúng tôi sẽ gửi link để có thể đặt lại mặt khẩu.</div>
                                        <form>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="data.email" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Email</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="small">Đăng Nhập</a>
                                                <a class="btn btn-primary" @click="sendEmailReset()">Tiếp tục</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a>Chưa có tài khoản? Đăng Ký!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div class="container toke-valid" v-show="step == 2">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Ma Xac Nhan</h3></div>
                                    <div class="card-body">
                                        <div class="small mb-3 text-muted">Mail Da Duoc Gui!!</div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="token" id="inputToken" type="text" placeholder="" />
                                                <label for="inputToken">Ma Xac Nhan</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="small">Đăng Nhập</a>
                                                <router-link :to="{name: 'ResetForm', params:{token: this.token}}">
                                                        <a class="btn btn-primary">Tiếp tục</a>
                                                </router-link>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a>Chưa có tài khoản? Đăng Ký!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            data: {
                email:null,

            },
            token: null,
            step : 1
        }
    },
    methods: {
        sendEmailReset(){
            axios
                .post('api/send-mail',this.data)
                .then(res =>{
                    console.log(res);
                    if(res.data.status == 200){
                        this.step++ ;
                    }
                })
        },
        gotoResetForm(){
            this.$route.push({name: 'ResetForm', params: {token: this.token}});
        }
    }
}
</script>

<style>

</style>
