<template>
	<view class="content">
		<view class="demoOne">
			<view class="demoBox">
				<image src="../../static/ImgOne.png" mode="" :lazy-load="true"></image>
				<view class="bt">出口处评估</view>
				<!-- 第一个表单 -->


				<u-form :model="form" ref="uForm">
					<u-form-item label="洗澡方法:" label-width="252rpx"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceBath">
							<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

					<u-form-item label="腹透管:" label-width="252rpx"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceDrainPipe">
							<u-radio v-for="(item, index) in radioList1" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

					<u-form-item label="病人自己消毒出口处:" label-width="450rpx" label-style="{}" :border-bottom="false"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}" label-position="top">
						<u-radio-group v-model="form.serviceDisinfected" width="200"
							style="margin-left: 125rpx; color: #333333">
							<u-radio v-for="(item, index) in radioList2" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

					<view class="inp" v-show="form.serviceDisinfected=== '否'"><input type="text" value=""
							v-model="form1.serviceCause" /></view>

					<u-form-item label="观察洗手情况:" label-width="330rpx"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceWash">
							<u-radio v-for="(item, index) in radioList2" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

					<u-form-item label="使用液体抗菌皂液:" label-width="450rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceAntibacterial" width="200" style="margin-left: 125rpx;">
							<u-radio v-for="(item, index) in radioList2" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

					<u-form-item label="使用纸巾:" label-width="330rpx"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceUseTowel">
							<u-radio v-for="(item, index) in radioList2" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

					<u-form-item label="擦手毛巾经常晒洗:" label-width="450rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceCleanTowel" width="200" style="margin-left: 125rpx;">
							<u-radio v-for="(item, index) in radioList2" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

					<u-form-item label="导管固定正确良好:" label-width="450rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceCatheterFixed" width="200" style="margin-left: 125rpx;">
							<u-radio v-for="(item, index) in radioList2" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>
				</u-form>

				<!-- 第二个表单 -->

				<view class="bt" style="margin-top: 66rpx;">腹透液交换评估</view>
				<u-form :model="form" ref="uForm">

					<u-form-item label="病人自己更换腹透液:" label-width="450rpx" label-position="top" :border-bottom="false"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceChangeFluid" width="200" style="margin-left: 125rpx;">
							<u-radio v-for="(item, index) in radioList2" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

					<view class="inp" v-show="form.serviceChangeFluid=== '否'"><input type="text" value=""
							v-model="form1.serviceCause1" /></view>

					<u-form-item label="口罩和洗手:" label-width="330rpx"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceMaskWash">
							<u-radio v-for="(item, index) in radioList2" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

					<u-form-item label="区域跨越:" label-width="330rpx"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceSpanning" v-slot="right" class="rightItem">
							<u-radio v-for="(item, index) in radioList2" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

					<u-form-item label="连接准确:" label-width="330rpx"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-radio-group v-model="form.serviceAccurately">
							<u-radio v-for="(item, index) in radioList2" :key="index" :name="item.name"
								label-size="40rpx" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
						</u-radio-group>
					</u-form-item>

				</u-form>
			</view>
		</view>

		<!-- 第三个表单 -->

		<view class="demoOne" style="top: 3000rpx; height: 3000rpx;">
			<view class="demoBox">
				<image src="../../static/imgTwo.png" mode="" :lazy-load="true"></image>
				<u-form :model="form" ref="uForm">
					<u-form-item label="水平衡的自我检测记录情况:" label-width="600rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-input type="textarea" :border='true' borderColor="#009AFF" height="118"
							v-model="form.serviceWaterBalance" />
					</u-form-item>

					<u-form-item label="腹透液浓度,留腹时间的选择:" label-width="600rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-input type="textarea" :border='true' borderColor="#009AFF" height="118"
							v-model="form.serviceConcentration" />
					</u-form-item>

					<u-form-item label="导管的保护,更换时间,预防及发生管路脱落的处理:" label-width="600rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-input type="textarea" :border='true' borderColor="#009AFF" height="118"
							v-model="form.serviceCatheter" />
					</u-form-item>

					<u-form-item label="服药依从性及目的:" label-width="600rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-input type="textarea" :border='true' borderColor="#009AFF" height="118"
							v-model="form.serviceCompliance" />
					</u-form-item>

					<u-form-item label="腹膜炎预防,症状,处理:" label-width="600rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-input type="textarea" :border='true' borderColor="#009AFF" height="118"
							v-model="form.servicePerprevent" />
					</u-form-item>

					<u-form-item label="引流不畅的原因及处理:" label-width="600rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-input type="textarea" :border='true' borderColor="#009AFF" height="118"
							v-model="form.servicePoorDrainage" />
					</u-form-item>

					<u-form-item label="饮食原因:" label-width="600rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-input type="textarea" :border='true' borderColor="#009AFF" height="118"
							v-model="form.serviceDietPrinciple" />
					</u-form-item>

					<u-form-item label="何种情况需紧急就医,联系电话知晓:" label-width="600rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-input type="textarea" :border='true' borderColor="#009AFF" height="118"
							v-model="form.serviceEmergency" />
					</u-form-item>

					<u-form-item label="其他:" label-width="600rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color':'#808080','font-weight':400}">
						<u-input type="textarea" :border='true' borderColor="#009AFF" height="118"
							v-model="form.serviceElse" />
					</u-form-item>

				</u-form>
			</view>
			<view class="uploadtit">
				请上传服务评价表：
			</view>
			<!-- 提交和上传图片按钮 -->
			<u-upload :file-list="fileList" ref="uUpload" :action="action" :header="header" :auto-upload="false"
			     :max-size="5 * 1024 * 1024" max-count="5" :on-success="onSuccess"></u-upload>
				 
			<!-- <u-upload ref="uUpload" :action="action" :auto-upload="false" max-count="5" max-size="3145728" name="image"
				:header="header" @on-success="onSuccess" width="177rpx" height="177rpx"></u-upload> -->
			<u-button @click="submitImg">提交</u-button>

			<!-- <image class="getMes" @click="getMes" src="../../static/nursebtn3.png" mode="" :lazy-load="true"></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 允许上传的图片格式
				// limitType: ['png', 'jpg', 'jpeg', 'webp', 'gif', 'JPG', 'PNG', 'JPEG', 'GIF', 'WEBP'],
				// 上传图片的携带的请求头信息
				header: {
					id: 1
				},
				// 上传图片的服务器地址
				action: "https://www.xiaohulaile.com/xh/p/alipay/upload/uploads",
				// 上传图片的图片列表
				fileList: [],
				orderID: "",
				form0: '',
				//出口处评估列表
				radioList: [{
						name: '盆浴',
						disabled: false
					},
					{
						name: '淋浴',
						disabled: false
					}
				],
				radioList1: [{
						name: '右侧',
						disabled: false
					},
					{
						name: '左侧',
						disabled: false
					}
				],
				//腹透液交换评估列表
				radioList2: [{
						name: '是',
						disabled: false
					},
					{
						name: '否',
						disabled: false
					}
				],
				//表单提交的所有数据
				form: {
					serviceBath: '', //洗澡方法
					serviceDrainPipe: '', //	腹透管
					serviceDisinfected: '', //病人自己消毒出口处
					serviceWash: '', //观察洗手情况
					serviceAntibacterial: '', //使用液体抗菌皂液
					serviceUseTowel: '', //使用纸巾
					serviceCleanTowel: '', //擦手毛巾经常洗晒
					serviceCatheterFixed: '', //导管固定正确良好
					serviceChangeFluid: '', //病人自己更换腹透液
					serviceMaskWash: '', //口罩和洗手
					serviceSpanning: '', //区域跨越
					serviceAccurately: '', //	连接准确
					serviceWaterBalance: '', //水平衡的自我检测记录情况
					serviceConcentration: '', //	腹透液浓度留腹时间的选择
					serviceCatheter: '', //导管的更换时间预防及维护
					serviceCompliance: '', //服药依从性及目的
					servicePerprevent: '', //腹膜炎预防、症状、处理
					servicePoorDrainage: '', //引流不畅的原因及处理：
					serviceDietPrinciple: '', //饮食原则
					serviceEmergency: '', //何种情况需紧急就医
					serviceElse: '', //其他
				},
				form1: {
					serviceCause: '', //原因
					serviceCause1: '', //原因1
					servicePicaddress: '' //	图片地址
				},
				pictures: []
			}
		},
		methods: {

			onSuccess(data) {
				console.log(data)
			},
			// beforeUpload(index, list) {
			// 	console.log(list[index])
			// 	uni.uploadFile({
			// 		url: "https://www.xiaohulaile.com/xh/p/alipay/upload/uploads",
			// 		filePath: list[index].url,
			// 		name: "file",
			// 		header: {
			// 			"Content-Type": "multipart/form-data"
			// 		},
			// 		formData: { //其他的formdata参数
			// 			id: 1
			// 		},
			// 		success: function(res) {
			// 			console.log('尝试请求:', JSON.parse(res.data))
			// 		}
			// 	})
			// },
			// 上传图片至服务器
			submitImg() {
				console.log('正在上传图片至服务器')
				this.$refs.uUpload.upload();
				// let files = []
				// // files = this.$refs.uUpload.lists.filter(val => {
				// // 	return val.progress == 100
				// // })
				// // 如果您不需要进行太多的处理，直接如下即可
				// files = this.$refs.uUpload.lists;
				// console.log(files)
			},
			//提交
			getMes() {
				let flag = Object.values(this.form).every(function(item) {
					return item != ''
				})
				console.log(flag)
				//判断有无未填选项
				if (flag == false) {
					uni.showToast({
						title: '有未填选项',
						icon: 'none'
					})
					return
				}
				//判断选择否时是否填写原因
				if (this.form1.serviceCause === '' && this.form.serviceDisinfected === '否') {
					uni.showToast({
						title: '有未填选项',
						icon: 'none'
					})
					return
				} else if (this.form1.serviceCause1 === '' && this.form.serviceChangeFluid === '否') {
					uni.showToast({
						title: '有未填选项',
						icon: 'none'
					})
					return
				}

				uni.showLoading({
					title: "提交中..."
				})
				//审查数据是否赋值成功
				console.log(this.form, 'form表单')
				console.log(this.form1, 'form表单')
				let data = {
					orderID: this.orderID,
					...this.form0,
					...this.form,
					...this.form1
				}
				console.log('ajax发送数据', data)
				// 提交表单
				uni.request({
					url: "https://www.qycloud.com.cn/bee/open-75661043697254584/xhll/welfare/insertInfo",
					method: "POST",
					data,
					success: (res) => {
						console.log(res)
						if (res.data.data.serviceInfo == true) {
							uni.showToast({
								title: "提交成功！",
								duration: 1000
							})
							return
						}
						if (res.data.data.serviceInfo == false) {
							uni.showToast({
								title: "请勿重复提交！",
								duration: 1000,
								icon: "none"
							})
							return
						}

					},
					complete() {
						uni.hideLoading()
					}
				})
			}
		},
		onLoad(option) {
			// decodeURIComponent 解密传过来的对象字符串
			const item = JSON.parse(decodeURIComponent(option.item));
			console.log(item)
			this.form0 = item

			let orderID = uni.getStorageSync("orderID")
			this.orderID = orderID
			console.log(orderID)

		}

	}
