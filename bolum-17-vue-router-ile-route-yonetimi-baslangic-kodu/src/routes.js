import Home from "./components/Home";
import User from "./components/user/User";
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";
import Header from "./components/Header";


export const routes = [
    {
        path: '/', name: 'anasayfa', components: {
            default: Home,
            "header-top" : Header,
        }
         
    },
    {
        path: '/user', name: 'kullanici',
        components: {
            default: User,
            "header-top" : Header
        },
        children: [ 
            { path: '', component: UserStart }, //  /user
            {
                path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    console.log("Route Seviyesinde kontrol")
                    next();
            }  },//  /user/12
            { path : ':id/edit',component:UserEdit, name : "userEdit"}//  /user/12/edit
            
        ]
    },
    {path : "/redirect", redirect : "/user"}, //url e redirect yazınca user a gitmesini sağladık
    {path : "*", redirect: "/" }
]