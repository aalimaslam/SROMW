import { BiSolidStar } from "react-icons/bi";

type profile = {
    name: string;
    image: string;
    address: string;
    role: string;
    ratings_given_by: string;
    average_rating: string;
    url: string;
};

function DashboardProfile({ profile }: { profile: profile }) {
    return (
        <div className="bg-white rounded-md p-4">
            <div className="flex gap-[20px]">
                <div>
                    <img
                        src={profile?.image}
                        className="rounded h-[200px] w-[300px]"
                    />
                </div>
                <div>
                    <a href={profile?.url}>
                        <div className="text-4xl font-bold">
                            {profile?.name}
                        </div>
                        <div className="text-2xl">{profile?.role}</div>
                        <div className="text-xl flex items-center gap-[5px]">
                            <BiSolidStar className="text-yellow-500" />{" "}
                            {profile?.average_rating}{" "}
                            <span> ({profile?.ratings_given_by})</span>
                        </div>
                        <div>{profile?.address}</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DashboardProfile;
