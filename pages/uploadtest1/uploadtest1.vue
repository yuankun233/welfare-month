<template>
	<view>
		<!-- 提交和上传图片按钮 -->
		<u-upload @before-upload="beforeUpload" :auto-upload="false"></u-upload>
		<u-button @click="submitImg">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			beforeUpload(index, list) {
				console.log(list[index])
				uni.uploadFile({
					url: "https://www.xiaohulaile.com/xh/p/alipay/upload/uploads",
					filePath: list[index].url,
					name: "file",
					header: {
						"Content-Type": "multipart/form-data"
					},
					formData: { //其他的formdata参数
						id: 1
					},
					success: function(res) {
						console.log('尝试请求:', JSON.parse(res.data))
					}
				})
			},
			submitImg() {
				console.log('正在上传图片至服务器')
				let files = []
				// files = this.$refs.uUpload.lists.filter(val => {
				// 	return val.progress == 100
				// })
				// 如果您不需要进行太多的处理，直接如下即可
				files = this.$refs.uUpload.lists;
				console.log(files)
			}
		}
	}
</script>

<style>

</style>
