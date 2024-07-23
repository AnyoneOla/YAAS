export default function GetInTouch(){

    return (
        <>
            <div style={{display:'flex', justifyContent:'center', marginTop:'150px'}}>
                <div style={{fontSize:'72px', color: 'rgb(247, 199, 255)', fontFamily: 'Clash Display, sans-serif', fontWeight:'400', lineHeight:'80px', width:'900px', textAlign:'center'}}>
                    GET IN TOUCH
                </div>
            </div>

            <div style={{display:'flex', justifyContent:'center', margin:'-15px'}}>
                <div style={{fontFamily: 'Satoshi, sans-serif', fontSize:'24px', color:'white', width:'850px', textAlign:'center', fontWeight:'100', lineHeight:'27px'}}>
                    <p>
                        Thanks for showing interest in working with YAAS! Please fill in your details below and our team will revert back within 24 hours. You can also contact us via the email/number provided above.
                    </p> 
                </div>
            </div>

            <div style={{position:'relative', display:'flex', justifyContent:'center', marginTop:'100px'}}>
                <div style={{width:'800px', display:'flex', justifyContent:'start'}}>
                    <div>
                        <TextInput name='Your Name *' placeholder="John Doe" />
                        <TextInput name='Company Name *' placeholder="YouTube As A Service" />
                        <TextInput name='Company Website' placeholder="www.youtubeasaservice.com" />
                        <TextInput name='Your Job Title *' placeholder="Founder" />
                        <TextInput name='Your Email Address *' placeholder="johndoe@gmail.com" />
                        <TextInput name='Your Phone Number *' placeholder="+91 1234567890" />
                        <MCQ name='Do you already have a YouTube channel? *' options={['Yes', 'No']} />
                        <TextInput name='If yes, please provide your YouTube channel link' placeholder="" />
                        <MCQ name='Which service are you interested in? *' options={['End-To-End Youtube Channel Management', 'Youtube Consulting', 'Production and Editing']} />
                        <TextInput name='If you want to share any additional information, please write it below' placeholder="" textArea={true} />
                        <div style={{backgroundColor:'#61458F', padding:'10px', paddingLeft:'30px', paddingRight:'30px', fontSize:'15px', border:'1px solid #3E2B45', color:'white', fontFamily:'sans-serif', fontWeight:'700', width:'55px', borderRadius:'5px', marginTop:'-60px'}}>
                            Submit
                        </div>

                        <div style={{marginTop:'80px', display:'flex', justifyContent:'center'}}>
                            <div style={{backgroundColor:'#61458F', borderRadius:'50%', height:'16px', padding:'5px', marginRight:'10px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 20 20" fill="currentColor" width="8" height="8" color="rgb(255, 255, 255)" style={{width: '100%', 'height': '100%'}}><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <div style={{fontFamily:'JetBrains Mono, monospace', fontSize:'16px', color:'white', marginTop:'4px'}}>
                                business@yaas.studio
                            </div>
                        </div>

                        <div style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
                            <div>
                                <img src='https://framerusercontent.com/images/6ilTb1mEivC7MRT4niIsyIMktbs.png' height='64px'/>
                            </div>
                            <div style={{margin:'15px'}}>
                                <div style={{fontSize:'14px', fontFamily:'Satoshi, sans-serif', color:'white'}}>
                                    Youtube as a Service © 2024
                                </div>
                                <div style={{fontSize:'14px', fontFamily:'Satoshi, sans-serif', color:'white'}}>
                                    Terms & Conditions ・ Privacy
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

function TextInput({name, placeholder='', textArea=false}){

    return (
        <>
            <div style={{marginBottom:'80px'}}>
                <div style={{fontSize:'17px', fontWeight:'600', fontFamily:'sans-serif', color:'white', marginTop:'10px', marginBottom:'10px'}}>
                    {name}
                </div>
                {
                    (textArea)? <div>
                                    <input type="textArea" placeholder={placeholder} style={{paddingLeft:'15px', width:'800px', border:'1px solid #3E2B45', backgroundColor:'#240E2C', borderRadius:'5px', height:'100px', fontSize:'15px', fontWeight:'100', padding:'5px', fontFamily:'sans-serif', color:'white'}} />
                                </div>
                              : <div>
                                    <input type="text" placeholder={placeholder} style={{paddingLeft:'15px', width:'800px', border:'1px solid #3E2B45', backgroundColor:'#240E2C', borderRadius:'5px', height:'30px', fontSize:'15px', fontWeight:'100', padding:'5px', fontFamily:'sans-serif', color:'white'}} />
                                </div>
                }
                
            </div>
        </>
    )
}


function MCQ({name, options}){
    let temp = []
    options.forEach(option => {
        temp.push(
        <div key={name} style={{border:'1px solid #3E2B45', borderRadius:'5px', padding:'10px', width:'50%', backgroundColor:'#240E2C', marginTop:'10px', marginBottom:'10px'}}>
            <input type="radio" id={option} value={option} />
            <label htmlFor={option} style={{color:'white', fontSize:'15px', fontFamily:'sans-serif', fontWeight:'100', paddingLeft:'10px'}}>{option}</label>
        </div>)
    });

    return (
        <>
            <div style={{marginBottom:'80px'}}>
                <div style={{fontSize:'17px', fontWeight:'600', fontFamily:'sans-serif', color:'white', marginTop:'10px', marginBottom:'10px'}}>
                    {name}
                </div>
                {
                    temp
                }
                
            </div>
        </>
    )
}