import { Card } from "@/components/ui/card";
import { useState } from "react";

function DashboardReviews(){
    let [selectedCards, setSelectedCards] = useState([]);

const handleCardClick = (e) => {
    const clickedCard = e.target;
    setSelectedCards((prevSelectedCards) => {
        if (prevSelectedCards.includes(clickedCard)) {
            // Remove the card from the selected cards array
            clickedCard.style.background = "#f5f5f5";
            return prevSelectedCards.filter(card => card !== clickedCard);

        } else {
            // Add the card to the selected cards array
            clickedCard.style.background = "#e0e0e0";

            return [...prevSelectedCards, clickedCard];
        }
    });
};
    return (
        <div className="flex gap-[10px]">
        <div data-id="inactive" className="bg-white rounded-md w-[43%] h-[300px] p-[10px] flex flex-col justify-start gap-[10px]">
            <div className="text-2xl font-bold flex items-center gap-[10px]">Inactive reviews <span className="inline-block rounded-full h-[20px] w-[20px] bg-red-600"></span></div>
            <Card onClick={handleCardClick} className="rounded bg-[#f5f5f5] w-[100%] h-[150px] cursor-pointer">

            </Card>
            <Card onClick={handleCardClick} className="rounded bg-[#f5f5f5] w-[100%] h-[150px] cursor-pointer">

            </Card>
        </div>
        <div className="w-[12%]"></div>
        <div data-id="active" className="bg-white rounded-md w-[43%] h-[300px] p-[10px] flex flex-col justify-start gap-[10px]">
        <div className="text-2xl font-bold flex items-center gap-[10px]">active reviews <span className="inline-block rounded-full h-[20px] w-[20px] bg-green-600"></span></div>

        </div>
        </div>
    )
}

export default DashboardReviews;