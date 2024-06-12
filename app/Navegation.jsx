"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Data from "./data.json";
import "../public/css/bootstrap.css";






export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <React.Fragment>
            <div>
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <Image src={Data.logo} height={32} width={32} alt="@stianook" />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarColor03">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/" onClick={handleLinkClick}>
                                        Home
                                    </Link>
                                </li>
                                

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        Freelancer.com
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="/freelancer/bid" onClick={handleLinkClick}>
                                            Best Bid
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};