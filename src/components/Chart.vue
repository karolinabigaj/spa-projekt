<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}
</script>
<style scoped>
    canvas{
        margin-top: 2%;
    }
</style>

