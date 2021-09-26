<template>
    <view class="container">
        <!-- 表单 -->
        <view class="form">
            <!-- 表单1 -->
            <view class="message1">
                <view class="textItem">
                    <view class="ltext">姓名：</view>
                    <view class="rtext">
                        <view class="text">{{ this.form.userName }}</view>
                    </view>
                </view>
                <view class="textItem">
                    <view class="ltext">年龄：</view>
                    <view class="rtext">
                        <view class="text">{{ this.form.userAge }}</view>
                    </view>
                </view>
            </view>
            <!-- 表单2 -->
            <view class="message2">
                <view class="textItem">
                    <view class="ltext">电话号码：</view>
                    <view class="rtext">
                        <view class="text">{{ this.form.userPhone }}</view>
                    </view>
                </view>
                <view class="textItem">
                    <view class="ltext">身份证号码：</view>
                    <view class="rtext">
                        <view class="text">{{ this.form.userIDcard }}</view>
                    </view>
                </view>
                <view class="textItem adress">
                    <view class="ltext">服务地址：</view>
                    <view>
                        <view class="rtext">
                            <view class="text">{{ this.form.userRegion }}</view>
                        </view>
                        <view class="rtext">
                            <view class="text">{{ this.form.userAddress }}</view>
                        </view>
                    </view>
                </view>
                <view class="textItem">
                    <view class="ltext">服务时间：</view>
                    <view class="rtext">
                        <view class="text">{{ this.form.userService }}</view>
                    </view>
                </view>
            </view>

            <!-- 提交按钮 -->
            <image src="../../static/nursebtn2.png" mode="widthFix" class="submitBtn" @click="submit1"></image>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            // 表单数据
            form: []
        }
    },
    methods: {
        submit1() {
            uni.showLoading({
                title: '加载中...',
                duration: 1000,
                success: () => {
                    let orderID = this.form.orderID
                    setTimeout(() => {
                        uni.navigateTo({
                            url: '../nursePage6/nursePage6'
                        })
                    }, 1000)
                }
            })
        }
    },
    onLoad() {
        // console.log(option.item)
        // let form = JSON.parse(option.item)
        // // 储存订单相关信息
        // this.form = form[2]
        // console.log(this.form)
        //获取订单相关信息
        try {
            const value = uni.getStorageSync('order')
            if (value) {
                console.log(value)
                this.form = JSON.parse(value)[2]
            }
        } catch (e) {
            // error
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    position: relative;
    background: url(../../static/banner4.png) no-repeat;
    background-size: 100%;
    width: 750rpx;
    height: 1668rpx;

    // 表单区域
    .form {
        width: 653rpx;
        height: 944rpx;
        background: url(../../static/banner4-1.png) no-repeat;
        background-size: 100%;
        position: absolute;
        bottom: 135rpx;
        left: 50%;
        transform: translateX(-50%);
        padding: 120rpx 41rpx 0;

        // 大部分表单样式
        .textItem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 30rpx;

            .ltext {
                font-size: 30rpx;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0rpx;
                color: #999999;
            }

            .rtext {
                width: 380rpx;
                border-bottom: 1rpx solid #cccccc;
                padding-bottom: 5rpx;
                padding-left: 28rpx;

                .text {
                    font-size: 40rpx;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0rpx;
                    color: #333232;
                }
            }
        }

        // 表单1
        .message1 {
        }

        // 表单2
        .message2 {
            margin-top: 110rpx;

            .rtext {
                .text {
                    font-size: 30rpx;
                }
            }
        }

        // 地址样式
        .adress {
            align-items: unset;
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
