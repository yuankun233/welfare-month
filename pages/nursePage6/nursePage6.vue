<template>
    <view class="container">
        <!-- 表单 -->
        <view class="form">
            <image src="../../static/doctorformtitle.png" mode="widthFix" class="formtitle"></image>
            <u-form :model="form1" ref="uForm">
                <view class="radiobox">
                    <view class="title">婚姻状况:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptMarital" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic1.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox">
                    <view class="title">职业:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptJob" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic2.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <view class="radiobox">
                    <view class="title">文化程度:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptEducation" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic3.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <view class="radiobox2 radiobox">
                    <view class="title">收入来源:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptWork" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic4.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox2 radiobox">
                    <view class="title">医疗保险状况:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptMedical" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic7.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox3 radiobox">
                    <view class="title">居住情况:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptDwell" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic5.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <view class="radiobox">
                    <view class="title">开始腹透日期:</view>
                    <u-input v-model="form1.firstOptStarDate" type="select" @click="show = true" placeholder="请选择" />

                    <u-picker v-model="show" mode="time" @confirm="timeselect"></u-picker>
                </view>
                <view class="radiobox radiobox2">
                    <view class="title">换液操作者:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptHandlers" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic6.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox radiobox2">
                    <view class="title">居家操作环境:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptSurrdings" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic8.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <view class="radiobox radiobox2">
                    <view class="title">每次换液操作的时间：:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptDuration" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic9.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox3 radiobox">
                    <view class="title">每天腹透次数 :</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptNum" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic10.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox2 radiobox">
                    <view class="title">服务依从性:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptObey" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic11.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox2 radiobox">
                    <view class="title">紫外线消毒灯:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptSterilize" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic12.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox4 radiobox">
                    <view class="title">戴口罩:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptMasking" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic13.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <view class="radiobox4 radiobox">
                    <view class="title">洗手:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptWash" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic14.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox2 radiobox">
                    <view class="title">操作前检查透析液、碘伏帽：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptExamine" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic15.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox4 radiobox">
                    <view class="title">导管固定方法：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptFixed" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic16.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox2 radiobox">
                    <view class="title">空气排进肚子里：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptAir" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic17.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox3 radiobox">
                    <view class="title">操作中观察腹透液是否浑浊：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptObserve" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic18.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox4 radiobox">
                    <view class="title">透析后称重、记录：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptRecord" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic19.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox2 radiobox">
                    <view class="title">发生腹膜炎次数：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptInflamed" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic20.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox4 radiobox">
                    <view class="title">水肿：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptEdema" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic21.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox3 radiobox">
                    <view class="title">前往定点医院乘坐的交通工具：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.firstOptVehicle" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic22.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox3 radiobox" style="border: none;">
                    <view class="title">建议：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic23.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <!-- 建议 -->
                <textarea v-model="firstOptText" class="advice" placeholder="如果有，请在这里填写" />
            </u-form>
        </view>

        <!-- 记录信息 -->
        <view class="recordMessage">
            <view class="textitem">
                <view class="title">记录者：</view>
                <u-form-item class="uitem" :border-bottom="false">
                    <u-input v-model="form1.firstOptUser" class="uinput" placeholder="输入姓名" :autoHeight="true" maxlength="18" />
                </u-form-item>
            </view>

            <view class="textitem" style="margin-top: 49rpx;">
                <view class="title">输入记录时间：</view>
                <u-form-item class="uitem" :border-bottom="false">
                    <u-input v-model="form1.firstOptTime" class="uinput" placeholder="输入记录时间" :autoHeight="true" maxlength="18" />
                </u-form-item>
            </view>
            <view class="nextStep" @click="nextStep"><image class="nextStepBtn" src="../../static/nextstep.png"></image></view>
        </view>
    </view>
</template>

