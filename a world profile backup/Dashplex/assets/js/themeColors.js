//
const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
        root.style.setProperty(key, cssVars[key]);
    });
}

function dynamicPrimaryColor(primaryColor){
	'use strict'
    primaryColor.forEach((item) => {
		item.addEventListener('input', (e) => {
			const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
			const cssPropName1 = `--primary-${e.target.getAttribute('data-id1')}`;
			const cssPropName2 = `--primary-${e.target.getAttribute('data-id2')}`;
			const cssPropName7 = `--primary-${e.target.getAttribute('data-id7')}`;
			const cssPropName8 = `--darkprimary-${e.target.getAttribute('data-id8')}`;
			const cssPropName3 = `--dark-${e.target.getAttribute('data-id3')}`;
			const cssPropName4 = `--transparent-${e.target.getAttribute('data-id4')}`;
			const cssPropName5 = `--transparent-${e.target.getAttribute('data-id5')}`;
			const cssPropName6 = `--transparent-${e.target.getAttribute('data-id6')}`;
			const cssPropName9 = `--transparentprimary-${e.target.getAttribute('data-id9')}`;
			handleThemeUpdate({
				[cssPropName]: e.target.value,
				// 95 is used as the opacity 0.95
				[cssPropName1]: e.target.value + 95,
				[cssPropName2]: e.target.value,
				[cssPropName3]: e.target.value,
				[cssPropName4]: e.target.value,
				[cssPropName5]: e.target.value,
				[cssPropName6]: e.target.value + 95,
				[cssPropName7]: e.target.value + 20,
				[cssPropName8]: e.target.value + 20,
				[cssPropName9]: e.target.value + 20,
			});
		});
	});
}

(function () {
	// Light theme color picker
	const dynamicPrimaryLight = document.querySelectorAll('input.color-primary-light');
	dynamicPrimaryColor(dynamicPrimaryLight);

    // dark theme color picker
	const DarkDynamicPrimaryLight = document.querySelectorAll('input.color-primary-dark');
    dynamicPrimaryColor(DarkDynamicPrimaryLight);

    // tranparent theme color picker
	const transparentDynamicPrimaryLight = document.querySelectorAll('input.color-primary-transparent');
    dynamicPrimaryColor(transparentDynamicPrimaryLight);

    // tranparent theme bgcolor picker
	const transparentDynamicPBgLight = document.querySelectorAll('input.color-bg-transparent');
    dynamicPrimaryColor(transparentDynamicPBgLight);

	localStorageBackup();

	$('#myonoffswitch1').on('click', function(){
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');
		document.querySelector('body')?.classList.remove('bg-img1');
		document.querySelector('body')?.classList.remove('bg-img2');
		document.querySelector('body')?.classList.remove('bg-img3');
		document.querySelector('body')?.classList.remove('bg-img4');

		localStorage.removeItem('BgImage');
		$('#myonoffswitch1').prop('checked', true);

		localStorage.setItem('lightMode', true);
        localStorage.removeItem('darkMode');
        localStorage.removeItem('transparentMode');
	})
	$('#myonoffswitch2').on('click', function(){
		document.querySelector('body')?.classList.remove('light-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');
		document.querySelector('body')?.classList.remove('bg-img1');
		document.querySelector('body')?.classList.remove('bg-img2');
		document.querySelector('body')?.classList.remove('bg-img3');
		document.querySelector('body')?.classList.remove('bg-img4');

		localStorage.removeItem('BgImage');
		$('#myonoffswitch2').prop('checked', true);

		localStorage.setItem('darkMode', true);
		localStorage.removeItem('lightMode');
		localStorage.removeItem('transparentMode');
	})
	$('#myonoffswitchTransparent').on('click', function(){
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('light-theme');
		document.querySelector('body')?.classList.remove('bg-img1');
		document.querySelector('body')?.classList.remove('bg-img2');
		document.querySelector('body')?.classList.remove('bg-img3');
		document.querySelector('body')?.classList.remove('bg-img4');

		localStorage.removeItem('BgImage');
		$('#myonoffswitchTransparent').prop('checked', true);

		localStorage.setItem('transparentMode', true);
		localStorage.removeItem('lightMode');
		localStorage.removeItem('darkMode');
	})
})();

