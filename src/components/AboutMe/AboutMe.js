import './AboutMe.css';
import man from '../../images/man.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
    <div className="about-me__content">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__profile">
        <p className="about-me__name">Геннадий</p>
        <img className="about-me__photo" src={man} alt="Фотография студента"/>
        <p className="about-me__work">Веб-разработчик, 33 года</p>
        <p className="about-me__biography">Родился в Сочи, выучился в университете гражданской авиации в Санкт-Петербурге,
        где живу и работаю до сих пор. Сейчас я инженер в Пулково, занимаюсь штуками, помогающим авиадиспетчерам прокладывать Вам самый безопасный путь в воздухе)
        У меня есть жена и дочь. Я люблю слушать музыку. Программированием занимаюсь несколько лет, но какие сейчас тренды в разработке узнать
        хотел давно. Заканчиваю крутой курс «Веб-разработчика» Яндекс.Практикума, который полностью поменял восприятие о современной "интернет-кухне")</p>
        <a className="about-me__repo-link" target="_blank" rel="noreferrer" href="https://github.com/SerikovGennadiy">GitHub</a>
      </div>
    </div>
</section>
  )
}

export default AboutMe;