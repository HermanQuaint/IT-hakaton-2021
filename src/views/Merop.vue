<template>
    <div class="merop">
        <h2 class="merop__sag ">Малибу мероприятие</h2>
        <div class="merop__content">
            <div class="merop__content__info">
                <div class="merop__content__info--img">
                  <img src="@/assets/img/filmBig.jpg" width="100%" alt="" class="merop__content__info--img__dop">
                </div>
                <div class="merop__content__info--text">
                   <div class="merop__content__info--text__sag">
                      <h2 class="scr">Малибу мероприятие</h2>
                   </div>
                   <div class="merop__content__info--text__sag--dop">
                       <div class="merop__content__info--text__sag--dop__sag">
                        Место проведения мероприятия
                       </div>
                       <div class="merop__content__info--text__sag--dop__snach">
                        Прежде всего, дальнейшее развитие различных
                       </div>
                   </div>
                     <div class="merop__content__info--text__sag--dop">
                       <div class="merop__content__info--text__sag--dop__sag">
                       Дата проведения мероприятия
                       </div>
                       <div class="merop__content__info--text__sag--dop__snach">
                        Прежде всего, дальнейшее развитие различных
                       </div>
                   </div>
                     <div class="merop__content__info--text__sag--dop">
                       <div class="merop__content__info--text__sag--dop__sag">
                        Цена
                       </div>
                       <div class="merop__content__info--text__sag--dop__snach">
                       999 - 100000 ₽
                       </div>
                   </div>
                </div>
            </div>
            <div class="merop__content__dopInfo">
                <h2 class="merop__content__info--text__sag size">Описание мероприятия</h2>
            <p class="merop__content__dopInfo--text">
              Банальные, но неопровержимые выводы, а также стремящиеся вытеснить традиционное производство, нанотехнологии будут представлены в исключительно положительном свете. В целом, конечно, постоянное информационно-пропагандистское обеспечение нашей деятельности предполагает независимые способы реализации дальнейших направлений развития. Прежде всего, сложившаяся структура организации говорит о возможностях стандартных подходов. Имеется спорная точка зрения, гласящая примерно следующее: элементы политического процесса могут быть указаны как претенденты на роль ключевых факторов. Господа, высокотехнологичная концепция общественного уклада является качественно новой ступенью анализа существующих паттернов поведения. Повседневная практика показывает, что понимание сути ресурсосберегающих технологий позволяет оценить значение поэтапного и последовательного развития общества.
            </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
 .merop{
     display: flex;
     flex-direction: column;
 }
 .merop__sag{
     display: none;
 }
 .merop__content{
     display: flex;
     flex-direction: column;
 }
 .merop__content__info{
     display: flex;
     justify-content: space-between;
 }
 .merop__content__info--img{
     width: 55%;
     min-width: 400px;
 }
 .merop__content__info--img__dop{
     border-radius: 15px;
 }
.merop__content__info--text{
    width: 40%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  
}
.merop__content__info--text__sag{
    display: flex;
    font-size: 1.3143rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 9px;
}
.merop__content__info--text__sag--dop{
    display: flex;
    justify-content: space-between;
}
.merop__content__info--text__sag--dop__sag{
    width: 40%;
    font-size: 1.2857rem;
    font-weight: medium;
}
.merop__content__info--text__sag--dop__snach{
    width: 40%;
  font-size: 0.9286rem;
}
.merop__content__info{
    margin-bottom: 20px;
}
.size{
    font-size:   1.857rem;
    margin-bottom: 26px;
}
.merop__content__dopInfo--text{
    font-size: 1.2857rem;

}

@media screen and (max-width: 886px) {
    .merop__sag{
        display: block;
        text-align: center;
        margin-bottom: 10px;
        font-size: 1.5rem;
        }

    .merop__content__info{
        flex-direction: column;
        display: flex;
        width: 100%;
    }
     .merop__content__info--img{
     width: 100%;
   
 }
 .merop__content__info--text{
     width: 100%;
 }
 .scr{
     display: none;
 }
    }

</style>