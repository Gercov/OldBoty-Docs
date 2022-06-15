import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Панель управления",
    Svg: require("@site/static/img/panel.svg").default,
    description: <>Удобная, простая и быстрая панель управления в виде телеграм бота. Все настройки обновляются в режиме реального времени.</>,
  },
  {
    title: "Лучшие инструменты для модераторов",
    Svg: require("@site/static/img/swords.svg").default,
    description: <>Отражение спам атак, удобная работа с командами и многое другое.</>,
  },
  {
    title: "Нам доверяют",
    Svg: require("@site/static/img/thump_up.svg").default,
    description: <>OldBoty установлен у большинства крупных СНГ стримеров и ежедневно обрабатывает сотни тысяч сообщений</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
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
  );
}
