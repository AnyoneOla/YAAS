import Brands from '../assets/brands.png'

export default function WeWorkWith(){

    return (
        <>
            <div style={{display:'flex', justifyContent:'center', marginTop:'150px'}}>
                <div style={{fontSize:'72px', color: 'rgb(247, 199, 255)', fontFamily: 'Clash Display, sans-serif', fontWeight:'400', lineHeight:'80px', width:'935px', textAlign:'center'}}>
                WE WORK WITH SOME OF THE BIGGEST BRANDS
                </div>
            </div>
            <br />
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={Brands} style={{width:'1000px'}}/>
            </div>
        </>
    )
}