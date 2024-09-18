import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "../ui/button";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function DashboardReviews() {
    const [selectedCards, setSelectedCards] = useState([]);
    const [selectedActiveCards, setSelectedActiveCards] = useState([]);
    const [cards, setCards] = useState({
        active : [1,2,3,4],
        inactive : [6,7,8,9,0]
    });
    const handleCardClick = (e, type) => {
        const clickedCard = e.target;

        if (type === "active") {
            setSelectedActiveCards((prevSelectedCards) => {
                if (prevSelectedCards.includes(clickedCard)) {
                    // Remove the card from the selected cards array
                    clickedCard.style.background = "#f5f5f5";
                    return prevSelectedCards.filter(
                        (card) => card !== clickedCard
                    );
                } else {
                    // Add the card to the selected cards array
                    clickedCard.style.background = "#e0e0e0";
                    return [...prevSelectedCards, clickedCard];
                }
            });
            return;
        }

        setSelectedCards((prevSelectedCards) => {
            if (prevSelectedCards.includes(clickedCard)) {
                // Remove the card from the selected cards array
                clickedCard.style.background = "#f5f5f5";
                return prevSelectedCards.filter((card) => card !== clickedCard);
            } else {
                // Add the card to the selected cards array
                clickedCard.style.background = "#e0e0e0";
                return [...prevSelectedCards, clickedCard];
            }
        });
    };

    return (
        <div className="flex gap-[10px]">
            <div
                data-id="inactive"
                className="bg-white rounded-md w-[43%] h-[300px] p-[10px] flex flex-col justify-start gap-[10px]"
            >
                <div className="text-2xl font-bold flex items-center gap-[10px]">
                    Inactive reviews{" "}
                    <span className="inline-block rounded-full h-[20px] w-[20px] bg-red-600"></span>
                </div>
                <Card
                    onClick={(e) => handleCardClick(e, "inactive")}
                    className="rounded bg-[#f5f5f5] w-[100%] h-[150px] cursor-pointer"
                ></Card>
                <Card
                    onClick={(e) => handleCardClick(e, "inactive")}
                    className="rounded bg-[#f5f5f5] w-[100%] h-[150px] cursor-pointer"
                ></Card>
            </div>
            <div className="w-[12%]">
                <div className="flex flex-col justify-around h-[100%]">
                    <Button>
                        <BiRightArrow />
                    </Button>
                    <Button>
                        <BiLeftArrow />
                    </Button>
                </div>
            </div>
            <div
                data-id="active"
                className="bg-white rounded-md w-[43%] h-[300px] p-[10px] flex flex-col justify-start gap-[10px]"
            >
                <div className="text-2xl font-bold flex items-center gap-[10px]">
                    active reviews{" "}
                    <span className="inline-block rounded-full h-[20px] w-[20px] bg-green-600"></span>
                    <div>
                        <Card
                            onClick={(e) => handleCardClick(e, "active")}
                            className="rounded bg-[#f5f5f5] w-[100%] h-[150px]"
                        ></Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardReviews;
