<template>
    <view class="container">
        <!-- 医生姓名以及邀请信息 -->
        <view class="content1">
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
        </view>
        <!-- 搜索框 -->
        <view class="content2">
            <u-form-item class="search">
                <u-input placeholder="请输入姓名或电话号码..." />
                <button type="primary" :custom-style="{ width: '123rpx', height: '68rpx','backgroundColor':'#000' }">搜索</button>
            </u-form-item>
        </view>

        <!-- 客户列表 -->
        <view class="userList">
            <view class="useritem" v-for="item in 5">
                <view class="textitem">
                    <view class="left">姓名：</view>
                    <view class="right1 right">王小蒙</view>
                </view>
                <view class="textitem">
                    <view class="left">电话号码:</view>
                    <view class="right2 right">13685622602</view>
                </view>
                <view class="textitem">
                    <view class="left">服务地址：</view>
                    <view class="right">上海市 浦东新区 永泰路</view>
                </view>
                <view class="textitem">
                    <view class="left" style="opacity: 0;">服务地址：</view>
                    <view class="right">欣供花园70号502室</view>
                </view>
                <view class="textitem">
                    <view class="left">服务时间：</view>
                    <view class="right">2021.09.13 9：00</view>
                </view>
                <view class="textitem">
                    <view class="left">备注：</view>
                    <view class="right">666666666</view>
                </view>
                <view class="textitem">
                    <view class="left">医嘱：</view>
                    <view class="right">233333333</view>
                </view>
                <u-button @click="addAdvice" type="primary" class="addAdvice">添加医嘱</u-button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        addAdvice() {}
    }
}
</script>

<style lang="less" scoped>
.container {
    overflow: hidden;
    padding: 0 49rpx;
    width: 750rpx;
    height: auto;
    background: url(../../static/doctorbanner3.png) no-repeat;
    background-size: 100%;

    .content1 {
        overflow: hidden;
        margin-top: 560rpx;
        margin-bottom: 21rpx;
        width: 653rpx;
        height: 224rpx;
        background-color: #ffffff;
        border-radius: 30rpx;

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
    }

    // 搜索框
    .content2 {
        background-color: #ffffff;
        border-radius: 18rpx;
        padding: 0 4rpx 0 50rpx;
        .search {
        }
    }
    // 用户列表
    .userList {
        margin-top: 23rpx;

        .useritem {
            // 每个item的间距
            margin-bottom: 25rpx;

            padding: 36rpx 35rpx 0 47rpx;
            width: 653rpx;
            height: 645rpx;
            background-color: #ffffff;
            border-radius: 18rpx;
            .textitem:nth-of-type(1) {
                margin-top: 0;
            }
            .textitem {
                margin-top: 30rpx;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .left {
                    font-size: 30rpx;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0rpx;
                    color: #999999;
                }

                .right {
                    width: 60%;
                    font-size: 30rpx;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0rpx;
                    color: #333232;
                    border-bottom: solid 2rpx #cccccc;
                    padding-bottom: 5rpx;
                    padding-left: 28rpx;
                }
                .right1 {
                    font-size: 40rpx;
                }
                .right2 {
                    font-size: 30rpx;
                }
            }

            .addAdvice {
                margin-top: 30rpx;
                width: 389rpx;
                height: 68rpx;
                background-color: #009aff;
                border-radius: 10rpx;
            }
        }
    }
}
</style>
