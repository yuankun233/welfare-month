<template>
    <view class="container">
        <!-- 表单 -->
        <view class="form">
            <image src="../../static/doctorformtitle.png" mode="widthFix" class="formtitle"></image>
            <u-form :model="form1" ref="uForm">
                <view class="radiobox">
                    <view class="title">婚姻状况:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.one" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic1.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox">
                    <view class="title">职业:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.two" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic2.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <view class="radiobox">
                    <view class="title">文化程度:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.three" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic3.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <view class="radiobox2 radiobox">
                    <view class="title">收入来源:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.four" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic4.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox2 radiobox">
                    <view class="title">医疗保险状况:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.seven" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic7.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox3 radiobox">
                    <view class="title">居住情况:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.five" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic5.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <view class="radiobox">
                    <view class="title">开始腹透日期:</view>
                    
                 <u-picker v-model="show" mode="time"></u-picker>
                   
                </view>
                <view class="radiobox radiobox2">
                    <view class="title">换液操作者:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.six" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic6.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox radiobox2">
                    <view class="title">居家操作环境:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.eight" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic8.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <view class="radiobox radiobox2">
                    <view class="title">每次换液操作的时间：:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.nine" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic9.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox3 radiobox">
                    <view class="title">每天腹透次数 :</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.ten" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic10.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox2 radiobox">
                    <view class="title">服务依从性:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.eleven" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic11.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox2 radiobox">
                    <view class="title">紫外线消毒灯:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.twelve" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic12.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox4 radiobox">
                    <view class="title">戴口罩:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.thirteen" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic13.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                <view class="radiobox4 radiobox">
                    <view class="title">洗手:</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.fourteen" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic14.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>

                <view class="radiobox2 radiobox">
                    <view class="title">操作前检查透析液、碘伏帽：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.fifteen" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic15.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                
                <view class="radiobox4 radiobox">
                    <view class="title">导管固定方法：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.sixteen" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic16.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                
                <view class="radiobox2 radiobox">
                    <view class="title">空气排进肚子里：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.seventeen" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic17.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                
                <view class="radiobox3 radiobox">
                    <view class="title">操作中观察腹透液是否浑浊：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.eighteen" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic18.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                
                <view class="radiobox4 radiobox">
                    <view class="title"> 透析后称重、记录：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.nineteen" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic19.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                
                <view class="radiobox2 radiobox">
                    <view class="title">发生腹膜炎次数：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.twenty" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic20.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                
                <view class="radiobox4 radiobox">
                    <view class="title">水肿：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.twentyone" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic21.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                
                <view class="radiobox3 radiobox">
                    <view class="title">前往定点医院乘坐的交通工具：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.twentytwo" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic22.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
                
                <view class="radiobox3 radiobox">
                    <view class="title">建议：</view>
                    <u-form-item class="radioitem" :border-bottom="false">
                        <u-radio-group v-model="form1.twentythree" class="groupitem" v-slot="right" @change="radioGroupChange">
                            <u-radio class="rrritem" v-for="(item2, index) in radioTopics.topic23.content" @change="radioChange" :key="index" :name="item2.name" label-size="40">
                                {{ item2.name }}
                            </u-radio>
                        </u-radio-group>
                    </u-form-item>
                </view>
            </u-form> 
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            // 表单数据
            form1: {
                firstOptMarital:"",//婚姻状况
                firstOptJob:"",//职业
                firstOptEducation:"",//学历
                firstOptWork:"",//收入来源
                firstOptMedical:"",//医疗保险状态
                firstOptDwell:"",//居住情况
                firstOptStarDate:"",//开始规律腹透日期
                firstOptHandlers:"",//换液操作者
                firstOptSurrdings:"",//居家操作环境
                firstOptDuration:"",//每次操作时间
                firstOptNum:"",//每天腹透次数
                firstOptObey:"",//服务依从性
                firstOptSterilize:"",//紫外线灯消毒
                firstOptMasking:"",//戴口罩
                firstOptWash:"",//洗手
                firstOptExamine:"",//操作前检查透析液、碘伏帽
                firstOptFixed:"",//导管固定方法
                firstOptAir:"",//空气排进肚子里
                firstOptObserve:"",//操作中观察腹透液是否浑浊
                firstOptRecord:"",//透析后称重、记录
                firstOptInflamed:"",//发生腹膜炎次数
                firstOptEdema:"",//水肿
                firstOptVehicle:"",//交通工具
                firstOptText:"",//建议
                firstOptUser:"",//记录者
                firstOptTime:""//记录时间

                
            },

            // 单选框选项
            radioTopics: {
                topic1: {
                    content: [
                        {
                            name: '未婚'
                        },
                        {
                            name: '已婚'
                        },
                        {
                            name: '离婚'
                        },
                        {
                            name: '丧偶'
                        }
                    ]
                },
                topic2: {
                    content: [
                        {
                            name: '就业'
                        },
                        {
                            name: '未就业'
                        },
                        {
                            name: '已退休'
                        },
                        {
                            name: '退休返聘'
                        }
                    ]
                },
                topic3: {
                    content: [
                        {
                            name: '文盲'
                        },
                        {
                            name: '小学'
                        },
                        {
                            name: '初中'
                        },
                        {
                            name: '高中'
                        },
                        {
                            name: '大学'
                        },
                        {
                            name: '大学以上'
                        }
                    ]
                },
                topic4: {
                    content: [
                        {
                            name: '个人所得'
                        },
                        {
                            name: '家庭供养'
                        },
                        {
                            name: '不定期社会救助'
                        },
                        {
                            name: '低保'
                        }
                    ]
                },
                topic5: {
                    content: [
                        {
                            name: '与家人同住'
                        },
                        {
                            name: '独居'
                        }
                    ]
                },
                topic6: {
                    content: [
                        {
                            name: '自己操作'
                        },
                        {
                            name: '家属帮助操作'
                        },
                        {
                            name: '家属操作'
                        },
                        {
                            name: '保姆操作'
                        }
                    ]
                },
                topic7: {
                    content: [
                        {
                            name: '享受基本医疗保险'
                        },
                        {
                            name: '享受农村合作医院'
                        },
                        {
                            name: '医疗救助'
                        },
                        {
                            name: '有其他医疗保险'
                        },
                        {
                            name: '费用全部自理'
                        }
                    ]
                },
                topic8: {
                    content: [
                        {
                            name: '专用独立房间'
                        },
                        {
                            name: '卧室'
                        },
                        {
                            name: '客厅阳台'
                        }
                    ]
                },
                topic9: {
                    content: [
                        {
                            name: '25分钟以内'
                        },
                        {
                            name: '25-35分钟'
                        },
                        {
                            name: '35-45分钟'
                        },
                        {
                            name: '45分钟以上'
                        },
                        {
                            name: '自动化腹膜透析'
                        }
                    ]
                },
                topic10: {
                    content: [
                        {
                            name: '小于等于3次'
                        },
                        {
                            name: '4次'
                        },
                        {
                            name: '5次'
                        },
                        {
                            name: '6次或以上'
                        }
                    ]
                },
                topic11: {
                    content: [
                        {
                            name: '严格按照医嘱执行'
                        },
                        {
                            name: '偶尔会少做1-2袋子'
                        },
                        {
                            name: '偶尔调整浓度'
                        },
                        {
                            name: '如果脚肿会自己加1-2袋'
                        },
                        {
                            name: '自动化腹膜透析机器'
                        }
                    ]
                },
                topic12: {
                    content: [
                        {
                            name: '未装或坏了'
                        },
                        {
                            name: '有但很少用'
                        },
                        {
                            name: '每天消毒1-2次'
                        },
                        {
                            name: '每次做之前都消毒'
                        }
                    ]
                },
                topic13: {
                    content: [
                        {
                            name: '从来不带'
                        },
                        {
                            name: '偶尔会忘记'
                        },
                        {
                            name: '每次戴觉得不舒服拉到鼻子下面'
                        },
                        {
                            name: '每次按规范遮住口鼻'
                        }
                    ]
                },
                topic14: {
                    content: [
                        {
                            name: '从来不洗'
                        },
                        {
                            name: '偶尔会忘记'
                        },
                        {
                            name: '只是操作前洗手'
                        },
                        {
                            name: '操作前流动水洗手，操作中免洗液消毒'
                        }
                    ]
                },
                topic15: {
                    content: [
                        {
                            name: '从来不查'
                        },
                        {
                            name: '偶尔会检查'
                        },
                        {
                            name: '每次都检查'
                        }
                    ]
                },
                topic16: {
                    content: [
                        {
                            name: '用一个架子夹住深蓝色连接处'
                        },
                        {
                            name: '用两个架子连接，一端夹导管一端夹衣服上'
                        }
                    ]
                },
                topic17: {
                    content: [
                        {
                            name: '从来没有'
                        },
                        {
                            name: '偶尔不注意时会有'
                        },
                        {
                            name: '刚开始操作不熟练时有'
                        },
                        {
                            name: '隔三岔五就有'
                        }
                    ]
                },
                topic18: {
                    content: [
                        {
                            name: '从来不看'
                        },
                        {
                            name: '偶尔会看'
                        },
                        {
                            name: '每次都看'
                        }
                    ]
                },
                topic19: {
                    content: [
                        {
                            name: '不称重，不记录'
                        },
                        {
                            name: '偶尔称重，记录'
                        },
                        {
                            name: '称重，记录，计算超滤但不知道判断超滤是否超标'
                        },
                        {
                            name: '称重，计算超滤，并根据超滤总量计算是否需限水'
                        }
                    ]
                },
                topic20: {
                    content: [
                        {
                            name: '从来没有'
                        },
                        {
                            name: '发生过1次'
                        },
                        {
                            name: '发生过2次'
                        },
                        {
                            name: '发生过3次或以上'
                        }
                    ]
                },
                topic21: {
                    content: [
                        {
                            name: '从来没有'
                        },
                        {
                            name: '双下肢明显水肿'
                        },
                        {
                            name: '偶尔只是脚踝轻微水肿'
                        },
                        {
                            name: '有过胸闷、气喘、睡觉躺平加重，诱发心包积液或心衰等'
                        }
                    ]
                },
                topic22: {
                    content: [
                        
                        {
                            name: '公交车'
                        },
                        {
                            name: '出租车'
                        },
                        {
                            name: '自家车'
                        },
                        {
                            name: '救护车'
                        },
                        {
                            name: '步行'
                        }
                    ]
                },
                topic23: {
                    content: [
                        {
                            name: '有'
                        },
                        {
                            name: '无'
                        }
                    ]
                }
            }
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
    .form {
        margin-top: 625rpx;
        padding: 49rpx 45rpx 0;
        position: relative;
        width: 653rpx;
        height: auto;
        background-color: #ffffff;
        border-radius: 30rpx;

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
    }
}
</style>
