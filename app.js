let containerForAll = document.createElement('div');
containerForAll.className = 'container-for-all';
document.body.append(containerForAll);

let containerForFlag = document.createElement('div');
containerForFlag.className = 'container-for-flag';
containerForAll.append(containerForFlag);

let popUpWin = document.createElement('div');
popUpWin.className = 'hidden-pop-up';
containerForAll.append(popUpWin);

let popUpGameOver = document.createElement('div');
popUpGameOver.className = 'hidden-pop-up';
containerForAll.append(popUpGameOver)

let popUpGameOverText = document.createElement('div');
popUpGameOverText.className = 'pop-up-game-over-text';
popUpGameOver.append(popUpGameOverText)
popUpGameOverText.textContent = 'Игра окончена. Попробуйте еще раз';

let popUpWinText = document.createElement('div');
popUpWinText.className = 'pop-up-win-text';
popUpWin.append(popUpWinText);


let popUpButtonWin = document.createElement('div');
popUpButtonWin.className = 'pop-up-button-win';
popUpButtonWin.textContent = 'Начать новую игру';
popUpWin.append(popUpButtonWin);

let btnColor = document.createElement('div');
btnColor.className = 'btn-color';
btnColor.textContent = 'Сменить тему';
containerForFlag.append(btnColor);


let containerForSmile = document.createElement('div');
containerForSmile.className = 'container-for-smile';
containerForAll.append(containerForSmile)

let popUpButton = document.createElement('div');
popUpButton.className = 'pop-up-button';
popUpButton.textContent = 'Начать новую игру';
popUpGameOver.append(popUpButton);


let containerForCell = document.createElement('div');
containerForCell.className = 'container-for-cell';
containerForAll.append(containerForCell)

let containerForChoice = document.createElement('div');
containerForChoice.className = 'container-for-choice';
containerForAll.append(containerForChoice)

let littleInfo = document.createElement('p');
littleInfo.className = 'little-info';
littleInfo.textContent = 'Для выбора количества мин в игре: установите количество мин в поле справа и нажмите на желаемую ширину игровой доски (в поле слева)';
containerForAll.append(littleInfo);

let containerForChoiceField = document.createElement('div');
containerForChoiceField.className = 'container-for-choice-field';
containerForChoice.append(containerForChoiceField)

let containerForChoiceMine = document.createElement('div');
containerForChoiceMine.className = 'container-for-choice-mine';
containerForChoice.append(containerForChoiceMine)

let timerGame2 = document.createElement('p');
timerGame2.innerHTML = 'Время:';
timerGame2.className = 'timer-game2';
containerForSmile.append(timerGame2);

let btnSmile = document.createElement('div');
btnSmile.className = 'btn-smile';
containerForSmile.append(btnSmile)
btnSmile.innerHTML = 'Новая игра';

let theEnd = false;
let flagAmount = 0;

let check10 = document.createElement('input');
check10.type = 'radio';
check10.id = 'radio10';
check10.value = '10';
check10.name = 'your-choice';
check10.checked = true;
let check15 = document.createElement('input');
check15.type = 'radio';
check15.id = 'radio15';
check15.value = '15';
check15.name = 'your-choice';
let check25 = document.createElement('input');
check25.type = 'radio';
check25.id = 'radio25';
check25.value = '25';
check25.name = 'your-choice';

let checkname10 = document.createElement('label');
let checkname15 = document.createElement('label');
let checkname25 = document.createElement('label');

checkname10.htmlFor = 'radio10';
checkname15.htmlFor = 'radio15';
checkname25.htmlFor = 'radio25';

containerForChoiceField.append(check10)
containerForChoiceField.append(checkname10)
containerForChoiceField.append(check15)
containerForChoiceField.append(checkname15)
containerForChoiceField.append(check25)
containerForChoiceField.append(checkname25)


checkname10.textContent = '10x10';
checkname15.textContent = '15x15';
checkname25.textContent = '25x25';

let flagContainer = document.createElement('p');
flagContainer.innerHTML = 'Чтобы поставить флажок, кликните по ячейке правой кнопкой мыши';
flagContainer.className = 'flag-container';
containerForFlag.append(flagContainer);

let timerGame = document.createElement('p');
timerGame.innerHTML = 'Количество кликов:';
timerGame.className = 'timer-game';
containerForSmile.append(timerGame);

let mineChoiceName = document.createElement('label');
mineChoiceName.htmlFor = 'mine-number';
containerForChoiceMine.append(mineChoiceName);
mineChoiceName.textContent = 'Количество мин';

let mineChoice = document.createElement('input');
mineChoice.type = 'number';
containerForChoiceMine.append(mineChoice)
mineChoice.min = '10';
mineChoice.classList.add('size-for-input');
mineChoice.max = '99';
mineChoice.step = '1';
mineChoice.name = 'your-mine'
mineChoice.value = '10';
mineChoice.id = 'mine-number';

let timerGameSee = 0;
let timerGameSee2 = 0;

check10.onclick = (event) => { 
    makeCell10()
};
check15.onclick = (event) => { 
    makeCell15 ()
};
check25.onclick = (event) => { 
    makeCell25 ()
};

