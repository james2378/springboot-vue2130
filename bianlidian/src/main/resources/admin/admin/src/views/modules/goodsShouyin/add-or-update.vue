








<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                :style="{backgroundColor:addEditForm.addEditBoxColor}">
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='yuangong'">
                    <el-form-item class="select" v-if="type!='info'"  label="员工" prop="yuangongId">
                        <el-select v-model="ruleForm.yuangongId" filterable placeholder="请选择员工" @change="yuangongChange">
                            <el-option
                                    v-for="(item,index) in yuangongOptions"
                                    v-bind:key="item.id"
                                    :label="item.yuangongName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='yuangong' ">
                    <el-form-item class="input" v-if="type!='info'"  label="员工姓名" prop="yuangongName">
                        <el-input v-model="yuangongForm.yuangongName"
                                  placeholder="员工姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="员工姓名" prop="yuangongName">
                            <el-input v-model="ruleForm.yuangongName"
                                      placeholder="员工姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yuangong' ">
                    <el-form-item class="input" v-if="type!='info'"  label="员工手机号" prop="yuangongPhone">
                        <el-input v-model="yuangongForm.yuangongPhone"
                                  placeholder="员工手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="员工手机号" prop="yuangongPhone">
                            <el-input v-model="ruleForm.yuangongPhone"
                                      placeholder="员工手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yuangong' ">
                    <el-form-item class="input" v-if="type!='info'"  label="员工身份证号" prop="yuangongIdNumber">
                        <el-input v-model="yuangongForm.yuangongIdNumber"
                                  placeholder="员工身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="员工身份证号" prop="yuangongIdNumber">
                            <el-input v-model="ruleForm.yuangongIdNumber"
                                      placeholder="员工身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24" v-if="sessionTable !='yuangong' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.yuangongPhoto" label="员工头像" prop="yuangongPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (yuangongForm.yuangongPhoto || '').split(',')" :src="item" width="100" height="100">
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.yuangongPhoto" label="员工头像" prop="yuangongPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.yuangongPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yuangong' ">
                    <el-form-item class="input" v-if="type!='info'"  label="电子邮箱" prop="yuangongEmail">
                        <el-input v-model="yuangongForm.yuangongEmail"
                                  placeholder="电子邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="电子邮箱" prop="yuangongEmail">
                            <el-input v-model="ruleForm.yuangongEmail"
                                      placeholder="电子邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="收银流水号" prop="goodsShouyinUuidNumber">
                       <el-input v-model="ruleForm.goodsShouyinUuidNumber"
                                 placeholder="收银流水号" clearable  :readonly="ro.goodsShouyinUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="收银流水号" prop="goodsShouyinUuidNumber">
                           <el-input v-model="ruleForm.goodsShouyinUuidNumber"
                                     placeholder="收银流水号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
            <input id="yuangongId" name="yuangongId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="实付金额" prop="goodsShouyinTruePrice">
                       <el-input v-model="ruleForm.goodsShouyinTruePrice"
                                 placeholder="实付金额" clearable  :readonly="ro.goodsShouyinTruePrice"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="实付金额" prop="goodsShouyinTruePrice">
                           <el-input v-model="ruleForm.goodsShouyinTruePrice"
                                     placeholder="实付金额" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="收银类型" prop="goodsShouyinTypes">
                        <el-select v-model="ruleForm.goodsShouyinTypes" placeholder="请选择收银类型">
                            <el-option
                                v-for="(item,index) in goodsShouyinTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="收银类型" prop="goodsShouyinValue">
                        <el-input v-model="ruleForm.goodsShouyinValue"
                            placeholder="收银类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="备注" prop="goodsShouyinContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.goodsShouyinContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.goodsShouyinContent" label="备注" prop="goodsShouyinContent">
                            <span v-html="ruleForm.goodsShouyinContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                yuangongForm: {},
                ro:{
                    goodsShouyinUuidNumber: false,
                    yuangongId: false,
                    goodsShouyinTruePrice: false,
                    goodsShouyinTypes: false,
                    goodsShouyinContent: false,
                    insertTime: false,
                },
                ruleForm: {
                    goodsShouyinUuidNumber: new Date().getTime(),
                    yuangongId: '',
                    goodsShouyinTruePrice: '',
                    goodsShouyinTypes: '',
                    goodsShouyinContent: '',
                    insertTime: '',
                },
                goodsShouyinTypesOptions : [],
                yuangongOptions : [],
                rules: {
                   goodsShouyinUuidNumber: [
                              { required: true, message: '收银流水号不能为空', trigger: 'blur' },
                          ],
                   yuangongId: [
                              { required: true, message: '员工不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   goodsShouyinTruePrice: [
                              { required: true, message: '实付金额不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]{0,6}(\.[0-9]{1,2})?$/,
                                  message: '只允许输入整数6位,小数2位的数字',
                                  trigger: 'blur'
                              }
                          ],
                   goodsShouyinTypes: [
                              { required: true, message: '收银类型不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   goodsShouyinContent: [
                              { required: true, message: '备注不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '购买时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");

            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=goods_shouyin_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.goodsShouyinTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `yuangong/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.yuangongOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }else if(this.type=='cross'){
                    var obj = this.$storage.getObj('crossObj');
                    for (var o in obj){

                      if(o=='goodsShouyinUuidNumber'){
                          this.ruleForm.goodsShouyinUuidNumber = obj[o];
                          this.ro.goodsShouyinUuidNumber = true;
                          continue;
                      }
                      if(o=='yuangongId'){
                          this.ruleForm.yuangongId = obj[o];
                          this.ro.yuangongId = true;
                          continue;
                      }
                      if(o=='goodsShouyinTruePrice'){
                          this.ruleForm.goodsShouyinTruePrice = obj[o];
                          this.ro.goodsShouyinTruePrice = true;
                          continue;
                      }
                      if(o=='goodsShouyinTypes'){
                          this.ruleForm.goodsShouyinTypes = obj[o];
                          this.ro.goodsShouyinTypes = true;
                          continue;
                      }
                      if(o=='goodsShouyinContent'){
                          this.ruleForm.goodsShouyinContent = obj[o];
                          this.ro.goodsShouyinContent = true;
                          continue;
                      }
                      if(o=='insertTime'){
                          this.ruleForm.insertTime = obj[o];
                          this.ro.insertTime = true;
                          continue;
                      }
                    }
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            yuangongChange(id){
                this.$http({
                    url: `yuangong/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.yuangongForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                this.$http({
                    url: `goodsShouyin/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.ruleForm = data.data;
                        this.yuangongChange(data.data.yuangongId)
                        //解决前台上传图片后台不显示的问题
                        let reg=new RegExp('../../../upload','g')//g代表全部
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`goodsShouyin/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.goodsShouyinCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.goodsShouyinCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

