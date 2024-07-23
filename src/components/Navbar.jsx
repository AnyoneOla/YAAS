export default function Navbar(){

    return (
        <div style={{position:'fixed', top:'0', left:'0', display:'flex', justifyContent:'center', zIndex:'100', width:'100vw'}}>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', backdropFilter: 'blur(5px)', marginTop:'20px', borderRadius:'50px'}}>
                <Tab name={<img src='https://framerusercontent.com/images/6ilTb1mEivC7MRT4niIsyIMktbs.png' height='64px'/>} />
                <Tab name={'How it Works?'} leftPad="0px"/>
                <Tab name={'Why Us?'} />
                <Tab name={'FAQs'} />
                <GetInTouch />
            </div>
        </div>
    )
}

function Tab({name, flag=false, leftPad='40px'}){
    return (
        <div style={{fontFamily:'sans-serif', padding:'5px', color:'white', paddingLeft:leftPad, paddingRight:'40px', cursor:'pointer'}}>
            {name}
            {
                (flag)?<svg xmlnsXlink="http://www.w3.org/1999/xlink"  width="23" height="10" viewBox="-1 -1 23 10" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg1963641085_492">
                <path d="M0.5 3.24996L-0.25 3.24996L-0.25 4.74996L0.5 4.74996L0.5 3.24996ZM0.5 4.74996L19.5 4.74996L19.5 3.24996L0.5 3.24996L0.5 4.74996ZM15.879 3.1726e-08C15.879 2.59998 17.9249 4.75 20.5 4.75L20.5 3.25C18.7993 3.25 17.379 1.8183 17.379 -3.1726e-08L15.879 3.1726e-08ZM20.5 3.25C17.9249 3.25 15.8789 5.39999 15.8789 8H17.3789C17.3789 6.18172 18.7993 4.75 20.5 4.75V3.25Z" fill="white"></path>
                </svg>:null
            }
        </div>
    )
}

function GetInTouch(){
    return(
    <div style={{background: 'linear-gradient(94.1778deg, rgb(97, 69, 143) 0%, rgb(51, 37, 74) 100%)', color:'white', padding:'13px', paddingLeft:'25px', paddingRight:'25px', borderRadius:'20px', fontFamily:'Satoshi Black, sans-serif', fontSize:'13px', fontWeight:'600', marginRight:'40px', marginLeft:'40px', cursor:'pointer'}}>
        Get in Touch&nbsp;
        <svg xmlnsXlink="http://www.w3.org/1999/xlink"  width="23" height="10" viewBox="-1 -1 23 10" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg1963641085_492">
            <path d="M0.5 3.24996L-0.25 3.24996L-0.25 4.74996L0.5 4.74996L0.5 3.24996ZM0.5 4.74996L19.5 4.74996L19.5 3.24996L0.5 3.24996L0.5 4.74996ZM15.879 3.1726e-08C15.879 2.59998 17.9249 4.75 20.5 4.75L20.5 3.25C18.7993 3.25 17.379 1.8183 17.379 -3.1726e-08L15.879 3.1726e-08ZM20.5 3.25C17.9249 3.25 15.8789 5.39999 15.8789 8H17.3789C17.3789 6.18172 18.7993 4.75 20.5 4.75V3.25Z" fill="white"></path>
        </svg>
    </div>
    )
}