<template>
	<view class="container">
		<!-- 表单区域 -->
		<view class="userform">
			<!-- 用户表单信息 -->
			<u-form :model="form" ref="uForm" :border-bottom="false">
				<u-form-item label="联系电话:" class="uitem" label-width="150rpx" :border-bottom="false"
					:label-style="{'font-size':'30rpx','font-family':'Alibaba PuHuiTi','font-weight': 400,'color': '#808080'}">
					<u-input v-model="form.tel" class="uinput" placeholder="请输入" :autoHeight="false" />
				</u-form-item>

				<!-- <u-form-item label="来源医院:" class="uitem" label-width="150rpx" style="padding-right: 20rpx;"
					:label-style="{'font-size':'30rpx','font-family':'Alibaba PuHuiTi','font-weight': 400,'color': '#808080'}">
					<u-input v-model="form.hospital" type="select" @click="show = true" placeholder="请选择" />
				</u-form-item> -->
				<u-form-item label="是否本人:" class="uitem" label-width="150rpx" style="padding-right: 20rpx;"
					:label-style="{'font-size':'30rpx','font-family':'Alibaba PuHuiTi','font-weight': 400,'color': '#808080'}">
					<u-radio-group v-model="form.isSelf" @change="radioGroupChange">
						<u-radio @change="radioChange" v-for="(item, index) in list" :key="index" :name="item.name"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>

				<u-form-item label="服务时间:" class="uitem" label-width="150rpx" :border-bottom="false"
					:label-style="{'font-size':'30rpx','font-family':'Alibaba PuHuiTi','font-weight': 400,'color': '#808080'}">

					<view class="uni-list select">
						<view class="uni-list-cell">

							<view class="uni-list-cell-db">
								<picker mode="date" :value="form.date" :start="startDate" :end="endDate"
									@change="bindDateChange">
									<view class="uni-input">{{form.date}}</view>
								</picker>
							</view>
						</view>
					</view>
				</u-form-item>
			</u-form>
			<!-- 预约按钮 -->
			<image src="https://www.xiaohulaile.com/wxcx/benimg/userbtn.png" mode="widthFix" class="bookBtn"
				@click="bookServe"></image>
		</view>
		<!-- 预约二维码 -->
		<image :src="image" mode="widthFix" @click="preview(image)" class="qrCode"></image>
		<!-- 医院选择下拉框 -->
		<u-action-sheet :list="hospitalList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		data() {

			return {

				// 用户表单相关数据
				form: {
					tel: "",
					hospital: "",
					isSelf: "",
					date: '请选择'
				},
				image: "https://www.xiaohulaile.com/wxcx/benimg/userQr.png", // 二维码
				// 来源医院选择框
				show: false,
				hospitalList: [{
						text: '龙华医院'
					},
					{
						text: '小护医院'
					},
					{
						text: '上海人民医院'
					}
				],
				list: [{
						name: "是"
					},
					{
						name: "否"
					}
				]

			}
		},
		methods: {
			// 预览图片
			preview(e) {
				let array = [];
				array.push(e);
				uni.previewImage({
					urls: array,
					current: array[0]
				});
			},
			// 预约服务
			bookServe() {
				let data = {
					userPhone: this.form.tel,
					userService: this.form.date,
					oneself: this.form.isSelf
				}
				console.log(data)
				uni.request({
					url: "https://www.qycloud.com.cn/bee/open-75661043697254584/xhll/welfare/insertUsers",
					data,
					method:"POST",
					success(res) {
						console.log(res)
						uni.showToast({
							title: "预约成功！",
							icon: "success",
							duration: 1000
						})
					}
				})

			},
			// 下拉选择框
			actionSheetCallback(index) {
				this.form.hospital = this.hospitalList[index].text;
			},
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// this.form.isSelf = e.target.value
				console.log(e)
			},
			// 日期级联选择器相关方法
			bindDateChange: function(e) {
				this.form.date = e.target.value
				console.log('失能时间', this.form.date)
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}


		}
	}
</script>

<style lang="less" scoped>
	.container {
		position: relative;
		width: 750rpx;
		height: 5294rpx;
		background: url(https://www.xiaohulaile.com/wxcx/benimg/banner1.jpg) no-repeat;
		background-size: 100%;

		// 用户表单
		.userform {
			width: 653rpx;
			height: 474rpx;
			background: #FFFFFF;
			border-radius: 30rpx;
			position: absolute;
			bottom: 503rpx;
			left: 50%;
			transform: translateX(-50%);
			// 输入框
			padding-left: 49rpx;

			.uitem {
				border: 2rpx solid #009AFF;
				border-radius: 12rpx;
				width: 562rpx;
				// height: 87rpx;
				margin-top: 31rpx;
				padding: unset;
				padding-left: 22rpx;
			}

			//laber样式
			.u-form-item--left {

				font-size: 30rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #808080 !important;

			}

			.uitem:nth-of-type(1) {
				margin-top: 44rpx;
			}

			// 预约按钮
			.bookBtn {
				left: 50%;
				transform: translateX(-50%);
				width: 458rpx;
				height: 92rpx;
				position: absolute;
				bottom: -29rpx;
			}

		}

		.qrCode {
			position: absolute;
			left: 85rpx;
			bottom: 134rpx;
			width: 158rpx;
			height: 160rpx;
		}
	}
</style>