</script>
<style lang="less" scoped>
	//最外面大盒子
	.content {
		background: url(../../static/backImg.jpg) no-repeat;
		background-size: 750rpx 5620rpx;
		width: 750rpx;
		height: 5950rpx; //5620

		//设置每一个的列表下边框样式
		.u-border-bottom:after {
			border-bottom: 2rpx solid #d6d6d6
		}

		//设置每一个的列表下边框样式
		.u-border-bottom {
			border-bottom: 2rpx solid #d6d6d6
		}

		//外层大白盒子样式
		.demoOne {
			width: 653rpx;
			padding-bottom: 36rpx;
			background: #FFFFFF;
			border-radius: 30rpx;
			position: absolute;
			left: 48rpx;
			top: 625rpx;

			//大白盒子里面一层盒子的样式
			.demoBox {
				margin-left: 45rpx;
				margin-right: 45rpx;

				//标题图片样式
				image {
					width: 442rpx;
					height: 92rpx;
					margin-left: 60rpx;
					margin-top: -40rpx;
				}

				//列表标题设置
				.bt {
					font-size: 42rpx;
					font-family: Alibaba PuHuiTi;
					font-weigrht: 400;
					color: #333333;
					margin-top: 99rpx;
				}

				//为否时输入原因的input框样式
				.inp {
					input {
						width: 562rpx;
						height: 68rpx;
						border: 2rpx solid #009AFF;
						border-radius: 12rpx;
					}
				}
			}

			//点击上传图片样式
			.upImg {
				width: 458rpx;
				height: 92rpx;
				margin-top: 50rpx;
				margin-left: 97rpx;
			}

			//点击提交样式
			.getMes {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);

				width: 582rpx;
				height: 216rpx;
				bottom: -100rpx;
			}

			//上传图片样式
			.uploadImg {
				margin-top: 30rpx;
				margin-left: 30rpx;
			}

			.uploadtit {
				margin-left: 45rpx;
				margin-top: 45rpx;
				font-size: 34rpx;
				color: #808080;
				font-weight: 400;
			}
		}
	}
</style>
