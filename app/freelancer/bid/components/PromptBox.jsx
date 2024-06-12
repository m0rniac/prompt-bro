'use client';
import React, { useState } from 'react';

export default function PromptBox() {
    const [jobDescription, setJobDescription] = useState('');
    const [profileDescription, setProfileDescription] = useState('');
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [copySuccess, setCopySuccess] = useState('');
    const [error, setError] = useState('');

    const handleJobDescriptionChange = (event) => {
        setJobDescription(event.target.value);
        setError(''); // Clear error message when user starts typing
    };

    const handleProfileDescriptionChange = (event) => {
        setProfileDescription(event.target.value);
        setError(''); // Clear error message when user starts typing
    };

    const handleGeneratePrompt = () => {
        if (jobDescription.trim() === '' || profileDescription.trim() === '') {
            setError('Debes pegar la descripción del trabajo y la descripción de tu perfil.');
            setGeneratedPrompt('');
            return;
        }
        const prompt = `
        Extrae la idea inicial de la siguiente descripción de trabajo de Freelancer.com (esto para demostrar que comprendes correctamente lo que se solicita), seguido de detalles que harás para mejorar un poco más el producto final, todo esto en el siguiente formato: (Entiendo completamente lo que necesitas {idea_inicial_extraida}, tambien añadiré {detalles_ideales}): '${jobDescription}'

        Usando la descripción de mi perfil en Freelancer.com "${profileDescription}" crea un breve lapsus en donde se explique como usaré todas mis habilidades en el trabajo en cuestión.

        Estaría encantado de poder trabajar contigo, esperando una respuesta positiva de tu parte.

        Al final se debe obtener una BID en el formato:

        {idea_inicial_con_propuestas} (Menos de 666 caracteres).

        {como_se_usarán_mis_habilidades_en_el_trabajo} (Menos de 444 caracteres).

        {espera_de_respuesta} (menos de 222 caracteres).
        `;
        setGeneratedPrompt(prompt);
        setCopySuccess(''); // Reset copy success message
        setError(''); // Clear any previous error message
    };

    const handleCopyPrompt = async () => {
        try {
            await navigator.clipboard.writeText(generatedPrompt);
            setCopySuccess('Prompt copiado al portapapeles!');
        } catch (err) {
            setCopySuccess('Error al copiar el prompt.');
        }
    };

    const handleOpenChatGPT = () => {
        window.open('https://chat.openai.com/', '_blank');
    };

    return (
        <React.Fragment>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 col-lg-8'>
                        <hr />
                        <div className='mb-3'>
                            <label htmlFor='jobDescription' className='form-label'>Descripción del Trabajo:</label>
                            <textarea
                                className='form-control'
                                id='jobDescription'
                                rows='5'
                                value={jobDescription}
                                onChange={handleJobDescriptionChange}
                            ></textarea>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='profileDescription' className='form-label'>Descripción de tu Perfil de Freelancer:</label>
                            <textarea
                                className='form-control'
                                id='profileDescription'
                                rows='5'
                                value={profileDescription}
                                onChange={handleProfileDescriptionChange}
                            ></textarea>
                            {error && <div className='mt-2 text-danger'>{error}</div>}
                        </div>
                        <button className='btn btn-primary' onClick={handleGeneratePrompt}>Generar Prompt</button>
                        {generatedPrompt && (
                            <div className='mt-4'>
                                <h5>Prompt Generado para ChatGPT:</h5>
                                <p style={{ textAlign: 'justify' }}>{generatedPrompt}</p>
                                <div className='d-flex'>
                                    <button className='btn btn-secondary me-2' onClick={handleCopyPrompt}>Copiar Prompt</button>
                                    <button className='btn btn-success' onClick={handleOpenChatGPT}>Abrir ChatGPT</button>
                                </div>
                                {copySuccess && <div className='mt-2 text-success'>{copySuccess}</div>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
