import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Save electricity',
    Svg: require('@site/static/img/feature_save.svg').default,
    description: (
      <>
        Set customized energy-saving goals based on your lifestyle, preferences,
        and historical consumption data.
      </>
    ),
  },
  {
    title: 'Automated Bill Management',
    Svg: require('@site/static/img/feature_bill.svg').default,
    description: (
      <>
        Stay informed about your electricity usage in real-time through
        intuitive graphs and charts.
      </>
    ),
  },
  {
    title: 'Notification Feature',
    Svg: require('@site/static/img/feature_notification.svg').default,
    description: (
      <>
        Receive alerts when your usage approaches or exceeds the predefined
        thresholds, empowering you to stay within your desired energy limits.
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
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
