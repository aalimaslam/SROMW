import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import showToast from "@/utils/showToast";

function AskUrl() {
    const [url, setUrl] = useState("");
    document.title = "Show Reviews on my website";
    function handleClick(){
        const expression = /[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/gi;
        const regex = new RegExp(expression);
        if (!url.match(regex)){
            showToast({message : "Please enter a valid url", mode : "error"});
            return;
        }
        
        const placesExpression = /^https:\/\/www\.google\.com\/maps\/place\/[a-zA-Z0-9%._+-]+\/@-?\d+\.\d+,-?\d+\.\d+,\d+m\/data=.+$/gi;
        const placesRegex = new RegExp(placesExpression);
        if(!url.match(placesRegex)){
            showToast({mode : "error", message : "Please enter a valid place url"});
            return;
        }

        

    }
    return (
        <div className="p-10">
            <div className="flex flex-col gap-4 w-[50%] m-auto my-12">
                <div>
                    <div className="text-4xl font-bold text-center flex justify-center items-center gap-3">
                        Enter your Business Url here. 
                        <span className="h-[25px] w-[25px] rounded-full border-2 border-[#000] inline-block text-sm flex justify-center items-center cursor-help" title="Copy Paste Your Business URL"
                        >
                            ?
                        </span>
                    </div>
                </div>
                <Input placeholder="Enter your business url here" className="border-2" value={url} onChange={(e)=> {setUrl(e.target.value)}} />
                <Button onClick={handleClick}>Find My Business</Button>
            </div>

            <img src="/help.png" className="w-[50vw] m-auto mt-[150px]" alt="Help Image" />
        </div>
    );
}

export default AskUrl;
