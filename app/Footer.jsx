import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Data from "./data.json";
import "../public/css/bootstrap.css";

const Footer = () => {
    return (
        <footer className="bg-black text-black d-flex justify-content-center py-4 mt-5">
            <div className="container">
                <div className="row">
                    <hr />
                    <div className="container-fluid d-flex justify-content-center w-75">
                        <Image src={Data.logo} height={80} width={80} alt="Logo | @stianook" />
                    </div>

                    <h5 className="text-center mt-2">Prompt-Bro</h5>
                    <p className="text-center text-secondary">"Una herramienta simple, pero efectiva"</p>

                    <div className="col-md-6 text-md-left mb-3 mb-md-0 mt-4 justify-content-center">
                        <h5 className='text-center'>Source Code</h5>
                        <div className='d-flex justify-content-center'>
                            <Link href="https://www.github.com/m0rniac/prompt-bro" passHref legacyBehavior target='_blank'>
                                View at GitHub
                            </Link>
                        </div>
                    </div>

                    <div className='container-fluid d-flex justify-content-end'>
                        <a href="#top">Regresar arriba</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
