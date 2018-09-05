import {auth} from "@/plugins/firebaseInit.js";
//여기서 로긴 체크 첫번째로 하고..
export default ({store}) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
        store.commit('SET_USER',user);
    }
  })
}
