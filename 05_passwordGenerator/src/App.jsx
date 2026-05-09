import { useState, useCallback, useRef } from 'react'
import './App.css'

function generatePassword(length, numberAllowed, charAllowed) {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

  for (let i = 1; i <= length; i++) {
    const char = Math.floor(Math.random() * str.length)
    pass += str.charAt(char)
  }

  return pass
}


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState(() => generatePassword(8, false, false))

  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h2 className='text-white text-center text-lg font-semibold whitespace-nowrap'>Password generator</h2>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-gray-700 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>



{/* //Set range for the password (SILDER)      */}
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
          onChange={(e) => {
            const nextLength = Number(e.target.value)
            setLength(nextLength)
            setPassword(generatePassword(nextLength, numberAllowed, charAllowed))
          }}
          />
          <label>Length: {length}</label>
      </div>


{/* Number Checkbox */}
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          checked={numberAllowed}
          id="numberInput"
          onChange={() => {
              const nextNumberAllowed = !numberAllowed
              setNumberAllowed(nextNumberAllowed)
              setPassword(generatePassword(length, nextNumberAllowed, charAllowed))
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>


{/* Character CheckBox */}
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => {
                  const nextCharAllowed = !charAllowed
                  setCharAllowed(nextCharAllowed)
                  setPassword(generatePassword(length, numberAllowed, nextCharAllowed))
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
