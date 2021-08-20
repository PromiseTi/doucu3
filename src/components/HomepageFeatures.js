import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Focus on Medical ',
    Svg: require('../../static/img/img2.svg').default,
    description: (
      <>
        Web3medicallabs is a medical open source community serving the medical
        field. There are many practical and novel projects in it
      </>
    ),
  },
  {
    title: 'Power by blockchain',
    Svg: require('../../static/img/img3.svg').default,
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
        Blockchain technology to empower the medical industry, especially
        filecoin, etc
      </>
    ),
  },
  {
    title: 'Hacker and geek culture',
    Svg: require('../../static/img/img4.svg').default,
    description: (
      <>
        We have gathered a group of programmers who have changed the world. Are
        you willing to accept the most difficult problems and challenge
        yourself? Join us!
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="margin-top-sm">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
