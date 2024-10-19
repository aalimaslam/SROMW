import DashboardProfile from "@/components/DashboardProfile";
import DashboardReviews from "@/components/DashboardReviews";
import { Button } from "@/components/ui/button";
import showToast from "@/utils/showToast";
import { BiSolidCopy } from "react-icons/bi";

function Dashboard() {
    function handleCopyClick(type : "iframe" | "script", e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const target = e.target as HTMLElement;
        const innerHTTML = target.innerHTML
        target.innerHTML = "Copied";
        setTimeout(()=>{
            target.innerHTML = innerHTTML;
        }, 1000);



        if(type == "script"){
            showToast({mode : "success", message : "Script Tag Copied"})
            return;
        }

        // if user clicked on copy iframe
        showToast({mode : "success", message : "IFrame Tag Copied"});
        
    }
    return (
        <div className="p-[10px_30px]">
            <div className="text-center p-[20px] m-4">
                <h1 className="text-4xl font-bold">SROMW</h1>
                <h1 className="text-xl">show reviews on my website</h1>
            </div>
            <DashboardProfile
                profile={{
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn-X2ZRRr7DWK4gEnkQFFo_NSpS4dxoS-gg&s",
                    address: "3KAQSJ, Srinagar, Jammu & Kashmir, India",
                    name: "aalim aslam",
                    ratings_given_by: "14",
                    role: "Hospital",
                    url: "https://aalimaslam.com",
                    average_rating: "4",
                }}
            />
            <div className="my-[20px]">
                <div className="flex justify-between items-center">
                <div className="text-4xl font-bold my-[20px]">
                    Choose reviews to show
                </div>
                <div className="flex gap-[30px]">
                    <Button onClick={(e)=> handleCopyClick("script", e)} className="flex gap-[5px] items-center" title="Copy Script Tag"> <BiSolidCopy /> Script Tag</Button>
                    <Button onClick={(e)=> handleCopyClick("iframe", e)} className="flex gap-[5px] items-center" title="Copy Iframe Tag"> <BiSolidCopy /> IFrame Tag</Button>
                </div>
                </div>
                <DashboardReviews />
            </div>
        </div>
    );
}

export default Dashboard;
