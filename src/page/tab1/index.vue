<template>
	<div>
		<div class="gd-chart-p">
			<ve-line :data="chartData"></ve-line>
		</div>
		<div class="gd-chart-progress">
			<el-progress  :stroke-width="10" :percentage="70" color="#804040"></el-progress>
			<el-progress  :stroke-width="10" :percentage="100" color="#FF8000" ></el-progress>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				chartData: {
					columns: ['日期', '访问用户', '下单用户', '下单率'],
					rows: [{
							'日期': '1/1',
							'访问用户': 1393,
							'下单用户': 1093,
							'下单率': 0.32
						},
						{
							'日期': '1/2',
							'访问用户': 3530,
							'下单用户': 3230,
							'下单率': 0.26
						},
						{
							'日期': '1/3',
							'访问用户': 2923,
							'下单用户': 2623,
							'下单率': 0.76
						},
						{
							'日期': '1/4',
							'访问用户': 1723,
							'下单用户': 1423,
							'下单率': 0.49
						},
						{
							'日期': '1/5',
							'访问用户': 3792,
							'下单用户': 3492,
							'下单率': 0.323
						},
						{
							'日期': '1/6',
							'访问用户': 4593,
							'下单用户': 4293,
							'下单率': 0.78
						}
					]
				},

			}
		},
		methods: {

		}
	}
</script>
<style>
	.gd-chart-p {
		width: 400px;
		height: 400px;
	}
	.gd-chart-progress{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 300px;
	}
	.el-progress__text{
		width: 4.25rem;
	}
	.el-progress{
		display: flex;
		margin-bottom: 0.625rem;
	}
</style>
