import React from 'react';
import { Container } from './styles';

export default function Footer() {
    return (
        <Container>
            <footer className="bg-dark p-4 d-flex">
                <address className="text-white text-start">
                    Endereço: Rua QRO A Conjunto H
                </address>
            </footer>
        </Container>
    )
}