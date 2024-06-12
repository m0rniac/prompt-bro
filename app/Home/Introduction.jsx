import React from 'react'
import Image from 'next/image'

import Data from '../data.json';

export default function Introduction() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <div className='d-flex justify-content-center'>
                    <Image src={Data.logo} width={256} height={256} alt={'Loading...'} />
                </div>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-center'>
                        <h3>
                            Prompt-Bro
                        </h3>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div>
                            <p>
                                ¡Hola! Soy un mini-asistente de prompting para ChatGPT, Stable Diffusion y muchos otros servicios.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
