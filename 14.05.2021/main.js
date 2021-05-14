const navbar = document.createElement('nav')
app.appendChild(navbar)
const li = document.createElement('li')
li.innerText="Dodaj książke"
const li2 = document.createElement('li')
li2.setAttribute('class','nav-lis')
li2.innerText="Lista książek"
navbar.appendChild(li)
navbar.appendChild(li2)

const header = document.createElement('header')
header.setAttribute('class','main-header')
app.appendChild(header)
const headDiv = document.createElement('div')
header.appendChild(headDiv)
const HeadH1 = document.createElement('h1')
HeadH1.innerText="Lista książek"
headDiv.appendChild(HeadH1)

const section = document.createElement('section')
app.appendChild(section)
const sectDiv = document.createElement('div')
sectDiv.setAttribute('id','grid')
section.appendChild(sectDiv)

const container = document.createElement('div')
container.setAttribute('class','container')
grid.appendChild(container)

// template
const div = document.createElement('div')
div.setAttribute('class','divun')
container.appendChild(div)
const bk = document.createElement('div')
bk.setAttribute('class','pod-div')
div.appendChild(bk)

const hone = document.createElement('h1')
hone.setAttribute('class','hone')
hone.innerText="book 1"
bk.appendChild(hone)


const hone2 = document.createElement('p')
hone2.setAttribute('class','hone-2')
hone2.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi repellendus saepe ducimus itaque at dicta maxime, debitis quam fugit sapiente culpa id quo rem iure. Aliquam, ab. Iste, qui beatae?"
div.appendChild(hone2)

const inp = document.createElement('input')
inp.setAttribute('class','X')
inp.setAttribute('value','usuń')
inp.setAttribute('type', 'button')
inp.setAttribute('onclick', 'usun()')
div.appendChild(inp)

const inp2= document.createElement('input')
inp2.setAttribute('class','X-2 ')
inp2.setAttribute('value','edytuj')
inp2.setAttribute('type', 'button')
div.appendChild(inp2)

//tempate 2 
const div2 = document.createElement('div')
div2.setAttribute('class','divun')
container.appendChild(div2)
const nk = document.createElement('div')
nk.setAttribute('class','pod-div')
div2.appendChild(nk)

const bone = document.createElement('h1')
bone.setAttribute('class','hone')
bone.innerText="book 2"
nk.appendChild(bone)


const bone2 = document.createElement('p')
bone2.setAttribute('class','hone-2')
bone2.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi repellendus saepe ducimus itaque at dicta maxime, debitis quam fugit sapiente culpa id quo rem iure. Aliquam, ab. Iste, qui beatae?"
div2.appendChild(bone2)

const nnp = document.createElement('input')
nnp.setAttribute('class','X')
nnp.setAttribute('value','usuń')
nnp.setAttribute('type', 'button')
nnp.setAttribute('onclick','usun2()')
div2.appendChild(nnp)

const nnp2= document.createElement('input')
nnp2.setAttribute('class','X-2 ')
nnp2.setAttribute('value','edytuj')
nnp2.setAttribute('type', 'button')
div2.appendChild(nnp2)

//template 3
const div3 = document.createElement('div')
div3.setAttribute('class','divun')
container.appendChild(div3)
const np = document.createElement('div')
np.setAttribute('class','pod-div')
div3.appendChild(np)

const tone = document.createElement('h1')
tone.setAttribute('class','hone')
tone.innerText="book 3"
np.appendChild(tone)


const tone2 = document.createElement('p')
tone2.setAttribute('class','hone-2')
tone2.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi repellendus saepe ducimus itaque at dicta maxime, debitis quam fugit sapiente culpa id quo rem iure. Aliquam, ab. Iste, qui beatae?"
div3.appendChild(tone2)

const nnn = document.createElement('input')
nnn.setAttribute('class','X')
nnn.setAttribute('value','usuń')
nnn.setAttribute('type', 'button')
nnn.setAttribute('onclick','usun3()')
div3.appendChild(nnn)

