import React, { Component } from 'react';
import PostCode from './Postcode';
import './KurlyComponent.scss'

class KurlyComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            아이디: '',
            아이디ok: '',
            아이디중복확인: false,
            비밀번호:'',
            비밀번호1ok:false,
            비밀번호2ok:false,
            비밀번호3ok:false,
            비밀번호확인:'',
            이름: '',
            이메일:'',
            이메일ok:false,
            휴대폰:'',
            휴대폰ok:'',
            주소:'',
            주소1: '',
            주소2: '',
            성별:'선택안함',
            생년:'',
            생월: '',
            생일:'',
            생년월일:'',
            추가입력사항:'',
            약관동의: [],
            isAddressOn:false,
            isAddressInputShow:false,
            isRegExpId:'',
            showId:false,
            isClassId:'',

            showPw:false,
            isClassPw1:'',
            isClassPw2:'',
            isClassPw3:'',

            showPwRe:false,
            isClassPwRe:'',

            showEmail:false,
            isClassEmail:'',

            isModalOpen:false, // 모달창 show & hide
            modalText:'', //아이디, 이메일, 인증번호 받기 가이드 텍스트

            isPhoneClass: false,

            showBirthDay:false,
            isClassBirthDay: '',
            birthDayGideText:'',
        }
    }
    onMouseDown=(e)=>{
        this.setState({showId:true});
    }
    onChangeId=(value)=>{
        this.setState({아이디:value});
        //글자길이 6자이상 16자 이하
        //영문과 숫자조합

        const regexp=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{6,16}$/;
        if(value===''){
            this.setState({isClassId:''});
        }else{
            if(regexp.test(value)){
                this.setState({isClassId: true});
            }else{
                this.setState({isClassId: false});
            }
        }
    }

    //중복확인
    onClickIdModalEvent=(e) =>{
        e.preventDefault();
        this.setState({
            isModalOpen: true,
            아이디중복확인: true 
        });
        if(this.state.아이디===''){
            this.setState({
                modalText:'아이디를 입력해주세요.',
                아이디ok: false,
            })
        }else{
            //아이디를 잘 못 썼을 때
            if(this.state.isClassId === false){
                this.setState({
                    modalText:'아이디는 6자 이상 16자미만의 영문 혹은 영문과 숫자조합만 가능합니다.',
                    아이디ok: false,
                })
            }else{
                this.setState({
                    modalText:'사용가능한 아이디입니다.',
                    아이디ok: true,
                })
            }
        }
    }
    
    //중복확인 이메일 클릭 이벤트
    onClickEmailModalEvent=(e) =>{
        e.preventDefault();
        const regExp=/^[A-Za-z0-9]+(.[A-Za-z0-9-_])*@[A-Za-z]+(.[A-Za-z])+(.[A-Za-z]{2,3})$/;
        this.setState({isModalOpen: true});
        if(this.state.이메일===''){
            this.setState({
                modalText:'이메일을 입력해 주세요.',
                이메일ok:false,
            });

        }else{
            if(regExp.test(this.state.이메일)===false){
                this.setState({
                    modalText:'잘못된 이메일 형식입니다.',
                    이메일ok:false,
                })
            }else{
                this.setState({
                    modalText:'사용가능한 이메일입니다.',
                    이메일ok:true,
                })
            }
        }
    }

    onClickModalClose=(e) =>{
        e.preventDefault();
        this.setState({isModalOpen: false});

    }


    onFocusPw=(e)=>{
       this.setState({showPw:true}) 
    }
    onChangePw=(value)=>{
        this.setState({비밀번호:value})

        const regExp1=/.{10,}/;
        //영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
        const regExp2=/((?=.*[A-Za-z])+((?=.*[0-9])+|(!@#$%&-_)+)+)[^\s][A-Za-z0-9!@#$%&-_]{10,}/;
        const regExp3=/(.)\1\1/;


        if(value===''){
            this.setState({
                isClassPw1:'',
                비밀번호1ok: false,
            })
        }else{
            if(regExp1.test(value)){
                this.setState({
                    isClassPw1:true,
                    비밀번호1ok: true,
                })
            }else{
                this.setState({
                    isClassPw1:false,
                    비밀번호1ok:false,
                })
            }
        }

        if(value===''){
            this.setState({
                isClassPw2:'',
                비밀번호2ok:false,
            })
        }else{
            if(regExp2.test(value)){
                this.setState({
                    isClassPw2:true,
                    비밀번호2ok:true,
                })
            }else{
                this.setState(
                {
                    isClassPw2:false,
                    비밀번호2ok:false,
                })
            }
        }
        if(value===''){
            this.setState({
                isClassPw3:'',
                비밀번호3ok:false,
            })
        }else{
            if(regExp3.test(value)===false){
                this.setState({
                    isClassPw3:true,
                    비밀번호3ok:true,
                })
            }else{
                this.setState({
                    isClassPw3:false,
                    비밀번호3ok:false,
                })
            }
        }
    }

    onFocusPwRe=(e) =>{
        this.setState({showPwRe:true})
    }
    onChangePwRe=(value)=>{
        this.setState({비밀번호확인:value})

        if(value===''){
            this.setState({isClassPwRe:''})
        }else{
            if(this.state.비밀번호===value){
                this.setState({isClassPwRe:true})
            }else{
                this.setState({isClassPwRe:false})
            }
        }
    }

    onChangeName=(value)=>{
        this.setState({이름:value})
    }
    onFocusEmail=(e)=>{
        this.setState({showEmail: true});
    }
    onChangeEmail=(value)=>{
        this.setState({
            이메일:value
        });
        // 정규표현식
        //cjh7652@hanmail.net
        //cjh7652@naver.com
        //cjh_7652@yahoo.co.kr
        //cjh.j7652@yahoo.co.kr

        const regExp=/^[A-Za-z0-9]+(.[A-Za-z0-9-_])*@[A-Za-z]+(.[A-Za-z])+(.[A-Za-z]{2,3})$/;
        if(value===''){
            this.setState({
                isClassEmail:'',
                이메일ok:false,
            })
        }else{
            if(regExp.test(value)){
                this.setState({
                    isClassEmail:true,
                    이메일ok:true
                })
            }else{
                this.setState({
                    isClassEmail:false,
                    이메일ok:false
                })
            }
        }
    }
    onChangePhone=(value)=>{
        this.setState({휴대폰:value.replace(/[^0-9]/g, '')});

        if(this.state.휴대폰.length>=10 && this.state.휴대폰.length<=11){
            this.setState({isPhoneClass:true})
        }else{
            this.setState({isPhoneClass:false})
        }
        
       
    }
    onClickPhoneEvent=(e) =>{
        e.preventDefault();
        //010 4494 9814
        //010 223 9814
        if(!/^010[0-9]{3,4}[0-9]{4}$/g.test(this.state.휴대폰)){
            this.setState({
                isModalOpen: true,
                modalText:'잘못된 휴대폰 번호 입니다. 확인 후 다시 시도해 주세요',
                휴대폰ok:false
            })
            return ;
        }else{
            this.setState({
                휴대폰ok:true
            })
        }
    }
    onChangeAdd=(value)=>{
        this.setState({주소:value})
    }
    onChangeGender=(value)=>{
        this.setState({성별:value})
    }

    //생년월일 체크 함수
    //1.생년
    //1900-2999

   // const regExp=/(?:1[0-9][0-9][0-9]|2[0-9][0-9][0-9])/g
   // const regExp=/(?:1\d\d\d|2\d\d\d)/g

   //년,월 일 모두 입력제한 조건을 만족할때
   //미래의 생년월일 가입 불가
   //만 14세 미만 가입 불가
   //만 100세 초과 가입 불가
   //생년월일 저장



    birthDayCheckEventFn=(z) =>{
        const {생년, 생월, 생일} =this.state;
        const lastDate=new Date(생년, 생월, 0).getDate();//0=>말일을 찾아줌, 1=> 다음달 첫날을 찾아줌
        const nowYear=new Date().getFullYear();//2023
        const nowMonth=new Date().getMonth()+1;//2
        const nowDate=new Date().getDate();//28
        const nowToday=new Date(nowYear,nowMonth, nowDate);//2023.2.28
        const nowToday14=new Date(nowYear-14,nowMonth, nowDate )
        const nowToday100=new Date(nowYear-100,nowMonth, nowDate )
        const birthDay=new Date(생년, 생월, 생일);//1980/04/03

        if(생년==='' && 생월==='' && 생일===''){
            return;
        }else{
           //생년 체크
           if(/^(?:1\d\d\d|2\d\d\d)$/g.test(생년)===false){
                this.setState({
                    showBirthDay:true,
                    isClassBirthDay: false,
                    birthDayGideText:'태어난 년도 4자리를 정확하게 입력해 주세요'
                })
           }else{
                this.setState({
                    showBirthDay:false,
                    isClassBirthDay: '',
                    birthDayGideText:'',
                })
                if(/^(?:0?[1-9]|1[012])$/g.test(생월)===false){
                    this.setState({
                        showBirthDay:true,
                        isClassBirthDay:false,
                        birthDayGideText:'태어난 월을 정확하게 입력해주세요'
                    })
                }else{
                    this.setState({
                        showBirthDay:false,
                        isClassBirthDay: '',
                        birthDayGideText:'',
                    })
                    if(/^(?:0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/g.test(생일)===false || 생일 > lastDate){
                        this.setState({
                            showBirthDay:true,
                            isClassBirthDay:false,
                            birthDayGideText:'태어난 일을 정확하게 입력해주세요'
                        })
                    }else{
                        this.setState({
                            showBirthDay:false,
                            isClassBirthDay: '',
                            birthDayGideText:'',
                        })
                        //미래
                        if(birthDay>nowToday){
                            this.setState({
                               showBirthDay:true,
                               isClassBirthDay:false,
                               birthDayGideText:'생년월일이 미래로 입력되었습니다.' ,
                            })
                            return;
                        }else{
                            this.setState({
                                showBirthDay:false,
                                isClassBirthDay:'',
                                birthDayGideText:'' 
                             })
                        }
                        //만14세 가입 불가
                        if(birthDay>nowToday14){
                            this.setState({
                                showBirthDay:true,
                                isClassBirthDay:false,
                                birthDayGideText:'만 14세 미만은 가입이 불가합니다.' 
                             })
                             return;
                        }else{
                            this.setState({
                                showBirthDay:false,
                                isClassBirthDay:'',
                                birthDayGideText:'' 
                             })
                        }
                        //100세 이상 가입 불가
                        if(birthDay<nowToday100){
                            this.setState({
                                showBirthDay:true,
                                isClassBirthDay:false,
                                birthDayGideText:'생년월일을 다시 확인해주세요.' 
                             })
                             return;
                        }else{
                            this.setState({
                                showBirthDay:false,
                                isClassBirthDay:'',
                                birthDayGideText:'' 
                             })
                        }
                    }
                }

           }
        }
    }
    onFocusEvent=(z)=>{
        this.birthDayCheckEventFn(z);
    }
    onBlurEvent=(z)=>{
        this.birthDayCheckEventFn(z);
    }
    onChangeYear=(value)=>{
        this.setState({생년:value});
        const regExp=/(?:1\d\d\d|2\d\d\d)/g;
        console.log(regExp.test(value))
    }
    onChangeMonth=(value)=>{
        this.setState({생월:value})
        //1-12
        const regExp=/^(?:0?[1-9]|1[012])$/g;
        console.log(regExp.test(value))
    }
    onChangeDate=(value)=>{
        this.setState({생일:value})
        //01-31 01 10 20 30 
        const regExp=/^(?:0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/g;
        console.log(regExp.test(value))
    }
    onChangeChoocheon=(value)=>{
        this.setState({추가입력사항:value})
    }
    
    onChangeAddress1=(value)=>{
        this.setState({주소1:value});
        this.setState({isAddressInputShow:true});
        this.setState({isAddressOn:false});
    }
    onChangeAddress2=(value) =>{
        this.setState({주소2:value})
    }
    onChangeCheckEvent=(checked, value)=>{
        let result = '';
        if(checked){
            if(value==='SNS' && this.state.약관동의.includes('이메일')){
               this.setState({약관동의: [...this.state.약관동의, 'SNS','무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)']}) 
            }
           else if(value==='이메일' && this.state.약관동의.includes('SNS')){
                this.setState({약관동의: [...this.state.약관동의, '이메일','무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)']})
            }
           else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && this.state.약관동의.includes('SNS') && !this.state.약관동의.includes('이메일')){
                this.setState({약관동의: [...this.state.약관동의, '이메일', value ]})
            } 
             else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && !this.state.약관동의.includes('SNS') && this.state.약관동의.includes('이메일')){
                this.setState({약관동의: [...this.state.약관동의, 'SNS', value ]})
            } 
           else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && this.state.약관동의.includes('SNS') && this.state.약관동의.includes('이메일')){
                this.setState({약관동의: [...this.state.약관동의,  value ]})
            }
            else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && !this.state.약관동의.includes('SNS') && !this.state.약관동의.includes('이메일')){
                this.setState({약관동의: [...this.state.약관동의,'이메일','SNS',  value ]})
            } 
            else{
                this.setState({약관동의:[...this.state.약관동의, value]})
            }
            
        }else{
            if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)'){
                result=this.state.약관동의.filter((item) => item!==value);
                result=result.filter((item) => item!=='SNS')
                result=result.filter((item) => item!=='이메일')
                
            }else if(value==='SNS'){
                result=this.state.약관동의.filter((item) => item!==value);
                result=result.filter((item) => item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)')
            } else if(value==='이메일'){
                result=this.state.약관동의.filter((item) => item!==value);
                result=result.filter((item) => item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)')
            }else{
                result=this.state.약관동의.filter((item) => item!==value);
            } 
            this.setState({약관동의: result});
        }
    }
    onClickAddress = (e) => {
        e.preventDefault();
        this.setState({isAddressOn:true});
    }
     onChangeCheckEventAll=(checked, value)=>{
        let imsi=[
            `이용약관동의 (필수)`,
            `개인정보 수집∙이용 동의 (필수)`,
            `개인정보 수집∙이용 동의 (선택)`,
            `무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`,
            `SNS`,
            `이메일`,
            `본인은 만 14세 이상입니다. (필수)`
        ];

        if(checked){
            this.setState({약관동의: imsi})
        }else{
            this.setState({약관동의: []})
        }
    } 
    //1. 아이디 ~ 이용약관 검증
    //2. 검증된 데이터 전송 저장
    //3. 초기화 
    //4. 중복확인 데이터 검증 아이디, 이메일
    OnSubmitEvent=(e)=>{
        e.preventDefault();
        
    
        const {아이디, 비밀번호, 이름, 이메일, 휴대폰,  주소, 주소1, 주소2, 아이디ok, 비밀번호1ok,  비밀번호2ok,  비밀번호3ok,  이메일ok,  휴대폰ok, 약관동의, 성별, 추가입력사항, 생년, 생월, 생일} =this.state;
        if(아이디==='' || 비밀번호 ==="" || 이름==="" || 이메일==="" || 휴대폰 === "" ||  주소===""){
            if(아이디===''){
                this.setState({
                    isModalOpen:true,
                    modalText:'아이디를 입력해주세요'
                })
            }else if(비밀번호===''){
                this.setState({
                    isModalOpen:true,
                    modalText:'비밀번호를 입력해주세요'
                })
            }else if(이름===''){
                this.setState({
                    isModalOpen:true,
                    modalText:'이름을 입력해주세요'
                })
            }else if(이메일===''){
                this.setState({
                    isModalOpen:true,
                    modalText:'이메일을 입력해주세요'
                })
            }else if(휴대폰===''){
                this.setState({
                    isModalOpen:true,
                    modalText:'휴대폰을 입력해주세요'
                })
            }/* else if(주소===''){
                this.setState({
                    isModalOpen:true,
                    modalText:'주소를 입력해주세요'
                })
            }  */

        }else{
            //입력값이 잘못 입력되면 입력 취소
            if(아이디ok===false || 비밀번호1ok===false || 비밀번호2ok===false || 비밀번호3ok===false || 이메일ok===false || 휴대폰ok===false  ){
                if(아이디ok===false){
                    this.setState({
                        isModalOpen:true,
                        modalText:'6자이상 16자 미만'
                    })
                }else if(이메일ok===false){
                    this.setState({
                        isModalOpen:true,
                        modalText:'잘못된 이메일 형식입니다.'
                    })
                }
                return;
            }else{ //정상적으로 입력이 되면
               let cnt=0;
               console.log(약관동의)
               for(let i=0; i<약관동의.length; i++){
                    if(약관동의[i].indexOf('필수') >= 0){ //indexOf는 찾는 문자가 없으면 -1값을 나타내주고 찾는 문자가있으면 정수로 나타내준다.
                        cnt++; //3개가 나와야 함 필수가 3개있기 때문에

                    }
                    if(cnt < 3){
                        this.setState({
                            isModalOpen:true,
                            modalText:"약관동의 필수 선택사항이 체크되지 않았습니다."
                        })
                        return;
                    }else{
                        //모든 조건이 만족하면 전송 저장
                        //임시객체 생성
                        //localstorage JSON.stringify() 문자열 형식으로 변환해서 저장
                        const 가입회원정보 = {
                            아이디: 아이디,
                            비밀번호: 비밀번호,
                            이름: 이름,
                            이메일: 이메일,
                            휴대폰: 휴대폰,
                            주소: `${주소1} ${주소2}`,
                            성별: 성별,
                            생년월일: `${생년}-${생월}-${생일}`,
                            추가입력사항: 추가입력사항,
                            약관동의: 약관동의,
                        }
                        
                        //저장
                        localStorage.setItem(가입회원정보.아이디, JSON.stringify(가입회원정보))
                    }
               }
            }
        }

    }
    render() {
        return (
            <div id="kurly">
                <div className="title">
                    <h1><img src="../../img/logo.svg" alt="" /></h1> 
                </div>
                <div className="content">
                    <h2>회원가입</h2>
                    <h4><span><i>*</i>필수입력사항</span></h4>
                    <form action="#" onSubmit={this.OnSubmitEvent}>
                        <ul>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>아이디 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputId" placeholder='아이디를 입력해주세요' onChange={(e)=>this.onChangeId(e.target.value)} value={this.state.아이디} onFocus={(e)=>this.onMouseDown(e)} />
                                        <button className="w120-btn" onClick={this.onClickIdModalEvent}>중복확인</button>
                                        {
                                            this.state.showId && (
                                                <>
                                                <p className={(this.state.isClassId===''?'':(this.state.isClassId===true?'green':'red'))}>6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합</p>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>비밀번호 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputPw" placeholder='비밀번호를 입력해주세요' value={this.state.비밀번호} onChange={(e)=> this.onChangePw(e.target.value)}  onFocus={(e)=>this.onFocusPw(e)} />

                                        {
                                            this.state.showPw && (
                                                <>
                                                    <p className={(
                                                        this.state.isClassPw1===''?'':(this.state.isClassPw1===true? 'green':'red')
                                                    )}>최소 10자 이상 입력</p>
                                                    <p className={(
                                                        this.state.isClassPw2===''?'':(this.state.isClassPw2===true? 'green':'red')
                                                    )}>영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</p>
                                                    <p className={(
                                                        this.state.isClassPw3===''?'':(this.state.isClassPw3===true? 'green':'red')
                                                    )}>동일한 숫자 3개 이상 연속 사용 불가</p>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>비밀번호확인 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputPw1" placeholder='비밀번호를 한번더 입력해주세요' value={this.state.비밀번호확인} onChange={(e)=> this.onChangePwRe(e.target.value)} onFocus={(e)=>this.onFocusPwRe(e)} />
                                        {
                                            this.state.showPwRe && (
                                                <>
                                                     <p className={(
                                                        this.state.isClassPwRe===''?'':(this.state.isClassPwRe===true? 'green': 'red')
                                                     )}>동일한 비밀번호를 입력</p>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>이름 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputName" placeholder='이름을 입력해주세요' value={this.state.이름} onChange={(e)=> this.onChangeName(e.target.value)} />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>이메일 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputEmail" placeholder='예: marketkurly@kurly.com' value={this.state.이메일} onChange={(e)=> this.onChangeEmail(e.target.value)} onFocus={(e)=>this.onFocusEmail(e)} />
                                        <button className="w120-btn" onClick={this.onClickEmailModalEvent}>중복확인</button>
                                       {
                                        this.state.showEmail && (
                                            <p className={(
                                                this.state.isClassEmail===''?'':(this.state.isClassEmail===true?'green':'red')
                                            )}>
                                                이메일을 입력해 주세요.</p>
                                        )
                                       }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>휴대폰 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputPhone" placeholder='숫자만 입력해주세요' value={this.state.휴대폰} onChange={(e)=> this.onChangePhone(e.target.value)} />
                                        <button onClick={this.onClickPhoneEvent} className={`w120-btn ${this.state.isPhoneClass ? '': 'phone'}`}>인증번호받기</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>주소 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        {
                                            this.state.isAddressInputShow && (
                                                <>
                                                    <input type="text" className='inputText' id="inputAddress1" placeholder='주소입력1'  value={this.state.주소1} onChange={(e)=>this.onChangeAddress1(e.target.value)} />
                                                    <input style={{margin:'5px 0'}} type="text" className='inputText' id="inputAddress2" placeholder='나머지 주소'  value={this.state.주소2} onChange={(e)=> this.onChangeAddress2(e.target.value)} />
                                                </>
                                            )
                                        }
                                        <button 
                                            onClick={this.onClickAddress}
                                            type="button" 
                                            className='inputText addr' id="inputAddr"> 
                                         <img src="../../img/ico_search.svg" alt="검색" />    
                                         <span>
                                            {
                                                this.state.isAddressInputShow===true? `주소재검색`:`주소검색`
                                            }
                                         </span>
                                         </button>
                                        <div id="postcode">
                                            {
                                                this.state.isAddressOn && ( <PostCode  onChangeAddress1={this.onChangeAddress1} />)
                                            }
                                           
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>성별</span>
                                    </div>
                                    <div className="input-box radio-box">
                                          <label>
                                            <input type="radio" checked={this.state.성별.includes( `남자`)}  onChange={(e)=>this.onChangeGender(e.target.value)} value={`남자`}  />
                                            <span>남자</span>
                                          </label>
                                          <label>
                                            <input type="radio" checked={this.state.성별.includes( `여자`)} onChange={(e)=>this.onChangeGender(e.target.value)} value={`여자`}/>
                                            <span>여자</span>
                                          </label>
                                          <label>
                                            <input type="radio" checked={this.state.성별.includes( `선택안함`)} onChange={(e)=>this.onChangeGender(e.target.value)} value={`선택안함`} />
                                            <span>선택안함</span>
                                          </label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>생년월일</span>
                                    </div>
                                    <div className="input-box">
                                         <ul className="date-box">
                                            <li><input type="text" id="year" placeholder='YYYY' value={this.state.생년} onChange={(e)=> this.onChangeYear(e.target.value)} onFocus={(e)=>this.onFocusEvent(e)} onBlur={(e) =>this.onBlurEvent(e)} /></li>
                                            <li><span>/</span></li>
                                            <li><input type="text" id="month" placeholder='MM' value={this.state.생월} onChange={(e)=> this.onChangeMonth(e.target.value)} onFocus={(e)=>this.onFocusEvent(e)} onBlur={(e) =>this.onBlurEvent(e)} /></li>
                                            <li><span>/</span></li>
                                            <li><input type="text" id="date" placeholder='DD' value={this.state.생일} onChange={(e)=> this.onChangeDate(e.target.value)} onFocus={(e)=>this.onFocusEvent(e)} onBlur={(e) =>this.onBlurEvent(e)} /></li>
                                         </ul>
                                         {
                                            this.state.showBirthDay && (
                                                <p className={(
                                                    this.state.isClassBirthDay===""?"":(this.state.isClassBirthDay===true?'green':'red')
                                                )}>
                                                    {this.state.birthDayGideText}
                                                </p>
                                            )
                                         }
                                        {/*  <p>태어난 연도를 정확하게 입력해주세요</p> */}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>추가입력 사항</span>
                                    </div>
                                    <div className="input-box radio-box">
                                          <label>
                                            <input type="radio" checked={this.state.추가입력사항.includes(`추천인 아이디`)} value={`추천인 아이디`} onChange={(e) => this.onChangeChoocheon(e.target.value)} />
                                            <span>추천인 아이디</span>
                                          </label>
                                          <label>
                                            <input type="radio" checked={this.state.추가입력사항.includes(`참여 이벤트명`)} value={`참여 이벤트명`} onChange={(e) => this.onChangeChoocheon(e.target.value)} />
                                            <span>참여 이벤트명</span>
                                          </label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr />
                            </li>
                            <li className='service'>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>이용약관동의<i>*</i></span>
                                    </div>
                                    <div className="input-box check-box">
                                          <dl>
                                            <dt>
                                                <label>
                                                    <input type="checkbox" value={`전체 동의합니다.`}  onChange={(e)=>this.onChangeCheckEventAll(e.target.checked, e.target.value)} checked={this.state.약관동의.length >=7 ? true:false}/>
                                                    <span>전체 동의합니다.</span>
                                                </label>
                                                <p className='gapAgree'>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                                            </dt>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`이용약관동의 (필수)`} checked={this.state.약관동의.includes(`이용약관동의 (필수)`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)} />
                                                    <span>이용약관동의 <i>(필수)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">이용약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`개인정보 수집∙이용 동의 (필수)`} checked={this.state.약관동의.includes(`개인정보 수집∙이용 동의 (필수)`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)}  />
                                                    <span>개인정보 수집∙이용 동의<i>(필수)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">이용약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`개인정보 수집∙이용 동의 (선택)`} checked={this.state.약관동의.includes(`개인정보 수집∙이용 동의 (선택)`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)}  />
                                                    <span>개인정보 수집∙이용 동의 <i>(선택)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">이용약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`} checked={this.state.약관동의.includes(`무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)}  />
                                                    <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의 <i>(선택)</i></span>
                                                </label>
                                                <div className="sub-checkbox">
                                                    <div>
                                                        <label>
                                                            <input type="checkbox" value={`SNS`} checked={this.state.약관동의.includes(`SNS`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)} />
                                                            <span>SNS</span>
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" value={`이메일`} checked={this.state.약관동의.includes(`이메일`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)} />
                                                            <span>이메일</span>
                                                        </label>
                                                    </div>
                                                    <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                                                </div>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`본인은 만 14세 이상입니다. (필수)`} checked={this.state.약관동의.includes(`본인은 만 14세 이상입니다. (필수)`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)} />
                                                    <span>본인은 만 14세 이상입니다. <i>(필수)</i></span>
                                                </label>
                                            </dd>
                                          </dl>                                       
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="button-box">
                            <button type='submit'>가입하기</button>
                        </div>  

                    </form>

                    {/* 모달창 중복확인(아이디, 이메일, 인증번호) */}
                    {
                        this.state.isModalOpen && (
                            <div className="modal">
                                <div className="container">
                                    <div className="content-box">
                                         <p>{this.state.modalText}</p>
                                    </div>
                                    <div className="button-box">
                                        <button className="ok-btn" title="확인" onClick={this.onClickModalClose}>확인</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default KurlyComponent;