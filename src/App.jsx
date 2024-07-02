import React, { useCallback, useEffect, useState } from 'react';

function App() {
  const [len, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [pass, setPass] = useState('');

  const genpass = useCallback(() => {
    let ans = '';
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (char) string += '@#$%&*';
    if (num) string += '1234567890';

    for (let i = 0; i < len; i++) {
      let idx = Math.floor(Math.random() * string.length);
      ans += string.charAt(idx);
    }
    setPass(ans);
  }, [len, char, num]);

  useEffect(() => {
    genpass();
  }, [genpass,len,num,char]);

  return (
    <div className="w-screen h-screen py-5 flex justify-center items-center bg-gray-400">
      <div className="w-fit h-1/3 bg-gray-50 rounded-lg shadow-lg">
        <div className="px-5 py-5 flex justify-evenly">
          <input
            className="w-2/3 px-5 bg-yellow-200 border-black rounded-md shadow-xl"
            type="text"
            placeholder="your password"
            value={pass}
            readOnly
          />
          <button className="bg-blue-700 rounded-md px-5 py-1 shadow-xl text-white">copy</button>
        </div>
        <div className="px-5 py-5 flex justify-between">
          <h3 className="font-bold mx-2 ">Length: {len}</h3>
          <input
            type="range"
            min={5}
            max={50}
            value={len}
            onChange={(e) => {
              setLength(parseInt(e.target.value));
            }}
          />
          <h3 className="font-bold mx-2">Characters</h3>
          <input
              type="checkbox"
              onChange={() => {
              setChar(!char);
            }}
          />
          <h3 className="font-bold mx-2">Numbers</h3>
          <input
            type='checkbox'
            onChange={() => {
              setNum(!num);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