<script>
import { radioTopics } from './options/realradios.js'
export default {
    data() {
        return {
            //时间选择picker
            show: false,
            // 单选框选项
            radioTopics,
            // 表单数据
            form1: {
                firstOptMarital: '', //婚姻状况
                firstOptJob: '', //职业
                firstOptEducation: '', //学历
                firstOptWork: '', //收入来源
                firstOptMedical: '', //医疗保险状态
                firstOptDwell: '', //居住情况
                firstOptStarDate: '', //开始规律腹透日期
                firstOptHandlers: '', //换液操作者
                firstOptSurrdings: '', //居家操作环境
                firstOptDuration: '', //每次操作时间
                firstOptNum: '', //每天腹透次数
                firstOptObey: '', //服务依从性
                firstOptSterilize: '', //紫外线灯消毒
                firstOptMasking: '', //戴口罩
                firstOptWash: '', //洗手
                firstOptExamine: '', //操作前检查透析液、碘伏帽
                firstOptFixed: '', //导管固定方法
                firstOptAir: '', //空气排进肚子里
                firstOptObserve: '', //操作中观察腹透液是否浑浊
                firstOptRecord: '', //透析后称重、记录
                firstOptInflamed: '', //发生腹膜炎次数
                firstOptEdema: '', //水肿
                firstOptVehicle: '', //交通工具

                firstOptUser: '', //记录者
                firstOptTime: '' //记录时间
            },
            orderID: '',
            firstOptText: '' //建议
        }
    },
    methods: {
        // 选中某个单选框时，由radio时触发
        radioChange(e) {
            console.log(e)
        },
        // 选中任一radio时，由radio-group触发
        radioGroupChange(e) {
            // console.log(e);
        },
        //开始腹透时间选择
        timeselect(e) {
            console.log(e)
            let date = e.year + '-' + e.month + '-' + e.day
            console.log(date)
            //将选择日期赋给data
            this.form1.firstOptStarDate = date
        },

        // 前往临床评估表
        nextStep() {
            uni.navigateTo({
                url: '../nursePage4/nursePage4'
            })
        },
        // 下一步
        nextStep() {
            // 表单非空验证
            let flag = Object.values(this.form1).every(function(item) {
                return item != ''
            })
            console.log(flag)
            //判断有无未填选项
            if (flag == false) {
                uni.showToast({
                    title: '有未填选项',
                    icon: 'none'
                })
                return
            }
            let data = {
                ...this.form1,
                orderID: this.orderID,
                firstOptText: this.firstOptText
            }
            console.log(data)
            // 提交表单
            uni.request({
                url: 'https://www.qycloud.com.cn/bee/open-75661043697254584/xhll/welfare/insertRecord',
                method: 'POST',
                data,
                success: res => {
                    console.log(res)

                    if (res.data.data.diagnosisRecord == true) {
                        uni.showToast({
                            title: '提交成功！',
                            duration: 1000
                        })
                        setTimeout(() => {
                            uni.navigateTo({
                                url: '../nursePage4/nursePage4'
                            })
                        }, 1000)

                        return
                    }
                    if (res.data.data.diagnosisRecord == false) {
                        uni.showToast({
                            title: '请勿重复提交！',
                            duration: 1000,
                            icon: 'none'
                        })
                        return
                    }
                },
                complete() {
                    uni.hideLoading()
                }
            })
        }
    },
    onLoad(option) {
        try {
            //从本地储存中获取到订单id
            let value = JSON.parse(uni.getStorageSync('order'))
            let orderID = value[2].orderID
            console.log(orderID)
            // 把订单id存到data中和图片上传所需参数中
            this.orderID = orderID
        } catch (e) {
            console.log('订单id获取失败', e)
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    overflow: hidden;
    padding: 0 48rpx;
    width: 750rpx;
    height: auto;
    background: url(../../static/doctorbanner2.png) no-repeat;
    background-size: 100%;
    padding-bottom: 281rpx;
    .form {
        margin-top: 625rpx;
        padding: 49rpx 45rpx 0;
        position: relative;
        width: 653rpx;
        height: auto;
        background-color: #ffffff;
        border-radius: 30rpx;
        padding-bottom: 55rpx;
        // 表单标题图片
        .formtitle {
            position: absolute;
            width: 443rpx;
            height: 75rpx;
            left: 50%;
            transform: translateX(-50%);
            top: -39rpx;
        }
        .radiobox {
            padding-bottom: 20rpx;
            padding-top: 20rpx;
            border-bottom: #d6d6d6 2rpx solid;
            .title {
                font-size: 34rpx;
                letter-spacing: 1rpx;
                color: #808080;
                margin-bottom: 25rpx;
            }
            .groupitem {
                // justify-content: right;
                // padding-left: 60rpx;
                // padding-left: 60rpx;
                .rrritem {
                    padding-left: 37rpx;
                    flex: 1;
                    width: 50% !important;
                    min-width: 50% !important;
                }
            }
        }
        //第一种复选框布局
        .radiobox1 {
            .groupitem {
                .rrritem {
                    width: 50% !important;
                    min-width: 50% !important;
                }
            }
        }
        // 第二种复选框布局
        .radiobox2 {
            .groupitem {
                align-items: auto;
                .rrritem {
                    // align-items: baseline;
                    width: 100% !important;
                    min-width: 100% !important;
                }
            }
        }
        // 第4种复选框布局
        .radiobox4 {
            .groupitem {
                align-items: auto;
                .rrritem {
                    align-items: baseline;
                    width: 100% !important;
                    min-width: 100% !important;
                }
            }
        }
        // 第三种复选框布局
        .radiobox3 {
            .groupitem {
                .rrritem {
                    width: unset !important;
                    min-width: unset !important;
                }
            }
        }

        //建议输入框
        .advice {
            padding: 23rpx 0 0 23rpx;
            width: 562rpx;
            height: 205rpx;
            border-radius: 12rpx;
            border: solid 2rpx #009aff;
        }
    }
    // 记录者信息
    .recordMessage {
        margin-top: 65rpx;
        width: 653rpx;
        height: 668rpx;
        background-color: #ffffff;
        border-radius: 30rpx;
        padding: 67rpx 45rpx 0 45rpx;
        .textitem {
            .title {
                font-size: 34rpx;
                line-height: 36rpx;
                letter-spacing: 1rpx;
                color: #000000;
            }
            .uitem {
                border: 2rpx solid #009aff;
                border-radius: 12rpx;
                width: 562rpx;
                // height: 87rpx;
                margin-top: 31rpx;
                padding: unset;
                padding-left: 22rpx;
            }
        }
        .nextStep {
            margin: 86rpx auto 0;
            width: 458rpx;
            height: 92rpx;
            background-image: linear-gradient(180deg, #fdef6d 0%, #ff6f30 100%);
            border-radius: 12rpx;
            .nextStepBtn {
                width: 458rpx;
                height: 92rpx;
            }
        }
    }
}
</style>
