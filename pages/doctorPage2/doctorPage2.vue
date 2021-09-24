<template>
    <view class="container">
        <!-- 医生推荐信息 -->
        <view class="form">
            <view class="message1 message">
                您好，
                <span class="light">刘能</span>
                医生
            </view>
            <view class="message2 message">
                已推荐
                <span class="light" style="vertical-align: bottom;">62</span>
                人
            </view>
            <image src="../../static/doctorqrbtn.png" mode="widthFix" class="qrbtn" @click="toQrCode"></image>
            <!-- <image src="../../static/dshadow1.png" mode="widthFix" class="shadow1"></image> -->
            <image src="../../static/doctoruserlistbtn.png" mode="widthFix" class="userlistbtn" @click="toUserList"></image>
            <!-- <image src="../../static/dshadow2.png" mode="widthFix" class="shadow2"></image> -->
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        //前往二维码
        toQrCode(){
            uni.navigateTo({
                url:"../doctorPage3/doctorPage3"
            })
        },
        // 前往用户列表
        toUserList(){
            uni.navigateTo({
                url:"../doctorPage4/doctorPage4"
            })
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    position: relative;
    width: 750rpx;
    height: 1334rpx;
    background: url(../../static/doctorbanner2.png) no-repeat;
    background-size: 100%;

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

    // 医生推荐信息
    .form {
        position: absolute;
        width: 653rpx;
        height: 665rpx;
        background-color: #ffffff;
        border-radius: 30rpx;
        bottom: 109rpx;
        left: 49rpx;
        // 按钮
        .qrbtn {
            position: absolute;
            top: 250rpx;
            left: 98rpx;
            width: 458rpx;
            height: 92rpx;
        }

        // .shadow1 {
        //     z-index: -99;
        //     width: 582rpx;
        //     height: 230rpx;
        //     position: absolute;
        //     top: 203rpx;
        //     left: 35rpx;
        // }
        // .shadow2 {
        //     z-index: -99;
        //     width: 582rpx;
        //     height: 230rpx;
        //     position: absolute;
        //     top: 380rpx;
        //     left: 35rpx;
        // }
        .userlistbtn {
            position: absolute;
            top: 430rpx;
            left: 98rpx;
            width: 458rpx;
            height: 92rpx;
        }
    }
}
</style>