function localStorageBackup(){
	'use strict'
	// if there is a value stored, update color picker and background color
	// Used to retrive the data from local storage
	if (localStorage.primaryColor) {
		document.getElementById('colorID').value = localStorage.primaryColor;
		document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.primaryColor);
		document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.primaryHoverColor);
		document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.primaryBorderColor);
		document.querySelector('html').style.setProperty('--primary-transparentcolor', localStorage.primaryTransparent);
		document.querySelector('body')?.classList.add('light-theme');
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');

		$('#myonoffswitch1').prop('checked', true);
        $('#myonoffswitch6').prop('checked', true);
		if(document.querySelector('body')?.classList.contains('dark-menu')){
			$('#myonoffswitch5').prop('checked', true);
		}
		else{
			$('#myonoffswitch3').prop('checked', true);
		}
		//
		if(localStorage.getItem("dark-menu") == 'true'){
			document.querySelector('body')?.classList.add('dark-menu')
		}
		else{
			document.querySelector('body')?.classList.remove('dark-menu')
		}

	}

    if (localStorage.darkPrimary) {
		document.getElementById('darkPrimaryColorID').value = localStorage.darkPrimary;
		document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.darkPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.darkPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.darkPrimary);
		document.querySelector('html').style.setProperty('--dark-primary', localStorage.darkPrimary);
		document.querySelector('html').style.setProperty('--darkprimary-transparentcolor', localStorage.darkprimaryTransparent);
		document.querySelector('body')?.classList.add('dark-theme');
		document.querySelector('body')?.classList.remove('light-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');

		$('#myonoffswitch2').prop('checked', true);
        $('#myonoffswitch5').prop('checked', true);
        $('#myonoffswitch8').prop('checked', true);

		//
		if(localStorage.getItem("dark-menu") == true){
			document.querySelector('body')?.classList.add('dark-menu')
		}
		else{
			document.querySelector('body')?.classList.remove('dark-menu')
		}
	}


    if (localStorage.transparentPrimary) {
		document.getElementById('transparentPrimaryColorID').value = localStorage.transparentPrimary;
		document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.transparentPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.transparentPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.transparentPrimary);
		document.querySelector('html').style.setProperty('--transparent-primary', localStorage.transparentPrimary);
		document.querySelector('html').style.setProperty('--transparentprimary-transparentcolor', localStorage.transparentprimaryTransparent);
		document.querySelector('body')?.classList.add('transparent-theme');
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('light-theme');

		$('#myonoffswitchTransparent').prop('checked', true);

		//
		if(localStorage.getItem("dark-menu") == true){
			document.querySelector('body')?.classList.add('dark-menu')
		}
		else{
			document.querySelector('body')?.classList.remove('dark-menu')
		}
	}

    if (localStorage.transparentBgImgPrimary) {
		document.getElementById('transparentBgImgPrimaryColorID').value = localStorage.transparentBgImgPrimary;
		document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.transparentBgImgPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.transparentBgImgPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.transparentBgImgPrimary);
		document.querySelector('html').style.setProperty('--transparent-primary', localStorage.transparentBgImgPrimary);
		document.querySelector('html').style.setProperty('--transparentprimary-transparentcolor', localStorage.transparentBgImgprimaryTransparent);
		document.querySelector('body')?.classList.add('transparent-theme');
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('light-theme');

		$('#myonoffswitchTransparent').prop('checked', true);

		//
		if(localStorage.getItem("dark-menu") == true){
			document.querySelector('body')?.classList.add('dark-menu')
		}
		else{
			document.querySelector('body')?.classList.remove('dark-menu')
		}
	}
    if (localStorage.transparentBgColor) {
		document.getElementById('transparentBgColorID').value = localStorage.transparentBgColor;
		document.querySelector('html').style.setProperty('--transparent-body', localStorage.transparentBgColor);
		document.querySelector('html').style.setProperty('--transparent-theme', localStorage.transparentThemeColor);
		document.querySelector('html').style.setProperty('--transparentprimary-transparentcolor', localStorage.transparentprimaryTransparent);
		document.querySelector('body')?.classList.add('transparent-theme');
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('light-theme');

		$('#myonoffswitchTransparent').prop('checked', true);

		//
		if(localStorage.getItem("dark-menu") == true){
			document.querySelector('body')?.classList.add('dark-menu')
		}
		else{
			document.querySelector('body')?.classList.remove('dark-menu')
		}
	}

	if (localStorage.BgImage) {
		document.querySelector('body')?.classList.add('transparent-theme');
		document.querySelector('body')?.classList.add(localStorage.BgImage);
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('light-theme');

		$('#myonoffswitchTransparent').prop('checked', true);

		//
		if(localStorage.getItem("dark-menu") == true){
			document.querySelector('body')?.classList.add('dark-menu')
		}
		else{
			document.querySelector('body')?.classList.remove('dark-menu')
		}
	}

	if(localStorage.lightMode){
        document.querySelector('body')?.classList.add('light-theme');
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');
        $('#myonoffswitch1').prop('checked', true);
        $('#myonoffswitch3').prop('checked', true);
        $('#myonoffswitch6').prop('checked', true);
    }
    if(localStorage.darkMode){
        document.querySelector('body')?.classList.remove('light-theme');
		document.querySelector('body')?.classList.add('dark-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');
        $('#myonoffswitch2').prop('checked', true);
        $('#myonoffswitch5').prop('checked', true);
        $('#myonoffswitch8').prop('checked', true);
    }
    if(localStorage.transparentMode){
        document.querySelector('body')?.classList.remove('light-theme');
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('dark-menu');
		document.querySelector('body')?.classList.add('transparent-theme');
        $('#myonoffswitchTransparent').prop('checked', true);
        $('#myonoffswitch3').prop('checked', false);
        $('#myonoffswitch6').prop('checked', false);
        $('#myonoffswitch5').prop('checked', false);
        $('#myonoffswitch8').prop('checked', false);
    }
}


