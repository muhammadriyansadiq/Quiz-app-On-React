
import { useState , useEffect } from 'react'

function App() {
  const [timer, setTimer] = useState(15);
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);


  let apidata = [
    {
      question: "who is the father of nation of pakistan",
      options: ["quaid e Azam M Ali Jinnah", "Quaid e millat", "Liaquat Ali khan", "Maulana M ali jauhar"],
      carrectanswer: "quaid e Azam M Ali Jinnah"
    },
    {
      question: "who is the father of chemistry",
      options: ["jabbir bin hayyan", "Newton", "Einstein", "Sarafarz"],
      carrectanswer: "jabbir bin hayyan"
    },
    {
      question: "who is the national poet of pakistan",
      options: ["quaid e Azam M Ali Jinnah", "Quaid e millat", "Liaquat Ali khan", "Dr Allama M Iqbal"],
      carrectanswer: "Dr Allama M Iqbal"
    },
    {
      question: "who is the most corrupted leader",
      options: ["nawaz sharif", "asif ali zardari", "fazal ur rehman", "Neutral"],
      carrectanswer: "Neutral"
    },
    {
      question: "pakistan national animal",
      options: ["Markhor", "Eagle", "sparrow", "pigeon"],
      carrectanswer: "Markhor"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleNextClick();
    }
  }, [timer]);

  const handleOptionClick = (index) => {
    setStyle(true);

    let checkanswer = apidata[count].options[index];
    setSelectedOptionIndex(index)
    if (checkanswer === apidata[count].carrectanswer) {
      console.log("Correct answer!");
      setScore(score + 1);
    
    }

    // handleNextClick();
  };

  const handleNextClick = () => {
    setTimer(15);
    setCount(prevCount => prevCount + 1);
    setStyle(false);
    setSelectedOptionIndex(null)
    if (count === apidata.length - 1) {
      setResult(true);
    }
  };

  // console.log("score", score);
  // console.log("count", count);
  // console.log("result", result);

  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-800 flex-col'>
      {!result ? (
        <div><h1 className=' text-white text-3xl text-center'>Quiz Application</h1>


        <div className=' border-4 bg-slate-400 shadow-slate-300 shadow-lg p-8 w-11/12 h-11/12 flex justify-around flex-col'>
          <div className='flex justify-center mt-3'>
            <h1 className='p-11 text-center bg-slate-800 rounded-full text-white text-2xl'>{timer}</h1>
          </div>

          <div className='box'>
            <div className='text-center text-2xl'>{apidata[count]?.question}</div>

            <div className='flex justify-around mt-3 w-full flex-wrap'>
              {apidata[count]?.options.map((option, index) => (
                <button
                  key={index}
                  style={{
                    cursor: style ? 'not-allowed' : 'pointer',
                    opacity: style ? 0.6 : 1,
                    backgroundColor: selectedOptionIndex === index ? 'green' : 'rgb(100, 116, 139)' // Set background color conditionally

                  }}
                  disabled={style}
                  onClick={() => handleOptionClick(index)}
                  className='bg-slate-500 text-center rounded-md mx-1 p-1 w-full mb-2'
                >
                  {option}
                </button>
              ))}
            </div>

            <div className='flex justify-center mt-3'>
              <button onClick={handleNextClick} className='text-center bg-slate-700 text-white p-2 rounded-lg'>Next</button>
            </div>
          </div>


{/* <div className='box'>
  <div className='text-center bg-slate-800 text-white p-2 rounded-lg'>{apidata[count]?.question}</div> */}

  {/* Upar ke buttons ke div */}
  {/* <div className='flex justify-around mt-3'>
    {apidata[count]?.options.slice(0, 2).map((option, index) => (
      <button
        key={index}
        style={{
          cursor: style ? 'not-allowed' : 'pointer',
          opacity: style ? 0.6 : 1,
          backgroundColor: index === selectedOptionIndex ? 'green' : 'black' // Set background color conditionally

        }}
        disabled={style}
        onClick={() => handleOptionClick(index)}
        className='bg-slate-600 w-full text-center p-2 rounded-md mx-3'
      >
        {option}
      </button>
    ))}
  </div> */}

  {/* Neeche ke buttons ke div */}
  {/* <div className='flex justify-around mt-3'>
    {apidata[count]?.options.slice(2).map((option, index) => (
      <button
        key={index + 2} // Key should be unique, so adding 2 to differentiate from the first set of buttons
        style={{
          cursor: style ? 'not-allowed' : 'pointer',
          opacity: style ? 0.6 : 1,
          backgroundColor: index === selectedOptionIndex ? 'green' : 'black'
        }}
        disabled={style}
        onClick={() => handleOptionClick(index+2)} // Add 2 to index to match the correct option in the apidata array
        className='bg-slate-600 w-full text-center p-2 rounded-md mx-3'
      >
        {option}
      </button>
    ))}
  </div>

  <div className='flex justify-center mt-3'>
    <button onClick={handleNextClick} className='text-center text-white bg-slate-800 p-2 rounded-lg'>Next</button>
  </div>
</div> */}

</div>
        </div>
      ) : (
        <div className='bg-slate-700 p-14 rounded-lg text-white shadow-lg shadow-slate-300 border-4'>Score: {score}</div>
      )}
    </div>
  );
}

export default App;
