import { useState } from "react"
import LetsConnect from "../assets/letsconnect.png"
import getInTouch from "../assets/getintouch.png"

export default function FAQs(){

    return (
        <>
            <div style={{display:'flex', justifyContent:'center', marginTop:'150px'}}>
                <div style={{fontSize:'72px', color: 'rgb(247, 199, 255)', fontFamily: 'Clash Display, sans-serif', fontWeight:'400', lineHeight:'80px', width:'900px', textAlign:'center'}}>
                    YOU MIGHT 
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{fontSize:'72px', color: 'rgb(247, 199, 255)', fontFamily: 'Clash Display, sans-serif', fontWeight:'400', lineHeight:'80px', width:'900px', textAlign:'center'}}>
                    HAVE QUESTIONS
                </div>
            </div>

            <div style={{display:'flex', justifyContent:'center', margin:'-15px'}}>
                <div style={{fontFamily: 'Satoshi, sans-serif', fontSize:'24px', color:'#867997', width:'850px', textAlign:'center', fontWeight:'100', lineHeight:'27px'}}>
                    <p>
                        Frequently Asked Questions
                    </p> 
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
                <div>
                    <Accordian title='What exactly does "YouTube as a Service" mean?' data='We manage everything related to your YouTube channel – from content creation, scripting, filming, and production, to editing and uploading videos. Our service allows you to focus on your core business while we take care of your YouTube presence.'/>
                    <Accordian title='What is the difference between end-to-end management and consulting?' data='We manage everything related to your YouTube channel – from content creation, scripting, filming, and production, to editing and uploading videos. Our service allows you to focus on your core business while we take care of your YouTube presence.'/>
                    <Accordian title='Can you help us grow an existing YouTube channel?' data='We manage everything related to your YouTube channel – from content creation, scripting, filming, and production, to editing and uploading videos. Our service allows you to focus on your core business while we take care of your YouTube presence.'/>
                    <Accordian title='Are your services suitable for all industries?' data='We manage everything related to your YouTube channel – from content creation, scripting, filming, and production, to editing and uploading videos. Our service allows you to focus on your core business while we take care of your YouTube presence.'/>
                    <Accordian title='What results can we expect from your services?' data='We manage everything related to your YouTube channel – from content creation, scripting, filming, and production, to editing and uploading videos. Our service allows you to focus on your core business while we take care of your YouTube presence.'/>
                    <Accordian title='Do you offer any performance guarantees?' data='We manage everything related to your YouTube channel – from content creation, scripting, filming, and production, to editing and uploading videos. Our service allows you to focus on your core business while we take care of your YouTube presence.'/>
                    <Accordian title='How do we start?' data='We manage everything related to your YouTube channel – from content creation, scripting, filming, and production, to editing and uploading videos. Our service allows you to focus on your core business while we take care of your YouTube presence.'/>
                </div>
            </div>

            <br /><br />
            
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={LetsConnect} style={{width:'1100px'}} />
            </div>
            

            


            
        </>
    )
}

function Accordian({title, data}){
    const [show, setshow] = useState(false);

    return (
        <>
            <div style={{width:'900px', border:'2px solid #422F4E', borderRadius:'30px', backgroundColor:'#2C183A', cursor: 'pointer', margin:'10px'}} onClick={()=>{setshow((x)=>!x)}}>
                <div style={{padding:'30px', color:'white', fontFamily:'Satoshi, sans-serif', fontSize:'22px', display:'flex', justifyContent:'space-between'}}>
                    <div>   
                        {title}
                    </div>
                    <div>
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style={{marginTop:'-3px', width: '30px', height: '100%', display: 'inline-block', fill: 'rgb(255, 255, 255)', flexShrink: '0'}}><g color="rgb(255, 255, 255)" weight="duotone"><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="rgb(255, 255, 255)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="rgb(255, 255, 255)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></g></svg>
                    </div>
                </div>
                {
                    (show)?<><div style={{paddingLeft:'30px', paddingBottom:'30px', paddingRight:'60px', fontSize:'18px', color:'white', fontWeight:'100', fontFamily:'Satoshi, sans-serif'}}>{data}</div></>:<></>
                }
            </div>
        </>
    )
}