makeCell10(); //вызов по умолчанию


function makeCell10() {
if(containerForCell.childNodes.length) {
containerForCell.innerHTML = '';
makeCell10()
} else {

popUpButton.addEventListener('click', theStartNewGame1);

function theStartNewGame1() {
    theEnd = false;
    popUpGameOver.classList.remove('pop-up-game-over')
    popUpGameOver.classList.add('hidden-pop-up')
    timerGameSee = 0;
    timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
    timerGameSee2 = 0;
    timerGame2.innerHTML = `Время: ${timerGameSee2}`;
    makeCell10()
}

popUpButtonWin.addEventListener('click', theStartNewGame2);

function theStartNewGame2() {
    theEnd = false;
    popUpWin.classList.remove('pop-up-win')
    popUpWin.classList.add('hidden-pop-up')
    timerGameSee = 0;
    timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
    timerGameSee2 = 0;
    timerGame2.innerHTML = `Время: ${timerGameSee2}`;
    makeCell10()
}

    btnSmile.addEventListener('click', newGameAgain1)

    function newGameAgain1() {
        theEnd = false;
        if(popUpWin.classList.contains('pop-up-win')) {
            popUpWin.classList.add('hidden-pop-up');
            popUpWin.classList.remove('pop-up-win');
            timerGameSee = 0;
            timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
            timerGameSee2 = 0;
            timerGame2.innerHTML = `Время: ${timerGameSee2}`;
        } else if (popUpGameOver.classList.contains('pop-up-game-over')) {
            popUpGameOver.classList.add('hidden-pop-up');
            popUpGameOver.classList.remove('pop-up-game-over');
            timerGameSee = 0;
            timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
            timerGameSee2 = 0;
            timerGame2.innerHTML = `Время: ${timerGameSee2}`;
        }
        timerGameSee = 0;
        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
        timerGameSee2 = 0;
        timerGame2.innerHTML = `Время: ${timerGameSee2}`;
        
        makeCell10()
        
    }

let size = 10;
let boombs = Number(mineChoice.value);
let arrFromBoombs = new Array(boombs).fill('boom'); 
let arrFromSafe = new Array(size ** 2 - boombs).fill('safe'); 
let arrAll = arrFromBoombs.concat(arrFromSafe);
let arrAllSorted = arrAll.sort(() => Math.random() - 0.5);

let cells = [];

    for(let i = 0; i < size ** 2; i++) {
        let cell = document.createElement('div');
        containerForCell.append(cell);
        if(btnColor.classList.contains('back')) {
        cell.classList.add('cell-art-size10-black');
        } else {
        cell.classList.add('cell-art-size10');    
        }
        cell.classList.add(arrAllSorted[i]);
        cell.setAttribute('id', i);
        cells.push(cell); 

        /*btnColor.addEventListener('click', changeColor);

        function changeColor() {
        
        if(btnColor.classList.contains('back')) {
                cell.classList.remove('cell-art-size10-black')
                cell.classList.add('cell-art-size10')     
        }
        
        
        btnColor.classList.toggle('back');
        containerForAll.classList.toggle('change-theme');
        containerForCell.classList.toggle('change-theme');
        containerForChoice.classList.toggle('change-theme');
        containerForChoiceField.classList.toggle('change-theme');
        containerForChoiceMine.classList.toggle('change-theme');
        containerForFlag.classList.toggle('change-theme');
        containerForSmile.classList.toggle('change-theme');
        document.querySelector('body').classList.toggle('change-theme-body');
        cell.classList.toggle('change-theme');
        }*/

        containerForCell.onclick = function() {
            if (theEnd === false && cell.classList.contains('safe')) {
            timerGameSee++
            timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
            let timerId = setInterval(() => addTime(), 1000);
            if(timerGameSee2 == 0) {
            function addTime() {
            timerGameSee2++
            timerGame2.innerHTML = `Время: ${timerGameSee2}`;
            if(popUpGameOver.classList.contains('pop-up-game-over') || popUpWin.classList.contains('pop-up-win')) {
                clearInterval(timerId)
                timerGame2.innerHTML = `Время: ${timerGameSee2}`;
            }
            } 
            }  
            } 
            }

        cell.addEventListener('click', function(e) {
            let numGood = 0;
            
            pressOnCell(cell);
            ifWin()
            function ifWin() {
            for(let i = 0; i < cells.length; i++) {
                if(cells[i].classList.contains('good-mark')) {
                numGood ++
            }
            } 
            if(numGood === size**2 - boombs) {
                popUpWin.classList.add('pop-up-win');
                popUpWinText.textContent = `Ура! Вы нашли все мины за ${timerGameSee2} секунд и ${timerGameSee} ходов!`;
                popUpWin.classList.remove('hidden-pop-up');
                theEnd = true;
            } 
            }

            function pressOnCell(cell) {
                let cellId = cell.id;
                if (theEnd === true) {
                    return 
                } else if (cell.classList.contains('good-mark')) {
                    return
                } else if (cell.classList.contains('red-flag'))  {
                    return 
                } else if (cell.classList.contains('boom')) {
                    function theEndGame(cell)  {
                        theEnd = true;
                        for(i = 0; i < cells.length; i++) {
                            if(cells[i].classList.contains('boom')) {
                                if(btnColor.classList.contains('back')) {
                                    cells[i].classList.add('img-boom-black');
                                 } else {
                                    cells[i].classList.add('img-boom');
                                 }
                                
                            }
                        }
                        popUpGameOver.classList.add('pop-up-game-over');
                        popUpGameOver.classList.remove('hidden-pop-up');
                        timerGameSee = timerGameSee + 1; 
                        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
                        }   
                    theEndGame(cell) 
                } else {
                   let numberOfBoomsNear = cell.getAttribute('data-boombs');

                   if (numberOfBoomsNear > 0) {
                    cell.classList.add('good-mark');
                    cell.textContent = numberOfBoomsNear;
                    
                    if(cell.textContent === '1') {
                    cell.classList.add('color-text1')    
                    } else if(cell.textContent === '2') {
                    cell.classList.add('color-text2')    
                    } else if(cell.textContent === '3') {
                    cell.classList.add('color-text3')     
                    } else if(cell.textContent === '4') {
                    cell.classList.add('color-text4')
                    } else if(cell.textContent === '5') {
                        cell.classList.add('color-text5')
                    } else if(cell.textContent === '6') {
                        cell.classList.add('color-text6')
                    } else if(cell.textContent === '7') {
                        cell.classList.add('color-text7')
                    } else if(cell.textContent === '8') {
                        cell.classList.add('color-text8')
                    }
                    return 
                   } else {
                    cell.classList.add('good-mark');
                    
                    openNearCell(cell, cellId);
                    
                    function openNearCell(cell, cellId) {
                    const columnLeft1 = (i === 0 || i === 10 || i === 20 || i === 30 || i === 40 || i === 50 || i === 60 || i === 70 || i === 80 || i === 90);
                    const columnRight1 = (i === 9 || i === 19 || i === 29 || i === 39 || i === 49 || i === 59 || i === 69 || i === 79 || i === 89 || i === 99);

                    setTimeout(() => {
                    if(cellId >= 0 && !columnRight1 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + 1].id   //справа
                        const cellNear = document.getElementById(cellIdNear) 
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 0 && !columnLeft1 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - 1].id   //слева
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 9 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - size].id   //сверху
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId < 90 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + size].id   //снизу
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 9 && !columnRight1 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + 1 - size].id   //справа сверху
                        const cellNear = document.getElementById(cellIdNear) 
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 9 && !columnLeft1 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - 1 - size].id   //слева сверху
                        const cellNear = document.getElementById(cellIdNear) 
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId < 90 && !columnLeft1 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - 1 + size].id   //слева снизу
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId < 90 && !columnRight1 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + 1 + size].id   //справа снизу
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    
                    }, 11)
                    }
                    }
                    
                }
                
                }                                   
        })
        flagAmount = 0;
        flagContainer.innerHTML = `Осталось флажков:${boombs}    Осталось мин:${boombs}`;
        
        cell.oncontextmenu = function(e) {
            e.preventDefault()   

            AddNewRedFlag(cell) 
            
            
            function AddNewRedFlag(cell) {
                if(theEnd === true) {
                return
                } else if (!cell.classList.contains('good-mark') && (flagAmount < boombs)) {
                 if(!cell.classList.contains('red-flag')) {
                    cell.classList.add('red-flag')
                 if(btnColor.classList.contains('back')) {
                    cell.classList.add('red-flag-img-black');
                 } else {
                    cell.classList.add('red-flag-img');
                 }

            
                    
                    flagAmount ++
                    let SeeFlagAmount = flagAmount;
                    flagContainer.innerHTML = `Осталось флажков:${boombs - SeeFlagAmount}    Осталось мин:${boombs - SeeFlagAmount}`;
                    
                 } else {
                  cell.classList.remove('red-flag');
                  cell.classList.remove('red-flag-img');
                  cell.classList.remove('red-flag-img-black');
                  flagAmount --
                  let SeeFlagAmount = flagAmount;
                  flagContainer.innerHTML = `Осталось флажков:${boombs - SeeFlagAmount}     Осталось мин:${boombs - SeeFlagAmount}`;
                 }
                 } else if(!cell.classList.contains('good-mark') && (flagAmount == boombs)) {
                    if(!cell.classList.contains('red-flag')) {
                       
                     } else {
                      cell.classList.remove('red-flag');
                      cell.classList.remove('red-flag-img');
                      flagAmount --
                      let SeeFlagAmount = flagAmount;
                      flagContainer.innerHTML = `Осталось флажков:${boombs - SeeFlagAmount}     Осталось мин:${boombs - SeeFlagAmount}`;
                     }
                 }
                }
        }
    } //

    for (let i = 0; i < cells.length; i++) {
    let numberBomb = 0;
    const columnLeft = (i === 0 || i === 10 || i === 20 || i === 30 || i === 40 || i === 50 || i === 60 || i === 70 || i === 80 || i === 90);
    const columnRight = (i === 9 || i === 19 || i === 29 || i === 39 || i === 49 || i === 59 || i === 69 || i === 79 || i === 89 || i === 99);
    if(cells[i].classList.contains('safe')) {
    if(i >= 0 && !columnRight && cells[i + 1].classList.contains('boom')) {
    numberBomb ++ 
    }
    if(i > 0 && !columnLeft && cells[i - 1].classList.contains('boom')) {
    numberBomb ++
    }
    if(i > 9 && cells[i - size].classList.contains('boom')) {
    numberBomb ++ 
    }
    if(i < 90 && cells[i + size].classList.contains('boom')) {
    numberBomb ++ 
    }
    if(i > 9 && !columnRight && cells[i + 1 - size].classList.contains('boom')) {
    numberBomb ++ 
    }
    if(i > 9 && !columnLeft && cells[i - 1 - size].classList.contains('boom')) {
    numberBomb ++ 
    }
    if(i < 90 && !columnLeft && cells[i - 1 + size].classList.contains('boom')) {
    numberBomb ++ 
    }
    if(i < 90 && !columnRight && cells[i + 1 + size].classList.contains('boom')) {
    numberBomb ++ 
    }
    cells[i].setAttribute('data-boombs', numberBomb); 
    }
    } //


}
}


