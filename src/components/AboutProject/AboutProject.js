import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__content">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__description">
          <h4 className="about-project__brief">Дипломный проект включал 5 этапов</h4>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <h4 className="about-project__brief">На выполнение диплома ушло 5 недель</h4 >
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__gant">
          <div className="about-project__sprint-backend">1 неделя</div>
          <div className="about-project__sprint-frontend">4 недели</div>
          <p className="about-project__subtitle">Back-end</p>
          <p className="about-project__subtitle">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;