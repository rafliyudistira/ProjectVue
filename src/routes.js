import LoginViews from "./pages/LoginViews.vue"
import HomeViews from "./pages/HomeViews.vue"
import RegisterViews from "./pages/RegisterViews.vue"

export default[
    {
        path : "/",
        component : LoginViews,
    },
    {
        path : "/Register",
        component : RegisterViews,
    },
    {
        path : "/Home",
        component : HomeViews,
    },
]