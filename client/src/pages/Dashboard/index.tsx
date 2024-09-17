import DashboardProfile from "@/components/DashboardProfile";
import DashboardReviews from "@/components/DashboardReviews";

function Dashboard(){
    return (
        <div className="p-[10px_30px]">
        
        <div className="text-center p-[20px] m-4">
            <h1 className="text-4xl font-bold">SROMW</h1>
            <h1 className="text-xl">show reviews on my website</h1>
        </div>
        <DashboardProfile profile={{image: "https://source.unsplash.com/random/nature", address : "3KAQSJ, Srinagar, Jammu & Kashmir, India", name : "aalim aslam", ratings_given_by: "14", role : "Hospital", url : "https://aalimaslam.com", average_rating : "4"}} />
        <div className="my-[20px]">
            <div className="text-4xl font-bold my-[20px]">Choose reviews to show</div>
            <DashboardReviews />
        </div>
        </div>
    )
}


export default Dashboard;