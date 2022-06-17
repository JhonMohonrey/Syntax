let en = [
    {h1: '&#169;', title: 'COPYRIGHT SIGN', code1: 'U+000A9', code2: '&#xa9;', code3: '&#169;', code4: '&copy;',},
    
    {title: 'REGISTERED TRADE MARK SIGN ',  code1: 'U+000AE ', code2: '&#xae; ', 
    code3: '&#174; ', h1: '&#174; ', code4: '&reg; ',},

    {title: 'TRADE MARK SIGN ',  code1: 'U+02122 ', code2: '&#x2122; ', 
    code3: '&#8482; ', h1: '&#8482; ', code4: '&trade; ',},

    {title: 'AT SYMBOL ',  code1: 'U+00040 ', code2: '&#x40; ', 
    code3: '&#64; ', h1: ' &#64;', code4: '&commat; ',},

    {title: 'PARAGRAPH SIGN ',  code1: 'U+000B6 ', code2: '&#xb6; ', 
    code3: '&#182; ', h1: '&#182; ', code4: '&para; ',},

    {title: 'SECTION SIGN ',  code1: 'U+000A7 ', code2: '&#xa7; ', 
    code3: '&#167; ', h1: '&#167; ', code4: ' &sect;',},

    {title: 'ACCOUNT OF ',  code1: 'U+02100 ', code2: ' &#x2100;', 
    code3: ' &#8448;', h1: ' &#8448;', code4: ' ',},

    {title: ' ADDRESSED TO THE SUBJECT',  code1: 'U+02101 ', code2: '&#x2101; ', 
    code3: '&#8449; ', h1: '&#8449; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK CAPITAL C ',  code1: 'U+02102 ', code2: '&#x2102; ', 
    code3: '&#8450; ', h1: '&#8450; ', code4: '&Copf; ',},

    {title: 'DEGREE CELSIUS ',  code1: 'U+02103 ', code2: '&#x2103; ', 
    code3: '&#8451; ', h1: '&#8451; ', code4: ' ',},

    {title: ' CENTRE LINE SYMBOL',  code1: 'U+02104 ', code2: '&#x2104; ', 
    code3: '&#8452; ', h1: '&#8452; ', code4: ' ',},

    {title: 'CARE OF ',  code1: 'U+02105 ', code2: '&#x2105; ', 
    code3: '&#8453; ', h1: '&#8453; ', code4: '&incare; ',},

    {title: 'CADA UNA ',  code1: 'U+02106 ', code2: '&#x2106; ', 
    code3: '&#8454; ', h1: '&#8454; ', code4: ' ',},

    {title: 'EULER CONSTANT ',  code1: 'U+02107 ', code2: '&#x2107; ', 
    code3: '&#8455; ', h1: '&#8455; ', code4: ' ',},

    {title: 'SCRUPLE ',  code1: 'U+02108 ', code2: '&#x2108; ', 
    code3: ' &#8456;', h1: ' &#8456;', code4: ' ',},

    {title: 'DEGREE FAHRENHEIT ',  code1: 'U+02109 ', code2: ' &#x2109;', 
    code3: '&#8457; ', h1: ' &#8457;', code4: ' ',},

    {title: ' SCRIPT SMALL G',  code1: 'U+0210A ', code2: ' &#x210A;', 
    code3: '&#8458; ', h1: '&#8458; ', code4: '&gscr; ',},

    {title: 'SCRIPT CAPITAL H ',  code1: 'U+0210B ', code2: '&#x210B; ', 
    code3: ' &#8459;', h1: '&#8459; ', code4: ' &hamilt;',},

    {title: 'BLACK-LETTER CAPITAL H ',  code1: 'U+0210C ', code2: '&#x210C; ', 
    code3: ' &#8460;', h1: '&#8460; ', code4: ' &Hfr;',},

    {title: 'DOUBLE-STRUCK CAPITAL H ',  code1: 'U+0210D ', code2: '&#x210D; ', 
    code3: '&#8461; ', h1: ' &#8461;', code4: '&Hopf; ',},

    {title: 'PLANCK CONSTANT ',  code1: 'U+0210E ', code2: '&#x210E; ', 
    code3: '&#8462; ', h1: '&#8462; ', code4: '&planckh; ',},

    {title: 'PLANCK CONSTANT OVER TWO PI ',  code1: ' U+0210F', code2: '&#x210F; ', 
    code3: '&#8463; ', h1: '&#8463; ', code4: '&planck; ',},

    {title: 'SCRIPT CAPITAL I ',  code1: ' U+02110', code2: ' &#x2110;', 
    code3: ' &#8464;', h1: '&#8464; ', code4: '&Iscr; ',},

    {title: 'BLACK-LETTER CAPITAL I ',  code1: 'U+02111 ', code2: '&#x2111; ', 
    code3: '&#8465; ', h1: '&#8465; ', code4: ' &image;',},

    {title: 'SCRIPT CAPITAL L ',  code1: 'U+02112 ', code2: '&#x2112; ', 
    code3: '&#8466; ', h1: '&#8466; ', code4: '&Lscr; ',},

    {title: 'SCRIPT SMALL L ',  code1: 'U+02113 ', code2: '&#x2113; ', 
    code3: '&#8467; ', h1: '&#8467; ', code4: '&ell; ',},

    {title: 'L B BAR SYMBOL ',  code1: 'U+02114 ', code2: '&#x2114; ', 
    code3: '&#8468; ', h1: '&#8468; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK CAPITAL N ',  code1: 'U+02115 ', code2: '&#x2115; ', 
    code3: '&#8469; ', h1: '&#8469; ', code4: '&Nopf; ',},

    {title: 'NUMERO SIGN ',  code1: 'U+02116 ', code2: '&#x2116; ', 
    code3: '&#8470; ', h1: '&#8470; ', code4: ' &numero;',},

    {title: 'SOUND RECORDING COPYRIGHT ',  code1: 'U+02117 ', code2: '&#x2117; ', 
    code3: ' &#8471;', h1: '&#8471; ', code4: ' &copysr;',},

    {title: 'SCRIPT CAPITAL P ',  code1: 'U+02118 ', code2: ' &#x2118;', 
    code3: '&#8472; ', h1: '&#8472; ', code4: ' &weierp;',},

    {title: 'DOUBLE-STRUCK CAPITAL P ',  code1: 'U+02119 ', code2: '&#x2119; ', 
    code3: '&#8473; ', h1: '&#8473; ', code4: ' &Popf;',},

    {title: 'DOUBLE-STRUCK CAPITAL Q ',  code1: ' U+0211A', code2: '&#x211A; ', 
    code3: '&#8474; ', h1: '&#8474; ', code4: ' &Qopf;',},

    {title: 'SCRIPT CAPITAL R ',  code1: ' U+0211B', code2: '&#x211B; ', 
    code3: ' &#8475;', h1: '&#8475; ', code4: ' &Rscr;',},

    {title: 'BLACK-LETTER CAPITAL R ',  code1: ' U+0211C', code2: '&#x211C; ', 
    code3: '&#8476; ', h1: '&#8476; ', code4: '&real; ',},

    {title: 'DOUBLE-STRUCK CAPITAL R ',  code1: 'U+0211D ', code2: '&#x211D; ', 
    code3: '&#8477; ', h1: '&#8477; ', code4: '&Ropf; ',},

    {title: 'PRESCRIPTION TAKE ',  code1: 'U+0211E ', code2: '&#x211E; ', 
    code3: '&#8478; ', h1: '&#8478; ', code4: ' &rx;',},

    {title: 'RESPONSE ',  code1: ' U+0211F', code2: '&#x211F; ', 
    code3: '&#8479; ', h1: '&#8479; ', code4: ' ',},

    {title: 'SERVICE MARK ',  code1: 'U+02120 ', code2: '&#x2120; ', 
    code3: ' &#8480;', h1: '&#8480; ', code4: ' ',},

    {title: 'TELEPHONE SIGN ',  code1: 'U+02121 ', code2: '&#x2121; ', 
    code3: '&#8481; ', h1: '&#8481; ', code4: ' ',},

    {title: 'VERSICLE ',  code1: 'U+02123 ', code2: '&#x2123; ', 
    code3: ' &#8483;', h1: '&#8483; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK CAPITAL Z ',  code1: ' U+02124', code2: '&#x2124; ', 
    code3: '&#8484; ', h1: '&#8484; ', code4: '&Zopf; ',},

    {title: 'OUNCE SIGN ',  code1: 'U+02125 ', code2: '&#x2125; ', 
    code3: ' &#8485;', h1: ' &#8485;', code4: ' ',},

    {title: 'OHM SIGN ',  code1: ' U+02126', code2: '&#x2126; ', 
    code3: '&#8486; ', h1: '&#8486; ', code4: ' ',},

    {title: 'INVERTED OHM SIGN ',  code1: 'U+02127 ', code2: '&#x2127; ', 
    code3: '&#8487; ', h1: '&#8487; ', code4: '&mho; ',},

    {title: 'BLACK-LETTER CAPITAL Z ',  code1: 'U+02128 ', code2: '&#x2128; ', 
    code3: ' &#8488;', h1: '&#8488; ', code4: '&Zfr; ',},

    {title: 'TURNED GREEK SMALL LETTER IOTA ',  code1: 'U+02129 ', code2: ' &#x2129;', 
    code3: '&#8489; ', h1: '&#8489; ', code4: '&iiota; ',},

    {title: ' KELVIN SIGN',  code1: 'U+0212A ', code2: '&#x212A; ', 
    code3: '&#8490; ', h1: '&#8490; ', code4: ' ',},

    {title: ' ANGSTROM SIGN',  code1: 'U+0212B ', code2: '&#x212B; ', 
    code3: '&#8491; ', h1: '&#8491; ', code4: ' ',},

    {title: 'SCRIPT CAPITAL B ',  code1: 'U+0212C ', code2: '&#x212C; ', 
    code3: ' &#8492;', h1: '&#8492; ', code4: '&bernou; ',},

    {title: ' BLACK-LETTER CAPITAL C',  code1: 'U+0212D ', code2: ' &#x212D;', 
    code3: '&#8493; ', h1: '&#8493; ', code4: '&Cfr; ',},

    {title: 'ESTIMATED SYMBOL ',  code1: 'U+0212E ', code2: '&#x212E; ', 
    code3: '&#8494; ', h1: '&#8494; ', code4: ' ',},

    {title: 'SCRIPT SMALL E ',  code1: 'U+0212F ', code2: '&#x212F; ', 
    code3: ' &#8495;', h1: '&#8495; ', code4: '&escr; ',},

    {title: 'SCRIPT CAPITAL E ',  code1: ' U+02130', code2: '&#x2130; ', 
    code3: ' &#8496;', h1: '&#8496; ', code4: '&Escr; ',},

    {title: 'SCRIPT CAPITAL F ',  code1: 'U+02131 ', code2: '&#x2131; ', 
    code3: '&#8497; ', h1: '&#8497; ', code4: ' &Fscr;',},

    {title: 'TURNED CAPITAL F ',  code1: 'U+02132 ', code2: '&#x2132; ', 
    code3: '&#8498; ', h1: '&#8498; ', code4: ' ',},

    {title: 'SCRIPT CAPITAL M ',  code1: 'U+02133 ', code2: '&#x2133; ', 
    code3: '&#8499; ', h1: '&#8499; ', code4: '&Mscr; ',},

    {title: 'SCRIPT SMALL O ',  code1: 'U+02134 ', code2: '&#x2134; ', 
    code3: '&#8500; ', h1: '&#8500; ', code4: '&oscr; ',},

    {title: 'ALEF SYMBOL ',  code1: 'U+02135 ', code2: '&#x2135; ', 
    code3: '&#8501; ', h1: ' &#8501;', code4: '&alefsym; ',},

    {title: 'BET SYMBOL ',  code1: 'U+02136 ', code2: '&#x2136; ', 
    code3: '&#8502; ', h1: '&#8502; ', code4: '&beth; ',},

    {title: 'GIMEL SYMBOL ',  code1: 'U+02137 ', code2: '&#x2137; ', 
    code3: ' &#8503;', h1: '&#8503; ', code4: '&gimel; ',},

    {title: 'DALET SYMBOL ',  code1: 'U+02138 ', code2: ' &#x2138;', 
    code3: ' &#8504;', h1: '&#8504; ', code4: '&daleth; ',},

    {title: 'INFORMATION SOURCE ',  code1: 'U+02139 ', code2: ' &#x2139;', 
    code3: '&#8505; ', h1: '&#8505; ', code4: ' ',},

    {title: 'ROTATED CAPITAL Q ',  code1: 'U+0213A ', code2: '&#x213A; ', 
    code3: '&#8506; ', h1: '&#8506; ', code4: ' ',},

    {title: 'FACSIMILE SIGN ',  code1: 'U+0213B ', code2: '&#x213B; ', 
    code3: '&#8507; ', h1: ' &#8507;', code4: ' ',},

    {title: 'DOUBLE-STRUCK SMALL PI ',  code1: ' U+0213C', code2: ' &#x213C;', 
    code3: '&#8508; ', h1: '&#8508; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK SMALL GAMMA ',  code1: 'U+0213D ', code2: ' &#x213D;', 
    code3: ' &#8509;', h1: '&#8509; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK CAPITAL GAMMA ',  code1: 'U+0213E ', code2: '&#x213E; ', 
    code3: '&#8510; ', h1: '&#8510; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK CAPITAL PI ',  code1: 'U+0213F ', code2: '&#x213F; ', 
    code3: '&#8511; ', h1: '&#8511; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK N-ARY SUMMATION ',  code1: 'U+02140 ', code2: '&#x2140; ', 
    code3: '&#8512; ', h1: '&#8512; ', code4: ' ',},

    {title: ' TURNED SANS-SERIF CAPITAL G',  code1: 'U+02141 ', code2: '&#x2141; ', 
    code3: '&#8513; ', h1: '&#8513; ', code4: ' ',},

    {title: ' TURNED SANS-SERIF CAPITAL L',  code1: 'U+02142 ', code2: '&#x2142; ', 
    code3: '&#8514; ', h1: '&#8514; ', code4: ' ',},

    {title: 'REVERSED SANS-SERIF CAPITAL L ',  code1: 'U+02143 ', code2: '&#x2143; ', 
    code3: '&#8515; ', h1: '&#8515; ', code4: ' ',},

    {title: 'TURNED SANS-SERIF CAPITAL Y ',  code1: 'U+02144 ', code2: '&#x2144; ', 
    code3: ' &#8516;', h1: '&#8516; ', code4: ' ',},

    {title: 'DOUBLE-STRUCK ITALIC CAPITAL D ',  code1: 'U+02145 ', code2: '&#x2145; ', 
    code3: '&#8517; ', h1: '&#8517; ', code4: ' &DD;',},

    {title: 'DOUBLE-STRUCK ITALIC SMALL D ',  code1: 'U+02146 ', code2: '&#x2146; ', 
    code3: '&#8518; ', h1: '&#8518; ', code4: '&dd; ',},

    {title: 'DOUBLE-STRUCK ITALIC SMALL E ',  code1: 'U+02147 ', code2: '&#x2147; ', 
    code3: '&#8519; ', h1: '&#8519; ', code4: '&ee; ',},

    {title: 'DOUBLE-STRUCK ITALIC SMALL I ',  code1: 'U+02148 ', code2: '&#x2148; ', 
    code3: '&#8520; ', h1: '&#8520; ', code4: '&ii; ',},

    {title: 'DOUBLE-STRUCK ITALIC SMALL J ',  code1: 'U+02149 ', code2: '&#x2149; ', 
    code3: ' &#8521;', h1: '&#8521; ', code4: ' ',},

    {title: 'PROPERTY LINE ',  code1: 'U+0214A ', code2: '&#x214A; ', 
    code3: '&#8522; ', h1: '&#8522; ', code4: ' ',},

    {title: 'TURNED AMPERSAND ',  code1: 'U+0214B ', code2: '&#x214B; ', 
    code3: ' &#8523;', h1: '&#8523; ', code4: ' ',},

    {title: 'AKTIESELSKAB ',  code1: 'U+0214D ', code2: '&#x214D; ', 
    code3: '&#8525; ', h1: '&#8525; ', code4: ' ',},

    {title: 'TURNED SMALL F ',  code1: 'U+0214E ', code2: '&#x214E; ', 
    code3: '&#8526; ', h1: '&#8526; ', code4: ' ',},

    {title: 'BLACK SUN WITH RAYS ',  code1: ' U+02600', code2: '&#x2600; ', 
    code3: ' &#9728;', h1: '&#9728; ', code4: ' ',},

    {title: 'CLOUD ',  code1: ' U+02601', code2: '&#x2601; ', 
    code3: '&#9729; ', h1: '&#9729; ', code4: ' ',},

    {title: 'UMBRELLA ',  code1: 'U+02602 ', code2: '&#x2602; ', 
    code3: '&#9730; ', h1: '&#9730; ', code4: ' ',},

    {title: 'SNOWMAN ',  code1: 'U+02603 ', code2: '&#x2603; ', 
    code3: '&#9731; ', h1: '&#9731; ', code4: ' ',},

    {title: 'COMET ',  code1: ' U+02604', code2: ' &#x2604;', 
    code3: '&#9732; ', h1: '&#9732; ', code4: ' ',},

    {title: 'BLACK STAR ',  code1: 'U+02605 ', code2: '&#x2605; ', 
    code3: '&#9733; ', h1: '&#9733; ', code4: '&starf; ',},

    {title: 'WHITE STAR ',  code1: ' U+02606', code2: '&#x2606; ', 
    code3: '&#9734; ', h1: '&#9734; ', code4: '&star; ',},

    {title: 'LIGHTNING ',  code1: 'U+02607 ', code2: '&#x2607; ', 
    code3: '&#9735; ', h1: ' &#9735;', code4: ' ',},

    {title: 'THUNDERSTORM ',  code1: ' U+02608', code2: '&#x2608; ', 
    code3: '&#9736; ', h1: '&#9736; ', code4: ' ',},

    {title: 'SUN ',  code1: 'U+02609 ', code2: '&#x2609; ', 
    code3: '&#9737; ', h1: '&#9737; ', code4: ' ',},

    {title: 'ASCENDING NODE ',  code1: 'U+0260A ', code2: '&#x260A; ', 
    code3: '&#9738; ', h1: ' &#9738;', code4: ' ',},

    {title: 'DESCENDING NODE ',  code1: 'U+0260B ', code2: '&#x260B; ', 
    code3: '&#9739; ', h1: '&#9739; ', code4: ' ',},

    // {title: ' ',  code1: ' ', code2: ' ', 
    // code3: ' ', h1: ' ', code4: ' ',},
]

