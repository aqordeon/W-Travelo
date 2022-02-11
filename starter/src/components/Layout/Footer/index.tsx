import Image from "next/image"

import Container from "components/Container"

import styles from './Footer.module.css'

import travelologo from 'public/assets/travelo-logo-footer.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="lg">
                <div className="flex bg-white p-16">
                    <figure>
                        <Image
                            src={travelologo}
                            alt="Travelo Logo"
                            placeholder="blur"
                            height="98"
                            width="136"
                        />
                    </figure>
                </div>
            </Container>
            
            <div className="bg-blue-100 p-3">
                <p className="text-heading-5 text-white font-bold text-center">
                    Copyright 2020 Nama Brand. All right reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer