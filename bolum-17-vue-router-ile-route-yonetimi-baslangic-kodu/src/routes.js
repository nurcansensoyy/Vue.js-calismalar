import Home from "./components/Home";
import User from "./components/user/User";
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";


export const routes = [
    {
        path: '/', component: Home, name: 'anasayfa'
         // '' ile gösterilen nasıl bir component gelirse component kısmında hangi component in çalışacağını belirlemeye yardımcıdır.
    },
    {
        path: '/user', component: User, name: 'kullanici', children: [ 
            { path: '', component: UserStart }, //  /user
            { path: ':id', component: UserDetail },//  /user/12
            { path : ':id/edit',component:UserEdit, name : "userEdit"}//  /user/12/edit
            
        ]
    }

]