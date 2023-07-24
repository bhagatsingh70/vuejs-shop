<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          This is the default title!
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body seminor-login-modal-body">
        <slot name="body">
        
            <form className="seminor-login-form" @submit.prevent="handleLoginSubmit">
                <div className="form-group">
                    <input type="email" className="form-control"  v-model="username" required autoComplete="off" />
                    <label className="form-control-placeholder" htmlFor="name">Email address</label>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" v-model="password" required autoComplete="off" />
                    <label className="form-control-placeholder" htmlFor="password">Password</label>
                </div>
                <div className="form-group">
                    <label className="container-checkbox">
                        Remember Me On This Computer
                        <input type="checkbox" defaultChecked required />
                        <span className="checkmark-box"></span>
                    </label>
                </div>
                <div className="btn-check-log">
                    <button type="submit"   className="btn-check-login">Login</button>
                </div>
                <div className="forgot-pass-fau text-center pt-3">
                    <a href="#" className="text-secondary">Forgot Your Password?</a>
                </div>
                <div className="create-new-fau text-center pt-3">
                    <a href="#" className="text-primary-fau"><span data-toggle="modal" data-target="#sem-reg" data-dismiss="modal">Create A New Account</span></a>
                </div>
            </form>
       
        </slot>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
           
        </slot>
        <!-- <button
          type="button"
          class="btn-green"
          @click="close"
        >
          Close Modal
        </button> -->
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default{
  name : 'LoginModal',
//   created(){
//    toast.error("Login Successfull", {
//         autoClose: 5000,
//     });               
//     toast.success("Login Successfull", {
//         autoClose: 5000,
//     });
//   },

  data(){
    return {
        username:null,
        password:null
    }
  },
   methods: {
      close() {
        this.$emit('close');
      },
      async handleLoginSubmit(){
          await axios.post('login', {
             email: this.username,
             password: this.password
        }).then(response=>{
            console.log(response);
             if (response.data.success) {
                toast.success("Login Successfull", {
                    autoClose: 2000,
                });
                sessionStorage.setItem('isLoggedIn', 'yes');
                sessionStorage.setItem('loggedInToken', response.data.data.token);
                sessionStorage.setItem('loggedId', response.data.data.user.id);
                sessionStorage.setItem('user_data', JSON.stringify(response.data.data.user));                
                this.$router.push('/');
            }else{
                 toast.error("Invalid login credentials", {
                    autoClose: 2000,
                })
            }
        });
      }
    },
}
</script>
<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    margin: 10% 25% 0;
    width: 50%;
    height: 300px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  
  @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
.seminor-login-modal-body .close{
  position: relative;
  top: -45px;
  left: 10px;
 color: #1cd8ad;
 }
 .seminor-login-modal-body .close{
     opacity:0.75;
 }
 
 .seminor-login-modal-body .close:focus, .seminor-login-modal-body .close:hover {
     color: #39e8b0;
  opacity: 1;
  text-decoration: none;
  outline:0;
 }
 
 .seminor-login-modal .modal-dialog .modal-content{
     border-radius:0px;
 }
 
 /* form animation */
 .seminor-login-form .form-group {
   position: relative;
   margin-bottom: 1.5em !important;
 }
 .seminor-login-form .form-control{
  border: 0px solid #ced4da !important;
  border-bottom:1px solid #adadad !important;
  border-radius:0 !important;
 }
 .seminor-login-form .form-control:focus, .seminor-login-form .form-control:active{
  outline:none !important;
  outline-width: 0;
  border-color: #adadad !important;
  box-shadow: 0 0 0 0.2rem transparent;
 }
 *:focus {
  outline: none;
 }
 .seminor-login-form{
  padding: 2em 0 0;
 }
 
 .form-control-placeholder {
 position: absolute;
 top: 0;
 padding: 7px 0 0 13px;
 transition: all 200ms;
 opacity: 0.5;
 border-top: 0px;
 border-left: 0;
 border-right: 0;
 }
 
 .form-control:focus + .form-control-placeholder,
 .form-control:valid + .form-control-placeholder {
 font-size: 75%;
 -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
 opacity: 1;
 }
 
 .container-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
 }
 .checkmark-box {
  position: absolute;
  top: -5px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #adadad;
 }
 .container-checkbox {
  display: block;
  position: relative;
  padding-left: 40px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 1.1;
 }
 .container-checkbox input:checked ~ .checkmark-box:after {
  color: #fff;
 }
 .container-checkbox input:checked ~ .checkmark-box:after {
  display: block;
 }
 .container-checkbox .checkmark-box:after {
  left: 10px;
  top: 4px;
  width: 7px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
 }
 .checkmark:after, .checkmark-box:after {
  content: "";
  position: absolute;
  display: none;
 }
 .container-checkbox input:checked ~ .checkmark-box {
  background-color: #f58220;
  border: 0px solid transparent;
 }
 .btn-check-log .btn-check-login {
  font-size: 16px;
  padding: 10px 0;
 }
 button.btn-check-login:hover {
     color: #fff;
     background-color: #f58220;
     border: 2px solid #f58220;
 }
 .btn-check-login {
  color: #f58220;
  background-color: transparent;
  border: 2px solid #f58220;
  transition: all ease-in-out .3s;
 }
 .btn-check-login {
  display: inline-block;
  padding: 12px 0;
  margin-bottom: 0;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border-radius: 0;
  width: 100%;
 }
 .forgot-pass-fau a {
     text-decoration: none !important;
     font-size: 14px;
 }
 .text-primary-fau {
     color: #1959a2;
 }
 
 .select-form-control-placeholder{
   font-size: 100%;
     padding: 7px 0 0 13px;
     margin: 0;
 }
 
.modal
{
  overflow-y: scroll;
}
</style>