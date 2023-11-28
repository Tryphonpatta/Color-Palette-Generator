import { ChromePicker } from 'react-color'
import { useState } from 'react'
import Gencolor from './component/generatedcolor'


export default function Home() {
  const [color, setColor] = useState(null)
  const [colorhex, setColorhex] = useState('#ffffff')

  return (
    <main>
      <html data-theme="dark">
        <div className='w-screen h-screen'>
          <h1 className=' float-left'>Color Palette Geneartor</h1>
          <div className='w-full h-full flex justify-center items-center'>
            <div className='w-full flex m-2 justify-center'>
              <div className='w-ful m-2 flex flex-col items-center'>
                <ChromePicker color={colorhex} onChange={(e) => {
                  // console.log(e);
                  setColor(e);
                  setColorhex(e.hex);
                }
                } />
                <div className={`w-5 h-5 rounded-full relative mt-2`} style={{ backgroundColor: colorhex }}></div>
                <p className='m-1'>Current Color : {colorhex}</p>
              </div>
              {color !== null && (
                <Gencolor Color={color} className="w-full" />
              )}
            </div>
          </div>
        </div>
      </html>
    </main>
  )
}
