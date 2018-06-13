const LimitNumber = (txt,length)=>{//限制标题字数
    var str = txt;
    if (txt.length<length) {
    	return txt;
    };
    str = str.substr(0,20) + '...' ;
    return str;
}
const normalTime = (time,type) => {//转换时间
	var date = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = (date.getHours()<10?'0'+date.getHours():date.getHours())+ ':';
    var m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())+ ':';
    var s = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
    if (type) {
        return Y+M+D;
    };
    return Y+M+D+h+m+s;
}
const filterStatus = (status) => {//标的状态
    if (status==1) {
        return '投标中'
    }else if(status==3) {
        return '已满标'
    }else if(status==4) {
        return '还款中'
    }else if(status==6 || status==9) {
        return '还款完成'
    }else if(status==15) {
        return '尚未开始'
    }
}

const limitNum =  (num) => {//保留两位小数
    var a = num;
    var aNew;
    var re = /([0-9]+.[0-9]{2})[0-9]*/;
    aNew = a.replace(re,"$1");
    return aNew;
}

const dateHint = (num) => {//期限的单位
    if (num==1 || num==2 || num==3) {
        return '个月'
    }else if(num==4 || num==8){
        return '天'
    }else if(num=5){
        return '季度'
    }else if(num==8){
        return '年'
    }
}

export default{
	LimitNumber,
	normalTime,
    filterStatus,
    limitNum,
    dateHint
}