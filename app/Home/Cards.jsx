import React from 'react';
import Image from 'next/image';

export default function Cards() {
    return (
        <React.Fragment>
            <div className='container mt-5 w-75'>
                <hr />
                <div className='row mt-5'>
                    <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                        <Image src={'/images/another/img_02.svg'} width={250} height={250} alt='Loading...' />
                    </div>
                    <div className='col-md-6 mt-4 order-md-1'>
                        <h3>Acerca de las actualizaciones</h3>
                        <p>
                            Eventualmente, recibo actualizaciones en mi sistema con el fin de mejorar mis prompts o agregar nuevos, lo que me permite ofrecer resultados aún más precisos y efectivos.
                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/images/another/img_03.svg'} width={250} height={250} alt='Loading...' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>Excelentes resultados, pero no mágicos...</h3>
                        <p>
                            Aunque mis sugerencias pueden mejorar significativamente tus resultados, es importante recordar que para una precisión aún más precisa, la idea base debe estar bien fundamentada. Mejoro tus resultados, pero no puedo hacer milagros.
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </React.Fragment>
    )
}