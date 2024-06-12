import React from 'react';

export default function Introduction() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <div className='container'>
                    <div className='d-flex justify-content-center'>
                        <h3>Guía de Uso</h3>
                    </div>
                    <div className='mt-4'>
                        <h6>1. Pegar Descripciones</h6>
                        <p>
                            Pega la descripción del trabajo de Freelancer.com en "Descripción del Trabajo" y la descripción de tu perfil en "Descripción de tu Perfil de Freelancer".
                        </p>
                        <h6>2. Generar el Prompt</h6>
                        <p>
                            Haz clic en <strong>Generar Prompt</strong>. Se generará un prompt para ChatGPT con tu propuesta y habilidades.
                        </p>
                        <h6>3. Copiar y Usar el Prompt</h6>
                        <p>
                            Usa el botón <strong>Copiar Prompt</strong> para copiar el texto generado. Haz clic en <strong>Abrir ChatGPT</strong> para pegar y usar el prompt en ChatGPT.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
