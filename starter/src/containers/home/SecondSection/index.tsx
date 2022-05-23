import React from "react";

import Container from "components/Container";
import PromoCarousel from "./PromoCarousel";
import Packages from "./Packages";
import Categories from "./Categories";

import styles from './SecondSection.module.css'
import 'react-multi-carousel/lib/styles.css'
import Testimonials from "./Testimonials";

const SecondSection = () => {
    return (
        <section className={styles.section}>
            <Container>
                <PromoCarousel />
                <Packages />
                <Categories />
                <Testimonials />
            </Container>
        </section>
    )
}

export default SecondSection