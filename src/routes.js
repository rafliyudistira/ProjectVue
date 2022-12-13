import LoginViews from "./pages/LoginViews.vue"
import HomeViews from "./pages/HomeViews.vue"
import RegisterViews from "./pages/RegisterViews.vue"
import AddkkViews from "./pages/AddkkViews.vue"
import DetailkkViews from "./pages/DetailkkViews.vue"

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
    {
        path : "/Addkk",
        component : AddkkViews,
    },
    {
        path : "/Detailkk",
        component : DetailkkViews,
    },
]