const nnn2= document.createElement('input')
nnn2.setAttribute('class','X-2 ')
nnn2.setAttribute('value','edytuj')
nnn2.setAttribute('type', 'button')
div3.appendChild(nnn2)

// tempalate 4 

const div4 = document.createElement('div')
div4.setAttribute('class','divun')
container.appendChild(div4)
const npp = document.createElement('div')
npp.setAttribute('class','pod-div')
div4.appendChild(npp)

const stone = document.createElement('h1')
stone.setAttribute('class','hone')
stone.innerText="book 4"
npp.appendChild(stone)


const stone2 = document.createElement('p')
stone2.setAttribute('class','hone-2')
stone2.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi repellendus saepe ducimus itaque at dicta maxime, debitis quam fugit sapiente culpa id quo rem iure. Aliquam, ab. Iste, qui beatae?"
div4.appendChild(stone2)

const nnnn = document.createElement('input')
nnnn.setAttribute('class','X')
nnnn.setAttribute('value','usuń')
nnnn.setAttribute('type', 'button')
nnnn.setAttribute('onclick','usun4()')
div4.appendChild(nnnn)

const nnnn2= document.createElement('input')
nnnn2.setAttribute('class','X-2 ')
nnnn2.setAttribute('value','edytuj')
nnnn2.setAttribute('type', 'button')
div4.appendChild(nnnn2)

// tempate 5 

const div5 = document.createElement('div')
div5.setAttribute('class','divun')
container.appendChild(div5)
const nppp = document.createElement('div')
nppp.setAttribute('class','pod-div')
div5.appendChild(nppp)

const ptone = document.createElement('h1')
ptone.setAttribute('class','hone')
ptone.innerText="book 5"
nppp.appendChild(ptone)


const ptone2 = document.createElement('p')
ptone2.setAttribute('class','hone-2')
ptone2.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi repellendus saepe ducimus itaque at dicta maxime, debitis quam fugit sapiente culpa id quo rem iure. Aliquam, ab. Iste, qui beatae?"
div5.appendChild(ptone2)

const nnnnn = document.createElement('input')
nnnnn.setAttribute('class','X')
nnnnn.setAttribute('value','usuń')
nnnnn.setAttribute('type', 'button')
nnnnn.setAttribute('onclick','usun5()')
div5.appendChild(nnnnn)

const nnnnn2= document.createElement('input')
nnnnn2.setAttribute('class','X-2 ')
nnnnn2.setAttribute('value','edytuj')
nnnnn2.setAttribute('type', 'button')
div5.appendChild(nnnnn2)

// tempate 6

const div6 = document.createElement('div')
div6.setAttribute('class','divun')
container.appendChild(div6)
const nnppp = document.createElement('div')
nnppp.setAttribute('class','pod-div')
div6.appendChild(nnppp)

const pstone = document.createElement('h1')
pstone.setAttribute('class','hone')
pstone.innerText="book 6"
nnppp.appendChild(pstone)


const pstone2 = document.createElement('p')
pstone2.setAttribute('class','hone-2')
pstone2.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi repellendus saepe ducimus itaque at dicta maxime, debitis quam fugit sapiente culpa id quo rem iure. Aliquam, ab. Iste, qui beatae?"
div6.appendChild(pstone2)

const nnnnnp = document.createElement('input')
nnnnnp.setAttribute('class','X')
nnnnnp.setAttribute('value','usuń')
nnnnnp.setAttribute('type', 'button')
nnnnnp.setAttribute('onclick','usun6()')
div6.appendChild(nnnnnp)

const nnnnnp2= document.createElement('input')
nnnnnp2.setAttribute('class','X-2 ')
nnnnnp2.setAttribute('value','edytuj')
nnnnnp2.setAttribute('type', 'button')
div6.appendChild(nnnnnp2)


function usun(){
    container.removeChild(div)
}

function usun2(){
    container.removeChild(div2)
}
function usun3(){
    container.removeChild(div3)
}
function usun4(){
    container.removeChild(div4)
}
function usun5(){
    container.removeChild(div5)
}
function usun6(){
    container.removeChild(div6)
}

