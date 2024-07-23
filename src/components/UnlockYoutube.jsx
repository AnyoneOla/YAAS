import Unlock from '../assets/unlock.png';

export default function UnlockYoutube(){
    return (
        <>
            <div style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
                <div style={{fontSize:'72px', color: 'rgb(247, 199, 255)', fontFamily: 'Clash Display, sans-serif', fontWeight:'400', lineHeight:'80px', width:'900px', textAlign:'center'}}>
                UNLOCKING YOUTUBE SUCCESS CAN BE HARD
                </div>
            </div>

            <div style={{display:'flex', justifyContent:'center', margin:'5px'}}>
                <div style={{fontFamily: 'Satoshi, sans-serif', fontSize:'24px', color:'white', width:'700px', textAlign:'center', fontWeight:'100', lineHeight:'27px'}}>
                    <p>
                        But we're YouTube nerds, we live and breathe the platform. We've earned the trust of top brands through our creative process and track record of delivering results consistently. From ideation and scripting to filming, production, editing, and everything in between, we've got your back.
                    </p> 
                </div>
            </div>

            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={Unlock} height='450px' />
            </div>
        </>
    )
}