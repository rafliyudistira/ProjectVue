<template>
    <div class="d-flex">
        <SideBarComponents></SideBarComponents>
        <div>
        <NavbarComponents></NavbarComponents>
        <AddkkComponents></AddkkComponents>
        </div>
    </div>
</template>

<script>
import SideBarComponents from "../components/SideBarComponents.vue"
import NavbarComponents from "../components/NabvarComponents.vue"
import AddkkComponents from "../components/AddkkComponents.vue"

export default {
    name : "HomeViews",
    components : {
        SideBarComponents,
        NavbarComponents,
        AddkkComponents,
    }

}
</script>

<style>

</style>