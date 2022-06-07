import './Slide2.scss';
import bg from '../../../assets/images/bg.jpg';
import slide2Img1 from '../../../assets/images/slide2/slide2-img1.png';
import slide2Img2 from '../../../assets/images/slide2/slide2-img2.png';

function Slide2() {
  return (
    <section className="container slide2">
      <img className="slide2__bg" src={bg} alt="" />
      <div className="content-item">
        <h2>
          Текст
          <br />
          сообщения
        </h2>
        <div className="content-item__text">
          <div>
            <p>
              <strong>Lorem ipsum dolor sit amet</strong>
              ,consectetur adipisicing elit. Ducimus,
              corrupti exercitationem explicabo dignissimos, aliquam commodi repellat eum ipsum
              itaque facilis fuga pariatur accusamus, laboriosam vero! Voluptas corporis nihil hic
              illum. necessitatibus nihil. Laudantium, velit quaerat fugit amet nihil harum odit
              consequuntur hic obcaecati exercitationem vitae at dolorum quo iure vero ullam. Minus
              fugit reprehenderit repudiandae nesciunt aperiam optio facilis obcaecati cumque
              cupiditate? Ad nisi minus explicabo incidunt adipisci nobis? Eos voluptatum inventore
              voluptas, fugiat voluptates rerum possimus unde dolorum cum aut laudantium amet. Magni
              fuga dignissimos eos. Maiores magnam repudiandae voluptatem nam. Dicta minima quis cum
              molestiae vero magni. Officiis velit voluptatum molestias? Quasi neque ad numquam esse
              aut! Praesentium dolorem, veniam a eum sit rerum! Ad reiciendis reprehenderit ducimus
              officia nisi! Placeat voluptate totam saepe officiis rem laborum repellat possimus
              itaque hic. Tempora quisquam quo odit est expedita ipsa illum provident, quod
              quibusdam quidem suscipit repudiandae. Libero, impedit. Doloribus, nulla incidunt.
              Dolorum tempore omnis est e quisquam tenetur facilis libero provident autem. Tenetur
              recusandae culpa odit.
            </p>
            <p>
              {' '}
              Delectus incidunt nisi at. Ducimus iusto tempora id perferendis hic voluptas sed,
              illo, quidem in culpa quas. Harum in libero ut, eos mollitia beatae voluptate. Fugiat
              quasi explicabo dolore dicta nisi possimus reiciendis autem. Tempore officiis quod
              illum possimus quia ducimus iusto alias ullam aspernatur distinctio nesciunt expedita
              incidunt dolorem earum animi rem voluptatem, sit, aut omnis facilis, reprehenderit ab.
              Saepe dolorem quos alias! Beatae facere, optio eum deserunt nobis modi.
              Necessitatibus, incidunt voluptate modi quisquam delectus ea perspiciatis illum aut,
              dignissimos a reprehenderit harum eveniet nesciunt, tenetur commodi deleniti dolor eum
              dolores dicta. Ab voluptatibus, sdita repellat accusantium fugiat
            </p>
          </div>
        </div>
      </div>
      <img className="img slide2__img1 slide2__img1_anim" src={slide2Img1} alt="" />
      <img className="img slide2__img2 slide2__img2_anim" src={slide2Img2} alt="" />
      <img className="img slide2__img3 slide2__img3_anim" src={slide2Img2} alt="" />
      <img className="img slide2__img4 slide2__img4_anim" src={slide2Img2} alt="" />
      <img className="img slide2__img5 slide2__img5_anim" src={slide2Img2} alt="" />
    </section>
  );
}

export default Slide2;
