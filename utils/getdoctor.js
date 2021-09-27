// 医生端登录接口
export const getDoctor = (Tel) => {
    let doctorTel = Tel
    console.log(doctorTel)
    return new Promise((resolve, reject) => {
        uni.showLoading({
            title: '登陆中...'
        })
        // 发送登录请求
        uni.request({
            url: 'https://www.qycloud.com.cn/bee/open-75661043697254584/xhll/welfare/doctorLogin',
            method: 'POST',
            data: {
                doctorPhone: doctorTel
            },
            success: res => {
                console.log(res)
                if (res.data.message == '失败') {
                    uni.showToast({
                        title: '手机号不存在',
                        duration: 1000,
                        icon: 'none'
                    })
                    return
                }
                if (res.data.message == '成功') {
                    // 储存医生信息
                    try {
                        let data = res.data.data.doctorLogin[0]
                        let item = JSON.stringify(data)
                        
                       
                        uni.showToast({
                            title: '登录成功',
                            icon: 'success',
                            duration: 1000
                        })
                        
                        resolve(data)
                       
                    } catch (e) {
                        console.log('储存医生信息失败:')
                    }

                    return
                }
            },
            fail() {
                uni.showToast({
                    title: '登录失败，请稍后再试',
                    icon: 'none',
                    duration: 1000
                })
            },
            complete() {
                uni.hideLoading()
            }
        })


    })



}
