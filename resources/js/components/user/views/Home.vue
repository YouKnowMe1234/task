<template>
    <div>
        <Header />
        <div id="layoutSidenav">
            <Sidebar />
            <div id="layoutSidenav_content">
                <router-view></router-view>
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Sidebar from './Sidebar.vue';

export default {
    components: {
        Header,
        Sidebar,
        Footer
    }
}
</script>

