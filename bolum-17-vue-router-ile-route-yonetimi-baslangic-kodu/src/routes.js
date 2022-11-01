import Home from "./components/Home";
import User from "./components/user/User";

export const routes = [
    {
        path : '/',component : Home , name : 'anasayfa' // '' ile gösterilen nasıl bir component gelirse component kısmında hangi component in çalışacağını belirlemeye yardımcıdır.
    },
    {
        path : '/user',component : User, name : 'kullanici'
    }

]