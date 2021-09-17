<template>
	<view>

		<uni-file-picker v-model="imageValue" file-mediatype="image" :auto-upload="false" :imageStyles="imageStyles"
			@progress="progress" @select="select" limit="5" ref="files">
			<image src="../../static/upPhoto.png" mode="widthFix"></image>
		</uni-file-picker>

		<button @click="upload()">上传图片片</button>


		<u-upload ref="uUpload" :action="action" :auto-upload="false"></u-upload>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageValue: [],
				imageStyles: {
					width: '458rpx',
					height: '92rpx',
					border: false
				},
				action: '',
				fileList: []
			}
		},
		methods: {
			upload() {
				this.$refs.files.chooseFiles()
				console.log(this.$refs.files)
			},
			submit() {
				this.$refs.uUpload.upload();
			},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
				// 组装数据
				const event = e.tempFiles
				console.log(event)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			}
		}
	}
</script>

<style lang="less" scoped>
	.btn {}
</style>
