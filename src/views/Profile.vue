<template>
    <div class="profile">
        <div class="profile__sag">
            <h1>Профиль</h1><p>Тут мы собрали информацию,которую мы знаем о вас 👋🏻</p>
        </div>
        <div class="profile__info">
            <div class="profile__info__block">
               <div class="profile__info__block--sag">Основное</div>
                <div class="profile__info__block--sag__name">Имя и Фамилия</div> 
               <input type="text" class="profile__info__block--sag__vvod">
                      <div class="button__div"> <button class="profile__info__block__button">Изменить</button></div>
            </div>
                <div class="profile__info__block">
               <div class="profile__info__block--sag">Безопасность</div>
               <div class="profile__info__block--sag__name">Повторите пароль</div> 
               <div class="group"><input type="text" class="profile__info__block--sag__vvod"></div>
             
              <div class="button__div"> <button class="profile__info__block__button">Изменить</button></div>
            </div>
        </div>
       <div class="button__div"> <button class="profile_info_viyti">Выйти</button></div>
    </div>
</template>


<style lang="scss" scoped>
.button__div{
    display: flex;
    width: 100%;
    justify-content: flex-end;
}
.profile_info_viyti{
    width: 20%;
    padding: 1px;
    border-radius: 4px;
    min-width: 100px;
    max-width: 120px;
    padding-top: 10px;
    padding-bottom:10px;
    background-color: #F83D24;
    border: 0;
    font-size: 1rem;
    color: white;
    margin-top: 250px;
    margin-bottom: 10px;
}
.profile{
    display: flex;
    flex-direction: column;
}
.profile__info__block{
    width: 45%;
    display: flex;
    max-width: 350px;
    flex-direction: column;
}
.profile__info{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.profile__sag{
    h1{
        margin-bottom: 14px;
    }
    p{
        font-size:1.2857rem;
        margin-bottom:30px;
    }
}
.profile__info__block--sag{
     font-size:1.2857rem;
     margin-bottom: 4px;
}
.profile__info__block--sag__vvod{
    border-radius: 8px;
    height: 30px;
    margin-bottom: 8px;
    width: 100%;
}
.profile__info__block--sag__name{
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.63);
}
.profile__info__block__button{
    width: 30%;
    padding: 3px;
    border-radius: 4px;
    min-width: 100px;
    max-width: 120px;
    padding-top: 6px;
    padding-bottom:6px;
    background-color: #FFAC0B;
    border: 0;
    font-size: 1rem;
    color: white;
    
}

@media screen and (max-width: 886px) {
    .profile{
        width: 100%;
    }
 .profile__info{
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    max-width: 1000px;
}
.profile__info__block{
    width: 100%;
    max-width: 1000px;
}
.profile_info_viyti{
    margin-top: 200px;
}
}
</style>