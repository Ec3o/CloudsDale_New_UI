import { useState } from "react";
import Button from "@/components/ui/button";
import Card from "./components/ui/card";
function App() {
    const [color, setColor] = useState("#5a32f5");
    const [textcolor,settextColor]=useState("#ffffff")
    const [buttoncolor,setButtonColor]=useState("#000000")
    const [loading,setLoading]=useState(false)
    const handleChange = (e: any) => {
        setColor(e.target.value);
    };
    const handleTextColor =(e:any) =>{
        settextColor(e.target.value)
    }
    const handleButtonColor =(e:any) =>{
        setButtonColor(e.target.value)
    }
    const handleLoading =() =>{
        setLoading(true)
    }
    const tc=`text-${textcolor}`;
    return (
        <>
            <div
                id="dock"
                className="fixed top-0 left-0 h-full bg-gray-800 w-16 flex flex-col items-center p-2 space-y-4"
            >
                <a
                    href="#"
                    className="text-white hover:bg-gray-700 p-2 rounded"
                >
                    🏠
                </a>
                <a
                    href="#"
                    className="text-white hover:bg-gray-700 p-2 rounded"
                >
                    🔍
                </a>
                <a
                    href="#"
                    className="text-white hover:bg-gray-700 p-2 rounded"
                >
                    ⚙️
                </a>
                <a
                    href="#"
                    className="text-white hover:bg-gray-700 p-2 rounded"
                >
                    📁
                </a>
            </div>

            <div className="ml-16 p-4">
                <h1 className="text-2xl font-bold">主内容区域</h1>
                <p className="text-primary-500 my-5">这是页面的主要内容。</p>
                <input type="color" value={color} onChange={handleChange} />CardBgColor
                <input type="color" value={textcolor} onChange={handleTextColor} />TextColor
                <input type="color" value={buttoncolor} onChange={handleButtonColor} />ButtonColor
                <Button color={color} size="lg" m="3" >
                    123
                </Button>
                <br></br>
            </div>
            <Card 
                color={color}
                textcolor={textcolor}
                padding="lg" 
                shadow="md" 
                radius="lg" 
                border="thick"
                align="center"
                width="400px"
                height="200px"
            >
                <h2 className="text-xl font-bold">Challenge 1</h2>
                <p className={tc}>Ezphp!Try to byPass My Waf!</p>
                <Button color={buttoncolor} size="md" m="3" onClick={handleLoading} loading={loading}>
                    {loading ? "" : "开启靶机"}
                </Button>
            </Card>

        </>
    );
}

export default App;
