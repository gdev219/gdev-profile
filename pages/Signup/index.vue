<template>
    <div>
        <div>
            회원가입 페이지
        </div>
        <div>
            <input type="text" v-model="email" placeholder="아이디">
            <input type="password" v-model="password" placeholder="비밀번호">
            <button v-on:click="signUp()">ㅁㄴㅇ</button>
        </div>
    </div>
</template>
<script>
import { auth } from "@/plugins/firebaseInit.js";
export default {
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        signUp: function(){
            console.log(this.email,this.password);
            auth.createUserWithEmailAndPassword(this.email,this.password).then(
                function(user){
                    alert(user);
                    console.log(user);
                },
                function(err){
                    alert(err);
                    console.log(err);
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
