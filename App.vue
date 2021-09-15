<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	// .uitem {
	// 	border: 2rpx solid #009AFF;
	// 	border-radius: 12rpx;
	// 	width: 562rpx;
	// 	// height: 87rpx;
	// 	margin: 74rpx 0 0 49rpx;
	// 	padding: unset;
	// 	padding-left: 22rpx;
	// }
</style>
