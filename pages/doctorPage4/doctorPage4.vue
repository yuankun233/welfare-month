<template>
    <view class="container">
        <!-- 医生姓名以及邀请信息 -->
        <view class="content1">
            <view class="message1 message">
                您好，
                <span class="light">{{ doctor.doctorName }}</span>
                医生
            </view>
            <view class="message2 message">
                已推荐
                <span class="light" style="vertical-align: bottom;">{{ doctor.doctorTime }}</span>
                人
            </view>
        </view>
        <!-- 搜索框 -->
        <view class="content2">
            <u-form-item class="search">
                <u-input placeholder="请输入姓名或电话号码..." v-model="searchKey" maxlength="11" />
                <button type="primary" :custom-style="{ width: '123rpx', height: '68rpx', backgroundColor: '#000' }" @click="searchOrder">搜索</button>
            </u-form-item>
        </view>

        <!-- 客户列表 -->
        <view class="userList">
            <view class="useritem" v-for="item in userList">
                <view class="textitem">
                    <view class="left">姓名：</view>
                    <view class="right1 right">{{ item.userName }}</view>
                </view>
                <view class="textitem">
                    <view class="left">电话号码:</view>
                    <view class="right2 right">{{ item.userPhone }}</view>
                </view>
                <view class="textitem">
                    <view class="left">服务地址：</view>
                    <view class="right">{{ item.userRegion }}</view>
                </view>
                <view class="textitem">
                    <view class="left" style="opacity: 0;">服务地址：</view>
                    <view class="right">{{ item.userAddress }}</view>
                </view>
                <view class="textitem">
                    <view class="left">服务时间：</view>
                    <view class="right">{{ item.userService }}</view>
                </view>
                <view class="textitem">
                    <view class="left">备注：</view>
                    <view class="right">{{ item.remark }}</view>
                </view>
                <view class="textitem">
                    <view class="left">医嘱：</view>
                    <view class="right">{{ item.advice }}</view>
                </view>
                <u-button @click="addAdviceid(item.oid)" type="primary" class="addAdvice">添加医嘱</u-button>
            </view>
        </view>

        <!-- 添加医嘱弹出层 -->
        <u-popup mode="center" v-model="show" class="popup" width="500rpx" height="500rpx">
            <view class="content">
                <textarea placeholder="请填写医嘱" v-model="advice" class="advice" />

                <button type="primary" @click="addAdvice">确定</button>
                <button type="default" @click="show = false">取消</button>
            </view>
        </u-popup>
    </view>
</template>

<script>
export default {
    data() {
        return {
            doctor: '',
            userList: '',
            searchKey: '',
            show: false,
            advice: '', // 医嘱
            oid: '' //医嘱id
        }
    },
    methods: {
        // 获取用户列表
        getUserList() {
            uni.request({
                url: 'https://www.qycloud.com.cn/bee/open-75661043697254584/xhll/welfare/doctorInfo',
                method: 'POST',
                data: {
                    doctorForID: this.doctor.doctorForID
                },
                success: res => {
                    console.log('获取推荐用户列表：', res)
                    // 获取成功
                    if (res.data.success) {
                        this.userList = res.data.data.doctorInfo
                    }
                },
                fail() {},
                complete() {
                    uni.hideLoading()
                }
            })
        },
        // 储存医嘱信息
        addAdviceid(oid) {
            console.log('添加医嘱id:', oid)
            this.show = true
            this.oid = oid
        },
        // 添加医嘱
        addAdvice() {
            // if(this.advice="")
            uni.request({
                url: 'https://www.qycloud.com.cn/bee/open-75661043697254584/xhll/welfare/doctorAdvice',
                method: 'POST',
                data: {
                    advice: this.advice,
                    id: this.oid
                },
                success(res) {
                    console.log('添加医嘱结果：', res)
                }
            })
        },
        // 根据手机号或名字搜索推荐用户订单
        searchOrder() {
            if (this.searchKey == '') {
                uni.showToast({
                    title: '请输入关键词后再查询！！',
                    icon: 'none'
                })
                return
            }
            let data = {
                doctorForID: this.doctor.doctorForID,
                search: this.searchKey
            }
            console.log(data)
            uni.request({
                url: 'https://www.qycloud.com.cn/bee/open-75661043697254584/xhll/welfare/orderSearch',
                method: 'POST',
                data,
                success(res) {
                    console.log('模糊查询结果：', res)
                }
            })
        }
    },
    onLoad() {
        //获取医生信息
        try {
            let value = uni.getStorageSync('doctor')
            if (value) {
                // 储存医生信息
                this.doctor = JSON.parse(value)
                // 获取推荐的客户列表
                this.getUserList()
            }
        } catch (e) {
            console.log(e)
        }
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
            height: 740rpx;
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
                margin-top: 50rpx;
                width: 389rpx;
                height: 68rpx;
                background-color: #009aff;
                border-radius: 10rpx;
            }
        }
    }
    // 添加医嘱弹出层
    .popup {
        .advice {
            width: 500rpx;
            text-indent: 2em;
        }
        // width: 200rpx;
        // height: 200rpx;
        // background-color: #fff;
    }
}
</style>
