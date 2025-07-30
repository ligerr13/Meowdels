import React, { Suspense, useEffect, useRef, useState} from 'react';

const AsciiBanner = () => (
 <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
    <pre className="text-[12px] leading-[14px] text-gray-800 font-mono text-center whitespace-pre">
{String.raw`
 /$$      /$$                                         /$$           /$$          
| $$$    /$$$                                        | $$          | $$          
| $$$$  /$$$$  /$$$$$$   /$$$$$$  /$$  /$$  /$$  /$$$$$$$  /$$$$$$ | $$  /$$$$$$$
| $$ $$/$$ $$ /$$__  $$ /$$__  $$| $$ | $$ | $$ /$$__  $$ /$$__  $$| $$ /$$_____/
| $$  $$$| $$| $$$$$$$$| $$  \ $$| $$ | $$ | $$| $$  | $$| $$$$$$$$| $$|  $$$$$$ 
| $$\  $ | $$| $$_____/| $$  | $$| $$ | $$ | $$| $$  | $$| $$_____/| $$ \____  $$
| $$ \/  | $$|  $$$$$$$|  $$$$$$/|  $$$$$/$$$$/|  $$$$$$$|  $$$$$$$| $$ /$$$$$$$/
|__/     |__/ \_______/ \______/  \_____/\___/  \_______/ \_______/|__/|_______/ 

Click on Load Model' to load .glb models from the computer.
`}
    </pre>
  </div>
);

export default AsciiBanner;
