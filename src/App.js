
import './App.css';
import React, {useState} from 'react';
let isClicked = false;
let firstNumber = "";
let oparation = "";
function App() {
  let [count,setCount] = useState("");
  let [slider1Color,setSlider1Color] = useState("sliderRed");
  let [slider2Color,setSlider2Color] = useState("slider2");
  let [slider3Color,setSlider3Color] = useState("slider3");
  let [slide,setSlide] = useState('slide');
  let [mainBody,setMainBody] = useState('mainBody');
  let [keys,setKey] = useState('keys');
  let [numbersButtons,setNumbersButtons] = useState('numbersButtons');
  let [resetButton,setResetButton] = useState('resetButton');
  let [equalButton,setEqualButton] = useState('equalButton');
  let [DELbutton,setDELbutton] = useState('DELbutton');
  let [App,setApp] = useState('App');
  let [calc,setCalc] = useState('calc');
  return (
    <div className={App}>
    <div className={mainBody}>
      <header>
      <a className={calc}>calc</a>
      <div>
        <div className="themeSlide">
        <a className={calc} style={{fontSize:'15px'}}>1 2 3</a>
        
        <div className={slide}>
          <div  className={slider1Color} onClick={()=>{
            setSlide("slide");
            setMainBody("mainBody");
            setKey("keys");
            setNumbersButtons('numbersButtons');
            setResetButton('resetButton');
            setEqualButton('equalButton');
            setDELbutton('DELbutton');
            setApp('App');
            setCalc('calc');
            setSlider1Color(slider1Color = 'sliderRed');
            setSlider2Color(slider2Color = 'slider2');
            setSlider3Color(slider3Color = 'slider3');
          }
            }>
            </div>
            <div  className={slider2Color} onClick={()=>{
            setSlide("slideTheme2");
            setMainBody("mainBodyTheme2");
            setKey("keysTheme2");
            setNumbersButtons('numbersButtonsTheme2');
            setResetButton('resetButtonTheme2');
            setEqualButton('equalButtonTheme2');
            setDELbutton('DELbuttonTheme2');
            setApp('AppTheme2');
            setCalc('calcTheme2');
            setSlider1Color(slider1Color = 'slider1');
            setSlider2Color(slider2Color = 'sliderRed');
            setSlider3Color(slider3Color = 'slider3');
          }
            }>
            </div>
            <div  className={slider3Color} onClick={()=>{
            setSlide("slideTheme3");
            setMainBody("mainBodyTheme3");
            setKey("keysTheme3");
            setNumbersButtons('numbersButtonsTheme3');
            setResetButton('resetButtonTheme3');
            setEqualButton('equalButtonTheme3');
            setDELbutton('DELbuttonTheme3');
            setApp('AppTheme3');
            setCalc('calcTheme3');
            setSlider1Color(slider1Color = 'slider1');
            setSlider2Color(slider2Color = 'slider2');
            setSlider3Color(slider3Color = 'sliderRed');
          }
            }>
            </div>
            </div>
                </div>
      </div>
      </header>
    <div className="screen">
    <p>{count}</p>
    </div>
    <div className={keys}>
    <div className={numbersButtons}>
    <a onClick={()=> setCount(count + "7")}>7</a>
    <a onClick={()=> setCount(count + "8")}>8</a>
    <a onClick={()=> setCount(count + "9")}>9</a>
    <a onClick={()=> {
      setCount(String(count).slice(0, -1));
    }} id={DELbutton}>DEL</a>
    <a onClick={()=> setCount(count + "4")}>4</a>
    <a onClick={()=> setCount(count + "5")}>5</a>
    <a onClick={()=> setCount(count + "6")}>6</a>
    <a onClick={()=>{
      if(count != ""){ 
        if(count !="" && oparation!="" && firstNumber!=""){
          if(oparation == "add"){
          setCount(firstNumber + parseFloat(count));
          firstNumber=parseFloat(count);
        }
        if(oparation == "minus"){
          setCount(firstNumber - parseFloat(count));
          firstNumber=parseFloat(count);
        }
        if(oparation == "devid"){
          setCount(firstNumber / parseFloat(count));
          firstNumber=parseFloat(count);
        }
        if(oparation == "multiplay"){
          setCount(firstNumber * parseFloat(count));
          firstNumber=parseFloat(count);
        }
        }     
        firstNumber = parseFloat(count);
         oparation = "add"
         isClicked=false;
         setCount(count="");
       
      }
    }}>+</a>
    <a onClick={()=> setCount(count + "1")}>1</a>
    <a onClick={()=> setCount(count + "2")}>2</a>
    <a onClick={()=> setCount(count + "3")}>3</a>
    <a onClick={()=>{
      if(count != ""){ 
        if(count !="" && oparation!="" && firstNumber!=""){
          if(oparation == "add"){
          setCount(firstNumber + parseFloat(count));
          firstNumber=parseFloat(count);
        }
        if(oparation == "minus"){
          setCount(firstNumber - parseFloat(count));
          firstNumber=parseFloat(count);
        }
        if(oparation == "devid"){
          setCount(firstNumber / parseFloat(count));
          firstNumber=parseFloat(count);
        }
        if(oparation == "multiplay"){
          setCount(firstNumber * parseFloat(count));
          firstNumber=parseFloat(count);
        }
        }     
        firstNumber = parseFloat(count);
         oparation = "minus"
         isClicked=false;
         setCount(count="");
      }
    }}>-</a>
    <a onClick={()=>{
      if(count != ""){
      if(isClicked == false){
        setCount(count + ".");
        isClicked = true;
        console.log(isClicked);
      }
    }
    }}>.</a>
    <a onClick={()=>{if(count != "0"){ setCount(count + "0")}}}>0</a>
    <a onClick={()=>{
      if(count != ""){ 
        if(count !="" && oparation!="" && firstNumber!=""){
          if(oparation == "add"){
          setCount(firstNumber + parseFloat(count));
          firstNumber=parseFloat(count);
        }
        if(oparation == "minus"){
          setCount(firstNumber - parseFloat(count));
          firstNumber=parseFloat(count);
        }
        if(oparation == "devid"){
          setCount(firstNumber / parseFloat(count));
          firstNumber=parseFloat(count);
        }
        if(oparation == "multiplay"){
          setCount(firstNumber * parseFloat(count));
          firstNumber=parseFloat(count);
        }
        }
        firstNumber = parseFloat(count);
         oparation = "devid"
         isClicked=false;
         setCount(count="");
      }
    }}>/</a>
    <a onClick={()=>{
       if(count !="" && oparation!="" && firstNumber!=""){
        if(oparation == "add"){
        setCount(firstNumber + parseFloat(count));
        firstNumber=parseFloat(count);
      }
      if(oparation == "minus"){
        setCount(firstNumber - parseFloat(count));
        firstNumber=parseFloat(count);
      }
      if(oparation == "devid"){
        setCount(firstNumber / parseFloat(count));
        firstNumber=parseFloat(count);
      }
      if(oparation == "multiplay"){
        setCount(firstNumber * parseFloat(count));
        firstNumber=parseFloat(count);
      }
      }
      if(count != ""){      
        firstNumber = parseFloat(count);
         oparation = "multiplay"
         isClicked=false;
         setCount(count="");
      }
    }}>×</a>  
  
    </div>
    <div className="oparationsButtons">
    <a className={resetButton} onClick={()=>{setCount(count="");
  firstNumber = "";
  oparation="";
  }}>Reset</a>
    <a className={equalButton} onClick={()=>{
      if(count !="" && oparation!="" && firstNumber!=""){
        if(oparation == "add"){
        setCount(firstNumber + parseFloat(count));
        firstNumber=parseFloat(count);
      }
      if(oparation == "minus"){
        setCount(firstNumber - parseFloat(count));
        firstNumber=parseFloat(count);
      }
      if(oparation == "devid"){
        setCount(firstNumber / parseFloat(count));
        firstNumber=parseFloat(count);
      }
      if(oparation == "multiplay"){
        setCount(firstNumber * parseFloat(count));
        firstNumber=parseFloat(count);
      }
      }
    }}>=</a>  
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