function makeCell15 () {
if(containerForCell.childNodes.length) {
    containerForCell.innerHTML = '';
    makeCell15()
} else {
    popUpButton.addEventListener('click', theStartNewGame11);

    function theStartNewGame11() {
        theEnd = false;
        popUpGameOver.classList.remove('pop-up-game-over')
        popUpGameOver.classList.add('hidden-pop-up')
        timerGameSee = 0;
        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
        timerGameSee2 = 0;
        timerGame2.innerHTML = `Время: ${timerGameSee2}`;
        makeCell15()
    }
    
    popUpButtonWin.addEventListener('click', theStartNewGame22);
    
    function theStartNewGame22() {
        theEnd = false;
        popUpWin.classList.remove('pop-up-win')
        popUpWin.classList.add('hidden-pop-up')
        timerGameSee = 0;
        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
        timerGameSee2 = 0;
        timerGame2.innerHTML = `Время: ${timerGameSee2}`;
        makeCell15()
    }

    btnSmile.addEventListener('click', newGameAgain2)

    function newGameAgain2() {
        theEnd = false;
        if(popUpWin.classList.contains('pop-up-win')) {
            popUpWin.classList.add('hidden-pop-up');
            popUpWin.classList.remove('pop-up-win');
            timerGameSee = 0;
            timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
            timerGameSee2 = 0;
            timerGame2.innerHTML = `Время: ${timerGameSee2}`;
        } else if (popUpGameOver.classList.contains('pop-up-game-over')) {
            popUpGameOver.classList.add('hidden-pop-up');
            popUpGameOver.classList.remove('pop-up-game-over');
            timerGameSee = 0;
            timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
            timerGameSee2 = 0;
            timerGame2.innerHTML = `Время: ${timerGameSee2}`;
        }
        timerGameSee = 0;
        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
        timerGameSee2 = 0;
        timerGame2.innerHTML = `Время: ${timerGameSee2}`;
        
        makeCell15()
        
    }

let size = 15;
let boombs = Number(mineChoice.value); 
let arrFromBoombs = Array(boombs).fill('boom'); 
let arrFromSafe = Array(size ** 2 - boombs).fill('safe'); 
let arrAll = arrFromBoombs.concat(arrFromSafe);
let arrAllSorted = arrAll.sort(() => Math.random() - 0.5);

let cells = [];

    for(let i = 0; i < size ** 2; i++) {
        let cell = document.createElement('div');
        containerForCell.append(cell);
        if(btnColor.classList.contains('back')) {
            cell.classList.add('cell-art-size15-black');
        } else {
        cell.classList.add('cell-art-size15');    
        }
        
        cell.classList.add(arrAllSorted[i]);
        cell.setAttribute('id', i);
        cells.push(cell); 

        /*btnColor.addEventListener('click', changeColor);

        function changeColor() {
        
        if(btnColor.classList.contains('back')) {
                cell.classList.remove('cell-art-size15-black')
                cell.classList.add('cell-art-size15')     
        }
        
        
        btnColor.classList.toggle('back');
        containerForAll.classList.toggle('change-theme');
        containerForCell.classList.toggle('change-theme');
        containerForChoice.classList.toggle('change-theme');
        containerForChoiceField.classList.toggle('change-theme');
        containerForChoiceMine.classList.toggle('change-theme');
        containerForFlag.classList.toggle('change-theme');
        containerForSmile.classList.toggle('change-theme');
        document.querySelector('body').classList.toggle('change-theme-body');
        cell.classList.toggle('change-theme');
        }*/

        containerForCell.onclick = function() {
            if (theEnd === false && cell.classList.contains('safe')) {
            timerGameSee++
            timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
            let timerId = setInterval(() => addTime(), 1000);
            if(timerGameSee2 == 0) {
            function addTime() {
            timerGameSee2++
            timerGame2.innerHTML = `Время: ${timerGameSee2}`;
            if(popUpGameOver.classList.contains('pop-up-game-over') || popUpWin.classList.contains('pop-up-win')) {
                clearInterval(timerId)
                timerGame2.innerHTML = `Время: ${timerGameSee2}`;
            }
            } 
            }  
            } 
            }

        cell.addEventListener('click', function(e) {
            let numGood = 0;
            
            pressOnCell(cell);
            ifWin()
            function ifWin() {
            for(let i = 0; i < cells.length; i++) {
                if(cells[i].classList.contains('good-mark')) {
                numGood ++
            }
            } 
            if(numGood === size**2 - boombs) {
                popUpWin.classList.add('pop-up-win');
                popUpWinText.textContent = `Ура! Вы нашли все мины за ${timerGameSee2} секунд и ${timerGameSee} ходов!`;
                popUpWin.classList.remove('hidden-pop-up');
                theEnd = true;
            } 
            }

            function pressOnCell(cell) {
                let cellId = cell.id;
                if (theEnd === true) {
                    return 
                } else if (cell.classList.contains('good-mark')) {
                    return
                } else if (cell.classList.contains('red-flag'))  {
                    return 
                } else if (cell.classList.contains('boom')) {
                    function theEndGame(cell)  {
                        theEnd = true;
                        for(i = 0; i < cells.length; i++) {
                            if(cells[i].classList.contains('boom')) {
                                if(btnColor.classList.contains('back')) {
                                    cells[i].classList.add('img-boom-black');
                                 } else {
                                    cells[i].classList.add('img-boom');
                                 }
                                }
                        }
                        popUpGameOver.classList.add('pop-up-game-over');
                        popUpGameOver.classList.remove('hidden-pop-up');
                        timerGameSee = timerGameSee + 1; 
                        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
                        }   
                    theEndGame(cell) 
                } else {
                   let numberOfBoomsNear = cell.getAttribute('data-boombs');

                   if (numberOfBoomsNear > 0) {
                    cell.classList.add('good-mark');
                    cell.textContent = numberOfBoomsNear;
                    
                    if(cell.textContent === '1') {
                    cell.classList.add('color-text11')    
                    } else if(cell.textContent === '2') {
                    cell.classList.add('color-text22')    
                    } else if(cell.textContent === '3') {
                    cell.classList.add('color-text33')     
                    } else if(cell.textContent === '4') {
                    cell.classList.add('color-text44')
                    } else if(cell.textContent === '5') {
                        cell.classList.add('color-text55')
                    } else if(cell.textContent === '6') {
                        cell.classList.add('color-text66')
                    } else if(cell.textContent === '7') {
                        cell.classList.add('color-text77')
                    } else if(cell.textContent === '8') {
                        cell.classList.add('color-text88')
                    }
                    return 
                   } else {
                    cell.classList.add('good-mark');
                    
                    openNearCell(cell, cellId);
                    
                    function openNearCell(cell, cellId) {
                    const columnLeft11 = (i === 0 || i === 15 || i === 30 || i === 45 || i === 60 || i === 75 || i === 90 || i === 105 || i === 120 || i === 135 || i === 150|| i === 165|| i === 180|| i === 195|| i === 210);
                    const columnRight11 = (i === 14 || i === 29 || i === 44 || i === 59 || i === 74 || i === 89 || i === 104 || i === 119 || i === 134 || i === 149 || i === 164 || i === 179 || i === 194 || i === 209 || i === 234);

                    setTimeout(() => {
                    if(cellId >= 0 && !columnRight11 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + 1].id   //справа
                        const cellNear = document.getElementById(cellIdNear) 
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 0 && !columnLeft11 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - 1].id   //слева
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 14 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - size].id   //сверху
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId < 210 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + size].id   //снизу
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 14 && !columnRight11 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + 1 - size].id   //справа сверху
                        const cellNear = document.getElementById(cellIdNear) 
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 14 && !columnLeft11 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - 1 - size].id   //слева сверху
                        const cellNear = document.getElementById(cellIdNear) 
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId < 210 && !columnLeft11 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - 1 + size].id   //слева снизу
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId < 210 && !columnRight11 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + 1 + size].id   //справа снизу
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    
                    }, 11)
                    }
                    }
                    
                }
                
                }                                   
        })
        flagAmount = 0;
        flagContainer.innerHTML = `Осталось флажков:${boombs}    Осталось мин:${boombs}`;
        
        cell.oncontextmenu = function(e) {
            e.preventDefault()   

            AddNewRedFlag(cell) 
            
            
            function AddNewRedFlag(cell) {
                if(theEnd === true) {
                return
                } else if (!cell.classList.contains('good-mark') && (flagAmount < boombs)) {
                 if(!cell.classList.contains('red-flag')) {
                    cell.classList.add('red-flag')
                    if(btnColor.classList.contains('back')) {
                        cell.classList.add('red-flag-img-black');
                     } else {
                        cell.classList.add('red-flag-img');
                     }
                    
                    flagAmount ++
                    let SeeFlagAmount = flagAmount;
                    flagContainer.innerHTML = `Осталось флажков:${boombs - SeeFlagAmount}    Осталось мин:${boombs - SeeFlagAmount}`;
                    
                 } else {
                  cell.classList.remove('red-flag');
                  cell.classList.remove('red-flag-img');
                  cell.classList.remove('red-flag-img-black');
                  flagAmount --
                  let SeeFlagAmount = flagAmount;
                  flagContainer.innerHTML = `Осталось флажков:${boombs - SeeFlagAmount}     Осталось мин:${boombs - SeeFlagAmount}`;
                 }
                 } else if(!cell.classList.contains('good-mark') && (flagAmount == boombs)) {
                    if(!cell.classList.contains('red-flag')) {
                       
                     } else {
                      cell.classList.remove('red-flag');
                      cell.classList.remove('red-flag-img');
                      flagAmount --
                      let SeeFlagAmount = flagAmount;
                      flagContainer.innerHTML = `Осталось флажков:${boombs - SeeFlagAmount}     Осталось мин:${boombs - SeeFlagAmount}`;
                     }
                 }
                }
        }
    } 
    //
    for (let i = 0; i < cells.length; i++) {
        let numberBomb = 0;
        const columnLeft0 = (i === 0 || i === 15 || i === 30 || i === 45 || i === 60 || i === 75 || i === 90 || i === 105 || i === 120 || i === 135 || i === 150|| i === 165|| i === 180|| i === 195|| i === 210);
        const columnRight0 = (i === 14 || i === 29 || i === 44 || i === 59 || i === 74 || i === 89 || i === 104 || i === 119 || i === 134 || i === 149 || i === 164 || i === 179 || i === 194 || i === 209 || i === 234);
        if(cells[i].classList.contains('safe')) {
        if(i >= 0 && !columnRight0 && cells[i + 1].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i > 0 && !columnLeft0 && cells[i - 1].classList.contains('boom')) {
        numberBomb ++
        }
        if(i > 14 && cells[i - size].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i < 210 && cells[i + size].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i > 14 && !columnRight0 && cells[i + 1 - size].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i > 14 && !columnLeft0 && cells[i - 1 - size].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i < 210 && !columnLeft0 && cells[i - 1 + size].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i < 210 && !columnRight0 && cells[i + 1 + size].classList.contains('boom')) {
        numberBomb ++ 
        }
        cells[i].setAttribute('data-boombs', numberBomb); 
        }
        } //
} 
}



