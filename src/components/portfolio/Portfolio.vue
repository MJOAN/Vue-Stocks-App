<template>
    <div>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

// above :stock is passing stock as a prop => /comp/port/stock
// here we could 'GET' the stockPortfolio from getters in 
// in modules/portfolio instead we are renaming our 
// stockPortfolio() to stocks in line 19

    export default {
    		computed: {
    				...mapGetters({
    					stocks: 'stockPortfolio'
    				})
    		},
        components: {
            appStock: Stock
        }
    }
</script>