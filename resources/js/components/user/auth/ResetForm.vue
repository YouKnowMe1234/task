<template>
  <div>
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Reset Password  </h3></div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" v-model="data.password" id="inputPassword" type="password" placeholder="Create a password" />
                                                        <label for="inputPassword">Mật Khẩu</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" v-model="data.confirm_password" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                                        <label for="inputPasswordConfirm">Xác Nhận Mật Khẩu</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4 mb-0">
                                                <div class="d-grid"><a class="btn btn-primary btn-block" @click="resetPassword()">Xac Nhan</a></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a>Go to login</a></div>
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
            data:{
                password: null,
                confirm_password: null,
                token: null
            }
        }
    },
     created() {
         this.data.token = this.$route.params.token
    },
    methods: {
        resetPassword(){
            axios
                .get('api/reset-password/'+ this.data.token,this.data)
                .then(res => {
                    this.$router.push({path: '/user-login'});
                })
        }
    }
}
</script>

<style>

</style>
