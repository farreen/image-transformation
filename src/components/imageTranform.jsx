import React, { useState } from "react";
import '../App.css'

const TransformImage = () => {
    const urlEndpoint = 'https://ik.imagekit.io/2bq9k0fla/';

 let images = [
"tr:w-715,h-460:oi-pexels-karolina-grabowska-5207103.jpg,oh-350,ow-700,ox-0,oy-0,oib-5_FFFFFF:oi-pexels-gene-wide-6502369.jpg,oh-100,ow-100,ofo-bottom_left,oib-5_FFFFFF,tr:ot-overlays%20made%20easy,ots-45,ott-b,otc-00FFFF,ofo-bottom,otbg-FFFFFF80/265-2651179_landscape-canvas-white-painting-canvas-png.png"
,"tr:w-715,h-460:oi-1675079149_20221221_Urinary_Tract_Infection__UTI___08.webp,oh-350,ow-700,ox-0,oy-0,oib-5_FFFFFF:oi-pexels-gene-wide-6502369.jpg,oh-100,ow-100,ofo-bottom_left/265-2651179_landscape-canvas-white-painting-canvas-png.png" 
,"tr:w-715,h-460:oi-1674631236_Beneficial_Effects_of_SGLT2_Inhibitors_in_Geriatric_Population.jpg,oh-400,ow-600,ox-0,oy-0,oib-5_FFFFFF:oi-1674631236_Beneficial_Effects_of_SGLT2_Inhibitors_in_Geriatric_Population.jpg,oh-100,ow-100,ox-N0,oy-N150,oib-5_FFFFFF:oi-1675079149_20221221_Urinary_Tract_Infection__UTI___08.webp,oh-100,ow-100,oib-5_FFFFFF,ox-N0,oy-N250:oi-1674631236_Beneficial_Effects_of_SGLT2_Inhibitors_in_Geriatric_Population.jpg,oh-100,ow-100,ox-N0,oib-5_FFFFFF:oi-1675079149_20221221_Urinary_Tract_Infection__UTI___08.webp,oh-100,ow-100,oib-5_FFFFFF,ox-N0,oy-N50,tr:ot-overlays%20made%20easy,ots-45,otc-000000,otbg-FFFFFF,ofo-bottom,oth-600,oy-N0/265-2651179_landscape-canvas-white-painting-canvas-png.png"
,"tr:w-715,h-460:oi-pexels-karolina-grabowska-5207103.jpg,oh-450,ow-700,ox-0,oy-0,oib-5_FFFFFF,tr:ot-overlays%20made%20easy,ots-45,ofo-bottom,otc-000000,otw-700,otbg-FFFFFF80,otp-40,otia-bottom/265-2651179_landscape-canvas-white-painting-canvas-png.png"
,"tr:w-715,h-460,tr:obg-AAFF0040,oh-460,ow-715:oi-1674631236_Beneficial_Effects_of_SGLT2_Inhibitors_in_Geriatric_Population.jpg,oh-100,ow-100,ox-0,oy-0,oib-5_FFFFFF,tr:ot-overlays%20made%20easy,ots-70,otc-000000,otp-20,ofo-bottom/265-2651179_landscape-canvas-white-painting-canvas-png.png"
]
return (
        <>
        <div>transform image</div>
        {
            images.map((image) => {
                return (
                    <img
                    src={`${urlEndpoint}${image}`}
                    width="200"
                    height="200"
                    />
                )
            })
         }
        </>
    )
}
export default TransformImage;