// triggers on changing the color picker
function changePrimaryColor() {
	'use strict'
	$('#myonoffswitch3').prop('checked', true);
    $('#myonoffswitch6').prop('checked', true);
    checkOptions();

	var userColor = document.getElementById('colorID').value;
	localStorage.setItem('primaryColor', userColor);
	// to store value as opacity 0.95 we use 95
	localStorage.setItem('primaryHoverColor', userColor + 95);
	localStorage.setItem('primaryBorderColor', userColor);
	localStorage.setItem('primaryTransparent', userColor+20);

	// removing dark theme properties
	localStorage.removeItem('darkPrimary')
	localStorage.removeItem('transparentBgColor');
	localStorage.removeItem('transparentThemeColor');
	localStorage.removeItem('transparentPrimary');
	localStorage.removeItem('transparentprimaryTransparent');
	localStorage.removeItem('darkprimaryTransparent');
	document.querySelector('body')?.classList.add('light-theme');
	document.querySelector('body')?.classList.remove('dark-theme');
	document.querySelector('body')?.classList.remove('transparent-theme');
	localStorage.removeItem('BgImage');
	document.querySelector('body')?.classList.add('dark-menu');

	$('#myonoffswitch1').prop('checked', true);

	names()
	localStorage.setItem("dark-menu", "true")

	localStorage.setItem('lightMode', true);
    localStorage.removeItem('darkMode');
    localStorage.removeItem('transparentMode');

}

