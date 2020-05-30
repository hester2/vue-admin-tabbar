<template>
	<el-table :header-cell-style="{background:'#eef1f6',color:'#606266'}" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
		<el-table-column label="日期" width="180">
			<template slot-scope="scope">
				<i class="el-icon-time"></i>
				<span style="margin-left: 10px">{{ scope.row.date }}</span>
			</template>
		</el-table-column>
		<el-table-column label="姓名" width="180" >
			<template slot-scope="scope">
				<p>姓名: {{ scope.row.name }}</p>
			</template>
		</el-table-column>
		<el-table-column label="住址" width="1020">
			<template slot-scope="scope">
				<p>住址: {{ scope.row.address }}</p>
			</template>
		</el-table-column>
		<el-table-column align="right">
			<template slot="header" slot-scope="scope">
				<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
			</template>
			<template slot-scope="scope">
				<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				search: ''
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			}
		},
	}
</script>
<style >
	.el-row{
		margin-bottom: 20px;
	}
</style>