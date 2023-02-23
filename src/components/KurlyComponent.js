import React, { Component } from 'react';
import './KurlyComponent.scss';
import Postcode from './Postcode';

class KurlyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            아이디: '',
            비밀번호: '',
            비밀번호확인: '',
            이름:'',
            이메일:'',
            휴대폰:'',
            주소:'',
            주소1:'',
            주소2:'',
            성별:'선택안함',
            생년:'',
            생월:'',
            생일:'',
            생년월일:'',
            추가입력사항:'',
            약관동의:[],
            isAddressOn:false,
            isAddressInputShow:false,
        }
    }
    onChangeId = (value) => {
        // 타겟되는 값으로 넣기 위해
        this.setState({아이디:value});
    }
    onChangePw = (value) => {
        this.setState({비밀번호:value})
    }
    onChangePwRe = (value) => {
        this.setState({비밀번호확인:value})
    }
    onChangeName = (value) => {
        this.setState({이름:value})
    }
    onChangeEmail = (value) => {
        this.setState({이메일:value})
    }
    onChangePhone = (value) => {
        this.setState({휴대폰:value})
    }
    onChangeAddr = (value) => {
        this.setState({주소:value})
    }
    onChangeZender = (value) => {
        this.setState({성별:value})
    }
    onChangeYear = (value) => {
        this.setState({생년:value})
    }
    onChangeMonth = (value) => {
        this.setState({생월:value})
    }
    onChangeDate = (value) => {
        this.setState({생일:value})
    }
    onChangeChoocheon = (value) => {
        this.setState({추가입력사항:value})
    }
    
    onChangeAddress1 = (value) => {
        this.setState({주소1:value});
    }
    onChangeCheckEvent = (checked, value) => {
        let result = '';// true인 친구를 누적해야 함
        if(checked){
            //둘 다 참일 때 SMS가 선택 돼있고 약관동의의 이메일값이 가지고 있다면(checked가 돼있는 상태)
            if(value==='SMS' && this.state.약관동의.includes('이메일')){
                // 변경되는 값에 약관동의에있는 기존에 있던것에 SMS와 무료배송---이 체크가 되게 하는 것
                this.setState({약관동의: [...this.state.약관동의, 'SMS', '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)']})
            }
            //SMS를 포함하고 있고 이메일을 클릭을 하면
            else if(value==='이메일' && this.state.약관동의.includes('SMS')){
                // 변경되는 값에 약관동의에있는 기존에 있던것에 SMS와 무료배송---이 체크가 되게 하는 것
                this.setState({약관동의: [...this.state.약관동의, '이메일', '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)']})
            }
            //value값의 SMS선택 돼있고 이메일이 선택이 안 돼있을 때 무료배송---을 눌렀을 때 이메일까지 체크가 되게
            else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && this.state.약관동의.includes('SMS') && !this.state.약관동의.includes('이메일')){
                // value값과 이메일 값까지 체크가 되게
                this.setState({약관동의: [...this.state.약관동의, '이메일', value]})
            }
            //value값의 이메일선택 돼있고 SMS가 선택이 안 돼있을 때 무료배송---을 눌렀을 때 이메일까지 체크가 되게
            else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && !this.state.약관동의.includes('SMS') && this.state.약관동의.includes('이메일')){
                // 이메일만 체크 돼있을 때 무료배송을 눌르면 value값과 SMS값이 체크되게
                this.setState({약관동의: [...this.state.약관동의, 'SMS', value]})
            }
            //SMS포함 이메일도 포함 돼있으면
            else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && this.state.약관동의.includes('SMS') && this.state.약관동의.includes('이메일')){
                // value값이 보이라고 하기
                this.setState({약관동의: [...this.state.약관동의, value]})
            }
            // SMS와 이메일이 포함되지 않았을 때
            else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && !this.state.약관동의.includes('SMS') && !this.state.약관동의.includes('이메일')){
                // 이메일 SMS value값이 나타나게
                this.setState({약관동의: [...this.state.약관동의,'이메일','SMS', value]})
            }
            else{
                //value값을 가지고오는데 이 value값은 밑에 imsi 선택하면 imsi 값으로 바뀜
                this.setState({약관동의:[...this.state.약관동의, value]})
            }
        // 체크 안되는 부분
        }else{
                //value가 선택이 되면
            if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)'){
                // 빈값에 약관동의에서 value값이 아닌 것을 filter해서 result에 넣기
                result = this.state.약관동의.filter((item)=>item !== value); //value값이 없다는 얘기임, item은 imsi안에 내용들  내가 선택한 값이 아니면 result값에 넣기
                result = result.filter((item) => item!=='SMS');//SNS가 없으면 result대입
                result = result.filter((item) => item!=='이메일');//이메일이 없으면 result대입
            }else if(value==='SMS'){
                result = this.state.약관동의.filter((item)=>item !== value); //value값이 없다는 얘기임, item은 imsi안에 내용들  내가 선택한 값이 아니면 result값에 넣기 SMS가없다는 얘기임
                result = result.filter((item) => item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)');//SNS가 없으면 result대입
            }
            else if(value==='이메일'){
                result = this.state.약관동의.filter((item)=>item !== value); //value값이 없다는 얘기임, item은 imsi안에 내용들  내가 선택한 값이 아니면 result값에 넣기
                result = result.filter((item) => item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)');//SNS가 없으면 result대입
            }else{
                result = this.state.약관동의.filter((item)=>item !== value);
            }
            this.setState({약관동의: result});//값을 대입해 주는 값
            // result = this.state.약관동의.filter((item)=>item !== value); //value값이 없다는 얘기임, item은 imsi안에 내용들  내가 선택한 값이 아니면 result값에 넣기
            // this.setState({약관동의: result});
        }
    }
    // 주소검색을 눌르면 주소창 나오게 하는 것
    onClickAddress = (e) => {
        e.preventDefault();
        // true로 만들어줌
        this.setState({isAddressOn:true})
    }
    onChangeCheckEventAll = (checked, value) => {
        // console.log([...this.state.약관동의])
        // console.log([value])
        let imsi = [
            `이용약관동의 (필수)`,
            `개인정보 수집∙이용 동의 (필수)`,
            `개인정보 수집∙이용 동의 (선택)`,
            `무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`,
            `SMS`,
            `이메일`,
            `본인은 만 14세 이상입니다. (필수)`,
        ];

        if(checked){
            this.setState({약관동의: imsi}); //모두체크
        }else{
            this.setState({약관동의: []}) // 모두체크 해제
        }
    }
    // 가입하기 버튼을 눌르면 php로 이동
    OnSubmitEvent = (e) => {
        e.preventDefault();

        this.setState({생년월일:`${this.state.생년}-${this.state.생월}-${this.state.생일}`})
    }
    render() {
        return (
            <div id='kurly'>
                <div className="title">
                    <h1><img src="/img/logo.svg" alt="logo" /></h1>
                </div>
                <div className="content">
                    <h2>회원가입</h2>
                    <h4><span><i>*</i>필수입력사항</span></h4>
                    <form action="#" onSubmit={this.OnSubmitEvent}>
                        <ul>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>아이디<i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputId" placeholder='아이디를 입력해주세요' onChange={(e)=>this.onChangeId(e.target.value)} value={this.state.아이디} />
                                        <button className="w120-btn">중복확인</button>
                                        <p className=''>6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>비밀번호<i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="password" className="inputText" id="inputPw" placeholder='비밀번호를 입력해주세요' value={this.state.비밀번호} onChange={(e)=>this.onChangePw(e.target.value)}/>
                                        <p className=''>최소 10자 이상 입력</p>
                                        <p className=''>영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</p>
                                        <p className=''>동일한 숫자 3개 이상 연속 사용 불가</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>비밀번호 확인<i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="password" className="inputText" id="inputPw1" placeholder='비밀번호를 한번 더 입력해주세요' onChange={(e)=>this.onChangePwRe(e.target.value)} value={this.state.비밀번호확인}/>
                                        <p className=''>비밀번호를 한번 더 입력해 주세요.</p>
                                        <p className=''>동일한 비밀번호를 입력</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>이름<i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputName" placeholder='이름을 입력해주세요' onChange={(e)=>this.onChangeName(e.target.value)} value={this.state.이름}/>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>이메일<i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputEmail" placeholder='예: marketkurly@kurly.com' onChange={(e)=>this.onChangeEmail(e.target.value)} value={this.state.이메일}/>
                                        <button className="w120-btn">중복확인</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>휴대폰<i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputPhone" placeholder='숫자만 입력해주세요' onChange={(e)=>this.onChangePhone(e.target.value)} value={this.state.휴대폰}/>
                                        <button className="w120-btn">인증번호받기</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>주소<i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                         {
                                            this.state.isAddressInputShow && ( 
                                                <>
                                                    <input type="text" className='inputText' id='inputAddress1' placeholder='주소입력' value={this.state.주소1} onChange={(e)=>this.onChangeAddress1(e.target.value)}/>
                                                    <input style={{margin:'5px 0'}} type="text" className='inputText' id='inputAddress2' placeholder='상세주소' value={this.state.주소2}/>
                                                </>
                                            )
                                        } 
                                        <button onClick={this.onClickAddress} type='button' className="inputText addr" id='inputAddr'><img src="img/ico_search.svg" alt="검색"/> 주소검색</button>
                                        <div id="postcode">
                                            {
                                                //값을 내려줘야함
                                                this.state.isAddressOn && (<Postcode  onChangeAddress1={this.onChangeAddress1}/>)
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
                                            {/* 내가 체크한 친구가 남자인지 아닌지 확인 */}
                                            <input type="radio" checked={this.state.성별.includes(`남자`)} onChange={(e)=>this.onChangeZender(e.target.value)} value={`남자`} />
                                            <span>남자</span>
                                        </label>
                                        <label>
                                            <input type="radio" checked={this.state.성별.includes(`여자`)} onChange={(e)=>this.onChangeZender(e.target.value)} value={`여자`}/>
                                            <span>여자</span>
                                        </label>
                                        <label>
                                            <input type="radio" checked={this.state.성별.includes(`선택안함`)} onChange={(e)=>this.onChangeZender(e.target.value)} value={`선택안함`}/>
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
                                            <li>
                                                <input type="text" id="year" placeholder='YYYY' onChange={(e)=>this.onChangeYear(e.target.value)} value={this.state.생년}/>
                                            </li>    
                                            <li>
                                                <span>/</span>
                                            </li>    
                                            <li><input type="text" id="month" placeholder='MM' onChange={(e)=>this.onChangeMonth(e.target.value)} value={this.state.생월}/></li>    
                                            <li><span>/</span></li>
                                            <li><input type="text" id="date" placeholder='DD' onChange={(e)=>this.onChangeDate(e.target.value)} value={this.state.생일}/></li>    
                                        </ul>  
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
                                            <input type="radio" checked={this.state.추가입력사항.includes(`추천인 아이디`)} value={`추천인 아이디`} onChange={(e) => this.onChangeChoocheon(e.target.value)}/>
                                            <span>추천인 아이디</span>
                                        </label>
                                        <label>
                                            <input type="radio" checked={this.state.추가입력사항.includes(`참여 이벤트명`)} value={`참여 이벤트명`} onChange={(e) => this.onChangeChoocheon(e.target.value)}/>
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
                                                    {/* check돼야하는게 7개 임으로 넘어가면 true 아니면 false */}
                                                    <input type="checkbox" value={`전체 동의합니다.`} onChange={(e)=>this.onChangeCheckEventAll(e.target.checked, e.target.value)} checked={this.state.약관동의.length >= 7 ? true : false}/>
                                                    <span>전체 동의합니다.</span>
                                                </label>
                                                <p className='gapAgree'>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                                            </dt>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`이용약관동의 (필수)`} checked={this.state.약관동의.includes(`이용약관동의 (필수)`)} onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                    <span>이용약관동의 <i>(필수)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">이용약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`개인정보 수집∙이용 동의 (필수)`} checked={this.state.약관동의.includes(`개인정보 수집∙이용 동의 (필수)`)} onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                    <span>개인정보 수집∙이용 동의 <i>(필수)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">이용약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`개인정보 수집∙이용 동의 (선택)`} checked={this.state.약관동의.includes(`개인정보 수집∙이용 동의 (선택)`)} onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                    <span>개인정보 수집∙이용 동의 <i>(선택)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">이용약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`} checked={this.state.약관동의.includes(`무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`)} onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                    <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의 <i>(선택)</i></span>
                                                </label>
                                                <div className="sub-checkbox">
                                                    <div>
                                                        <label>
                                                            <input type="checkbox" value={`SMS`} checked={this.state.약관동의.includes(`SMS`)} onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                            <span>SMS</span>
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" value={`이메일`} checked={this.state.약관동의.includes(`이메일`)} onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                            <span>이메일</span>
                                                        </label>
                                                    </div>
                                                    <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                                                </div>
                                                
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`본인은 만 14세 이상입니다. (필수)`} checked={this.state.약관동의.includes(`본인은 만 14세 이상입니다. (필수)`)} onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
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
                </div>
            </div>
        );
    }
}

export default KurlyComponent;