render();

function render() {
    
    en.filter(data => {
        let div = document.createElement('div');
        div.classList = 'boxes';
        let container = document.querySelector('.body-container');
        container.appendChild(div);

        const textData = data.h1;
        const title = data.title;
        const code1 = data.code1;
        const code2 = data.code2;
        const code3 = data.code3;
        const code4 = data.code4;
        ElementH1(textData, div, title, code1, code2, code3, code4);
    })
}

function ElementH1(data, div, title, code1, code2, code3, code4) {
    let h1 = document.createElement('h1');
    h1.innerHTML = `${data}`;
    div.appendChild(h1);

    let h5 = document.createElement('h5');
    h5.innerText = `${title}`;
    h5.classList = 'title';
    div.appendChild(h5)
//------------------------------------------------------Div
    let divInside = document.createElement('div');
    divInside.id = 'div-1';
    div.appendChild(divInside);

    let divInside2 = document.createElement('div');
    divInside2.id = 'div-2';
    div.appendChild(divInside2);

    let divInside3 = document.createElement('div');
    divInside3.id = 'div-3';
    div.appendChild(divInside3);

    let divInside4 = document.createElement('div');
    divInside4.id = 'div-4';
    div.appendChild(divInside4);
//------------------------------------------------------------------1
    let codeName = document.createElement('h5');
    codeName.innerText = 'UNICODE';
    codeName.classList = 'codeName';
    divInside.appendChild(codeName);

    let code = document.createElement('h2');
    code.innerText = `${code1}`;
    code.classList = 'code';
    divInside.appendChild(code);
//------------------------------------------------------------------2
    let codeName1 = document.createElement('h5');
    codeName1.innerText = 'HEX CODE';
    codeName1.classList = 'codeName';
    divInside2.appendChild(codeName1);

    let codeX = document.createElement('h2');
    codeX.innerText = `${code2}`;
    codeX.classList = 'code';
    divInside2.appendChild(codeX);
//------------------------------------------------------------------>3
    let codeName2 = document.createElement('h5');
    codeName2.innerText = 'HTML CODE';
    codeName2.classList = 'codeName';
    divInside3.appendChild(codeName2);

    let codeXX = document.createElement('h2');
    codeXX.innerText = `${code3}`;
    codeXX.classList = 'code';
    divInside3.appendChild(codeXX);
//------------------------------------------------------------------>4
    let codeName3 = document.createElement('h5');
    codeName3.innerText = 'HTML ENTITY';
    codeName3.classList = 'codeName';
    divInside4.appendChild(codeName3);

    let codeXXX = document.createElement('h2');
    codeXXX.innerText = `${code4}`;
    codeXXX.classList = 'code';
    divInside4.appendChild(codeXXX);
}