function makeCell25 () {
if(containerForCell.childNodes.length) {
        containerForCell.innerHTML = '';
        makeCell25()
} else {
    popUpButton.addEventListener('click', theStartNewGame111);

    function theStartNewGame111() {
        theEnd = false;
        popUpGameOver.classList.remove('pop-up-game-over')
        popUpGameOver.classList.add('hidden-pop-up')
        timerGameSee = 0;
        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
        timerGameSee2 = 0;
        timerGame2.innerHTML = `Время: ${timerGameSee2}`;
        makeCell25()
    }
    
    popUpButtonWin.addEventListener('click', theStartNewGame222);
    
    function theStartNewGame222() {
        theEnd = false;
        popUpWin.classList.remove('pop-up-win')
        popUpWin.classList.add('hidden-pop-up')
        timerGameSee = 0;
        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
        timerGameSee2 = 0;
        timerGame2.innerHTML = `Время: ${timerGameSee2}`;
        makeCell25()
    }

btnSmile.addEventListener('click', newGameAgain3)

function newGameAgain3() {
    theEnd = false;
    if(popUpWin.classList.contains('pop-up-win')) {
        popUpWin.classList.add('hidden-pop-up');
        popUpWin.classList.remove('pop-up-win');
        timerGameSee = 0;
        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
        timerGameSee2 = 0;
        timerGame2.innerHTML = `Время: ${timerGameSee2}`;
    } else if (popUpGameOver.classList.contains('pop-up-game-over')) {
        popUpGameOver.classList.add('hidden-pop-up');
        popUpGameOver.classList.remove('pop-up-game-over');
        timerGameSee = 0;
        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
        timerGameSee2 = 0;
        timerGame2.innerHTML = `Время: ${timerGameSee2}`;
    }
    timerGameSee = 0;
    timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
    timerGameSee2 = 0;
    timerGame2.innerHTML = `Время: ${timerGameSee2}`;
    
    makeCell25()
    
}
    let size = 25;
    let boombs = Number(mineChoice.value); 
    let arrFromBoombs = Array(boombs).fill('boom'); 
    let arrFromSafe = Array(size ** 2 - boombs).fill('safe'); 
    let arrAll = arrFromBoombs.concat(arrFromSafe);
    let arrAllSorted = arrAll.sort(() => Math.random() - 0.5);

let cells = [];

    for(let i = 0; i < size ** 2; i++) {
        let cell = document.createElement('div');
        containerForCell.append(cell);
        cell.classList.add('cell-art-size25');
        cell.classList.add(arrAllSorted[i]);
        cell.setAttribute('id', i);
        cells.push(cell); 

        /*btnColor.addEventListener('click', changeColor);

        function changeColor() {
        
        if(btnColor.classList.contains('back')) {
                cell.classList.remove('cell-art-size10-black')
                cell.classList.add('cell-art-size10')     
        }
        
        
        btnColor.classList.toggle('back');
        containerForAll.classList.toggle('change-theme');
        containerForCell.classList.toggle('change-theme');
        containerForChoice.classList.toggle('change-theme');
        containerForChoiceField.classList.toggle('change-theme');
        containerForChoiceMine.classList.toggle('change-theme');
        containerForFlag.classList.toggle('change-theme');
        containerForSmile.classList.toggle('change-theme');
        document.querySelector('body').classList.toggle('change-theme-body');
        cell.classList.toggle('change-theme');
        }*/

        
        
        containerForCell.onclick = function() {
            if (theEnd === false && cell.classList.contains('safe')) {
            timerGameSee++
            timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
            let timerId = setInterval(() => addTime(), 1000);
            if(timerGameSee2 == 0) {
            function addTime() {
            timerGameSee2++
            timerGame2.innerHTML = `Время: ${timerGameSee2}`;
            if(popUpGameOver.classList.contains('pop-up-game-over') || popUpWin.classList.contains('pop-up-win')) {
                clearInterval(timerId)
                timerGame2.innerHTML = `Время: ${timerGameSee2}`;
            }
            } 
            }  
            } 
            }

        cell.addEventListener('click', function(e) {
            let numGood = 0;
            
            pressOnCell(cell);
            ifWin()
            function ifWin() {
            for(let i = 0; i < cells.length; i++) {
                if(cells[i].classList.contains('good-mark')) {
                numGood ++
            }
            } 
            if(numGood === size**2 - boombs) {
                popUpWin.classList.add('pop-up-win');
                popUpWinText.textContent = `Ура! Вы нашли все мины за ${timerGameSee2} секунд и ${timerGameSee} ходов!`;
                popUpWin.classList.remove('hidden-pop-up');
                theEnd = true;
            } 
            }

            function pressOnCell(cell) {
                let cellId = cell.id;
                if (theEnd === true) {
                    return 
                } else if (cell.classList.contains('good-mark')) {
                    return
                } else if (cell.classList.contains('red-flag'))  {
                    return 
                } else if (cell.classList.contains('boom')) {
                    function theEndGame(cell)  {
                        theEnd = true;
                        for(i = 0; i < cells.length; i++) {
                            if(cells[i].classList.contains('boom')) {
                                cells[i].classList.add('img-boom')
                            }
                        }
                        popUpGameOver.classList.add('pop-up-game-over');
                        popUpGameOver.classList.remove('hidden-pop-up');
                        timerGameSee = timerGameSee + 1; 
                        timerGame.innerHTML = `Количество кликов: ${timerGameSee}`;
                        }   
                    theEndGame(cell) 
                } else {
                   let numberOfBoomsNear = cell.getAttribute('data-boombs');

                   if (numberOfBoomsNear > 0) {
                    cell.classList.add('good-mark');
                    cell.textContent = numberOfBoomsNear;
                    
                    if(cell.textContent === '1') {
                    cell.classList.add('color-text111')    
                    } else if(cell.textContent === '2') {
                    cell.classList.add('color-text222')    
                    } else if(cell.textContent === '3') {
                    cell.classList.add('color-text333')     
                    } else if(cell.textContent === '4') {
                    cell.classList.add('color-text444')
                    } else if(cell.textContent === '5') {
                        cell.classList.add('color-text555')
                    } else if(cell.textContent === '6') {
                        cell.classList.add('color-text666')
                    } else if(cell.textContent === '7') {
                        cell.classList.add('color-text777')
                    } else if(cell.textContent === '8') {
                        cell.classList.add('color-text888')
                    }
                    return 
                   } else {
                    cell.classList.add('good-mark');
                    
                    openNearCell(cell, cellId);
                    
                    function openNearCell(cell, cellId) {
                    const columnLeft15 = (i === 0 || i === 25 || i === 50 || i === 75 || i === 100 || i === 125 || i === 150 || i === 175 || i === 200 || i === 225 || i === 250 || i === 275 || i === 300 || i === 325 || i === 350 || i === 375 || i === 400 || i === 425 || i === 450 || i === 475 || i === 500 || i === 525 || i === 550 || i === 575 || i === 600);
                    const columnRight15 = (i === 24 || i === 49 || i === 74 || i === 99 || i === 124 || i === 149 || i === 174 || i === 199 || i === 224 || i === 249 || i === 274 || i === 299 || i === 324 || i === 349 || i === 374 || i === 399 || i === 424 || i === 449 || i === 474 || i === 499 || i === 524 || i === 549 || i === 574 || i === 599 || i === 624);

                    setTimeout(() => {
                    if(cellId >= 0 && !columnRight15 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + 1].id   //справа
                        const cellNear = document.getElementById(cellIdNear) 
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 0 && !columnLeft15 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - 1].id   //слева
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 24 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - size].id   //сверху
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId < 600 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + size].id   //снизу
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 24 && !columnRight15 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + 1 - size].id   //справа сверху
                        const cellNear = document.getElementById(cellIdNear) 
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId > 24 && !columnLeft15 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - 1 - size].id   //слева сверху
                        const cellNear = document.getElementById(cellIdNear) 
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId < 600 && !columnLeft15 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) - 1 + size].id   //слева снизу
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    if(cellId < 600 && !columnRight15 && !cell.classList.contains('boom') && cell.textContent === '') {
                        const cellIdNear = cells[Number(cellId) + 1 + size].id   //справа снизу
                        const cellNear = document.getElementById(cellIdNear)  
                        if(cellNear.textContent === '' && !cellNear.classList.contains('boom')) {
                            pressOnCell(cellNear)
                        }
                    }
                    
                    }, 11)
                    }
                    }
                    
                }
                
                }                                   
        })
        flagAmount = 0;
        flagContainer.innerHTML = `Осталось флажков:${boombs}    Осталось мин:${boombs}`;
        
        cell.oncontextmenu = function(e) {
            e.preventDefault()   

            AddNewRedFlag(cell) 
            
            
            function AddNewRedFlag(cell) {
                if(theEnd === true) {
                return
                } else if (!cell.classList.contains('good-mark') && (flagAmount < boombs)) {
                 if(!cell.classList.contains('red-flag')) {
                    cell.classList.add('red-flag')
                    if(btnColor.classList.contains('back')) {
                        cell.classList.add('red-flag-img-black');
                     } else {
                        cell.classList.add('red-flag-img');
                     }
                    
                    flagAmount ++
                    let SeeFlagAmount = flagAmount;
                    flagContainer.innerHTML = `Осталось флажков:${boombs - SeeFlagAmount}    Осталось мин:${boombs - SeeFlagAmount}`;
                    
                 } else {
                  cell.classList.remove('red-flag');
                  cell.classList.remove('red-flag-img');
                  cell.classList.remove('red-flag-img-black');
                  flagAmount --
                  let SeeFlagAmount = flagAmount;
                  flagContainer.innerHTML = `Осталось флажков:${boombs - SeeFlagAmount}     Осталось мин:${boombs - SeeFlagAmount}`;
                 }
                 } else if(!cell.classList.contains('good-mark') && (flagAmount == boombs)) {
                    if(!cell.classList.contains('red-flag')) {
                       
                     } else {
                      cell.classList.remove('red-flag');
                      cell.classList.remove('red-flag-img');
                      flagAmount --
                      let SeeFlagAmount = flagAmount;
                      flagContainer.innerHTML = `Осталось флажков:${boombs - SeeFlagAmount}     Осталось мин:${boombs - SeeFlagAmount}`;
                     }
                 }
                }
        }
    } 

    for (let i = 0; i < cells.length; i++) {
        let numberBomb = 0;
        const columnLeft5 = (i === 0 || i === 25 || i === 50 || i === 75 || i === 100 || i === 125 || i === 150 || i === 175 || i === 200 || i === 225 || i === 250 || i === 275 || i === 300 || i === 325 || i === 350 || i === 375 || i === 400 || i === 425 || i === 450 || i === 475 || i === 500 || i === 525 || i === 550 || i === 575 || i === 600);
        const columnRight5 = (i === 24 || i === 49 || i === 74 || i === 99 || i === 124 || i === 149 || i === 174 || i === 199 || i === 224 || i === 249 || i === 274 || i === 299 || i === 324 || i === 349 || i === 374 || i === 399 || i === 424 || i === 449 || i === 474 || i === 499 || i === 524 || i === 549 || i === 574 || i === 599 || i === 624);
        if(cells[i].classList.contains('safe')) {
        if(i >= 0 && !columnRight5 && cells[i + 1].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i > 0 && !columnLeft5 && cells[i - 1].classList.contains('boom')) {
        numberBomb ++
        }
        if(i > 24 && cells[i - size].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i < 600 && cells[i + size].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i > 24 && !columnRight5 && cells[i + 1 - size].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i > 24 && !columnLeft5 && cells[i - 1 - size].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i < 600 && !columnLeft5 && cells[i - 1 + size].classList.contains('boom')) {
        numberBomb ++ 
        }
        if(i < 600 && !columnRight5 && cells[i + 1 + size].classList.contains('boom')) {
        numberBomb ++ 
        }
        cells[i].setAttribute('data-boombs', numberBomb); 
        }
        }
} 
}


/*btnColor.addEventListener('click', changeColor);

function changeColor() {

    btnColor.classList.toggle('back');
    btnSmile.classList.toggle('back');
    containerForAll.classList.toggle('change-theme');
    containerForCell.classList.toggle('change-theme');
    containerForChoice.classList.toggle('change-theme');
    containerForChoiceField.classList.toggle('change-theme');
    containerForChoiceMine.classList.toggle('change-theme');
    containerForFlag.classList.toggle('change-theme');
    containerForSmile.classList.toggle('change-theme');
    document.querySelector('body').classList.toggle('change-theme');
}*/

document.getElementById('mine-number').onkeydown = function (e) {
    return false;
}




