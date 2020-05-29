<template>

	<div id="home">
		<el-container style="height: 100%; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu :unique-opened="true" style="height: 100%;" :default-active="$route.path" @select="handleSelect">
					<el-menu-item index="/home/tab2">
						<i class="el-icon-menu"></i>
						<span slot="title">系统首页</span>
					</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item index="/home/tab1">选项1</el-menu-item>
						<el-menu-item index="/home/tab3">选项2</el-menu-item>
						<el-menu-item index="1-3">选项3</el-menu-item>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>导航三</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="3-1">选项1</el-menu-item>
							<el-menu-item index="3-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="3-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="3-4">
							<template slot="title">选项4</template>
							<el-menu-item index="3-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
				</el-menu>
			</el-aside>

			<el-container>
				<el-header style="text-align: right; font-size: 12px; height: 30px;">
					<el-row class="gd-home-main">
						<el-col :span="20">

						</el-col>
						<el-col :span="4">
							<el-dropdown>
								<i class="el-icon-setting" style="margin-right: 15px"></i>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>查看</el-dropdown-item>
									<el-dropdown-item>新增</el-dropdown-item>
									<el-dropdown-item>删除</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
							<span>王小虎</span>
						</el-col>
					</el-row>
				</el-header>
				<el-main style="background-color: rgb(238, 241, 246)">
					<el-row>
						<el-col :span="24">
							<el-breadcrumb separator="/">
								<el-breadcrumb-item :to="{ path: '/home/tab2' }">首页</el-breadcrumb-item>
								<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
								<el-breadcrumb-item>活动列表</el-breadcrumb-item>
								<el-breadcrumb-item>活动详情</el-breadcrumb-item>
							</el-breadcrumb>
						</el-col>
					</el-row>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>

	</div>

</template>
<style lang="less">
	#home {
		height: 100%;
   .el-main{
		 padding: 10px;
	 }
		.el-header {
			background-color: #E4EAF1;
			color: #333;
			line-height: 60px;
		}

		.el-aside {
			color: #333;
		}

		.el-submenu__title {
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}

		.gd-home-main .el-col {
			height: 30px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}


		.el-menu-item {
			display: flex;
			align-items: center;
		}
	}
</style>

<script>
	export default {
		name: 'layout',
		data() {
			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				tableData: Array(20).fill(item)
			}
		},
		mounted() {
			// this.$router.push('/page2')
		},
		methods: {
			handleSelect( path) {
				this.$router.push(path)
			},
		}
	};
</script>
