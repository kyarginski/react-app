import '../../App.css';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

// import bgImage1 from '../../images/bg1.jpg'
import bgImage2 from '../../images/bg2.jpg'
import bgImage3 from '../../images/bg3.jpg'


const HomePage = () => {

    return (
        <>
            <Header title="Triple Triad"
                    descr="коллекционная карточная игра"
            >
            </Header>
            <Layout title="Rules" urlBg={bgImage3}>
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red"
                    on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them
                    into the player's own color of red or blue.</p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the
                    board) must be of the player's card color. To do this, the player must capture cards by placing a
                    card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch
                    will be compared. If the rank of the opponent's card is higher than the player's card, the player's
                    card will be captured and turned into the opponent's color. If the player's rank is higher, the
                    opponent's card will be captured and changed into the player's color instead. </p>
            </Layout>
            <Layout title="Описание правил игры" urlBg={bgImage2}>
                <p>Triple Triad - коллекционная карточная игра, т.е. состав колоды не задается жестко, а постоянно
                    пополняется. В партии принимают участие два человека, каждый со своей колодой. Игровое поле
                    представляет собой доску размером 3 * 3. Игроки просматривают свои колоды, набирают из них в руку по
                    пять любых карт и бросают жребий, кому ходить первому. Ходы делаются строго по очереди: участник
                    выбирает карту в руке и кладет ее на одну из свободных клеток, при этом она (карта) окрашивается в
                    его цвет.</p>

                <p>Партия начинается со счета 5 : 5. Когда игрок А выкладывает свою карту рядом с уже помещенной на поле
                    картой игрока B (в соседнюю клетку по горизонтали или вертикали), производится сравнение чисел на
                    соприкасающихся сторонах: если число карты A больше, игрок переворачивает карту B и перекрашивает в
                    свой цвет. При этом счет изменяется следующим образом - A получает бонус в +1 очко, а B, наоборот,
                    на -1 очко штрафуется. В нашем примере счет станет 6 : 4 в пользу A. Можно переворачивать и по
                    нескольку карт одновременно. Когда все девять клеток поля будут заняты, игра заканчивается.
                    Победителем становится игрок с большим числом очков.</p>
            </Layout>
        </>
    );
}

export default HomePage;
