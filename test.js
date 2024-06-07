let km_1El = document.getElementById('km1')
let h_1El = document.getElementById('h1')
let km_h_1El = document.getElementById('kmh1')

let km_2El = document.getElementById('km2')
let h_2El = document.getElementById('h2')
let km_h_2El = document.getElementById('kmh2')

let km_3El = document.getElementById('km3')
let h_3El = document.getElementById('h3')
let km_h_3El = document.getElementById('kmh3')

let m_s0_1El = document.getElementById('ms01')
let m_s_1El = document.getElementById('ms1')
let s_1El = document.getElementById('s1')
let a_1El = document.getElementById('a1')

let s_2El=document.getElementById('s2')
let a_2El=document.getElementById('a2')
let m_s_2El=document.getElementById('ms2')

let m_s0_3El = document.getElementById('ms03')
let m_s_3El = document.getElementById('ms3')
let s_3El = document.getElementById('s3')
let a_3El = document.getElementById('a3')

let m_s0_4El=document.getElementById('ms04')
let m_1El=document.getElementById('m1')
let s_4El=document.getElementById('s4')
let a_4El=document.getElementById('a4')

let m_s0_5El=document.getElementById('ms05')
let a_5El=document.getElementById('a5')
let s_5El=document.getElementById('s5')
let m_s_4El=document.getElementById('ms4')

function fasz() {
    km_h_1El.innerText = Math.round((km_1El.value * 1) / (h_1El.value * 1) * 100) / 100
}

function fasz2() {
    km_2El.innerText = Math.round((km_h_2El.value * 1) * (h_2El.value * 1) * 100) / 100
}

function fasz3() {
    h_3El.innerText = Math.round((km_3El.value * 1) / (km_h_3El.value * 1) * 100) / 100
}

function doit() {
    a_1El.innerText = Math.round((m_s_1El.value - m_s0_1El.value) / s_1El.value*100)/100
}

function doit2() {
    m_s_2El.innerText=s_2El.value*a_2El.value
}

function doit3() {
    s_3El.innerText = (m_s_3El.value - m_s0_3El.value) / a_3El.value
}

function eur1(){
    m_1El.innerText=Math.round(m_s0_4El.value*s_4El.value+(a_4El.value/2)*(s_4El.value*s_4El.value)*100/100)
}

function eur2(){
    m_s_4El.innerText=Math.round(m_s0_5El.value+s_5El.value*a_5El.value)*100/100
}