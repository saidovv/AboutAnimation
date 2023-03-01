import './App.css';
import 'animate.css';
import logo1 from './image/logo1.png'
import logo2 from './image/kraska.png'
import logo3 from './image/map.png'
import logo4 from './image/facebook.png'
import logo5 from './image/twitter.png'
import logo6 from './image/VK.png'
import styled from 'styled-components';



const Navbar = styled.div`
@media(min-width: 360px) and (max-width: 599px){
    width: 1200px;
}
@media (min-width: 600px) and (max-width: 1280px){
    width: 1300px;
}
`

const Container3 = styled.div`
display: flex;
justify-content: space-around;
margin-top: 80px;

@media(min-width: 360px) and (max-width: 599px){
    width: 1200px;
    flex-direction: column;
}
@media (min-width: 600px) and (max-width: 1280px){
    width: 1300px;

}

`

const Container4 = styled.div`
display: flex;
justify-content: space-around;
margin-top: 80px;

@media(min-width: 360px) and (max-width: 599px){
    flex-direction: column;
}
@media (min-width: 600px) and (max-width: 1280px){
    width: 1300px;

}
`

const Container5 = styled.div`
background: #252525;
 width: 100%;
height: 250px;
overflow-x: hidden;
animation: zoomIn;
animation-duration: 50s;

@media(min-width: 360px) and (max-width: 599px){
    height: 450px;
}
@media (min-width: 600px) and (max-width: 1280px){
    width: 1300px;

}
`

function App (){
    return (

    <div>
        <div className='cont'>
        <img className='imgnavbar' src= {logo1} />
        <Navbar>
            <ul>
                <li>Главная</li>
                <li>О компании</li>
                <li>Бренды</li>
                <li>Развития и технологии</li>
                <li>Карьера в компании</li>
                <li>Партнеры и поставщики</li>
                <li>Публикации</li>
                <li>Контакты</li>
            </ul>
        </Navbar>
        <div className='container'></div>
        <div className='container1'>
            <h1 className='text1'>О компании</h1>
            <p className='p1'>На российском рынке Lakra Sintez является ведущим производителем декоративных красок и покрытий. 
                По оценке аналитиков рынка входит в 
                ТОП-3 компаний-производителей отрасли. Успешно развивает новые направления  деятельности: 
                клеевые материалы и дисперсии</p>
                <button className='btn1'>Узнать больше</button>
                <div className='boxes'>
                    <div className='box1'>
                        <h1 className='text2'>25 лет</h1>
                        <p className='p2'>С 1996 г. мы производим и продаём широкий спектр лакокрассочнх материалов</p>
                    </div>
                    <div className='box2'>
                        <h1 className='text3'>11.000 точек</h1>
                        <p className='p3'>Наша продукция представлена свыше 11 тыс. торговых точек по всей России</p>
                    </div>
                    <div className='box3'>
                        <h1 className='text4'>40.000 литров</h1>
                        <p className='p4'>За 25 лет работы реализовали более 1 млн. литров разнообразных материалов для отделки и ремонта</p>
                    </div>
                </div>
        </div>
        <div className='container2'></div>
        <p className='p5'>На российском рынке Lakra Sintez является ведущим производителем декоративных красок и покрытий.
             По оценке аналитиков рынка входит в ТОП-3 компаний-производителей отрасли. Успешно развивает новые
              направления  деятельности: клеевые материалы и дисперсии</p>
              <Container3 >
                <div className='left3'>
                    <h1 className='text5'>Бизнес - подразделения</h1>
                    <p className='p6'>Декоративные ЛКМ покрытия</p>
                    <p className='p6'>Клеевые материалы</p>
                    <p className='p6'>Дисперсии</p>
                </div>
                <div className='right3'>
                    <img className='imgcont3' src= {logo2} />
                </div>
              </Container3 >
              <Container4>
                <div className='left4'>
                    <img className='imgcont4' src= {logo2} />
                </div>
                <div className='right4'>
                    <h1 className='text6'>PARADE MEDITERRA S60</h1>
                    <p className='p7'>Декоративное покрытие с эффектом в средиземноморском стиле или под «старину» образует ударопрочное эластичное воздухопроницаемое покрытие.
Как обои легко снимается со стен шпателем после пропитывания водой.
Скрывает небольшие неровности основания.</p>
<button className='btn2'>Узнать больше</button>
                </div>
              </Container4>
              <h1 className='text7'>География присутствия</h1>
              <p className='p8'>Производственные площадки, распределительные центры расположены в
                 основных регионах присутствия. География продаж – вся Россия.</p>
                 <img className='imgmap' src= {logo3} />
                 <p className='p9'>Контакты</p>
                 <h1 className='text8'>Обратная связь</h1>
                 <Container5>
                    <div className='footer'>
                        <div className='one'>
                            <h3>Корпоративный центр</h3>
                            <p className='p10'>ООО «Lakra Sintez»
М.О. г. Ногинск, г. Старая Купавна, ул. Дорожная, д. 5</p>
<p className='p10'>Тел.: +7 (495) 995-78-58
Факс: +7 (495) 702-96-49 (50)</p>
                        </div>
                        <div className='two'>
                            <h3>Быстрые ссылки</h3>
                            <p className='p10'>по вопросам закупки продукции</p>
                            <p className='p10'>info@lakra.ru</p>
                            <img className='imgfooter' src= {logo4} />
                            <img className='imgfooter' src= {logo5} />
                            <img className='imgfooter' src= {logo6} />
                        </div>
                    </div>
                 </Container5>
        </div>
    </div>
    )
}


export default App