function darkPrimaryColor() {
	'use strict'
	var userColor = document.getElementById('darkPrimaryColorID').value;
	localStorage.setItem('darkPrimary', userColor);
	localStorage.setItem('darkprimaryTransparent', userColor+20);
	$('#myonoffswitch5').prop('checked', true);
    $('#myonoffswitch8').prop('checked', true);


    // removing light theme data
	localStorage.removeItem('primaryColor')
	localStorage.removeItem('primaryHoverColor')
	localStorage.removeItem('primaryBorderColor')
	localStorage.removeItem('primaryTransparent');

	localStorage.removeItem('transparentBgColor');
	localStorage.removeItem('transparentThemeColor');
	localStorage.removeItem('transparentPrimary');
	localStorage.removeItem('transparentprimaryTransparent');
	localStorage.removeItem('transparentBgImgPrimary');
	localStorage.removeItem('transparentBgImgprimaryTransparent');
	localStorage.removeItem('BgImage');

	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.add('dark-theme');
	document.querySelector('body')?.classList.remove('transparent-theme');

	$('#myonoffswitch2').prop('checked', true);
	checkOptions();
	names()
	localStorage.setItem("dark-menu", "true")

	localStorage.setItem('darkMode', true);
    localStorage.removeItem('lightMode');
    localStorage.removeItem('transparentMode');
}

