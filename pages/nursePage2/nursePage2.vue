<template>
    <view class="container">
        <!-- 表单 -->
        <view class="form">
            <view class="message1 message">
                您好，
                <span class="light">{{ nurseMessage.nurseName }}</span>
                护士
            </view>
            <view class="message2 message">
                已服务
                <span class="light" style="vertical-align: bottom;">{{ nurseMessage.nurseTime }}</span>
                人
            </view>
            <u-form :model="form" ref="uForm" :errorType="['toast']">
                <u-form-item
                    label="客户手机号码:"
                    class="uitem"
                    label-width="auto"
                    :border-bottom="false"
                    prop="userTel"
                    :required="true"
                    :label-style="{ 'font-size': '24rpx', 'font-family': 'Alibaba PuHuiTi', 'font-weight': 400, color: '#808080' }"
                >
                    <u-input v-model="form.userTel" class="uinput" placeholder="请输入" :autoHeight="false" maxlength="11" />
                </u-form-item>
                <u-form-item
                    label="助理护士手机号码:"
                    class="uitem"
                    label-width="auto"
                    :border-bottom="false"
                    prop="assistantNurseTel"
                    :label-style="{ 'font-size': '24rpx', 'font-family': 'Alibaba PuHuiTi', 'font-weight': 400, color: '#808080' }"
                >
                    <u-input v-model="form.assistantNurseTel" class="uinput" placeholder="请输入" :autoHeight="false" maxlength="11" />
                </u-form-item>
            </u-form>
            <!-- 提交按钮 -->
            <image src="../../static/nursebtn1.png" mode="widthFix" class="submitBtn" @click="submit2"></image>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            nurseMessage: '',
            // 表单数据
            form: {
                assistantNurseTel: '',
                userTel: ''
            },
            // 表单校验规则
            rules: {
                // 字段名称
                assistantNurseTel: [
                    {
                        pattern: /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/,
                        // 正则检验前先将值转为字符串
                        transform(value) {
                            return String(value)
                        },
                        message: '助理护士手机号码格式错误',
                        trigger: ['change', 'blur']
                    }
                ],
                userTel: [
                    {
                        required: true,
                        message: '请输入客户手机号码'
                    },
                    {
                        pattern: /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/,
                        // 正则检验前先将值转为字符串
                        transform(value) {
                            return String(value)
                        },
                        message: '客户手机号码格式错误',
                        trigger: ['change', 'blur']
                    }
                ]
            }
        }
    },
    methods: {
        submit2() {
            this.$refs.uForm.validate(valid => {
                if (valid) {
                    console.log('验证通过')
                    this.login()
                    // uni.navigateTo({
                    // 	url: "../nursePage3/nursePage3"
                    // })
                } else {
                    console.log('验证失败')
                }
            })
        },
        login() {
            uni.showLoading({
                title: '加载中...'
            })
            let data = {
                assistantPhone: this.form.assistantNurseTel,
                userPhone: this.form.userTel,
                nursePhone: this.nurseMessage.nursePhone
            }
            console.log(data)
            uni.request({
                url: 'https://www.qycloud.com.cn/bee/open-75661043697254584/xhll/welfare/bindingUser',
                method: 'POST',
                data,
                success: res => {
                    console.log(res)
                    if (res.data.message == '成功') {
                        let data = res.data.data.bindingUser
                        console.log(data)
                        let item = JSON.stringify(data)

                        try {
                            //将订单信息储存
                            uni.setStorageSync('order', item)

                            uni.showToast({
                                title: '获取成功',
                                icon: 'success',
                                duration: 1000
                            })
                            // 跳转到下一页面
                            setTimeout(() => {
                                uni.navigateTo({
                                    url: '../nursePage3/nursePage3'
                                })
                            }, 1000)
                        } catch (e) {
                            // error
                            console.log('储存order信息失败', e)
                        }

                        return
                    }
                    if (res.data.message == '失败') {
                        uni.showToast({
                            title: '手机号不存在',
                            icon: 'none',
                            duration: 1000
                        })
                        return
                    }
                },
                fail() {
                    uni.showToast({
                        title: '加载失败！请稍后再试',
                        icon: 'none',
                        duration: 1000
                    })
                },
                complete() {
                    uni.hideLoading()
                }
            })
        }
    },
    //表单验证规则
    // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
    onReady() {
        this.$refs.uForm.setRules(this.rules)
    },
    onLoad(option) {
        // 获取护士相关信息
        try {
            const value = uni.getStorageSync('nurse')
            if (value) {
                let item = JSON.parse(value)
                this.nurseMessage = item[0]
                console.log(this.nurseMessage)
            }
        } catch (e) {
            // error
        }

        // let item = JSON.parse(option.item)
        // this.nurseMessage = item[0]
    }
}
</script>

<style lang="less" scoped>
.container {
    position: relative;
    background: url(../../static/banner3.png) no-repeat;
    background-size: 100%;
    width: 750rpx;
    height: 1334rpx;

    // 表单区域
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

    .form {
        width: 653rpx;
        height: 564rpx;
        background-color: #ffffff;
        border-radius: 30rpx;
        position: absolute;
        bottom: 210rpx;
        left: 50%;
        transform: translateX(-50%);

        // 输入框样式

        .uitem {
            border: 2rpx solid #009aff;
            border-radius: 12rpx;
            width: 562rpx;
            // height: 87rpx;
            margin: 30rpx 49rpx 0;
            padding: unset;
            padding-left: 22rpx;
        }

        .uitem:nth-of-type(1) {
            margin: 90rpx 0 0 49rpx;
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
