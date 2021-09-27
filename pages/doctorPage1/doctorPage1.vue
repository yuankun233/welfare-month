<template>
    <view class="container">
        <!-- 表单 -->
        <view class="form">
            <u-form :model="form" ref="uForm" :errorType="['toast']">
                <u-form-item
                    label="医生手机号码:"
                    class="uitem"
                    label-width="auto"
                    :border-bottom="false"
                    prop="doctorTel"
                    :label-style="{ 'font-size': '24rpx', 'font-family': 'Alibaba PuHuiTi', 'font-weight': 400, color: '#808080' }"
                >
                    <u-input v-model="form.doctorTel" class="uinput" placeholder="请输入" :autoHeight="false" maxlength="11" />
                </u-form-item>
            </u-form>
            <!-- 提交按钮 -->
            <image src="../../static/nursebtn1.png" mode="widthFix" class="submitBtn" :lazy-load="true" @click="submit1"></image>
        </view>
    </view>
</template>

<script>
import { getDoctor } from '../../utils/getdoctor.js' // 引入获取医生信息的接口
export default {
    data() {
        return {
            // 表单数据
            form: {
                doctorTel: '' // 医生手机号码
            },
            // 表单校验规则
            rules: {
                // 字段名称
                doctorTel: [
                    {
                        required: true,
                        message: '请输入医生手机号码'
                    },
                    {
                        pattern: /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/,
                        // 正则检验前先将值转为字符串
                        transform(value) {
                            return String(value)
                        },
                        message: '医生手机号码格式错误',
                        trigger: ['change', 'blur']
                    }
                ]
            }
        }
    },
    methods: {
        submit1() {
            this.$refs.uForm.validate(valid => {
                if (valid) {
                    console.log('表单验证通过')
                    this.doctorlogin()
                } else {
                    console.log('表单验证失败')
                }
            })
        },
        // 医生登录操作
        async doctorlogin() {
            try {
                const value = await getDoctor(this.form.doctorTel)

                if (value) {
                    console.log('医生数据', value)
                    let item = JSON.stringify(value)
                    // 储存医生信息
                    uni.setStorageSync('doctor', item)

                    // 跳转到下个页面
                    setTimeout(() => {
                        uni.navigateTo({
                            url: '../doctorPage2/doctorPage2?doctorPhone='+value.doctorPhone
                        })
                    }, 1000)
                }
            } catch (e) {
                //TODO handle the exception
            }
        }
    },
    onLoad(option) {
        // const item = JSON.parse(decodeURIComponent(option.item));
        // console.log('页面传递过来的item',item)
    },
    //表单验证规则
    // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
    onReady() {
        this.$refs.uForm.setRules(this.rules)
    }
}
</script>

<style lang="less" scoped>
.container {
    position: relative;
    background: url(../../static/doctorbanner1.png) no-repeat;
    background-size: 100%;
    width: 750rpx;
    height: 1334rpx;

    // 表单区域
    .form {
        width: 653rpx;
        height: 294rpx;
        background-color: #ffffff;
        border-radius: 30rpx;
        position: absolute;
        bottom: 330rpx;
        left: 50%;
        transform: translateX(-50%);
        // 输入框样式

        .uitem {
            border: 2rpx solid #009aff;
            border-radius: 12rpx;
            width: 562rpx;
            // height: 87rpx;
            margin: 74rpx 0 0 49rpx;
            padding: unset;
            padding-left: 22rpx;
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
