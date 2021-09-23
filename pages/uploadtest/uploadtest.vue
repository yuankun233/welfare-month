<template>
	<view class="container">
		<view class="spsdan overflow">
			<view class="fl mar-fr10">评价晒单</view>
			<view class="fl pjbox">
				<textarea class="textarea" type="text" value="" placeholder="分享心得，给万千想买的人一个参考" />
				<view v-for="(item,index) in img" class="img">
					<view class="iconfont iconcha2" v-if="img" @click="delet(index)"></view>
					<image :src="item" mode=""></image>
				</view>
			</view>
		</view>
		<view class="chuantu overflow">
			<image @click="upimg" style="width: 400rpx;height: 100rpx;" src="../../static/upPhoto.png" mode=""></image>
			<span class="chuantu-text">共<span class="red">{{img.length}}</span>张</span>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				img: '',
				add_class: ''
			}
		},
		methods: {
			// 上传图片
			upimg() {
				uni.chooseImage({
					success: (res) => {
						console.log(res)
						console.log(res.tempFilePaths)
						console.log(res.tempFiles)
						let formdata = new FormData();
						formdata.append('file', res.tempFiles);
						console.log(formdata)
						uni.request({
							url: "https://www.xiaohulaile.com/xh/p/alipay/upload/uploads",
							method: "POST",
							header:{
								"content-type": "multipart/form-data;"
							},
							data: {
								file:res.tempFiles,
								id: 1
							},
							success(res) {
								console.log(res)
								if (this.img) {
									this.img.push(...res.tempFilePaths)
								} else {
									this.img = res.tempFilePaths
								}
							}
						})
						// uni.uploadFile({
						// 	url: "https://www.xiaohulaile.com/xh/p/alipay/upload/uploads",
						// 	filePath: res.tempFilePaths[0],
						// 	name: 'file', //后台接收字段名
						// 	formData: this.formdata,
						// 	header: {
						// 		"Content-Type": "multipart/form-data",
						// 		"token": this.token
						// 	},
						// 	success: (res) => {
						// 		if (res.data.code == 200) {
						// 			console.log('请求成功_______________', res)
						// 		}

						// 	},
						// 	fail: (err) => {
						// 		console.log('请求失败_______________', err)
						// 	}
						// })
					}
				})
			},
			// 删除照片
			delet(index) {
				this.img.splice(index, 1)
			},
			addclass(index) {
				this.add_class = index;
			}
		}
	}
</script>

<style lang="less" scoped>
	.btn {}
</style>
