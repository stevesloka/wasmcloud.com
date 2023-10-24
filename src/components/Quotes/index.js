import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const QuotesList = [

    {
        author: 'Evan Mattiza (Lofty)',
        size: 3,
        description: (
            <>
                <a href="https://www.trustradius.com/reviews/wasmcloud-2022-09-30-08-45-16">wasmCloud is well suited to dominate the microservices space under a new paradigm, and to do so in a way that is more secure for end users. Simplifying the platform deployment as well will go a long way towards making it ubiquitous in edge compute environments.</a>
            </>
        )
    },
    {
        author: 'OSTIF (wasmCloud security auditors)',
        size: 3,
        description: (
            <>
                <a href="https://ostif.org/ostif-has-completed-a-security-audit-of-wasmcloud/">WasmCloud is a well reviewed project, with lots of diligence in its security posture. This has paid off, as evidenced by this audit, which had no severe or high issues to resolve.</a>
            </>
        ),
    },
    {
        author: 'Stuart Harris (Red Badger)',
        size: 6,
        description: (
            <>
                <a href="https://www.trustradius.com/reviews/wasmcloud-2022-09-30-05-16-24">We particularly love how wasmCloud dramatically simplifies the art of building and deploying modern, distributed, multi-cloud web applications to the point where they become super easy to build and maintain. We have also found that clients who have grown by acquisition — having multiple clouds and on premise platforms — can easily combine everything into one homogenous global platform.</a>
            </>
        )
    },
];

function Quote({ author, description, size }) {
    return (
        <div className={clsx(`col col--${size}`)}>
            <div className="text--center padding-horiz--md">
                <p>{description}</p>
                <b>-{author}</b>
            </div>
        </div>
    );
}

export default function Quotes() {
    return (
        <section className={styles.features}>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}> Quotes and Testimonials </h1>
                <div className="row">
                    {QuotesList.map((props, idx) => (
                        <Quote key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
