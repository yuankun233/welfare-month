<template>
	<view class="container">
		<!-- 表单 -->
		<view class="form">
			<view class="message1 message">
				您好，<span class="light">谢勇桥</span>护士
			</view>
			<view class="message2 message">
				已服务<span class="light">62</span>人
			</view>
			<u-form :model="form" ref="uForm" :errorType="['toast']">
				<u-form-item label="助理护士手机号码:" class="uitem" label-width="auto" :border-bottom="false"
					prop="assistantNurseTel"
					:label-style="{'font-size':'24rpx','font-family':'Alibaba PuHuiTi','font-weight': 400,'color': '#808080'}">
					<u-input v-model="form.assistantNurseTel" class="uinput" placeholder="请输入" :autoHeight="false" maxlength="11" />
				</u-form-item>
				<u-form-item label="客户手机号码:" class="uitem" label-width="auto" :border-bottom="false" prop="userTel"
					:label-style="{'font-size':'24rpx','font-family':'Alibaba PuHuiTi','font-weight': 400,'color': '#808080'}">
					<u-input v-model="form.userTel" class="uinput" placeholder="请输入" :autoHeight="false" maxlength="11" />
				</u-form-item>
			</u-form>
			<!-- 提交按钮 -->
			<image src="../../static/nursebtn1.png" mode="widthFix" class="submitBtn"
				@click="submit2"></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 表单数据
				form: {
					assistantNurseTel: "",
					userTel: ""
				},
				// 表单校验规则
				rules: {
					// 字段名称
					assistantNurseTel: [{
							required: true,
							message: '请输入助理护士手机号码'
						},
						{
							pattern: /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/,
							// 正则检验前先将值转为字符串
							transform(value) {
								return String(value);
							},
							message: '助理护士手机号码格式错误',
							trigger: ['change', 'blur']
						}
					],
					userTel: [{
							required: true,
							message: '请输入客户手机号码'
						},
						{
							pattern: /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/,
							// 正则检验前先将值转为字符串
							transform(value) {
								return String(value);
							},
							message: '客户手机号码格式错误',
							trigger: ['change', 'blur']
						}
					]
				}
			}
		},
		methods: {
			submit2() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						uni.navigateTo({
							url: "../nursePage3/nursePage3"
						})
					} else {
						console.log('验证失败');
					}
				})


			}
		},
		//表单验证规则
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style lang="less" scoped>
	.container {
		position: relative;
		background: url(../../static/banner3.png) no-repeat;
		background-size: 100%;
		width: 750rpx;
		height: 1334rpx;

		// 表单区域
		// 提示语
		.message {

			font-size: 34rpx;
			line-height: 24rpx;
			letter-spacing: 1rpx;
			line-height: auto;

			.light {
				color: #0177fe;
				font-size: 52rpx;
				margin-right: 25rpx;
			}
		}

		.message1 {
			margin: 41rpx 0 0 49rpx;
		}

		.message2 {
			margin: 50rpx 0 0 49rpx;
		}

		.form {
			width: 653rpx;
			height: 564rpx;
			background-color: #ffffff;
			border-radius: 30rpx;
			position: absolute;
			bottom: 210rpx;
			left: 50%;
			transform: translateX(-50%);

			// 输入框样式

			.uitem {
				border: 2rpx solid #009AFF;
				border-radius: 12rpx;
				width: 562rpx;
				// height: 87rpx;
				margin: 30rpx 49rpx 0;
				padding: unset;
				padding-left: 22rpx;
			}

			.uitem:nth-of-type(1) {
				margin: 90rpx 0 0 49rpx;
			}

			// 提交按钮
			.submitBtn {
				left: 50%;
				transform: translateX(-50%);
				width: 582rpx;
				height: 230rpx;
				position: absolute;
				bottom: -120rpx;
			}
		}

	}
</style>