function transparentPrimaryColor() {
	'use strict'
	$('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);

	var userColor = document.getElementById('transparentPrimaryColorID').value;
	localStorage.setItem('transparentPrimary', userColor);
	localStorage.setItem('transparentprimaryTransparent', userColor+20);

    // removing light theme data
	localStorage.removeItem('darkPrimary');
	localStorage.removeItem('primaryColor')
	localStorage.removeItem('primaryHoverColor')
	localStorage.removeItem('primaryBorderColor')
	localStorage.removeItem('primaryTransparent');
	localStorage.removeItem('darkprimaryTransparent');
	localStorage.removeItem('transparentBgImgPrimary');
	localStorage.removeItem('transparentBgImgprimaryTransparent');
	localStorage.removeItem('BgImage');
	document.querySelector('body').classList.add('transparent-theme');
	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.remove('dark-theme');
	document.querySelector('body')?.classList.remove('bg-img1');
	document.querySelector('body')?.classList.remove('bg-img2');
	document.querySelector('body')?.classList.remove('bg-img3');
	document.querySelector('body')?.classList.remove('bg-img4');
	$('body').removeClass('dark-menu');

	$('#myonoffswitchTransparent').prop('checked', true);
	checkOptions();
	names()
	
	localStorage.setItem("dark-menu", "false")

	localStorage.setItem('transparentMode', true);
    localStorage.removeItem('lightMode');
    localStorage.removeItem('darkMode');
}

function transparentBgImgPrimaryColor() {
	'use strict'
	$('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);

	var userColor = document.getElementById('transparentBgImgPrimaryColorID').value;
	localStorage.setItem('transparentBgImgPrimary', userColor);
	localStorage.setItem('transparentBgImgprimaryTransparent', userColor+20);
	if(
		document.querySelector('body')?.classList.contains('bg-img1') == false &&
		document.querySelector('body')?.classList.contains('bg-img2') == false &&
		document.querySelector('body')?.classList.contains('bg-img3') == false &&
		document.querySelector('body')?.classList.contains('bg-img4') == false
		){
		document.querySelector('body')?.classList.add('bg-img1');
		localStorage.setItem('BgImage', 'bg-img1');

	}
    // removing light theme data
	localStorage.removeItem('darkPrimary');
	localStorage.removeItem('primaryColor')
	localStorage.removeItem('primaryHoverColor')
	localStorage.removeItem('primaryBorderColor')
	localStorage.removeItem('primaryTransparent');
	localStorage.removeItem('darkprimaryTransparent');
	localStorage.removeItem('transparentPrimary')
	localStorage.removeItem('transparentprimaryTransparent');
	document.querySelector('body').classList.add('transparent-theme');
	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.remove('dark-theme');
	$('body').removeClass('dark-menu');

	$('#myonoffswitchTransparent').prop('checked', true);
	checkOptions();
	names()
	localStorage.setItem("dark-menu", "false")

	localStorage.setItem('transparentMode', true);
    localStorage.removeItem('lightMode');
    localStorage.removeItem('darkMode');
}

function transparentBgColor() {
	'use strict'
	$('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);

	var userColor = document.getElementById('transparentBgColorID').value;
	localStorage.setItem('transparentBgColor', userColor);
	localStorage.setItem('transparentThemeColor', userColor+95);
	localStorage.setItem('transparentprimaryTransparent', userColor+20);

    // removing light theme data
	localStorage.removeItem('darkPrimary');
	localStorage.removeItem('primaryColor')
	localStorage.removeItem('primaryHoverColor')
	localStorage.removeItem('primaryBorderColor')
	localStorage.removeItem('primaryTransparent');
	localStorage.removeItem('BgImage');
	document.querySelector('body').classList.add('transparent-theme');
	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.remove('dark-theme');
	document.querySelector('body')?.classList.remove('bg-img1');
	document.querySelector('body')?.classList.remove('bg-img2');
	document.querySelector('body')?.classList.remove('bg-img3');
	document.querySelector('body')?.classList.remove('bg-img4');
	$('body').removeClass('dark-menu');

	$('#myonoffswitchTransparent').prop('checked', true);
	checkOptions();
	localStorage.setItem("dark-menu", "false")

	localStorage.setItem('transparentMode', true);
    localStorage.removeItem('lightMode');
    localStorage.removeItem('darkMode');
}

function bgImage(e) {
	'use strict'
	$('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);

	let imgID = e.getAttribute('class');
	localStorage.setItem('BgImage', imgID);

    // removing light theme data
	localStorage.removeItem('darkPrimary');
	localStorage.removeItem('primaryColor');
	localStorage.removeItem('transparentBgColor');
	localStorage.removeItem('transparentThemeColor');
	localStorage.removeItem('transparentprimaryTransparent');
	document.querySelector('body').classList.add('transparent-theme');
	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.remove('dark-theme');
	$('body').removeClass('dark-menu');

	$('#myonoffswitchTransparent').prop('checked', true);
	checkOptions();
	localStorage.setItem("dark-menu", "false")

	localStorage.setItem('transparentMode', true);
    localStorage.removeItem('lightMode');
    localStorage.removeItem('darkMode');
}

// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") { return a / 255 }
    if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
        return 1
    }
    return alpha
}
// convertion of hex code to rgba code
function hexToRgba(hexValue, alpha) {
    if (!isValidHex(hexValue)) { return null }
    const chunkSize = Math.floor((hexValue.length - 1) / 3)
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}

let myVarVal 
function names(){

	let docStyle = getComputedStyle(document.documentElement);

	//get variable
	myVarVal  =  localStorage.getItem("primaryColor") || localStorage.getItem("darkPrimary") || localStorage.getItem("transparentPrimary") || localStorage.getItem("transparentBgImgPrimary") || "#4d65d9";

	if(document.querySelector('#salessummary') !== null){
        index();
    }
	if(document.querySelector('#sales-summary') !== null){
        index2();
    }
	if(document.querySelector('#revenuemorrischart') !== null){
        morrisFn();
    }



	let colorData = hexToRgba(myVarVal || "#4d65d9", 0.05)
	document.querySelector('html').style.setProperty('--primary005', colorData);

	let colorData1 = hexToRgba(myVarVal || "#4d65d9", 0.2)
	document.querySelector('html').style.setProperty('--primary02', colorData1);

	let colorData2 = hexToRgba(myVarVal || "#4d65d9", 0.3)
	document.querySelector('html').style.setProperty('--primary03', colorData2);

	let colorData5 = hexToRgba(myVarVal || "#4d65d9", 0.5)
	document.querySelector('html').style.setProperty('--primary05', colorData5);

	let colorData3 = hexToRgba(myVarVal || "#4d65d9", 0.7)
	document.querySelector('html').style.setProperty('--primary07', colorData3);

	let colorData4 = hexToRgba(myVarVal || "#4d65d9", 0.8)
	document.querySelector('html').style.setProperty('--primary08', colorData4);

	let colorData6 = hexToRgba(myVarVal || "#4d65d9", 0.1)
	document.querySelector('html').style.setProperty('--primary01', colorData6);


}
names()