<template>
	<view class="container">
		<!-- 临床评估模块 -->
		<view class="form1">

			<u-form :model="form1" ref="uForm">
				<u-form-item label="水肿:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceEdema" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="气促:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceAnhelation" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="胸闷:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceChest" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="疲劳:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceTired" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="腿抽筋:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceCramp" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="头痛:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceHeadache" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="体重减轻:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceLoseWeight" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="恶心呕吐:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceNausea" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="肠道问题:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceIntestinal" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="出口感染:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceExport" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="隧道感染:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.serviceTunnel" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="腹膜炎:" class="radioitem" label-width="293rpx"
					:label-style="{'font-size':'34rpx','color': '#808080'}">
					<u-radio-group v-model="form1.servicePeritonitis" class="groupitem" v-slot="right">
						<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>

			</u-form>
		</view>
		<!-- 环境评估模块 -->
		<view class="form2">
			<u-form :model="form2" ref="uForm">
				<view class="section1">
					<view class="title1">
						渗透区域
					</view>
					<u-form-item label="清洁换液区域:" class="radioitem" label-width="293rpx"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.serviceExchange" class="groupitem" v-slot="right">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="光线充足:" class="radioitem" label-width="293rpx"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.serviceWellLit" class="groupitem" v-slot="right">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="穿堂风:" class="radioitem" label-width="293rpx"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.serviceVentilation" class="groupitem" v-slot="right">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="用电设备安全:" class="radioitem" label-width="293rpx"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.serviceSafety" class="groupitem" v-slot="right">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="电子/宠物/花草:" class="radioitem" label-width="293rpx"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.serviceWormPet" class="groupitem" v-slot="right">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="抽烟:" class="radioitem" label-width="293rpx"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.serviceSmoking" class="groupitem" v-slot="right">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="床边有电话:" class="radioitem" label-width="293rpx"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.servicePhoneBed" class="groupitem" v-slot="right">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>


				</view>

				<view class="section2">
					<view class="title1">
						环境评估
					</view>
					<u-form-item label="宠物、蟑螂等:" class="radioitem" label-width="293rpx"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.servicePetCockroach" class="groupitem" v-slot="right">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="潮湿、有水:" class="radioitem" label-width="293rpx"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.serviceMoist" class="groupitem" v-slot="right">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="腹透液超过有效期:" class="" label-width="450rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.serviceValidity" class="groupitem" v-slot="right" style="margin-left: 125rpx;" width="200">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="腹透液储存按日期摆放:" class="" label-width="450rpx" label-position="top"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.serviceSort" class="groupitem" v-slot="right" style="margin-left: 125rpx;" width="200">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="储存至少14天腹透液:" class="" label-width="450rpx" label-position="top" :border-bottom="false"
						:label-style="{'font-size':'34rpx','color': '#808080'}">
						<u-radio-group v-model="form2.serviceInventory" class="groupitem" v-slot="right" style="margin-left: 125rpx;" width="200">
							<u-radio v-for="(item, index) in radio1" :key="index" :name="item.name" label-size="40"
								:disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</u-form-item>



				</view>
			</u-form>
			<!-- 下一页 -->
			<image src="../../static/nextpage.png" mode="widthFix" class="nextPage" @click="nextPage"></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//单选1
				radio1: [{
						name: "是"
					},
					{
						name: "否"
					}
				],
				// 临床评估表单信息 12个
				form1: {
					serviceEdema: "", //水肿
					serviceAnhelation: "", //气促
					serviceChest: "", //胸闷
					serviceTired: "", //疲劳
					serviceCramp: "", //腿抽筋
					serviceHeadache: "", //头痛
					serviceLoseWeight: "", //体重减轻
					serviceNausea: "", //恶心呕吐
					serviceIntestinal: "", //肠道问题
					serviceExport: "", //出口感染
					serviceTunnel: "", //隧道感染
					servicePeritonitis: "" //腹膜炎
				},
				// 环境评估信息
				form2: {
					// 渗透区域
					serviceExchange: "", //清洁换液区域
					serviceWellLit: "", //光线充足
					serviceVentilation: "", //穿堂风
					serviceSafety: "", //用电设备安全
					serviceWormPet: "", //电子/宠物/花草
					serviceSmoking: "", //抽烟
					servicePhoneBed: "", //床边有电话
					// 储存区域
					servicePetCockroach: "", //宠物、蟑螂等
					serviceMoist: "", //潮湿、有水
					serviceValidity: "", //腹透液超过有效期
					serviceSort: "", //腹透液储存按日期摆放
					serviceInventory: "" //储存至少14天腹透液
				}
			}
		},
		methods: {
			//下一页
			nextPage() {
				//表单非空验证
				let flag1 = Object.values(this.form1).every(function(item) {
					return item != ''
				})
				let flag2 = Object.values(this.form2).every(function(item) {
					return item != ''
				})
				console.log(flag1, flag2)
				if (flag1 && flag2) {
					console.log('通过非空验证')
					
					let form = {
						...this.form1,
						...this.form2
					}
					let item = encodeURIComponent(JSON.stringify(form))
					console.log(form)
					uni.navigateTo({
						url:"../nursePage1/nursePage1?item="+item		
					})
					return
				}
				uni.showToast({
					title: '有未填选项',
					icon: 'none'
				})
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		position: relative;
		width: 750rpx;
		height: 3900rpx;
		background: url(../../static/banner5.png) no-repeat;
		background-size: 100%;

		.u-border-bottom:after {
			border-bottom: 2rpx solid #d6d6d6
		}
		.u-form-item__body{
			flex-wrap: wrap !important;
		}
		// 临床评估
		.form1 {
			position: absolute;
			left: 49rpx;
			top: 589rpx;
			width: 653rpx;
			height: 1319rpx;
			background: url(../../static/banner5-1.png) no-repeat;
			background-size: 100%;
			padding: 102rpx 45rpx 0;


		}

		// 单选框样式
		.radioitem {
			height: 98rpx;

			.groupitem {
				display: flex;
				width: 350rpx;
				justify-content: space-between;
			}
		}

		.radioSp1 {
			
			.groupitem {
				display: flex;
				width: 300rpx;
				justify-content: space-between;
			}
		}

		// 环境评估
		.form2 {
			position: absolute;
			left: 49rpx;
			bottom: 132rpx;
			width: 653rpx;
			height: 1778rpx;
			background: url(../../static/banner5-2.png) no-repeat;
			background-size: 100%;
			padding: 0 45rpx;

			//渗透区域
			.section1 {
				margin-top: 126rpx;

				.title1 {
					font-size: 42rpx;
					line-height: 36rpx;
					letter-spacing: 1rpx;
					color: #333333;
					margin-bottom: 10rpx;
				}

			}

			//储存区域
			.section2 {
				margin-top: 54rpx;

				.title1 {
					font-size: 42rpx;
					line-height: 36rpx;
					letter-spacing: 1rpx;
					color: #333333;
					margin-bottom: 10rpx;
				}

			}

			// 下一页按钮
			.nextPage {
				left: 50%;
				transform: translateX(-50%);
				width: 458rpx;
				height: 92rpx;
				position: absolute;
				bottom: -110rpx;
			}
		}


	}
</style>
